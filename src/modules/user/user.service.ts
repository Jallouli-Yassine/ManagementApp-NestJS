/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/global-utils/base.service';
import { User } from 'src/schemas/user.schema';
import { CreateUserDto } from './dto/createUser.dto';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/updateUserDto';

@Injectable()
export class UserService extends BaseService<User>{ 
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
    ) {
        super(userModel);
    }

    async createUser({ password,...restOfAttributes }: CreateUserDto)   {
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = new this.userModel({ password:hashedPassword, ...restOfAttributes});
        return newUser.save();
    }

    getAllUsers() {
        return super.findAll();
    }

    getOneUser(id: string) {
        return super.findOne(id);
    }

    updateUser(id: string, updateUserDto: UpdateUserDto) {
        return super.update(id,updateUserDto);
    }

    deleteUser(id: string) {
        return super.remove(id);
    }


}
