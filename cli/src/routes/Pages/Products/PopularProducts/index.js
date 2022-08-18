import React from 'react';
import CmtCard from '../../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../../@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '../../../../../@coremat/CmtCard/CmtCardContent';
import ListItem from './ListItem';
import CmtGridView from '../../../../../@coremat/CmtGridView';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


const PopularProducts = ({productsList}) => {
  return (
    <CmtCard>
           <CmtCardHeader
        className="pt-4"
        title="Popular Products"
        titleProps={{
          variant: 'h4',
          component: 'div',
        }}>
        <Box clone>
          <Button
          component={Link}
          to="/products"
          color="primary">
            <span className="ml-2">Go to Products list</span>
          </Button>
        </Box>
      </CmtCardHeader>
      <CmtCardContent>
        <PerfectScrollbar style={{ height: 600, overflow: 'scroll' }}>
          <CmtGridView
            itemPadding={10}
            responsive={{
              xs: 1,
              sm: 1,
              md: 2,
              lg: 2,
              xl: 3,
            }}
            data={productsList}
            renderRow={(item, index) => <ListItem key={index} item={item} />}
          />
        </PerfectScrollbar>
      </CmtCardContent>
    </CmtCard>
  );
};

export default PopularProducts;
