import './index.css'
import { getSiderTopAPI } from '../../../../apis/sidertop'
import { useEffect } from 'react'
import { useState } from 'react'
import dayjs from 'dayjs'


function SiderBottom ({ dataCity }) {


  const [res, setRes] = useState({})
  const [data, setData] = useState([])

  useEffect(() => {
    
    async function getNowTemp () {
      const res = await getSiderTopAPI(dataCity)
      setData(res.data.data)
      setRes(res)
    }
    getNowTemp()
  },[dataCity])


  const limitedData = data.slice(0, 5);
  


  return (
    <div className="siderbottom">
      <div className='foot-showlist'>
        {limitedData.map(item =>         
        <section className='footsec' key={item.day}>
          <img className='footsec-img' src={`src/assets/${item.wea_img}.svg`} alt=''></img>
          <div className='footsec-temp'>{item.tem}°C</div>
          <div className='footsec-data'>{dayjs(item.date).format('MM月DD日')}</div>
          <div className='footsec-day'>{item.day.substring(4, 7)}</div>
        </section>)}
      </div>
    </div>
  )
}

export default SiderBottom