import typegoose, {defaultClasses, getModelForClass} from '@typegoose/typegoose';
import {Offer} from '../../types/offer.type.js';
import {City} from '../../types/city.enum.js';
import {OfferType} from '../../types/offer-type.enum.js';
import {Facility} from '../../types/facility.enum.js';
import {UserEntity} from '../user/user.entity.js';
import {User} from '../../types/user.type.js';
import {Coords} from '../../types/coords.type.js';

const {prop, modelOptions} = typegoose;

export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'offers'
  }
})
export class OfferEntity extends defaultClasses.TimeStamps implements Offer {
  @prop({required: true, trim: true, minlength: 10, maxlength: 100})
  public name!: string;

  @prop({required: true, trim: true, minlength: 20, maxlength: 1024})
  public description!: string;

  @prop({required: true})
  public publishedDate!: Date;

  @prop({required: true})
  public city!: City;

  @prop({required: true})
  public preview!: string;

  @prop({required: true, limit: 6})
  public pictures!: string[];

  @prop({required: true})
  public isPremium!: boolean;

  @prop({required: true})
  public rating!: number;

  @prop({required: true})
  public type!: OfferType;

  @prop({required: true, min: 1, max: 8})
  public bedrooms!: number;

  @prop({required: true, min: 1, max: 10})
  public guests!: number;

  @prop({required: true, min: 100, max: 100000})
  public price!: number;

  @prop({required: true, minlength: 1})
  public facilities!: Facility[];

  @prop({required: true, ref: UserEntity})
  public user!: User;

  public comments!: number;

  @prop({required: true})
  public coords!: Coords;
}

export const OfferModel = getModelForClass(OfferEntity);
