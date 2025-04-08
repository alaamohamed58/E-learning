import { Transform } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";



export class CreateRoleDto {

    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    @MinLength(3)
    @Transform(({ value }) => value.trim())
    name: string;

    @IsNumber()
    @IsNotEmpty()
    code: number;

}