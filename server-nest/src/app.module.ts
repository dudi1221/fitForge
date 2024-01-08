import { Module } from '@nestjs/common';
import { AppController, CatsController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [UsersModule],
  controllers: [UsersController, AppController, CatsController],
  providers: [AppService, UsersService],
})
export class AppModule {}
