import React, { useEffect, useState } from 'react';
import GridContainer from '../../../../@jumbo/components/GridContainer';
import PageContainer from '../../../../@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';

//DashBoard Components
import CardWidget from './CardWidget';
import OurStore from './OurStore';
import WeeklySales from './WeeklySales';
import PopularAgents from './PopularAgents';
import RecentPayments from './RecentPayments';
import PopularProducts from './PopularProducts';



//Icons
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import ContactPhone from '@material-ui/icons/ContactPhone';
import AssessmentIcon from '@material-ui/icons/Assessment';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { getUsers} from '../../../../redux/actions/Users';
import { getAdminDashboard } from '../../../../redux/actions/Dashboard';



const useStyles = makeStyles(() => ({
  pageFull: {
    width: '100%',
  },
  profileSidebar: {
    '@media screen and (min-width: 1280px) and (max-width: 1499px)': {
      flexBasis: '100%',
      maxWidth: '100%',
    },
  },
  profileMainContent: {
    '@media screen and (min-width: 1280px) and (max-width: 1499px)': {
      flexBasis: '100%',
      maxWidth: '100%',
    },
  },
  popularProductRoot: {
    '& .scrollbar-container': {
      height: '266px !important',
    },
  },
}));

const breadcrumbs = [
  // { label: 'Dashboard', link: '/' }
];

const Dashboard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [tabValue, setTabValue] = useState('about');
  const { users } = useSelector((state) => state.usersReducer);
  const { loadUser, authUser } = useSelector(({auth}) => auth);
  const { counts, business, unpaidCustomers, unpaidOrders, popularProducts } = useSelector(({dashboard}) => dashboard);







  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  

  useEffect(() => {
    if(loadUser){
    dispatch(getAdminDashboard())
    }
  }, [loadUser, authUser])




  return (
    <PageContainer heading={'DASHBOARD'} breadcrumbs={breadcrumbs}>
      <GridContainer>
        {/* Business Profile Component - Top left side   */}
        <Grid item xs={12} sm={12} lg={6}>
          <GridContainer>
            <Grid item xs={12} sm={12} lg={12}>
              <OurStore
              business={business}
              // backgroundColor="#6200EE"
              // icon={<StarIcon style={{ color: '#ffffff' }} />}
              // title={20}
              // subTitle="PRODUCTS"
              // Link="/products"
              />
            </Grid>
            {/* Easy Access Widget Portion */}
            <Grid item xs={12} sm={6} lg={6}>
              <CardWidget
                backgroundColor="#6200EE"
                icon={<LocalOfferIcon style={{ color: '#ffffff' }} />}
                title={counts.products}
                subTitle="Products"
                Link="/inventory"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
              <CardWidget
                backgroundColor="#6200EE"
                icon={<AssessmentIcon style={{ color: '#ffffff' }} />}
                title={counts.orders}
                subTitle="Orders"
                Link="/reports"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
              <CardWidget
                icon={<ContactPhone style={{ color: '#ffffff' }} />}
                backgroundColor="#0795F4"
                title={counts.customers}
                subTitle="CUSTOMERS"
                Link="/customers"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
              <CardWidget
                icon={<SupervisedUserCircleIcon style={{ color: '#ffffff' }} />}
                backgroundColor="#8DCD03"
                title={counts.users}
                subTitle="USERS"
                Link="/users"
              />
            </Grid>
          </GridContainer>
        </Grid>
        {/* Business CalendarEvents - Top right side */}
        <Grid item xs={12} sm={12} lg={6}>
          <WeeklySales
          // backgroundColor="#6200EE"
          // icon={<StarIcon style={{ color: '#ffffff' }} />}
          // title={20}
          // subTitle="PRODUCTS"
          // Link="/products"
          />
        </Grid>
        <Grid item xs={12} lg={12} className={classes.orderLg1}>
          <Box pb={6} className={classes.popularProductRoot}>
            <PopularProducts
              productsList={popularProducts}
              count={popularProducts.length}
            />
          </Box>
        </Grid>
        <Grid item xs={12} lg={12} className={classes.orderLg1}>
          <Box pb={6}>
            <PopularAgents 
              unpaidCustomers={unpaidCustomers}
              count={unpaidCustomers.length}
            />
          </Box>
        </Grid>
        <Grid item xs={12} xl={5}>
          <RecentPayments 
            unpaidOrders={unpaidOrders}
          />
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Dashboard;
