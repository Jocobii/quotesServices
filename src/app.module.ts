import { Module } from '@nestjs/common';
import { CommonModule } from '@shared/database/common.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuoteModule } from './quote/quote.module';
import { UserModule } from './user/user.module';
import { ServiceModule } from './service/service.module';

@Module({
  imports: [CommonModule, QuoteModule, UserModule, ServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
