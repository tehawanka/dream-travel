export type Booking = {
  id: number;
  travelId: number;
  customersInfo: {
    name: string;
    email: string;
    phone: string;
    age: number;
  };
  paymentType: string;
  notes?: string;
};

export type PaymentType = "Credit transfer" | "Paypal" | "Revolut";