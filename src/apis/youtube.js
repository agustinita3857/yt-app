import axios from 'axios';
const KEY='AIzaSyA5e1-Oqr5MS2ZERAiYlVvuIrhtquTssFY'
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type:'video',
        maxResults:5,
        key: KEY
    }
});