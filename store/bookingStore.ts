import { defineStore } from "pinia";
import type { Booking } from "~/types";

export const useBookingStore = defineStore({
  id: "bookings",
  state: () => ({
    bookings: [
      {
        id: 1,
        travelId: 1,
        customersInfo: "John Doe",
        paymentType: "Credit Card",
        notes: "First booking note",
      },
      {
        id: 2,
        travelId: 2,
        customersInfo: "Jane Doe",
        paymentType: "Debit Card",
        notes: "Second booking note",
      },
      {
        id: 3,
        travelId: 3,
        customersInfo: "Bob Smith",
        paymentType: "Cash",
        notes: "Third booking note",
      },
    ] as Booking[],
  }),
  actions: {
    deleteBooking(id: number) {
      console.log("deleteBooking", id);
      this.bookings = this.bookings.filter((booking) => booking.id !== id);
    },
    addBooking(booking: Booking) {
      console.log("addBooking", booking);
      this.bookings.push(booking);
    },
  },
});
