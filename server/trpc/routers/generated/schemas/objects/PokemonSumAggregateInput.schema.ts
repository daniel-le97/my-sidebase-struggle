/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PokemonSumAggregateInputType> = z
  .object({
    convertedRetreatCost: z.literal(true).optional(),
  })
  .strict();

export const PokemonSumAggregateInputObjectSchema = Schema;
