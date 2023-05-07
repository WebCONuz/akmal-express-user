import { defineStore } from "pinia";
import axios from "../services/axios";

const useOrderStore = defineStore("order", () => {
  const getByUniqueIdUser = async (orderID) => {
    try {
      const response = await axios.get(`/order/search/${orderID}`);
      if (response.status === 200) {
        return response.data;
      } else {
        console.log(response);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return {
    getByUniqueIdUser,
  };
});

export default useOrderStore;
