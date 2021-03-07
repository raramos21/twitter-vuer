import axios from 'axios'

export default {
    async getTrending(){
        console.log('gettrending');
        let res = await axios({
            method: 'get',
            url: 'http://localhost:3000/trending'
        });
        console.log(res.data);
        return res.data;
    }
}