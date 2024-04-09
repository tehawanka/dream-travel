import { defineStore } from "pinia";

export const useTravelStore = defineStore({
  id: "travel",
  state: () => ({
    travels: [
      {
        id: 1,
        name: "Bermuda Triangle",
        departureDates: "2023-01-01",
        picture: "https://picsum.photos/id/10/200/300",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: "$1000",
        rating: 4.5,
      },
      {
        id: 2,
        name: "Spain",
        departureDates: "2021-02-01",
        picture: "https://picsum.photos/id/13/200/300",
        description:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        price: "$1500",
        rating: 4.8,
      },
      {
        id: 3,
        name: "Canada",
        departureDates: "2024-03-01",
        picture: "https://picsum.photos/id/14/200/300",
        description:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        price: "$1500",
        rating: 4.8,
      },
      {
        id: 4,
        name: "Australia",
        departureDates: "2025-04-01",
        picture: "https://picsum.photos/id/15/200/300",
        description:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        price: "$1500",
        rating: 4.8,
      },
    ],
    filter: {
      name: "",
      date: "",
    },
  }),
  getters: {
    filteredTravels(state) {
      return state.travels.filter((travel) => {
        const nameMatch = travel.name
          .toLowerCase()
          .includes(state.filter.name.toLowerCase());
        const dateMatch = state.filter.date
          ? travel.departureDates === state.filter.date
          : true;
        return nameMatch && dateMatch;
      });
    },
  },
});