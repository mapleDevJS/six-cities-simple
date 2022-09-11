import { readFileSync } from 'fs';
import { FileReaderInterface } from './file-reader.interface.js';
import {Offer} from '../../types/offer.type';
import {OfferType} from '../../types/offer-type.enum';
import {City} from '../../types/city.enum';
import {Facility} from '../../types/Facility.enum';

export default class TSVFileReader implements FileReaderInterface {
  private rawData = '';

  constructor(public filename: string) { }

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      return [];
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim() !== '')
      .map((line) => line.split('\t'))
      .map(([name, description, createDate, city, preview, pictures, premium, rating, type, bedrooms, guests, price, facilities, email, avatarPath, firstName, lastName, comments, latitude, longitude]) => ({
        name,
        description,
        createDate: new Date(createDate),
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
      }));
  }
}
