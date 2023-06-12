import mongoose, { Schema, model, Model } from 'mongoose';
import { IUser } from '@/interfaces';

const userSchema = new Schema({

    name    : { type: String, required: true },
    email   : { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String, required: false },
    role: {
        type: String,
        enum: {
            values: ['admin','client', 'owner'],
            message: '{VALUE} no es un role válido',
            default: 'client',
            required: true
        }
    }
}, {
    timestamps: true,
})

const User:Model<IUser> = mongoose.models.User || model('User',userSchema);

export default User;
