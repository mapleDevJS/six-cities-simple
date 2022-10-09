import {City} from '../../../types/city.enum.js';
import {OfferType} from '../../../types/offer-type.enum.js';
import {Facility} from '../../../types/facility.enum.js';
import {User} from '../../../types/user.type.js';
import {Coords} from '../../../types/coords.type.js';
import {Location} from '../../../types/location.type.js';

export default class CreateOfferDto {
  public userId!: string;
  public name!: string;
  public description!: string;
  public postDate!: Date;
  public city!: { name: City, location: Location };
  public preview!: string;
  public pictures!: string[];
  public isPremium!: boolean;
  public rating!: number;
  public type!: OfferType;
  public bedrooms!: number;
  public guests!: number;
  public price!: number;
  public facilities!: Facility[];
  public user!: User;
  public commentsCount!: number;
  public coords!: Coords;
}
