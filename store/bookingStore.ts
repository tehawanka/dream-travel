import { defineStore } from "pinia";
import type { Booking } from "~/types";

export const useBookingStore = defineStore({
  id: "bookings",
  state: () => ({
    bookings: [
      {
        id: 1,
        travelId: 1,
        customersInfo: {
          name: "John Doe",
          email: "johndoe@example.com",
          phone: "1234567890",
          age: 30,
          gender: "Male",
        },
        paymentType: "Credit Card",
        notes: "First booking note",
      },
      {
        id: 2,
        travelId: 2,
        customersInfo: {
          name: "Jane Doe",
          email: "janedoe@example.com",
          phone: "9876543210",
          age: 28,
          gender: "Female",
        },
        paymentType: "Debit Card",
        notes: "Second booking note",
      },
      {
        id: 3,
        travelId: 3,
        customersInfo: {
          name: "Bob Smith",
          email: "bobsmith@example.com",
          phone: "5555555555",
          age: 35,
          gender: "Male",
        },
        paymentType: "Cash",
        notes: "Third booking note",
      },
    ] as Booking[],
  }),
  actions: {
    deleteBooking(id: number) {
      this.bookings = this.bookings.filter((booking) => booking.id !== id);
    },
    addBooking(booking: Booking) {
      this.bookings.push(booking);
    },
  },
});
