import {IsInt, IsMongoId, IsString, Length, Max, Min} from 'class-validator';

export default class CreateCommentDto {
  @IsString({message: 'text is required'})
  @Length(5, 1024, {message: 'Min length is 5, max is 1024'})
  public text!: string;

  @IsMongoId({message: 'offerId field must be a valid id'})
  public offerId!: string;

  @IsInt({message: 'rating must be an integer'})
  @Min(5, {message: 'Minimum rating value must be 5'})
  @Max(1024, {message: 'Maximum rating value must be 1024'})
  public rating!: number;

  public userId!: string;
}
