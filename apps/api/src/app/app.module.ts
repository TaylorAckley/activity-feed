import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PostsModule } from '../posts/posts.module';
import { AuthzModule } from '../authz/authz.module';



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

],
  controllers: [],
  providers: [],
})
export class AppModule {}
