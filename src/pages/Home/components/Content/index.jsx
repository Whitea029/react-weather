import './index.css'
import { getSiderTopAPI } from '../../../../apis/sidertop'
import { useEffect } from 'react'
import { useState } from 'react'

function Content ({ dataCity }) {

  const [nowTemp, setNowTemp] = useState([])
  const [res, setRes] = useState({})


  useEffect(() => {
    async function getNowTemp () {
      const res = await getSiderTopAPI(dataCity)
      setNowTemp(res.data.data[0])


      setRes(res)
    }
    getNowTemp()
  },[dataCity])


  return (
    <div className='content'>
      <div className='content-show'>
        <div className='content-title'>Todays Highlights</div>
        <div className='content-top'>
          <div className='air'>
            <div className='air-title'>Air Quality index</div>
            <div className='air-show'>
              <section className='air-list'>
                <div className='air-name'>air</div>
                <div className='air-number'>{nowTemp.air}</div>
              </section>
              <section className='air-list'>
                <div className='air-name'>air_pm25</div>
                <div className='air-number'>8</div>
              </section>
              <section className='air-list'>
                <div className='air-name'>air_level</div>
                <div className='air-level'>{nowTemp.air_level}</div>
              </section>
            </div>
          </div>
          <div className='sun'>
          <div className='sun-title'>Sunrise & Sunset</div>
            <div className='air-show'>
              <section className='sun-list'>
                <div className='air-name'>Sunrise</div>
                <div className='air-number'>{nowTemp.sunrise}</div>
              </section>
              <section className='sun-list'>
                <div className='air-name'>Sunset</div>
                <div className='air-number'>{nowTemp.sunset}</div>
              </section>
            </div>
          </div>
        </div>
        <div className='content-bottom'>
            <div className='content-bottom-show'>Tips: {nowTemp.air_tips}</div>
        </div>
      </div>
    </div>
  )
}

export default Content