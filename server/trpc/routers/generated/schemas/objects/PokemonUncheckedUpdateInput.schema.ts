/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { PokemonUpdatesubtypesInputObjectSchema } from './PokemonUpdatesubtypesInput.schema';
import { PokemonUpdatetypesInputObjectSchema } from './PokemonUpdatetypesInput.schema';
import { PokemonUpdateretreatCostInputObjectSchema } from './PokemonUpdateretreatCostInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PokemonUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    supertype: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    subtypes: z
      .union([
        z.lazy(() => PokemonUpdatesubtypesInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    hp: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    types: z
      .union([
        z.lazy(() => PokemonUpdatetypesInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    evolvesFrom: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    retreatCost: z
      .union([
        z.lazy(() => PokemonUpdateretreatCostInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    convertedRetreatCost: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    number: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    artist: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    rarity: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    flavorText: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const PokemonUncheckedUpdateInputObjectSchema = Schema;
