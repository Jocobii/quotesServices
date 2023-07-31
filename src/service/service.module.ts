import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Service, ServiceSchema } from '@shared/schemas/Services';
import { ServiceService } from './service.service';
import { ServiceController } from './service.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Service.name, schema: ServiceSchema }]),
  ],
  providers: [ServiceService],
  controllers: [ServiceController],
})
export class ServiceModule {}
