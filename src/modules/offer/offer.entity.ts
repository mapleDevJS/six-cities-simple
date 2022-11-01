import typegoose, {defaultClasses, getModelForClass, Ref} from '@typegoose/typegoose';
import { City } from '../../types/city.enum.js';
import { OfferType } from '../../types/offer-type.enum.js';
import { Facility } from '../../types/facility.enum.js';
import { UserEntity } from '../user/user.entity.js';
import { Coords } from '../../types/coords.type.js';
import { Location } from '../../types/location.type.js';

const {prop, modelOptions} = typegoose;

export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'offers'
  }
})
export class OfferEntity extends defaultClasses.TimeStamps {
  @prop({
    required: true,
    trim: true,
    minlength: 10,
    maxlength: 100
  })
  public name!: string;

  @prop({
    required: true,
    minlength: [20, 'Min length for the description is 20 symbols'],
    maxlength: [1024, 'Max length for the description is 1024 symbols']
  })
  public description!: string;

  @prop({
    required: true,
    type: () => Date,
  })
  public postDate!: Date;

  @prop({
    required: true
  })
  public city!: {
    name: City,
    location: Location,
  };

  @prop({
    required: true,
    default: ''
  })
  public preview!: string;

  @prop({
    required: true
  })
  public pictures!: string[];

  @prop({
    required: true
  })
  public isPremium!: boolean;

  @prop({
    required: true,
    min: 1,
    max: 5
  })
  public rating!: number;

  @prop({
    required: true,
    type: () => String,
    enum: OfferType
  })
  public type!: OfferType;

  @prop({
    required: true,
    min: [1, 'Min rooms number is 1 room'],
    max: [8, 'Max rooms number is 8 rooms']
  })
  public bedrooms!: number;

  @prop({
    required: true,
    min: 1,
    max: 10
  })
  public guests!: number;

  @prop({
    required: true,
    min: 100,
    max: 100000
  })
  public price!: number;

  @prop({
    required: true
  })
  public facilities!: Facility[];

  @prop({
    ref: UserEntity,
    required: true
  })
  public userId!: Ref<UserEntity>;

  public commentsCount!: number;

  @prop({
    required: true
  })
  public coords!: Coords;
}

export const OfferModel = getModelForClass(OfferEntity);
