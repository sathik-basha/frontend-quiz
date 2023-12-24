require('dotenv').config();

export const getData = {
  method: 'get',
maxBodyLength: Infinity,
  url: `https://getpantry.cloud/apiv1/pantry/${process.env.PANTRY_ID}/basket/js-questions`,
  headers: { 
    'Content-Type': 'application/json'
  }
};