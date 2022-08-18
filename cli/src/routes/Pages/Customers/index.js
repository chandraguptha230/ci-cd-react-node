import React from 'react';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';

//Components
import CustomerList from './CustomerList';

const breadcrumbs = [
  { label: 'Dashboard', link: '/' },
  { label: 'Customers', link: '/customers' },
];

const Sales = () => {
  return (
    <PageContainer heading="Customer List" breadcrumbs={breadcrumbs}>
      <CustomerList />
    </PageContainer>
  );
};

export default Sales;
