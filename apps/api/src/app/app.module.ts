import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PostsModule } from '../posts/posts.module';
import { AuthzModule } from '../authz/authz.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthzModule,
    PostsModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
  }),
  ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'activity-feed'),
    exclude: [],
  })
],
  controllers: [],
  providers: [],
})
export class AppModule {}
