/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PokemonCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    supertype: z.lazy(() => SortOrderSchema).optional(),
    subtypes: z.lazy(() => SortOrderSchema).optional(),
    hp: z.lazy(() => SortOrderSchema).optional(),
    types: z.lazy(() => SortOrderSchema).optional(),
    evolvesFrom: z.lazy(() => SortOrderSchema).optional(),
    retreatCost: z.lazy(() => SortOrderSchema).optional(),
    convertedRetreatCost: z.lazy(() => SortOrderSchema).optional(),
    number: z.lazy(() => SortOrderSchema).optional(),
    artist: z.lazy(() => SortOrderSchema).optional(),
    rarity: z.lazy(() => SortOrderSchema).optional(),
    flavorText: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const PokemonCountOrderByAggregateInputObjectSchema = Schema;
