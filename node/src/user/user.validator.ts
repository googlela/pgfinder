
var { check, body, query } = require('express-validator');

exports.userValidator = (method:any) => {
    switch (method) {
        case 'add': {
            return [
                body('username')
                    .exists().withMessage('username is required')
                    .not().isEmpty().withMessage('Username must be required !'),
                check('email').normalizeEmail().isEmail(),
                body('email')
                    .exists().withMessage('Email is required')
                    .not().isEmpty().withMessage('Please enter email.')
                    .isEmail().withMessage('Email is must be required !.'),
                body('password')
                    .exists()
                    .withMessage('password must be required')
                    .not().isEmpty().withMessage('Enter birthdate '),
                body('name')
                    .exists()
                    .withMessage('name must be required')
                    .not().isEmpty().withMessage('Please enter password.'),
            ];
        }
        case 'login': {
            return [                
                check('email').normalizeEmail().isEmail(),
                body('email')
                    .exists().withMessage('Email is required')
                    .not().isEmpty().withMessage('Please enter email.')
                    .isEmail().withMessage('Email is must be required !.'),
                body('password')
                    .exists()
                    .withMessage('password must be required')
                    .not().isEmpty().withMessage('Enter birthdate '),
            ];
        }
    }
}