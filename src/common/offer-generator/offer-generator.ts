import { MockData } from '../../types/mock-data.type.js';
import { OfferType } from '../../types/offer-type.enum.js';
import {
  generateRandomValue,
  getRandomFloat,
  getRandomIntInclusive,
  getRandomItem,
  getRandomItems
} from '../../utils/random.js';
import { OfferGeneratorInterface } from './offer-generator.interface.js';
import {City} from '../../types/city.enum';
import {Facility} from '../../types/facility.enum';
import dayjs from 'dayjs';

const Rating = {
  MIN: 1,
  MAX: 5
};

const Bedrooms = {
  MIN: 1,
  MAX: 8
};

const Guests = {
  MIN: 1,
  MAX: 10
};

const Price = {
  MIN: 100,
  MAX: 100000
};

const WeekDay = {
  FIRST: 1,
  LAST: 7
};

export default class OfferGenerator implements OfferGeneratorInterface {
  constructor(private readonly mockData: MockData) {}

  public generate(): string {
    const name = getRandomItem<string>(this.mockData.names);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const createDate =  dayjs().subtract(generateRandomValue(WeekDay.FIRST, WeekDay.LAST), 'day').toISOString();
    const city = getRandomItem<City>(this.mockData.cities);
    const preview = getRandomItem<string>(this.mockData.previews);
    const pictures = getRandomItems<string>(this.mockData.pictures).join(';');
    const isPremium = Math.random() < 0.5;
    const rating = getRandomFloat(Rating.MIN, Rating.MAX, 1);
    const type = getRandomItem<OfferType>(this.mockData.types);
    const bedrooms = getRandomIntInclusive(Bedrooms.MIN, Bedrooms.MAX);
    const guests = getRandomIntInclusive(Guests.MIN, Guests.MAX);
    const price = getRandomIntInclusive(Price.MIN, Price.MAX);
    const facilities = getRandomItems<Facility>(this.mockData.facilities).join(';');
    const author = getRandomItem<string>(this.mockData.users);
    const email = getRandomItem<string>(this.mockData.emails);
    const avatarPath = getRandomItem<string>(this.mockData.avatars);
    const comments = getRandomIntInclusive(Price.MIN, Price.MAX);
    const coords = getRandomItem<string>(this.mockData.coordinates);

    const [firstname, lastname] = author.split(' ');
    const [latitude, longitude] = coords.split(' ');

    return [
      name, description, createDate, city, preview, pictures, isPremium, rating, type, bedrooms, guests, price, facilities,
      email, avatarPath, firstname, lastname, comments, latitude, longitude
    ].join('\t');
  }
}
