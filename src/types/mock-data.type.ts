import {City} from './city.enum.js';
import {OfferType} from './offer-type.enum.js';
import {Facility} from './facility.enum.js';

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
