import axios from 'axios'

const AppList = async (req, res) => {

    const options = {
      method: 'GET',
      url: 'https://store-apps.p.rapidapi.com/search',
      params: {
        q: 'notes',
        region: 'us',
        language: 'en'
      },
      headers: {
        'X-RapidAPI-Key': 'ce1144368fmsh11dca8c9ce78b66p174caajsne77e09551f6f',
        'X-RapidAPI-Host': 'store-apps.p.rapidapi.com'
      }
    };
    
    try {
        const response = await axios.request(options);


        console.log(response.data);
        let result = response.data;

      
     res.send(result)
    } catch (error) {
        console.error(error);
    }

}


export default AppList