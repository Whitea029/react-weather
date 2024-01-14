

import Header from './pages/Home/components/Header'
import './App.css'
import SiderTop from './pages/Home/components/SiderTop'
import SiderBottom from './pages/Home/components/SiderBottom'
import Content from './pages/Home/components/Content'
import Footer from './pages/Home/components/Footer'
import { useState } from 'react'

function App() {
 
  const [data, setData] = useState('');

  const handleDataChange = (e) => {
    setData(e)
    console.log(e);
  }

  return (
    <>
      <div className='whole'>
        <Header onDataChange={handleDataChange}></Header>
        <div className='middle'>
          <div className='left'>
          <SiderTop dataCity={data} />
          <div className='bottom-title'>5 Days Forecast</div>
          <SiderBottom dataCity={data} />
          </div>
          <div className='right'>
          <Content dataCity={data} />
          <div className='footer-title'>Today at</div>
          <Footer dataCity={data} />
          <div className='foot-node'>created by zza</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
