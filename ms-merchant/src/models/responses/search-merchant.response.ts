import { Merchant } from "../entities/merchant.entity";

export interface SearchMerchantResponse {
    merchants: Merchant[];
}