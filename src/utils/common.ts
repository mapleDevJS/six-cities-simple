import crypto from 'crypto';
import { OfferType } from '../types/offer-type.enum.js';
import {City} from '../types/city.enum';
import {Facility} from '../types/facility.enum';

export const createOffer = (row: string) => {
  const tokens = row.replace('\n', '').split('\t');
  const [name, description, publishedDate, city, preview, pictures, premium, rating, type, bedrooms, guests, price, facilities, email, avatarPath, firstName, lastName, comments, latitude, longitude] = tokens;
  return {
    name,
    description,
    publishedDate: new Date(publishedDate),
    city: city as City,
    preview,
    pictures: pictures.split(';').map((picture) => picture),
    isPremium: Boolean(premium),
    rating: Number.parseInt(rating, 10),
    type: type as OfferType,
    bedrooms: Number.parseInt(bedrooms, 10),
    guests: Number.parseInt(guests, 10),
    price: Number.parseInt(price, 10),
    facilities: facilities.split(';').map((facility ) => (facility as Facility)),
    user: {
      email,
      avatarPath,
      firstName,
      lastName
    },
    comments: Number.parseInt(comments, 10),
    coords: {
      latitude: Number.parseFloat(latitude),
      longitude: Number.parseFloat(longitude)
    }
  };
};

export const getErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : '';

export const createSHA256 = (line: string, salt: string): string => {
  const shaHasher = crypto.createHmac('sha256', salt);
  return shaHasher.update(line).digest('hex');
};
