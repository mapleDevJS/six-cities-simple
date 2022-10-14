import {OfferType} from '../../../types/offer-type.enum.js';
import {
  IsDateString,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength
} from 'class-validator';

export default class UpdateOfferDto {
  @IsOptional()
  @MinLength(10,{message: 'Minimum name length must be 10'})
  @MaxLength(100, {message: 'Maximum name length must be 100'})
  public name?: string;

  @IsOptional()
  @MinLength(20, {message: 'Minimum description length must be 20'})
  @MaxLength(1024, {message: 'Maximum description length must be 1024'})
  public description?: string;

  @IsOptional()
  @IsOptional()
  @IsDateString({}, {message: 'postDate must be valid ISO date'})
  public postDate?: Date;

  @IsOptional()
  @IsString({message: 'image is required'})
  @MaxLength(256, {message: 'Too short for field «preview»'})
  public preview?: string;

  @IsOptional()
  @IsEnum(OfferType, {message: 'type must be Apartment, or House, or Room, or Hotel'})
  public type?: OfferType;

  @IsOptional()
  @IsInt({message: 'Price must be an integer'})
  @Min(100, {message: 'Minimum price is 100'})
  @Max(100000, {message: 'Maximum price is 100000'})
  public price?: number;
}
