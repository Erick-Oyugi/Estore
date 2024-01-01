



import axios from 'axios'

const CategoryList = async (req, res) => {

  axios({
    method: 'get',
    url: 'https://api.dataforseo.com/v3/app_data/google/app_listings/categories',
    auth: {
        username: 'erickoyugi70@gmail.com',
        password: 'dd4a08f7293f888b'
    },
    headers: {
        'content-type': 'application/json'
    }
}).then(function (response) {
    var result = response['data']['tasks'][0]['result'];
    // Result data

    res.render('category', {result})
    console.log(result);
}).catch(function (error) {
    console.log(error);
});


}




export default CategoryList