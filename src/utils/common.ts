import * as jose from 'jose';
import crypto from 'crypto';
import bcrypt from 'bcrypt';
import {ClassConstructor, plainToInstance} from 'class-transformer';
import {ValidationError} from 'class-validator';
import { OfferType } from '../types/offer-type.enum.js';
import { Facility } from '../types/facility.enum.js';
import { CityLocation } from '../constants/city-location.constant.js';
import { City } from '../types/city.enum.js';
import { Offer } from '../types/offer.type.js';
import { getRandomBoolean, getRandomIntInclusive } from './random.js';
import {ValidationErrorField} from '../types/validation-error-field.type.js';
import {ServiceError} from '../types/service-error.enum.js';
import {UnknownObject} from '../types/unknown-object.type.js';
import {DEFAULT_STATIC_IMAGES} from '../app/application.constant.js';

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

export const createBCrypt = (line: string, salt: string): string => bcrypt.hashSync(line, salt);

export const fillDTO = <T, V>(someDto: ClassConstructor<T>, plainObject: V) =>
  plainToInstance(someDto, plainObject, {excludeExtraneousValues: true});

export const createErrorObject = (serviceError: ServiceError, message: string, details: ValidationErrorField[] = []) => ({
  errorType: serviceError,
  message,
  details: [...details]
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

export const getFullServerPath = (host: string, port: number) => `http://${host}:${port}`;

const isObject = (value: unknown) => typeof value === 'object' && value !== null;

export const transformProperty = (
  property: string,
  someObject: UnknownObject,
  transformFn: (object: UnknownObject) => void
) => {
  Object.keys(someObject)
    .forEach((key) => {
      if (key === property) {
        transformFn(someObject);
      } else if (isObject(someObject[key])) {
        transformProperty(property, someObject[key] as UnknownObject, transformFn);
      }
    });
};

export const transformObject = (properties: string[], staticPath: string, uploadPath: string, data:UnknownObject) => {
  properties
    .forEach((property) => transformProperty(property, data, (target: UnknownObject) => {
      const rootPath = DEFAULT_STATIC_IMAGES.includes(target[property] as string) ? staticPath : uploadPath;
      target[property] = `${rootPath}/${target[property]}`;
    }));
};
