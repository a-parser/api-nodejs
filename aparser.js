const axios = require('axios');

/**
 * A-parser client
 * @constructor
 * @param {string} link - full link address, ex: http://127.0.0.1:9091/API
 * @param {string} password - login password, if no password leave blank
 */
class Aparser {
    constructor(link, password = '') {
        this.link = link;
        this.password = password;
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

    ping() {
        return this.makeRequest('ping');
    }

    info() {
        return this.makeRequest('info');
    }

    oneRequest(data) {
        return this.makeRequest('oneRequest', data);
    }

    bulkRequest(data) {
        return this.makeRequest('bulkRequest', data);
    }

    getParserPreset(data) {
        return this.makeRequest('getParserPreset', data);
    }

    getProxies() {
        return this.makeRequest('getProxies');
    }

    setProxyCheckerPreset(data) {
        return this.makeRequest('setProxyCheckerPreset', data);
    }

    addTask(data) {
        return this.makeRequest('addTask', data);
    }
    getTaskState(data) {
        return this.makeRequest('getTaskState', data);
    }

    getTaskConf(data) {
        return this.makeRequest('getTaskConf', data);
    }

    getTaskResultsFile(data) {
        return this.makeRequest('getTaskResultsFile', data);
    }

    deleteTaskResultsFile(data) {
        return this.makeRequest('deleteTaskResultsFile', data);
    }

    changeTaskStatus(data) {
        return this.makeRequest('changeTaskStatus', data);
    }

    moveTask(data) {
        return this.makeRequest('moveTask', data);
    }

    getTasksList(data) {
        return this.makeRequest('getTasksList', data);
    }

    getParserInfo(data) {
        return this.makeRequest('getParserInfo', data);
    }

    update() {
        return this.makeRequest('update');
    }

    getAccountsCount() {
        return this.makeRequest('getAccountsCount');
    }
}

module.exports = Aparser;