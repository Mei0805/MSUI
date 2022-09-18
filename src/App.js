import './App.scss';
import React from 'react';
import { Layout } from 'antd';
import { HomePage } from './components/HomePage/HomePage';


function App() {
  return (
    <Layout className='container'>
          <HomePage />
    </Layout>
  );
}

export default App;
