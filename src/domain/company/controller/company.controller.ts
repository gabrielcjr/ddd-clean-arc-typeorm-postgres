import { Controller, Post } from '@nestjs/common';
import { CompanyService } from '../service/company.service';

@Controller('/companies')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  async create() {
    return await this.companyService.create({ name: 'pedro' });
  }
}
