import React from 'react';
import Container from '../../layouts/Container.layout';
import DashboardHeader from './component/Header.component';
import ProductLists from './component/ProductLists.component';

const Dashboard = () => {
  return (
    <Container>
      <DashboardHeader />
      <ProductLists />
    </Container>
  );
};

export default Dashboard;
