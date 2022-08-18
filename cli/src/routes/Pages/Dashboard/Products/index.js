import React from 'react';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import GridContainer from '../../../../@jumbo/components/GridContainer';
import PageContainer from '../../../../@jumbo/components/PageComponents/layouts/PageContainer';

//Components
import ProductListings from './ProductListings';



const breadcrumbs = [
  { label: 'Store', link: '/' },
  { label: 'Products', link: '/store/products', isActive: true },
];

const Products = () => {
  return (
    <PageContainer heading="Product List" breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={12} lg={12}>
        <Box pb={6}>
            <ProductListings />
          </Box>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Products;
