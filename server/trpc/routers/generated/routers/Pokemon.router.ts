/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import { PokemonSchema } from '../schemas/Pokemon.schema';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        aggregate: procedure.input(PokemonSchema.aggregate).query(({ ctx, input }) => db(ctx).pokemon.aggregate(input)),

        createMany: procedure.input(PokemonSchema.createMany).mutation(({ ctx, input }) => db(ctx).pokemon.createMany(input)),

        create: procedure.input(PokemonSchema.create).mutation(({ ctx, input }) => db(ctx).pokemon.create(input)),

        deleteMany: procedure.input(PokemonSchema.deleteMany).mutation(({ ctx, input }) => db(ctx).pokemon.deleteMany(input)),

        delete: procedure.input(PokemonSchema.delete).mutation(({ ctx, input }) => db(ctx).pokemon.delete(input)),

        findFirst: procedure.input(PokemonSchema.findFirst).query(({ ctx, input }) => db(ctx).pokemon.findFirst(input)),

        findFirstOrThrow: procedure.input(PokemonSchema.findFirst).query(({ ctx, input }) => db(ctx).pokemon.findFirstOrThrow(input)),

        findMany: procedure.input(PokemonSchema.findMany).query(({ ctx, input }) => db(ctx).pokemon.findMany(input)),

        findUnique: procedure.input(PokemonSchema.findUnique).query(({ ctx, input }) => db(ctx).pokemon.findUnique(input)),

        findUniqueOrThrow: procedure.input(PokemonSchema.findUnique).query(({ ctx, input }) => db(ctx).pokemon.findUniqueOrThrow(input)),

        groupBy: procedure.input(PokemonSchema.groupBy).query(({ ctx, input }) => db(ctx).pokemon.groupBy(input)),

        updateMany: procedure.input(PokemonSchema.updateMany).mutation(({ ctx, input }) => db(ctx).pokemon.updateMany(input)),

        update: procedure.input(PokemonSchema.update).mutation(({ ctx, input }) => db(ctx).pokemon.update(input)),

        upsert: procedure.input(PokemonSchema.upsert).mutation(({ ctx, input }) => db(ctx).pokemon.upsert(input)),

    }
    );
}
