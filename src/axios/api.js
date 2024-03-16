import axios from 'axios';

export default axios.create({
    //dev test uat prod(uction)
    
    baseURL: 'https://api.spacexdata.com/v4/.'

    /*
    headers: {
        'Authorization': 'Bearer token123',
        'Contant-Type': 'application/json'
    }
    */
})