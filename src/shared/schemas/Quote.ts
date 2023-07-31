import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ControlFields } from './ControlFields';

export type DocumentProduct = Quote & Document;

@Schema()
export class Quote extends ControlFields {
  @Prop()
  id: Types.ObjectId;

  @Prop()
  comments: string;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  customerId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  employeeId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Service' })
  serviceId: Types.ObjectId;
}

export const ProductSchema = SchemaFactory.createForClass(Quote);
