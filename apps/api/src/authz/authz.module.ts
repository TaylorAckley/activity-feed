import { HttpModule, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt'}), HttpModule],
  providers: [JwtStrategy],
  exports: [PassportModule],
})
export class AuthzModule {}
