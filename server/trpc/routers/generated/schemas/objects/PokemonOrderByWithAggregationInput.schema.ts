/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PokemonCountOrderByAggregateInputObjectSchema } from './PokemonCountOrderByAggregateInput.schema';
import { PokemonAvgOrderByAggregateInputObjectSchema } from './PokemonAvgOrderByAggregateInput.schema';
import { PokemonMaxOrderByAggregateInputObjectSchema } from './PokemonMaxOrderByAggregateInput.schema';
import { PokemonMinOrderByAggregateInputObjectSchema } from './PokemonMinOrderByAggregateInput.schema';
import { PokemonSumOrderByAggregateInputObjectSchema } from './PokemonSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PokemonOrderByWithAggregationInput> = z
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
    _count: z
      .lazy(() => PokemonCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => PokemonAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => PokemonMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => PokemonMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => PokemonSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const PokemonOrderByWithAggregationInputObjectSchema = Schema;
