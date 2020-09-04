const request = require('request');

const clients = (callback) => {
    const url = process.env.APP_URL  + '/clients/get_clients';
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to the api!', error)
        }
        else {
            callback(undefined, body)
        }
    })
}

module.exports = clients

