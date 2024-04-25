import './App.css'
import * as React from 'react';
import {Header, Footer, Lab_list, Content, Button, Home,  Menu} from './components'
import { Routes, Route, Link } from 'react-router-dom'


function App() {

  return (
    <>
    <Header>
      <Menu>
      <h2>Меню</h2>
      <li><Link to={'/'}>Главная</Link></li>
      <Lab_list>
        <ul>
          <li><Link to={'/Lab_2'}>Лабораторная 2</Link></li>
          <li><Link to={'/lab_3'}>Лабораторная 3</Link></li>
          <li><Link to={'/lab_4'}>Лабораторная 4</Link></li>
          <li><Link to={'/lab_5'}>Лабораторная 5</Link></li>
          <li><Link to={'/lab_6'}>Лабораторная 6</Link></li>
          <li><Link to={'/lab_7'}>Лабораторная 7</Link></li>
          <li><Link to={'/lab_8'}>Лабораторная 8</Link></li>
          <li><Link to={'/lab_9'}>Лабораторная 9</Link></li>
        </ul>
      </Lab_list>
      </Menu>
      <Content>
        <p>Основной материал разработки</p>
        <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/Lab_2' element={<Button/>}/>
        <Route path='/Lab_4' element={<Header/>}/>
        <Route path='/Lab_5' element={<LoginForm/>}/>
        </Routes>
      </Content>
      <Footer>
        <p> Домбровский С.В.   2024</p>
      </Footer>
      </Header>
    </>
  )
}
export default App
