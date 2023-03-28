import React from 'react';
import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import { AppRouter } from './router/AppRouter';

export  const App = () => {
  return (
    <AppRouter />
  );
}

