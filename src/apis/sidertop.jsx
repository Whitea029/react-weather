import axios from 'axios';  
  
// export async function getSiderTopAPI() {  
//   try {  
//     const res = await axios.get('http://v1.yiketianqi.com/api', {  
//       params: {  
//         appid: 81581546,  
//         appsecret: 'uthuFg4I',  
//         version: 'v62',
//         vue: 1  
//       }  
//     });  
//     console.log(res.data);  
//   } catch (error) {  
//     console.error(error);  
//   }  
// }
 
export function getSiderTopAPI(dataCity) {
  return axios({
    url: 'http://v0.yiketianqi.com/api',
    method: 'GET',
    params: {  
      appid: 93185144,  
      appsecret: 'RSpGa2bN',  
      version: 'v9',
      vue: 1,
      city: dataCity
    } 
  })
} 
