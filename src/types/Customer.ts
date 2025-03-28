export interface Customer {
  id: string;
  name: string;
  businessName: string;
  contactEmail: string;
  phoneNumber: string;
  address: string;
  creditLimit: number;
  taxId?: string;
}