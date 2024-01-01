import axios from 'axios'


const CurrencyConverter = async (req, res) => {

    const options = {
        method: 'GET',
        url: 'https://currencyconverter.p.rapidapi.com/availablecurrencies',
        headers: {
          'X-RapidAPI-Key': 'ce1144368fmsh11dca8c9ce78b66p174caajsne77e09551f6f',
          'X-RapidAPI-Host': 'currencyconverter.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);

          res.send(response.data)
      } catch (error) {
          console.error(error);
    
      }

}


export default CurrencyConverter