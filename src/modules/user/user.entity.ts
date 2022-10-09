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
    this.isPro = data.isPro;
  }

  @prop({
    unique: true,
    match: [/^([\w-\\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Email is incorrect']
  })
  public email!: string;

  @prop({
    required: true,
    match: [/^\S*$/, 'Spaces in the password are not allowed'],
    minlength: [6, 'Min length for the password is 6 simbols']
  })
  public password!: string;

  @prop({
    match: [/^(?:.*\.(?=(jpg|jpeg|png)$))?[^.]*$/i, 'Only jpg or png format is allowed']
  })
  public avatarPath!: string;

  @prop({required: true})
  public isPro!: boolean;

  @prop({ required: true, default: '' })
  public firstName!: string;

  @prop({required: true, default: ''})
  public lastName!: string;

  public setPassword(password: string, salt: string) {
    this.password = createSHA256(password, salt);
  }

  public getPassword() {
    return this.password;
  }
}

export const UserModel = getModelForClass(UserEntity);
