import React from 'react';
import Header from './Header';
import App from './App';
import Footer from './Footer';
import { BrowserRouter,Navigate, Outlet, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import LeaveRequest from './LeaveRequest';
import Preference from './Preference';
import Login from './Login';
import PreferSetting from './PreferSetting';
import TodoList from './TodoList';

const Container = styled.div`
  margin: 0 auto;
  width: 95%;
  // border: 1px solid white;
`;

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Container>
          <Routes>
              <Route exact path="/"  element={<App />} />
              <Route path="/preferSetting"  element={<PreferSetting />} />
              <Route path="/preference"  element={<Preference />} />
              <Route path="/leave_request"  element={<LeaveRequest />} />
              <Route path="/todo_list"  element={<TodoList />} />
              <Route path="/login"  element={<Login />} />
          </Routes>
        </Container>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default Router;