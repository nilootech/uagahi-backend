import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './models/user/user.module';
import { AuthModule } from './auth/auth.module';
import { GoogleController } from './google/google.controller';
import { GoogleService } from './google/google.service';
import { GoogleModule } from './google/google.module';
import configuration from './config/configuration';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
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
      }),
      inject: [ConfigService],
    }),
    GraphQLModule.forRoot({ autoSchemaFile: true }),
    UserModule,
    AuthModule,
    GoogleModule,
  ],
  controllers: [AppController, GoogleController],
  providers: [AppService, GoogleService],
})
export class AppModule {
}
