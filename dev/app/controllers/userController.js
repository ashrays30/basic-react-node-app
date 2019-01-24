const path = require('path');

const user = {username:"ashray@gmail.com", pass:"vokal"}

const validateUser = (req, res) => {
    
    let { body } = req
        res.send({status: true,  username: user.username});
}

module.exports = {
    validateUser,
};