import './index.css'
import { getSiderTopAPI } from '../../../../apis/sidertop'
import { useEffect } from 'react'
import { useState } from 'react'
function Footer ({ dataCity }) {

  const [nowTemp, setNowTemp] = useState([])
  const [city, setCity] = useState("")
  const [res, setRes] = useState({})

  useEffect(() => {
    
    async function getNowTemp () {
      const res = await getSiderTopAPI(dataCity)
      setNowTemp(res.data.data[0].hours)
      setRes(res)
    }
    getNowTemp()
  },[dataCity])

  const limitedData = nowTemp.slice(0, 8);

  return (
    <div className='footer'>
      <div className='foot-top'>
        {limitedData.map(item => 
          <section key={item.hours}>
          <div className='foot-time'>{item.hours}</div>
          <img src={`src/assets/${item.wea_img}.svg`} alt=''></img>
          <div className='foot-show'>{item.tem}°C</div>
          </section>
        )}

      </div>
      <div className='foot-bottom'>
        {limitedData.map(item => 
          <section key={item.hours}>
          <div className='foot-time'>{item.hours}</div>
          <div className='foot-wind'>{item.win}</div>
          <div className='foot-show'>{item.win_speed}</div>
          </section>
                )}
      </div>
    </div>
  )
}

export default Footer