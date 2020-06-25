import { Controller, Get } from '@nestjs/common';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {
    constructor(private service: ItemService) { }

    @Get()
    public async getAll() {
        return await this.service.getAll();
    }
}
