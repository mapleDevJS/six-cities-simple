import {City} from './city.enum';
import {OfferType} from './offer-type.enum';
import {Facility} from './facility.enum';

export type MockData = {
  names: string[];
  descriptions: string[];
  cities: City[];
  previews: string[];
  pictures: string[];
  types: OfferType[];
  facilities: Facility[];
  users: string[];
  emails: string[];
  avatars: string[];
  coordinates: string[];
};
