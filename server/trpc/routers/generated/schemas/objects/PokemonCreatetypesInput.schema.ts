/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PokemonCreatetypesInput> = z
  .object({
    set: z.string().array(),
  })
  .strict();

export const PokemonCreatetypesInputObjectSchema = Schema;
