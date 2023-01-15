
import axios from 'axios';

const getFloorPrice = async () => {
   
       const res = await axios.get(`https://api.opensea.io/api/v1/asset/beanzofficial`);
  
    
    return res;
}
console.log(getFloorPrice())