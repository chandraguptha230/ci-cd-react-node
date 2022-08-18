import React from 'react';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';
import GridContainer from '../../../@jumbo/components/GridContainer';
import { Grid } from '@material-ui/core';

//Components
import ProductList from './ProductList';


const breadcrumbs = [
  { label: 'Dashboard', link: '/' },
  { label: 'Products', link: '/products' }
];

const Products = () => {
  return (
    <PageContainer heading="Products" breadcrumbs={breadcrumbs}>
         <GridContainer>
        <Grid item xs={12} xl={12}>
        <ProductList />
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Products;
