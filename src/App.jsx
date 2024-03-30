import { useState } from 'react'
import './App.css'
import {Header, Feater, list_la,Content} from './compnents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='Head'>
        <Header>
          <h1>231</h1>
        </Header>
      </div>
      <div className="card">
        <Button2 props={'Потыкать '+count} onclick={() => setCount((count) => count + 1)}/>
        <Button2 props={'основаная'}/>
        <Button2 props={'сбросить '+count} onclick={() => setCount((count) => 0)}/>
      </div>
      <div className='content'>
        <Content>
          Kontent
        </Content>
      </div>
      <div className='list'>
    
      </div>
      <div className='feat'>
        <Feater>
          <p>Здесь был сергей</p>
        </Feater>
      </div>
    </>
  )
}

export default App
