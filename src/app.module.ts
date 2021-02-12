import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './models/user/user.module';
import { AuthModule } from './auth/jwt/auth.module';
import { GoogleController } from './auth/google/google.controller';
import { GoogleService } from './auth/google/google.service';
import { GoogleModule } from './auth/google/google.module';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import configuration from './config/configuration';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/role/roles.guard';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'combined.log' }),
      ],
    }),
    ConfigModule.forRoot({
      load: [configuration],
      cache: true,
      envFilePath: ENV === 'development' ? '.dev.env' : '.env',
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('database.uri'),
        useCreateIndex: true,
        useUnifiedTopology: true,
      }),
      inject: [ConfigService],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      context: ({ req }) => ({ req }),
    }),
    UserModule,
    AuthModule,
    GoogleModule,
  ],
  controllers: [GoogleController],
  providers: [
    GoogleService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
