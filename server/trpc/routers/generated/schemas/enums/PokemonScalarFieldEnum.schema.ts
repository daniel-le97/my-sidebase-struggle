/* eslint-disable */
import { z } from 'zod';

export const PokemonScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'supertype',
  'subtypes',
  'hp',
  'types',
  'evolvesFrom',
  'retreatCost',
  'convertedRetreatCost',
  'number',
  'artist',
  'rarity',
  'flavorText',
]);
