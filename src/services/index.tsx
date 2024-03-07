import * as ingredients from './ingredientsService';
import * as preparations from './preparationsService';
import * as recipes from './recipesService';

export const services = {
  ingredients,
  preparations,
  recipes,

  storage: {
    imagePath: 'https://mxufovymyzpdxkayqqje.supabase.co/storage/v1/object/public/ingredients/',
  }
}