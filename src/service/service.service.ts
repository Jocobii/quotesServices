import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Service, ServiceDocument } from '@shared/schemas/Services';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Injectable()
export class ServiceService {
  constructor(
    @InjectModel(Service.name) private serviceModel: Model<ServiceDocument>,
  ) {}

  create(createServiceDto: CreateServiceDto) {
    return this.serviceModel.create(createServiceDto);
  }

  findAll() {
    return this.serviceModel.find().lean().exec();
  }

  findOne(id: string) {
    return this.serviceModel.findById(id).lean().exec();
  }

  update(id: number, updateServiceDto: UpdateServiceDto) {
    return `This action updates a #${id} service`;
  }

  remove(id: number) {
    return `This action removes a #${id} service`;
  }
}
