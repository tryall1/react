import React from 'react';
import { Layout } from 'antd';
import AppHeader from './components/layouts/AppHeader';
import AppSlider from './components/layouts/AppSlider';
import AppContent from './components/layouts/AppContent';

export default function App() {
  return  (
    <Layout>
      <AppHeader />
      <Layout>
        <AppSlider />
        <AppContent />
      </Layout>
  </Layout>
  )
}
