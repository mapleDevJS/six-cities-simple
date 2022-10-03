import {City} from '../../../types/city.enum';
import {OfferType} from '../../../types/offer-type.enum';
import {Facility} from '../../../types/facility.enum';
import {User} from '../../../types/user.type';
import {Coords} from '../../../types/coords.type';

export default class CreateOfferDto {
  public userId!: string;
  public name!: string;
  public description!: string;
  public publishedDate!: Date;
  public city!: City;
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
  public comments!: number;
  public coords!: Coords;
}
