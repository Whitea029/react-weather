import './index.css'
import { getSiderTopAPI } from '../../../../apis/sidertop'
import { useEffect } from 'react'
import { useState } from 'react'

function SiderTop ({ dataCity }) {


  const [nowTemp, setNowTemp] = useState([])
  const [res, setRes] = useState({})
  const [data, setData] = useState({})


  useEffect(() => {
    async function getNowTemp () {
      const res = await getSiderTopAPI(dataCity)
      setNowTemp(res.data.data[0])
      setData(res.data)
      setRes(res)
    }
    getNowTemp()
  },[dataCity])


  return (
    <div className="sidertop">
      <div className='top-top'>
        <div>
          <section className='topsec-one'>Now</section>
          <section className='topsec-tow'>{parseInt(nowTemp.tem).toFixed(0)}°C</section>
          <section className='topsec-three'>{nowTemp.wea}</section>
        </div>
        <div>
          <img className='topimg' src={`src/assets/${nowTemp.wea_img}.svg`} alt=''></img>
        </div>
      </div>
      <div className='top-bottom'>
        <section className='topsec-four'>{nowTemp.date}</section>
        <section className='topsec-five'>{data.city}</section>
      </div>
    </div>
  )
}

export default SiderTop