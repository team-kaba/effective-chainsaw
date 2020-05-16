import axios from 'axios';


export default function doPost(path, request) {
    axios.post(path, request
        ).then(res => { console.log(res); }
        ).catch(error=>{console.log(error)});
}
