/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PokemonCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    supertype: z.literal(true).optional(),
    subtypes: z.literal(true).optional(),
    hp: z.literal(true).optional(),
    types: z.literal(true).optional(),
    evolvesFrom: z.literal(true).optional(),
    retreatCost: z.literal(true).optional(),
    convertedRetreatCost: z.literal(true).optional(),
    number: z.literal(true).optional(),
    artist: z.literal(true).optional(),
    rarity: z.literal(true).optional(),
    flavorText: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const PokemonCountAggregateInputObjectSchema = Schema;
