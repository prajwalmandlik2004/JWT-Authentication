const jwt = require('jsonwebtoken');
const Register = require('../models/registers');


const auth = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        const verifyUser = jwt.verify(token, 'mynameisprajwalmandlikbakenddeveloper');
        console.log(verifyUser);

        const user = await Register.findOne({ _id: verifyUser._id });
        console.log(`User name : ${user.firstname}`);

        req.token = token;
        req.user = user;

        next();
    } catch (error) {
        res.status(401).send(error);
    }
}

module.exports = auth;

