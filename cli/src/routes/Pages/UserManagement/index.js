import React, { useEffect, useState } from 'react';
import GridContainer from '../../../@jumbo/components/GridContainer';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';
import TextDisplay from '../../../@jumbo/utils/TextDisplay';
import Grid from '@material-ui/core/Grid';
import MomentUtils from "@date-io/moment";
import moment from "moment";


import {
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';


//Components
import UserList from './UsersList';


//Redux
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../../redux/actions/Crud';
import { CLEAR_DATA } from 'redux/actions/types';

const breadcrumbs = [
  // { label: <TextDisplay name="User Management" />, isActive: true },
];

const UserManagement = () => {
  // const dispatch = useDispatch()


  // useEffect(() => {
  //     dispatch(getUsers());
  //     return () => {
  //       dispatch({
  //         type: CLEAR_DATA,
  //         payload: 'users'
  //       })
  //     }
  // }, [])



  return (
    <PageContainer heading={"User Management"} breadcrumbs={breadcrumbs}>
      <GridContainer>
      <Grid item xs={12} lg={12}>
          <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
                     <UserList />
          </MuiPickersUtilsProvider>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default UserManagement;
