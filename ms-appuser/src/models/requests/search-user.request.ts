export class SearchUserBy {
    id: number;
    fullName: string;
    email: string;
    phoneNo: string;
    type: string; 
}

export class searchUserReportBy {
    id: number;
    fullName: string;
    email: string;
    phoneNo: string;
    cartId: number;
    type: string; 
    status: number;
    take: number;
    skip: number;
}