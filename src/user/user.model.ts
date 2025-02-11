import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { Types } from 'mongoose';

export interface IUserModel extends Base {
  email: string;
  password: string;
  isAdmin?: boolean;
  favorites?: [];
}
export class UserModel extends TimeStamps implements IUserModel {
  _id!: Types.ObjectId;
  id!: string;
  
  @prop({ unique: true })
  email: string;

  @prop()
  password: string;

  @prop({ default: false })
  isAdmin?: boolean;

  @prop({ default: [] })
  favorites?: [];
}
