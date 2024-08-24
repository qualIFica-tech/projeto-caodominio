import z from 'zod';

export const envSchema = z.object({
    API_KEY: z.string(),
    AUTH_DOMAIN: z.string(),
    PROJECT_ID: z.string(),
    STORAGE_BUCKET: z.string(),
    MESSAGING_SENDER_ID: z.string(),
    APP_ID: z.string(),
    MEASUREMENT_ID: z.string(),
});

const envValues = envSchema.safeParse(process.env);

if (!envValues.success) {
    throw new Error('Missing enviroment variables or enviroment variables type is incorrect: ');
}

export const env = envValues.data;