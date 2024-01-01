import axios from 'axios'

const CurrenctListQuotes = async (req, res) => {

const options = {
  method: 'GET',
  url: 'https://currency-exchange.p.rapidapi.com/listquotes',
  headers: {
    'X-RapidAPI-Key': 'ce1144368fmsh11dca8c9ce78b66p174caajsne77e09551f6f',
    'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
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

export default CurrenctListQuotes