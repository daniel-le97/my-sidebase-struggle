/* eslint-disable */
import { z } from 'zod';
import { PokemonCreatesubtypesInputObjectSchema } from './PokemonCreatesubtypesInput.schema';
import { PokemonCreatetypesInputObjectSchema } from './PokemonCreatetypesInput.schema';
import { PokemonCreateretreatCostInputObjectSchema } from './PokemonCreateretreatCostInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PokemonCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    supertype: z.string(),
    subtypes: z
      .union([
        z.lazy(() => PokemonCreatesubtypesInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    hp: z.string(),
    types: z
      .union([
        z.lazy(() => PokemonCreatetypesInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    evolvesFrom: z.string(),
    retreatCost: z
      .union([
        z.lazy(() => PokemonCreateretreatCostInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    convertedRetreatCost: z.number(),
    number: z.string(),
    artist: z.string(),
    rarity: z.string(),
    flavorText: z.string(),
  })
  .strict();

export const PokemonCreateInputObjectSchema = Schema;
