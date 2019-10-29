import mongoose from 'mongoose';

interface User extends mongoose.Document {
    email: string; 
    password: string; 
};
  
const UserSchema = new mongoose.Schema({
    email: { type:String, required: true },
    password: { type:String, required: true },
});
  
const UserModel = mongoose.model<User>('User', UserSchema);

export {
    User,
    UserModel,
}