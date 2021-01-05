import axios from 'axios';

const instance= axios.create({
    baseURL:"https://api.themoviedb.org/3",
});

/* to make get request:
   use: instance.get("/foo-bar");
 */

export default instance;