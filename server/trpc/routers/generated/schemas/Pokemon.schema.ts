/* eslint-disable */
import { z } from 'zod';
import { PokemonSelectObjectSchema } from './objects/PokemonSelect.schema';
import { PokemonWhereUniqueInputObjectSchema } from './objects/PokemonWhereUniqueInput.schema';
import { PokemonWhereInputObjectSchema } from './objects/PokemonWhereInput.schema';
import { PokemonOrderByWithRelationInputObjectSchema } from './objects/PokemonOrderByWithRelationInput.schema';
import { PokemonScalarFieldEnumSchema } from './enums/PokemonScalarFieldEnum.schema';
import { PokemonCreateInputObjectSchema } from './objects/PokemonCreateInput.schema';
import { PokemonCreateManyInputObjectSchema } from './objects/PokemonCreateManyInput.schema';
import { PokemonUpdateInputObjectSchema } from './objects/PokemonUpdateInput.schema';
import { PokemonUpdateManyMutationInputObjectSchema } from './objects/PokemonUpdateManyMutationInput.schema';
import { PokemonCountAggregateInputObjectSchema } from './objects/PokemonCountAggregateInput.schema';
import { PokemonMinAggregateInputObjectSchema } from './objects/PokemonMinAggregateInput.schema';
import { PokemonMaxAggregateInputObjectSchema } from './objects/PokemonMaxAggregateInput.schema';
import { PokemonAvgAggregateInputObjectSchema } from './objects/PokemonAvgAggregateInput.schema';
import { PokemonSumAggregateInputObjectSchema } from './objects/PokemonSumAggregateInput.schema';
import { PokemonOrderByWithAggregationInputObjectSchema } from './objects/PokemonOrderByWithAggregationInput.schema';
import { PokemonScalarWhereWithAggregatesInputObjectSchema } from './objects/PokemonScalarWhereWithAggregatesInput.schema';

export const PokemonSchema = {
  findUnique: z.object({
    select: PokemonSelectObjectSchema.optional(),
    where: PokemonWhereUniqueInputObjectSchema,
  }),
  findFirst: z.object({
    select: PokemonSelectObjectSchema.optional(),
    where: PokemonWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        PokemonOrderByWithRelationInputObjectSchema,
        PokemonOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: PokemonWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(PokemonScalarFieldEnumSchema).optional(),
  }),
  findMany: z.object({
    select: z.lazy(() => PokemonSelectObjectSchema.optional()),
    where: PokemonWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        PokemonOrderByWithRelationInputObjectSchema,
        PokemonOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: PokemonWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(PokemonScalarFieldEnumSchema).optional(),
  }),
  create: z.object({
    select: PokemonSelectObjectSchema.optional(),
    data: PokemonCreateInputObjectSchema,
  }),
  createMany: z.object({ data: PokemonCreateManyInputObjectSchema }),
  delete: z.object({
    select: PokemonSelectObjectSchema.optional(),
    where: PokemonWhereUniqueInputObjectSchema,
  }),
  deleteMany: z.object({ where: PokemonWhereInputObjectSchema.optional() }),
  update: z.object({
    select: PokemonSelectObjectSchema.optional(),
    data: PokemonUpdateInputObjectSchema,
    where: PokemonWhereUniqueInputObjectSchema,
  }),
  updateMany: z.object({
    data: PokemonUpdateManyMutationInputObjectSchema,
    where: PokemonWhereInputObjectSchema.optional(),
  }),
  upsert: z.object({
    select: PokemonSelectObjectSchema.optional(),
    where: PokemonWhereUniqueInputObjectSchema,
    create: PokemonCreateInputObjectSchema,
    update: PokemonUpdateInputObjectSchema,
  }),
  aggregate: z.object({
    where: PokemonWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        PokemonOrderByWithRelationInputObjectSchema,
        PokemonOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: PokemonWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    _count: z
      .union([z.literal(true), PokemonCountAggregateInputObjectSchema])
      .optional(),
    _min: PokemonMinAggregateInputObjectSchema.optional(),
    _max: PokemonMaxAggregateInputObjectSchema.optional(),
    _avg: PokemonAvgAggregateInputObjectSchema.optional(),
    _sum: PokemonSumAggregateInputObjectSchema.optional(),
  }),
  groupBy: z.object({
    where: PokemonWhereInputObjectSchema.optional(),
    orderBy: z.union([
      PokemonOrderByWithAggregationInputObjectSchema,
      PokemonOrderByWithAggregationInputObjectSchema.array(),
    ]),
    having: PokemonScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    by: z.array(PokemonScalarFieldEnumSchema),
  }),
};
