import { useState } from 'react';
import './index.css'
import { Input } from 'antd';
import { useEffect } from 'react';



function Header ({ onDataChange }) {

  var citys = [  
    "北京", "上海", "广州", "深圳", "成都", "重庆", "杭州", "南京", "武汉", "长沙",  
    "苏州", "西安", "天津", "郑州", "东莞", "无锡", "青岛", "大连", "福州", "厦门",  
    "宁波", "合肥", "昆明", "石家庄", "泉州", "温州", "常州", "烟台", "南通", "嘉兴",  
    "绍兴", "南昌", "唐山", "徐州", "潍坊", "淄博", "扬州", "台州", "东莞", "济南",  
    "佛山", "南宁", "兰州", "石家庄", "无锡", "惠州", "珠海", "三亚", "常熟",   
    "中山", "海口" ,"南昌","呼和浩特","长春","太原","乌鲁木齐","西宁","金华","珠海",
    "汕头","三亚","张家港","如东","启东市","海门","通州","海安","泰兴",
    "如皋","东台","姜堰","仪征","高邮","句容","丹阳","扬中","兴化","孝感","南通","哈尔滨"  
  ];

  const [inputValue, setInputValue] = useState("")
  const [cities, setCities] = useState([])
  const [showbox, setShowbox] = useState(false)

  const onhandleChange = (e) => {

    var filteredCities = citys.filter(function(city) {  
      return city.startsWith(inputValue);  
    });  
    
    setCities(filteredCities)

    setInputValue(e.target.value)
  }

  const handleChange = () => {
    onDataChange(inputValue)
  }

  const clickchange = (item, e) => {
    e.stopPropagation()
    setInputValue("")
    onDataChange(item)
    setShowbox(false)
  }

  return (
    <div className='header'>
      <img src='src\pages\Home\components\Header\image.jpg' alt='' className='image'></img>
      <p className='word'>梁少俊的weather report</p>
      <div className='city-search'>
      <Input className='search' value={inputValue} onChange={onhandleChange} onPressEnter={handleChange} placeholder="输入城市名后回车" onFocus={() => setShowbox(true)} onBlur={() => setShowbox(false)} />
      <div className='city-list'>
        {showbox && cities.map((item, index) => 
        <section className='cityshow' key={index} onMouseDown={(e) => clickchange(item, e)}>{item}</section>  
        )}  
      </div>
      </div>
    </div>
  )
}

export default Header