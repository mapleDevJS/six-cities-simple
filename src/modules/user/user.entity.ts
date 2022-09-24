import {User} from '../../types/user.type.js';
import typegoose, {getModelForClass} from '@typegoose/typegoose';

const {prop} = typegoose;

export class UserEntity implements User {
  @prop({ unique: true, required: true })
  public email!: string;

  @prop()
  public avatarPath!: string;

  @prop({ required: true, minlength: 1, maxlength: 15 })
  public firstname!: string;

  @prop()
  public lastname!: string;

  @prop({ required: true, minlength: 6, maxlength: 12 })
  public password!: string;

  @prop()
  public userType!: string;
}

export const UserModel = getModelForClass(UserEntity);
