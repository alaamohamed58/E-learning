import { Module } from '@nestjs/common';
import { UsersService } from './providers/users.service';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';

@Module({
    controllers: [UsersController],
    imports:[TypeOrmModule.forFeature([User])],
    providers : [UsersService]
})
export class UsersModule {}
