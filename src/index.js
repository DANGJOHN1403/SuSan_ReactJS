import React from 'react';
import ReactDOM from 'react-dom/client';

import { store } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter,Routes, Route } from "react-router-dom";

import App from './App';
import Home from './Home';
import ChiTietSP from './ChiTietSP';
import SPTrongLoai from './SPTrongLoai';
import NotFound from './NotFound';
import Admin from './QuanTri/Admin';
import ThongKe from './QuanTri/ThongKe';
import ThemSP from './QuanTri/SP_Them';
import SuaSP from './QuanTri/SP_Sua';
import DanhSachSP from './QuanTri/SP_Ds';
import ThemLoai from './QuanTri/Loai_Them';
import SuaLoai from './QuanTri/Loai_Sua';
import DanhSachLoai from './QuanTri/Loai_Ds';
import DangNhap from './DangNhap';
import ShowCart from './ShowCart'
import ThanhToan from './ThanhToan';
import UserInfo from './UserInfo' 
import Thoat from './Thoat';
import ProtectedRoute from './ProtectedRoute';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route  path="/" element= { <> <UserInfo/> <App /> </> } >
          <Route path="/" element={<Home/>} />
          <Route path="/sp/:id" element={<ChiTietSP/>} />
          <Route path="/loai/:id_loai" element={<SPTrongLoai/>} />
          <Route path="/dangnhap" element={<DangNhap/>} />
          <Route path="/thoat" element={<Thoat/>} />
          <Route path="/thanhtoan" element={<ThanhToan/>} />
          <Route path='/showcart' element={<ShowCart/>} />
          <Route element={<NotFound/>}/>
      </Route>
      <Route  path="/admin" element= { <> <UserInfo/> <ProtectedRoute/> <Admin /> </>  }>
          <Route path="/admin" element={<ThongKe/>}  />
          <Route path="sp_ds" element={<DanhSachSP/>} />
          <Route path="sp_them" element={<ThemSP/>} />
          <Route path="sp_sua/:id" element={<SuaSP/>} />
          <Route path="loai_ds/" element={<DanhSachLoai/>} />
          <Route path="loai_them" element={<ThemLoai/>} />
          <Route path="loai_sua/:id" element={<SuaLoai/>} />    
      </Route>
    </Routes>
    <input/>
  </BrowserRouter>
</Provider>

);
