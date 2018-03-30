export class Attributes {
  admin_fee: string;
  availabilities: number;
  currency: string;
  ends: string;
  price: string;
  starts: string;

  constructor(
    admin_fee: string, 
    availabilities: number, 
    currency: string,
    starts: string,
    ends: string,
    price: string,
  ) { 
    this.admin_fee = admin_fee;
    this.availabilities = availabilities;
    this.currency = currency;
    this.ends = ends;
    this.starts = starts; 
  }
}