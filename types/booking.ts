export type Booking = {
  id: number;
  travelId: number;
  customersInfo: string;
  paymentType: string;
  notes?: string;
};

export type PaymentType = "Credit transfer" | "Paypal" | "Revolut";