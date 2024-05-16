import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 *
 */

class HalloweenApi {
    static async request(endpoint, data = {}, method = "get") {
        console.debug("API Call:", endpoint, data, method);
    
        const url = `${BASE_URL}/${endpoint}`;
        const params = (method === "get")
            ? data
            : {};
        try {
          return (await axios({ url, method, data, params })).data;
        } catch (err) {
          console.error("API Error:", err);
          if(err.response.data){
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
          }

        }
    };

    static async getCostumes() {
        let res = await this.request(`costumes`);
        return res;
    }
    static async getCostume(name) {
        let res = await this.request(`costumes/${name}`);
        return res;
    };


    static async getByAllFilters(theme, gender_pref, experience_level) {
        try {
            let res = await this.request(`costumes/filters?theme=${theme}&gender_pref=${gender_pref}&experience_level=${experience_level}`);
            return res;
        } catch(e) {
            console.error('error', e)
        }
    }
}

export default HalloweenApi;