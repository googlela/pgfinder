import { Document, Schema, Model, model } from "mongoose";
const Encrypt = require('../utils/encryption');

export interface IUser extends Document {
    username: String;
    email: String;
    password: String;
    name: String;
}

export const UserSchema = new Schema({
    username: {
        type: Schema.Types.String,
        required: [true, "username cannot be empty."]
    },
    email: {
        type: Schema.Types.String,
        required: [true, "email cannot be empty."]
    },
    name: {
        type: Schema.Types.String,
        required: [true, "name cannot be empty."]
    },
    password: {
        type: Schema.Types.String,
        required: [true, "password cannot be empty."]
    },


}, {
    strict: true
});
UserSchema.set('timestamps', true)
export const User: Model<IUser> = model<IUser>("User", UserSchema, 'User');

