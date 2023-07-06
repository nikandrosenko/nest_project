import { CreateCategoryInput } from './create-category.input';
import { InputType, Field, PartialType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateCategoryInput extends PartialType(CreateCategoryInput) {
  @Field((type) => Int)
  id: number;
}
