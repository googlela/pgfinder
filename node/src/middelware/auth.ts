const jwt = require('jsonwebtoken');
import { User } from "../user/user.model";

module.exports = async (req: any, res: any, next: any) => {
    var authHeader = req.get('Authorization');
    if (!authHeader) {
        let error1 = {
            statusCode: 401,
            message: "Not authorized. Please login, your session might have expired.",
            data: null
        }
        return res.status(401).send(error1);
    }
    authHeader = authHeader.substring(7);
    if (!authHeader) {
        let error1 = {
            statusCode: 401,
            message: "Not authorized. Please login, your session might have expired.",
            data: null
        }
        return res.status(401).send(error1);

    }

    let decodedToken;
    let secret = process.env.API_SECRET;
    try {
        decodedToken = jwt.verify(authHeader, secret);
    } catch (err) {
        let error1 = {
            statusCode: 400,
            message: "Not authorized. Please login, your session might have expired.",
            data: null
        }
        return res.status(400).send(error1);
    }
    if (!decodedToken) {
        let error1 = {
            statusCode: 401,
            message: "Not authorized. Please login, your session might have expired.",
            data: null
        }
        return res.status(401).send(error1);
    }
    var user = await User.findById(decodedToken.id)
    if (user) {

        req.query.email = user.email
        req.query.id = user.id
        next();
    }
    else {
        let error1 = {
            statusCode: 401,
            message: "Not authorized. Please login, your session might have expired.",
            data: null
        }
        return res.status(401).send(error1);
    }

};
