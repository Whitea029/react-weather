import axios from 'axios';  
  

 
export function getSiderTopAPI(dataCity) {
  return axios({
    url: 'http://v0.yiketianqi.com/api',
    method: 'GET',
    params: {  
      appid: 85159159,  
      appsecret: 'swKr35uX',  
      version: 'v9',
      vue: 1,
      city: dataCity
    } 
  })
} 
