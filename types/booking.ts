export type Booking = {
  id: number;
  travelId: number;
  customersInfo: {
    name: string;
    email: string;
    phone: string;
    age: number;
    gender: string;
  };
  paymentType: string;
  notes?: string;
};
