var sha512 = require('js-sha512');
var jwt = require('jsonwebtoken')
export class Encryption {

    public async encrypt(data: any) {
        return sha512(data)

    }
    public async generateUserToken1(user: any) {
        let secret = '';
        // @ts-ignore
        secret = process.env.API_SECRET;



        const accessToken = jwt.sign(
            user,
            secret,
            { expiresIn: '3.6e+6' }
        );
        
        const refreshToken = jwt.sign(
            user,
            secret,
            { expiresIn: '3.6e+6' }

        );

        return {
            expiresIn: 40000,
            grantedToken: accessToken,
            renewToken: refreshToken
        }
    }
}