import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Messages } from 'src/constants/messages';
import { Merchant } from 'src/models/entities/merchant.entity';
import { SearchMerchantBy } from 'src/models/requests/search-merchant.request';
import { SearchMerchantResponse } from 'src/models/responses/search-merchant.response';
import { Repository } from 'typeorm';

@Injectable()
export class MerchantService extends TypeOrmCrudService<Merchant> {
    constructor(
        @Inject('MERCHANT_REPOSITORY')
        private merchantRepository: Repository<Merchant>,
      ) {
        super(merchantRepository);
    }
    
    async createMerchant(createMerchantRequest: Merchant): Promise<Merchant>{
        let where = {} as Merchant;
        where.contactEmail = createMerchantRequest.contactEmail
        let MerchantData = await this.merchantRepository.find({where});
        console.log(MerchantData)
        if(MerchantData && MerchantData.length != 0){
            throw new NotFoundException(Messages.CONTACT_EMAIL_ALREADY_EXIST);
        }
        const user = await this.merchantRepository.save(createMerchantRequest);
        return user;
    }

    async searchMerchant(searchMerchantRequest: SearchMerchantBy): Promise<any>{
        let where = {} as any;
        Object.assign(where,searchMerchantRequest);
        let MerchantData = await this.merchantRepository.find({where});
        if(!MerchantData){
            throw new NotFoundException(Messages.NO_DATA_FOUND);
        }

        const response: SearchMerchantResponse = {
            merchants: MerchantData
        } 
        return response;
    }

    async updateMerchant(updateMerchantRequest: Merchant): Promise<Merchant>{
        let where = {} as any;
        where.id = updateMerchantRequest.id;
        let MerchantFound = await this.merchantRepository.findOne({where});
        if(!MerchantFound){
            throw new NotFoundException(Messages.INVALID_MERCHANT);
        }

        updateMerchantRequest = this.merchantRepository.merge(MerchantFound, updateMerchantRequest);
        const Merchant = await this.merchantRepository.save(updateMerchantRequest);
        return Merchant;
    }

    async deleteMerchant(id: number, deleteMerchantRequest: Merchant): Promise<Merchant> {
        let where = {} as any;
        where.id = id
        const MerchantFound = await this.merchantRepository.findOne({where});
        if (MerchantFound == null) {
            throw new NotFoundException(`Merchant not found`);
        }
        deleteMerchantRequest = this.merchantRepository.merge(MerchantFound, deleteMerchantRequest);
        return this.merchantRepository.save(deleteMerchantRequest);
    }

    async getMerchantReport(MerchantReportRequest: SearchMerchantBy): Promise<any> {
        let where: any = {};
        where = Object.assign(where, MerchantReportRequest);
        delete where.skip;
        delete where.take;
    
        if (MerchantReportRequest.status) {
          where['status'] = MerchantReportRequest.status.toString()
        }
        const [result, total] = await this.merchantRepository.findAndCount({
          where: where,
          take: MerchantReportRequest.take,
          skip: MerchantReportRequest.skip,
          order: { createdDate: 'DESC' }
        });
        return {
          data: { merchants: result },
          total: total,
          count: result.length
        }
    }
}
