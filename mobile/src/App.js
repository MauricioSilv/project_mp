import React from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import createRouter from './routes';

export default function App() {
  const signed = useSelector(state => state.auth.signed);
  const isAdmin = useSelector(state => state.auth.is_admin);
  const Routes = createRouter(signed, isAdmin);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#008099" />
      <Routes />
    </>
  );
}
