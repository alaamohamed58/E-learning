import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/providers/users.service';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import appConfig from './config/app.config';
import databaseConfig from './config/database.config';


const ENV = process.env.NODE_ENV
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {        
          type: "postgres",
          autoLoadEntities: configService.get("database.autoLoadEntities"),
          synchronize: configService.get("database.synchronize"),
          port: configService.get('database.port'),
          username: configService.get('database.user'),
          password: configService.get("database.password"),
          host: configService.get("database.host"),
          database: configService.get("database.name"),
        }
      }
    }),

    ConfigModule.forRoot({
      isGlobal: true,
      // envFilePath : ['.env.development']
      envFilePath: !ENV ? '.env' : `.env.${ENV}`,
      load: [appConfig, databaseConfig]
      //envFilePath: '.env.development', 
    }),

    UsersModule,

    RolesModule,
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule { }
