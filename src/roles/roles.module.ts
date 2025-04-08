import { Module } from '@nestjs/common';
import { RolesService } from './providers/roles.service';
import { RolesController } from './roles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './role.entity';

@Module({
  providers: [RolesService],
  imports:[TypeOrmModule.forFeature([Role])],
  controllers: [RolesController]
})
export class RolesModule {}
