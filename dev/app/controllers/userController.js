const path = require('path');

const user = {username:"ashray@gmail.com", pass:"vokal"}

const validateUser = (req, res) => {
    
    let { body } = req
    if( body.username === user.username && body.pass === user.pass){
        res.send({status: true, username: body.username});
    }else{
        res.send({status: false,  username: body.username});
    }
       
    
}

module.exports = {
    validateUser,
};