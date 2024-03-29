import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header, Footer, Lab_list, Content, Button, Home, Lab_2, Menu} from './components'
import { Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <>
      <Header>
        <h1>Добрый день!</h1>
      </Header>
      <Menu>
      <h2>Меню</h2>
      <li><Link to={'/'}>Главная</Link></li>
      <Lab_list>
        <ul>
          <li><Link to={'/Lab_2'}>Лабораторная 2</Link></li>
          <li><Link to={'/Button'}>Кнопка</Link></li>
          <li><Link to={'/lab_3'}>Лабораторная 3</Link></li>
          <li><Link to={'/lab_4'}>Лабораторная 4</Link></li>
          <li><Link to={'/lab_5'}>Лабораторная 5</Link></li>
          <li><Link to={'/lab_6'}>Лабораторная 6</Link></li>
          <li><Link to={'/lab_7'}>Лабораторная 7</Link></li>
          <li><Link to={'/lab_8'}>Лабораторная 8</Link></li>
          <li><Link to={'/lab_9'}>Лабораторная 9</Link></li>
          <li><Link to={'/lab_10'}>Лабораторная 10</Link></li>
          <li><Link to={'/lab_11'}>Лабораторная 11</Link></li>
        </ul>
      </Lab_list>
      </Menu>
      <Content>
        <p>Основной материал разработки</p>
        <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/Lab_2' element={<Lab_2/>}/>
        <Route path='/Button' element={<Button/>}/>
        </Routes>
      </Content>
      <Footer>
        <p> Домбровский С.В.   2024</p>
      </Footer>
    </>
  )
}

export default App
