import { Router } from 'express';
import { UserService } from './user.service'
const validator = require('./user.validator')
export class UserRouter {
    public router: Router;
    public userService: UserService = new UserService();
    
    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        // Get All Employee
        this.router.post("/add", validator.userValidator('add'), this.userService.adduser);
        this.router.post("/login", validator.userValidator('login'), this.userService.login);

    }
}