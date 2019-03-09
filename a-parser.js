const axios = require('axios');

/**
 * A-Parser Client Library
 * @constructor
 * @param {string} link - full link address, ex: http://127.0.0.1:9091/API
 * @param {string} password - login password, if no password leave blank
 */

class AParser {
    constructor(link, password = '') {
        this.link = link;
        this.password = password;

        return new Proxy(this, {
            get: (obj, prop) => {
                if(typeof prop == 'string') {
                    if(!(prop in obj))
                        obj[prop] = (data = null) => obj.makeRequest(prop, data);
                    
                    return obj[prop];
                };
            }
        });
    }

    makeRequest(action, data = null) {
        return new Promise((resolve, reject) => {
            axios.post(this.link, {
                password: this.password,
                action,
                data,
            })
            .then(response => resolve(response.data))
            .catch(err => reject(err));
        });
    }
}

module.exports = AParser;