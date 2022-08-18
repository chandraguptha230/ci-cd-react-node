import mock from '../../mockConfig';
import { idGenerator } from '../../../@jumbo/utils/commonHelper';
import { customers, foldersList, labelsList } from '../../../@fake-db/modules/customers';

let labels = labelsList;
let customersList = customers.map(ab => {
  ab.unpaid = ab.balance !== 0;
  return ab;
});

mock.onGet('/customers/labels').reply(200, labelsList);

mock.onPost('/customers/labels').reply(request => {
  const { label } = JSON.parse(request.data);
  let newLabel = { ...label, id: idGenerator(), slug: label.name.toLowerCase() };
  labels = labels.push(newLabel);
  return [200, newLabel];
});

mock.onPut('/customers/labels').reply(request => {
  const { label } = JSON.parse(request.data);
  labels = labels.map(item => (item.id === label.id ? label : item));
  return [200];
});

mock.onPut('/customers/labels/delete').reply(request => {
  const { labelId } = JSON.parse(request.data);
  labels = labels.filter(item => item.id !== labelId);
  return [200];
});

mock.onGet('/customers').reply(config => {
  const { params } = config;
  const { selectedFolder, selectedLabel, searchText } = params;
  let folderCustomers = [];
  if (searchText) {
    folderCustomers = customersList.filter(
      customer =>
        customer.name.toLowerCase().includes(searchText.toLowerCase()) ||
        customer.phones.map(item => item.phone).includes(searchText),
    );
  }
  if (selectedFolder) {
    if (selectedFolder === 'starred') {
      folderCustomers = customersList.filter(customer => customer.starred);
    } else if (selectedFolder === 'unpaid') {
      folderCustomers = customersList.filter(customer => customer.balance !== 0);
    } else {
      folderCustomers = customersList.filter(customer => customer.folder === selectedFolder);
    }
  }

  if (selectedLabel) {
    folderCustomers = customersList.filter(customer => customer.labels.includes(selectedLabel));
  }

  const total = folderCustomers.length;

  return [200, { folderCustomers, total }];
});

mock.onPut('/customers/update-starred').reply(request => {
  const { customerIds, status } = JSON.parse(request.data);
  customersList = customersList.map(customer => {
    if (customerIds.includes(customer.id)) {
      customer.starred = status;
      return customer;
    } else {
      return customer;
    }
  });
  return [200];
});

mock.onPut('/customers/delete').reply(request => {
  const { customerIds } = JSON.parse(request.data);
  customersList = customersList.map(customer => {
    if (customerIds.includes(customer.id)) {
      customer.folder = 'trash';
      return customer;
    } else {
      return customer;
    }
  });
  return [200];
});

mock.onPut('/customers/update-label').reply(request => {
  const { customerIds, label } = JSON.parse(request.data);
  customersList = customersList.map(customer => {
    if (customerIds.includes(customer.id)) {
      const newLabel = customer.labels.find(item => item === label);
      if (newLabel) {
        customer.labels = customer.labels.filter(item => item !== label);
      } else {
        customer.labels = customer.labels.concat(label);
      }
      return customer;
    } else {
      return customer;
    }
  });
  const updatedCustomers = customersList.filter(customer => customerIds.includes(customer.id));
  return [200, updatedCustomers];
});

mock.onPost('/customers').reply(request => {
  const { customer } = JSON.parse(request.data);
  const newCustomer = {
    id: idGenerator(),
    starred: false,
    labels: [],
    folder: 'customers',
    ...customer,
  };
  customersList = [newCustomer, ...customersList];
  return [200, newCustomer];
});

mock.onPut('/customers').reply(request => {
  const { customer } = JSON.parse(request.data);
  customersList = customersList.map(item => (item.id === customer.id ? customer : item));
  return [200];
});

mock.onGet('/customers/counter').reply(config => {
  const counter = { folders: {}, labels: {} };
  foldersList.map(item => {
    if (item.slug === 'starred') {
      counter.folders[item.id] = customersList.filter(customer => customer.starred).length;
    } else if (item.slug === 'unpaid') {
      counter.folders[item.id] = customersList.filter(customer => customer.balance !== 0).length;
    } else {
      counter.folders[item.id] = customersList.filter(customer => customer.folder === item.slug).length;
    }
    return null;
  });

  labelsList.map(item => {
    counter.labels[item.id] = customersList.filter(customer => customer.labels.includes(item.id)).length;
    return null;
  });
  return [200, counter];
});
