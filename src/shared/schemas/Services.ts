import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ControlFields } from './ControlFields';

export type ServiceDocument = Service & Document;

@Schema()
export class Service extends ControlFields {
  @Prop()
  id: Types.ObjectId;

  @Prop()
  name: string;

  @Prop({ nullable: true })
  description: string;

  @Prop({ nullable: true })
  price?: number;
}

export const ServiceSchema = SchemaFactory.createForClass(Service);
