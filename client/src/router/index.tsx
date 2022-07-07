import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalLayout from './GlobalLayout';
import HalfLayout from './HalfLayout';
import { Home } from '../pages/Home';
import AccountRestaurants from '../pages/Account/AccountRestaurants';
import Login from '../pages/Users/Login';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route path='/' element={<Home />}></Route>
          <Route
            path='/account/restaurants'
            element={<AccountRestaurants />}
          ></Route>
        </Route>
        <Route element={<HalfLayout />}>
          <Route path='/users/login' element={<Login />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;