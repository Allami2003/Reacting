import './App.css'
import * as React from 'react';
import {Header, Footer, Content, Button, Home, GetList,  Menu, Lab_2} from './components'
import { Routes, Route } from 'react-router-dom'
import { LoginForm } from './components/My_lab/Lab_5';
import MyApp from './components/My_lab/Lab_6_1';

function App() {
  const [studentList,setStudentList]=React.useState([]);
  React.useEffect(()=>{
    async function fetchStudentList(){
      try{
        const requesUrl = 'https://662ada9fde35f91de156912f.mockapi.io/student';
        const peronse =await fetch(requesUrl);
        const reponseJSON= await peronse.json()
        setStudentList(reponseJSON);
      }catch{}
    }
    fetchStudentList();
  },[]);
  return (
    <>
    <Header>

      <Content>
        <p>Основной материал разработки</p>
        <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/meinfo' element={<Home/>}/> 
        <Route path='/Lab_2' element={<Button/>}/>
        <Route path='/Lab_3' element={<Lab_2 />}/>
        <Route path='/Lab_4' element={<Header/>}/>
        <Route path='/Lab_5' element={<LoginForm/>}/>
        <Route path='/Lab_6' element={<GetList studentList={studentList} />}/>
        <Route path='/Lab_6_1' element={<MyApp />}/>
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
