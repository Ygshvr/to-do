const jwt = require('jsonwebtoken');
const { secretKey } = require('../secrets');

function verifyJWTToken(req, res, next) {
    const token = req.headers["authorization"];
    if(!token) {
        return res.status(403).json({"message": "Token not found!"});
    }
    console.log(token)
    jwt.verify(token, secretKey, (err, user) => {
        if(err) {
            console.log(err);
            return res.status(401).send('Unable to verify the user, please try logging in again.');
        }
        req.user = user;
        next();
    })
};

module.exports = verifyJWTToken;