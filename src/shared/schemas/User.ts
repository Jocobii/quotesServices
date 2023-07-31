import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ControlFields } from './ControlFields';

export type DocumentUser = User & Document;

@Schema()
export class User extends ControlFields {
  @Prop()
  id: Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  lastName: string;

  @Prop()
  emailAddress: string;

  @Prop()
  password: string;

  @Prop()
  role: string;

  @Prop({ nullable: true })
  phoneNumber?: string;
}

export const ProductSchema = SchemaFactory.createForClass(User);
