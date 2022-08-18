import React from 'react';
import AgentItem from './AgentItem';
import CmtList from '../../../../../@coremat/CmtList';
import PerfectScrollbar from 'react-perfect-scrollbar';

const AgentsList = ({unpaidCustomers}) => {
  return (
    <PerfectScrollbar style={{ width: '100%' }}>
      <CmtList
        data={unpaidCustomers}
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginLeft: -10,
          marginRight: -10,
        }}
        renderRow={(item, index) => <AgentItem key={index} item={item} />}
      />
    </PerfectScrollbar>
  );
};

export default AgentsList;
