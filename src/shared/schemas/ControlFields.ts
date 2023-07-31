// createdAt, updatedAt, deletedAt, active, id are common fields for all schemas.
// We can create a new schema called ControlFields.ts and import it in all schemas.

import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DocumentControlFields = ControlFields & Document;

@Schema()
export class ControlFields {
  @Prop({ default: true })
  active: boolean;

  @Prop({ default: Date.now() })
  createdAt: Date;

  @Prop({ nullable: true })
  updatedAt?: Date;

  @Prop({ nullable: true })
  deletedAt?: Date;
}
