import {City} from './city.enum';
import {Facility} from './facility.enum';
import {OfferType} from './offer-type.enum';
import {User} from './user.type';
import {Coords} from './coords.type';
import {Location} from './location.type';

export type Offer = {
  name: string;
  description: string;
  postDate: Date;
  city: {
    name: City;
    location: Location;
    zoom: number;
  };
  preview: string,
  pictures: string[],
  isPremium: boolean;
  rating: number;
  type: OfferType;
  bedrooms: number;
  guests: number;
  price: number;
  facilities: Facility[];
  user: User;
  commentsCount: number;
  coords: Coords;
}
