import React from 'react';
import { useSelector } from 'react-redux';
import createRouter from './routes';

export default function App() {
  const signed = useSelector(state => state.auth.signed);
  const isAdmin = useSelector(state => state.auth.is_admin);
  const Routes = createRouter(signed, isAdmin);

  return <Routes />;
}
