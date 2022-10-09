import {Expose} from 'class-transformer';
import {City} from '../../../types/city.enum.js';
import {Location} from '../../../types/location.type.js';
import {OfferType} from '../../../types/offer-type.enum.js';
import {Facility} from '../../../types/facility.enum.js';

export default class CategoryResponse {
  @Expose()
  public userId!: string;

  @Expose()
  public name!: string;

  @Expose()
  public description!: string;

  @Expose()
  public postDate!: Date;

  @Expose()
  public city!: {
    name: City,
    location: Location
  };

  @Expose()
  public preview!: string;

  @Expose()
  public pictures!: string[];

  @Expose()
  public isPremium!: boolean;

  @Expose()
  public rating!: number;

  @Expose()
  public type!: OfferType;

  @Expose()
  public bedrooms!: number;

  @Expose()
  public guests!: number;

  @Expose()
  public price!: number;

  @Expose()
  public facilities!: Facility[];

  @Expose()
  public coords!: Location;
}
