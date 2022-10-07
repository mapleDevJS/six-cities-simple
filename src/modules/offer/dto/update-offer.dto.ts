import {OfferType} from '../../../types/offer-type.enum.js';

export default class UpdateOfferDto {
  public name?: string;
  public description?: string;
  public publishedDate?: Date;
  public preview?: string;
  public type?: OfferType;
  public price?: number;
}
