import { Body, Controller } from '@nestjs/common';
import { MerchantService } from './merchant.service';
import { GrpcMethod } from '@nestjs/microservices';
import { Merchant } from 'src/models/entities/merchant.entity';
import { SearchMerchantBy } from 'src/models/requests/search-merchant.request';

@Controller('merchant')
export class MerchantController {

    constructor(private merchantService: MerchantService){}
    
    @GrpcMethod('MerchantsService', 'getAll')
    getAllMerchant(@Body() searchMerchantRequest: SearchMerchantBy): Promise<Merchant> {
      	return this.merchantService.searchMerchant(searchMerchantRequest);
    }
    
    @GrpcMethod('MerchantsService', 'createMerchant')
    createMerchant(@Body() createMerchantequest: Merchant): Promise<Merchant> {
      	return this.merchantService.createMerchant(createMerchantequest);
    }

    @GrpcMethod('MerchantsService', 'searchMerchant')
    searchMerchant(@Body() searchMerchantRequest: SearchMerchantBy): Promise<any> {
      	return this.merchantService.searchMerchant(searchMerchantRequest);
    }

    @GrpcMethod('MerchantsService', 'updateMerchant')
    updateMerchant(@Body() updateMerchantRequest: Merchant): Promise<Merchant> {
      	return this.merchantService.updateMerchant(updateMerchantRequest);
    }

	@GrpcMethod('MerchantsService', 'deleteMerchant')
    deleteMerchant(@Body() deleteMerchantRequest: Merchant): Promise<Merchant> {
      	return this.merchantService.deleteMerchant(deleteMerchantRequest.id, deleteMerchantRequest);
    }

	@GrpcMethod('MerchantsService', 'getMerchantReport')
    getMerchantReport(@Body() MerchantReportRequest: SearchMerchantBy): Promise<Merchant> {
      	return this.merchantService.getMerchantReport(MerchantReportRequest);
   }

}
