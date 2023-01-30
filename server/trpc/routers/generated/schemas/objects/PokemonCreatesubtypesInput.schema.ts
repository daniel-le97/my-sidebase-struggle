/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PokemonCreatesubtypesInput> = z
  .object({
    set: z.string().array(),
  })
  .strict();

export const PokemonCreatesubtypesInputObjectSchema = Schema;
