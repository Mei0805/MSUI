import './App.scss';
import React from 'react';
import { Layout } from 'antd';
import { Router } from './router/Routes';

function App() {
  return (
    <Layout className='container'>
          <Router />
    </Layout>
  );
}

export default App;
