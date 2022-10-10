import {City} from './city.enum.js';
import {Facility} from './facility.enum.js';
import {OfferType} from './offer-type.enum.js';
import {User} from './user.type.js';
import {Coords} from './coords.type.js';
import {Location} from './location.type.js';

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
