import mock from '../mockConfig';
import { idGenerator } from '../../@jumbo/utils/commonHelper';
import { products, popularProducts, foldersList, popularFoldersList, labelsList } from '../../@fake-db/modules/products';

let labels = labelsList;
let productsList = products.map(a => {
  a.unpaid = a.balance !== 0;
  return a;
});


let popularProductsList = popularProducts.map(a => {
  a.unpaid = a.balance !== 0;
  return a;
});

mock.onGet('/product/labels').reply(200, labelsList);

mock.onPost('/product/labels').reply(request => {
  const { label } = JSON.parse(request.data);
  let newLabel = { ...label, id: idGenerator(), slug: label.name.toLowerCase() };
  labels = labels.push(newLabel);
  return [200, newLabel];
});

mock.onPut('/product/labels').reply(request => {
  const { label } = JSON.parse(request.data);
  labels = labels.map(item => (item.id === label.id ? label : item));
  return [200];
});

mock.onPut('/product/labels/delete').reply(request => {
  const { labelId } = JSON.parse(request.data);
  labels = labels.filter(item => item.id !== labelId);
  return [200];
});

mock.onGet('/product').reply(config => {
  const { params } = config;
  const { selectedFolder, selectedLabel, searchText } = params;
  let folderProducts = [];
  if (searchText) {
    folderProducts = productsList.filter(
      product =>
        String(product.id).toLowerCase().includes(searchText.toLowerCase()) ||
        product.name.toLowerCase().includes(searchText.toLowerCase()) ||
        product.phones.map(item => item.phone).includes(searchText),
    );
  }
  if (selectedFolder) {
    if (selectedFolder === 'starred') {
      folderProducts = productsList.filter(product => product.starred);
    } else if (selectedFolder === 'unpaid') {
      folderProducts = productsList.filter(product => product.balance !== 0);
    } else {
      folderProducts = productsList.filter(product => product.folder === selectedFolder);
    }
  }

  if (selectedLabel) {
    folderProducts = productsList.filter(product => product.labels.includes(selectedLabel));
  }

  const total = folderProducts.length;

  return [200, { folderProducts, total }];
});

mock.onGet('/inventory').reply(config => {
  const { params } = config;
  const { selectedFolder, selectedLabel, searchText } = params;
  let folderProducts = [];
  if (searchText) {
    folderProducts = popularProductsList.filter(
      product =>
        String(product.id).toLowerCase().includes(searchText.toLowerCase()) ||
        product.name.toLowerCase().includes(searchText.toLowerCase()) ||
        product.description.toLowerCase().includes(searchText.toLowerCase()) ||
        product.code.toLowerCase().includes(searchText.toLowerCase()) ||
        String(product.price).toLowerCase().includes(searchText.toLowerCase())
    );
  }
  if (selectedFolder) {
    if (selectedFolder === 'starred') {
      folderProducts = popularProductsList.filter(product => product.starred);
    } else if (selectedFolder === 'available') {
      folderProducts = popularProductsList.filter(product => product.stocks !== 0);
    } else if (selectedFolder === 'unavailable') {
      folderProducts = popularProductsList.filter(product => product.stocks === 0);
    } else {
      folderProducts = popularProductsList.filter(product => product.folder === selectedFolder);
    }
  }

  if (selectedLabel) {
    folderProducts = popularProductsList.filter(product => product.labels.includes(selectedLabel));
  }
  const total = folderProducts.length;
  return [200, { folderProducts, total }];
});

mock.onPut('/product/update-starred').reply(request => {
  const { productIds, status } = JSON.parse(request.data);
  productsList = productsList.map(product => {
    if (productIds.includes(product.id)) {
      product.starred = status;
      return product;
    } else {
      return product;
    }
  });
  return [200];
});

mock.onPut('/product/delete').reply(request => {
  const { productIds } = JSON.parse(request.data);
  productsList = productsList.map(product => {
    if (productIds.includes(product.id)) {
      product.folder = 'trash';
      return product;
    } else {
      return product;
    }
  });
  return [200];
});

mock.onPut('/product/update-label').reply(request => {
  const { productIds, label } = JSON.parse(request.data);
  productsList = productsList.map(product => {
    if (productIds.includes(product.id)) {
      const newLabel = product.labels.find(item => item === label);
      if (newLabel) {
        product.labels = product.labels.filter(item => item !== label);
      } else {
        product.labels = product.labels.concat(label);
      }
      return product;
    } else {
      return product;
    }
  });
  const updatedProducts = productsList.filter(product => productIds.includes(product.id));
  return [200, updatedProducts];
});

mock.onPost('/product').reply(request => {
  const { product } = JSON.parse(request.data);
  const newProduct = {
    id: idGenerator(),
    starred: false,
    labels: [],
    folder: 'products',
    ...product,
  };
  productsList = [newProduct, ...productsList];
  return [200, newProduct];
});

mock.onPut('/product').reply(request => {
  const { product } = JSON.parse(request.data);
  productsList = productsList.map(item => (item.id === product.id ? product : item));
  return [200];
});

mock.onGet('/product/counter').reply(config => {
  const counter = { folders: {}, labels: {} };
  foldersList.map(item => {
    if (item.slug === 'starred') {
      counter.folders[item.id] = productsList.filter(product => product.starred).length;
    } else if (item.slug === 'unpaid') {
      counter.folders[item.id] = productsList.filter(product => product.balance !== 0).length;
    } else {
      counter.folders[item.id] = productsList.filter(product => product.folder === item.slug).length;
    }
    return null;
  });

  labelsList.map(item => {
    counter.labels[item.id] = productsList.filter(product => product.labels.includes(item.id)).length;
    return null;
  });

  return [200, counter];
});


mock.onGet('/inventory/counter').reply(config => {
  const counter = { folders: {}, labels: {} };
  popularFoldersList.map(item => {
    if (item.slug === 'starred') {
      counter.folders[item.id] = productsList.filter(product => product.starred).length;
    } else if (item.slug === 'available') {
      counter.folders[item.id] = productsList.filter(product => product.stocks !== 0).length;
    } else if (item.slug === 'unavailable') {
      counter.folders[item.id] = productsList.filter(product => product.stocks === 0).length;
    } else {
      counter.folders[item.id] = productsList.filter(product => product.folder === item.slug).length;
    }
    return null;
  });

  labelsList.map(item => {
    counter.labels[item.id] = productsList.filter(product => product.labels.includes(item.id)).length;
    return null;
  });

  return [200, counter];
});

