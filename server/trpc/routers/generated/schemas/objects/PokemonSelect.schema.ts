/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PokemonSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    supertype: z.boolean().optional(),
    subtypes: z.boolean().optional(),
    hp: z.boolean().optional(),
    types: z.boolean().optional(),
    evolvesFrom: z.boolean().optional(),
    retreatCost: z.boolean().optional(),
    convertedRetreatCost: z.boolean().optional(),
    number: z.boolean().optional(),
    artist: z.boolean().optional(),
    rarity: z.boolean().optional(),
    flavorText: z.boolean().optional(),
  })
  .strict();

export const PokemonSelectObjectSchema = Schema;
