import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from '../role.entity';
import { CreateRoleDto } from '../dtos/create-role-dto';


@Injectable()
export class RolesService {
    constructor(
        @InjectRepository(Role)
        private readonly roleRepository: Repository<Role>,
    ) { }

    async create(createRoleDto: CreateRoleDto): Promise<Role> {

        try {
            const existingRole = await this.roleRepository.findOne({
                where: [
                    { name: createRoleDto.name },
                    { code: createRoleDto.code },
                ]
            });
            if (existingRole) {
                if (existingRole.name === createRoleDto.name) {
                    throw new BadRequestException(`Role with name "${createRoleDto.name}" already exists.`);
                }
                throw new BadRequestException(`Role with code "${createRoleDto.code}" already exists.`);
            }


            const role = this.roleRepository.create(createRoleDto);
            return await this.roleRepository.save(role);
        } catch (err) {
            if (err instanceof BadRequestException) {
                throw err;
            }
            throw new InternalServerErrorException('An error occurred while creating the role');
        }
    }

    async findAll(): Promise<Role[]> {
        return await this.roleRepository.find();
    }

    async findOne(id: number): Promise<Role> {
        const role = await this.roleRepository.findOneBy({ id });
        if (!role) {
            throw new NotFoundException(`Role with ID ${id} not found`);
        }
        return role;
    }

    async update(id: number, updateData: Partial<CreateRoleDto>): Promise<Role> {
        const role = await this.findOne(id);
        Object.assign(role, updateData);
        return await this.roleRepository.save(role);
    }

    //   async remove(id: number): Promise<void> {
    //     const result = await this.roleRepository.delete(id);
    //     if (result.affected === 0) {
    //       throw new NotFoundException(`Role with ID ${id} not found`);
    //     }
    //   }
}
