import axios from 'axios';

const registorUser = async (user) => {
    try{
        const response = axios.post('http://localhost:8080/api/users',user);
        console.log(response.data);
    }catch(err){
        console.log(err)
    }

}

export {registorUser};