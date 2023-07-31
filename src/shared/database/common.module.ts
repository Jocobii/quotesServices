import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { ConfigModule as OtherCommonModule } from './config.module';

@Module({
  imports: [OtherCommonModule, DatabaseModule],
  exports: [OtherCommonModule, DatabaseModule],
})
export class CommonModule {}
