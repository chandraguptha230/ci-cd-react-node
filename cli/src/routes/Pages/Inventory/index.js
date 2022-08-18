import React from 'react';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';

//Components
import ProductList from './ProductList';

const breadcrumbs = [
  { label: 'Dashboard', link: '/' },
  { label: "Inventory", link: '/inventory'}
];

const Sales = () => {
  return (
    <PageContainer heading="INVENTORY" breadcrumbs={breadcrumbs}>
      <ProductList />
    </PageContainer>
  );
};

export default Sales;
