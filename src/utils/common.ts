import * as jose from 'jose';
import crypto from 'crypto';
import {ClassConstructor, plainToInstance} from 'class-transformer';
import {ValidationError} from 'class-validator';
import { OfferType } from '../types/offer-type.enum.js';
import { Facility } from '../types/facility.enum.js';
import { CityLocation } from '../constants/city-location.constant.js';
import { City } from '../types/city.enum.js';
import { Offer } from '../types/offer.type.js';
import { getRandomBoolean, getRandomIntInclusive } from './random.js';
import {ValidationErrorField} from '../types/validation-error-field.type';

export const createOffer = (row: string): Offer => {
  const tokens = row.replace('\n', '').split('\t');
  const [name, description, postDate, city, preview, pictures, rating, type, bedrooms, guests, price, facilities, email, avatarPath, firstName, lastName, latitude, longitude] = tokens;
  return {
    name,
    description,
    postDate: new Date(postDate),
    city: {
      name: city as City,
      location: {
        latitude: CityLocation[city as City].latitude,
        longitude: CityLocation[city as City].longitude,
      },
      zoom: 10
    },
    preview,
    pictures: pictures.split(';').map((picture) => picture),
    isPremium: getRandomBoolean(),
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
      lastName,
      isPro: getRandomBoolean()
    },
    commentsCount: getRandomIntInclusive(0, 100),
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

export const fillDTO = <T, V>(someDto: ClassConstructor<T>, plainObject: V) =>
  plainToInstance(someDto, plainObject, {excludeExtraneousValues: true});

export const createErrorObject = (message: string) => ({
  error: message,
});

export const createJWT = async (algorithm: string, jwtSecret: string, payload: object): Promise<string> =>
  new jose.SignJWT({...payload})
    .setProtectedHeader({ alg: algorithm})
    .setIssuedAt()
    .setExpirationTime('2d')
    .sign(crypto.createSecretKey(jwtSecret, 'utf-8'));

export const transformErrors = (errors: ValidationError[]): ValidationErrorField[] =>
  errors.map(({property, value, constraints}) => ({
    property,
    value,
    messages: constraints ? Object.values(constraints) : []
  }));
