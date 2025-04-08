import { Controller, Post, Body, Get, Param, ParseIntPipe, Put, Delete } from '@nestjs/common';
import { RolesService } from './providers/roles.service';
import { CreateRoleDto } from './dtos/create-role-dto';
import { Role } from './role.entity';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  async create(@Body() createRoleDto: CreateRoleDto): Promise<Role> {
    return this.rolesService.create(createRoleDto);
  }

  @Get()
  async findAll(): Promise<Role[]> {
    return this.rolesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Role> {
    return this.rolesService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: Partial<CreateRoleDto>,
  ): Promise<Role> {
    return this.rolesService.update(id, updateDto);
  }

//   @Delete(':id')
//   async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
//     return this.rolesService.remove(id);
//   }
}
