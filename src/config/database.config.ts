import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    name: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: process.env.DATABASE_SYNC === 'true' ? true : false,
    autoLoadEntities: process.env.DATABASE_AUTOLOAD === 'true' ? true : false,
}));
