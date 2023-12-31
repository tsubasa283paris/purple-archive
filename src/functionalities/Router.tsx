import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import TopPage from '../pages/TopPage';
import MyPage from '../pages/MyPage';
import NotFoundPage from '../pages/404';
import LoginPage from '../pages/Login';
import { useAuthInfo } from './AuthContext';
import { Bars } from '../components/Bars';
import AlbumPage from '../pages/Album';

const Router: React.FC = () => {
  const authInfo = useAuthInfo();

  return authInfo === null ? (
    <LoginPage />
  ) : (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to='/albums' />} />
          <Route
            path='/albums'
            element={
              <React.Fragment>
                <Bars location='top' />
                <TopPage />
              </React.Fragment>
            }
          />
          <Route
            path='/albums/:id'
            element={
              <React.Fragment>
                <Bars location='top' />
                <AlbumPage />
              </React.Fragment>
            }
          />
          <Route
            path='/mypage'
            element={
              <React.Fragment>
                <Bars location='mypage' />
                <MyPage />
              </React.Fragment>
            }
          />
          <Route
            path='*'
            element={
              <React.Fragment>
                <Bars location='404' />
                <NotFoundPage />
              </React.Fragment>
            }
          />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default Router;
