import { useCallback, useState } from 'react';

import Header from './components/Header/Header';
import Wrapper from './components/Wrapper/Wrapper';
import List from './components/List/List';
import Button from './components/Button/Button';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />

      <Outlet />
      {/* <List /> */}
      {/* <RegistrationForm /> */}
    </>
  );
}

export default App;
