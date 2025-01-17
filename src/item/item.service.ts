import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from '../model/item.entity';
import { Repository } from 'typeorm';
import { ItemDTO } from "./item.dto";

@Injectable()
export class ItemService {
    constructor(@InjectRepository(Item) private readonly repo: Repository<Item>) { }

    public async getAll() {
        return await this.repo.find();
    }

    public async create(dto: ItemDTO): Promise<ItemDTO> {
        return this.repo.save(ItemDTO.toEntity(dto))
            .then(e => ItemDTO.fromEntity(e));
    }
}
