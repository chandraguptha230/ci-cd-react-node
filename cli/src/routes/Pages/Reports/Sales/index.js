import React from 'react';
import { Grid } from '@material-ui/core';
import GridContainer from '../../../../@jumbo/components/GridContainer';
import PageContainer from '../../../../@jumbo/components/PageComponents/layouts/PageContainer';

//Components
import LastMonthSale from './LastMonthSale';
import OnlineSignups from './OnlineSignups';
import TotalEmailSent from './TotalEmailSent';
import TotalRevenue from './TotalRevenue';
import SalesStatistic from './SalesStatistic';

const breadcrumbs = [
  { label: 'Reports', link: '/reports' },
  { label: 'Sales', link: '/reports/sales', isActive: true },
];

const Sales = () => {
  return (
    <PageContainer heading="Sales Report" breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={12} sm={6} md={3}>
          <OnlineSignups />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <LastMonthSale />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TotalRevenue />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TotalEmailSent />
        </Grid>
        <Grid item xs={12}>
          <SalesStatistic />
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Sales;
