import axios from 'axios'

const baseUrl = 'https://raulramosjr.com/api'

export default {
    async getTrending(){
        let res = await axios({
            method: 'get',
            url: `${baseUrl}/trending`
        });
        
        return res.data[0];
    }
}