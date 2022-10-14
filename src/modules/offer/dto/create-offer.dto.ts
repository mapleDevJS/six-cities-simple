import {City} from '../../../types/city.enum.js';
import {OfferType} from '../../../types/offer-type.enum.js';
import {Facility} from '../../../types/facility.enum.js';
import {Coords} from '../../../types/coords.type.js';
import {Location} from '../../../types/location.type.js';
import {
  IsArray,
  IsDateString,
  IsEnum,
  IsInt,
  IsMongoId,
  Max,
  MaxLength,
  Min,
  MinLength,
  IsBoolean,
  IsDecimal,
  ValidateNested, IsString
} from 'class-validator';

export default class CreateOfferDto {
  @IsMongoId({message: 'userId field must be valid an id'})
  public userId!: string;

  @MinLength(10, {message: 'Minimum title length must be 10'})
  @MaxLength(100, {message: 'Maximum title length must be 100'})
  public name!: string;

  @MinLength(20, {message: 'Minimum description length must be 20'})
  @MaxLength(1024, {message: 'Maximum description length must be 1024'})
  public description!: string;

  @IsDateString({}, {message: 'postDate must be valid ISO date'})
  public postDate!: Date;

  @IsEnum(City, {message: 'city must be Amsterdam / Paris / Cologne / Brussels / Hamburg / Dusseldorf'})
  public city!: { name: City, location: Location };

  @IsString({message: 'image is required'})
  @MaxLength(256, {message: 'Too short for field «preview»'})
  public preview!: string;

  @IsArray({message: 'Field pictures must be an array'})
  @MaxLength(256, {message: 'Too short for field «preview»'})
  public pictures!: string[];

  @IsBoolean({message: 'Field isPremium must be a boolean'})
  public isPremium!: boolean;

  @IsDecimal({message: 'Rating must be an decimal'})
  @Min(1, {message: 'Minimum rating is 1'})
  @Max(5, {message: 'Maximum rating is 5'})
  public rating!: number;

  @IsEnum(OfferType, {message: 'type must be Apartment, or House, or Room, or Hotel'})
  public type!: OfferType;

  @IsInt({message: 'Bedrooms must be an integer'})
  @Min(1, {message: 'Minimum bedrooms is 1'})
  @Max(8, {message: 'Maximum bedrooms is 8'})
  public bedrooms!: number;

  @IsInt({message: 'Bedrooms must be an integer'})
  @Min(1, {message: 'Minimum guests is 1'})
  @Max(10, {message: 'Maximum guests is 10'})
  public guests!: number;

  @IsInt({message: 'Price must be an integer'})
  @Min(100, {message: 'Minimum price is 100'})
  @Max(100000, {message: 'Maximum price is 100000'})
  public price!: number;

  @IsArray({message: 'Field facilities must be an array'})
  @IsEnum(Facility, {message: 'type must be ...'})
  public facilities!: Facility[];

  @ValidateNested()
  public coords!: Coords;
}
