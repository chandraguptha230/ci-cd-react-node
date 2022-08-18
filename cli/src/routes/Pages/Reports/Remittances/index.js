import React from 'react';
import { Grid } from '@material-ui/core';
import GridContainer from '../../../../@jumbo/components/GridContainer';
import PageContainer from '../../../../@jumbo/components/PageComponents/layouts/PageContainer';

//Components
import RemittanceList from './MarketingCampaign';



const breadcrumbs = [
  { label: 'Reports', link: '/reports' },
  { label: 'Remittances', link: '/reports/remittances', isActive: true },
];

const Remittance = () => {
  return (
    <PageContainer heading="Remittances Report" breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={12} lg={12}>
            <RemittanceList/>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Remittance;
