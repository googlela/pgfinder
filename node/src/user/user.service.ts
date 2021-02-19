import { Request, Response } from "express";
import { User } from './user.model';
const { validationResult } = require('express-validator');
import { Encryption } from '../utils/encryption'

export class UserService extends Encryption {
    public async adduser(req: Request, res: Response): Promise<any> {

        const errors = validationResult(req);
        try {
            if (!errors.isEmpty()) {
                const error = new Error('Validation Error.');
                var error1 = {
                    statusCode: 422,
                    data: errors.array()
                }
                throw error1;
            }
        } catch (error1) {
            if (!error1.statusCode) {
                error1.statusCode = 400;
            }
            return res.status(400).send(error1);
        }
        try {

            const { name, email, username, password } = req.body

            var encPassword: any = await super.encrypt(password)
            const user = new User();
            user.name = name;
            user.password = encPassword;
            user.email = email;
            user.username = username;

            var userResult = await user.save();
            if (userResult) {
                // @ts-ignore
                const response = { statusCode: 200, message: 'User adding  succeeded', data: null };
                res.status(200).send(response);
            }
            else {
                const error = {
                    statusCode: 400,
                    message: "user adding failed",
                    data: ''
                }
                throw error;
            }
        } catch (error) {
            if (error.statusCode == 400) {
                const response = { statusCode: 400, message: 'User adding  failed', data: null };
                res.status(400).send(response);
            }
            else {
                const response = { statusCode: 400, message: error.message + 'Internal server error', data: null };
                res.status(400).send(response);
            }
        }

    }
    public async login(req: Request, res: Response): Promise<any> {
        const errors = validationResult(req);
        try {
            if (!errors.isEmpty()) {
                const error = new Error('Validation Error.');
                var error1 = {
                    statusCode: 422,
                    data: errors.array()
                }
                throw error1;
            }
        } catch (error1) {
            if (!error1.statusCode) {
                error1.statusCode = 400;
            }
            return res.status(400).send(error1);
        }
        try {

            const { email, password } = req.body
            var user = await User.findOne({ email: email });
            if (user) {
                var userPassword: any = await super.encrypt(password)

                if (userPassword != user.password) {
                    const error = {
                        statusCode: 400,
                        messages: "username password are invalid",
                        data: ''
                    }
                    throw error;
                }
                else {
                    let encryptedString = {
                        id: user._id,
                        email: user.email,
                        name: user.username


                    };
                    let token = await super.generateUserToken1(encryptedString);

                    var result = {
                        username: user.username,
                        token: token
                    }
                    // @ts-ignore
                    const response = { statusCode: 200, message: 'User login  succeeded', data: result };
                    res.status(200).send(response);
                }
            }
            else {
                const error = {
                    statusCode: 400,
                    messages: "user not found",
                    data: ''
                }
                throw error;
            }






        } catch (error) {
            if (error.statusCode == 400) {
                const response = { statusCode: 400, message: error.messages, data: null };
                res.status(400).send(response);
            }
            else {
                const response = { statusCode: 400, message: 'Internal server error', data: null };
                res.status(400).send(response);
            }
        }
    }
}