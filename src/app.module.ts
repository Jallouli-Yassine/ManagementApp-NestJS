import { UserModule } from './modules/user/user.module';
import { Module } from '@nestjs/common';
import { TeamModule } from './modules/team-module/team.module';
import { TaskModule } from './modules/task/task.module';
import { ProjectModule } from './modules/project/project.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/project-managment'),
    UserModule,
    TeamModule,
    TaskModule,
    ProjectModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
