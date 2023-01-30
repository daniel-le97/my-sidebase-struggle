/* eslint-disable */
import { z } from 'zod';
import { PokemonSelectObjectSchema } from './PokemonSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PokemonArgs> = z
  .object({
    select: z.lazy(() => PokemonSelectObjectSchema).optional(),
  })
  .strict();

export const PokemonArgsObjectSchema = Schema;
