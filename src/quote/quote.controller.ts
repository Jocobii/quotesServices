import { Controller, Get } from '@nestjs/common';
import { QuoteService } from './quote.service';

@Controller('quote')
export class QuoteController {
  constructor(private readonly quote: QuoteService) {}

  @Get('hello')
  hello(): string {
    return this.quote.getHello();
  }
}
