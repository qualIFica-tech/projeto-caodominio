import z from 'zod';
import { envSchema } from "./env";

type EnvSchemaType = z.infer<typeof envSchema>;

declare global {
    namespace NodeJS {
        interface ProcessEnv extends EnvSchemaType {}
    }
}