import typegoose, {defaultClasses, getModelForClass, Ref, Severity} from '@typegoose/typegoose';
import {City} from '../../types/city.enum.js';
import {OfferType} from '../../types/offer-type.enum.js';
import {Facility} from '../../types/facility.enum.js';
import {UserEntity} from '../user/user.entity.js';
import {Coords} from '../../types/coords.type.js';

const {prop, modelOptions} = typegoose;

export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'offers'
  }
})
export class OfferEntity extends defaultClasses.TimeStamps {
  @prop({required: true, trim: true, minlength: 10, maxlength: 100})
  public name!: string;

  @prop({required: true, trim: true, minlength: 20, maxlength: 1024})
  public description!: string;

  @prop({required: true})
  public publishedDate!: Date;

  @prop({
    required: true,
    allowMixed: Severity.ALLOW
  })
  public city!: City;

  @prop({required: true, type: String})
  public preview!: string;

  @prop({required: true, allowMixed: Severity.ALLOW})
  public pictures!: string[];

  @prop({required: true})
  public isPremium!: boolean;

  @prop({required: true})
  public rating!: number;

  @prop({
    required: true,
    type: () => String,
    enum: OfferType
  })
  public type!: OfferType;

  @prop({required: true, min: 1, max: 8})
  public bedrooms!: number;

  @prop({required: true, min: 1, max: 10})
  public guests!: number;

  @prop({required: true, min: 100, max: 100000})
  public price!: number;

  @prop({
    required: true,
    allowMixed: Severity.ALLOW
  })
  public facilities!: Facility[];

  @prop({
    ref: UserEntity,
    required: true
  })
  public userId!: Ref<UserEntity>;

  public comments!: number;

  @prop({required: true, allowMixed: Severity.ALLOW})
  public coords!: Coords;
}

export const OfferModel = getModelForClass(OfferEntity);
