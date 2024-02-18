import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Project{
    
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    description: string;

    @Prop({ default: Date.now })
    startDate: Date;

    @Prop()
    endtDate: Date;

}

export const ProjectSchema = SchemaFactory.createForClass(Project);