import {User} from '../../types/user.type.js';
import typegoose, {getModelForClass, defaultClasses} from '@typegoose/typegoose';
import {createSHA256} from '../../utils/common.js';

const {prop, modelOptions} = typegoose;

export interface UserEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'users'
  }
})

export class UserEntity extends defaultClasses.TimeStamps implements User {
  constructor(data: User) {
    super();

    this.email = data.email;
    this.avatarPath = data.avatarPath;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
  }

  @prop({ unique: true, required: true })
  public email!: string;

  @prop({required: false, default: ''})
  public avatarPath!: string;

  @prop({ required: true, minlength: 1, maxlength: 15, default: '' })
  public firstName!: string;

  @prop({required: true, minlength: 1, maxlength: 15, default: ''})
  public lastName!: string;

  @prop({ required: true, minlength: 6, maxlength: 12 })
  public password!: string;

  @prop()
  public userType!: string;

  public setPassword(password: string, salt: string) {
    this.password = createSHA256(password, salt);
  }

  public getPassword() {
    return this.password;
  }

}

export const UserModel = getModelForClass(UserEntity);
