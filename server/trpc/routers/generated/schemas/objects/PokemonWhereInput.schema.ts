/* eslint-disable */
import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PokemonWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PokemonWhereInputObjectSchema),
        z.lazy(() => PokemonWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PokemonWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PokemonWhereInputObjectSchema),
        z.lazy(() => PokemonWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    supertype: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    subtypes: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    hp: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    types: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    evolvesFrom: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    retreatCost: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    convertedRetreatCost: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    number: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    artist: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    rarity: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    flavorText: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const PokemonWhereInputObjectSchema = Schema;
