<script setup>
import useOrderStore from "@/stores/orderStore";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { toast } from "vue3-toastify";

const orderStore = useOrderStore();
const orderID = ref("");
const router = useRouter();

const checked = async () => {
  if (orderID.value !== "") {
    const res = await orderStore.getByUniqueIdUser(orderID.value);
    if (res?.order_unique_id) {
      const id = res.order_unique_id;
      router.push(`order/${id}`);
    } else {
      toast.error("Bunday buyurtma mavjud emas!");
    }
  } else {
    toast.warning("Buyurtma ID sini kiriting!");
  }
};

const select = (e) => {
  orderID.value = e.target.value;
  if (e.key === "Enter") {
    checked();
  }
};
</script>

<template>
  <div
    class="check-order w-screen h-screen flex justify-center items-center bg-white"
  >
    <div
      class="w-[96%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%]"
    >
      <div>
        <h1 class="text-[#4763E4] font-bold text-[30px] mb-8 text-center">
          A-EXPRESS
        </h1>
      </div>
      <div>
        <label class="block w-full mb-1" for="OrderID">Enter Order Id</label>
        <input
          @keypress="select"
          v-model="orderID"
          type="text"
          id="OrderID"
          placeholder="Enter Order ID :"
          class="w-full block rounded-md border-[#5C73DB] outline-none"
        />
      </div>
      <div class="btn">
        <button
          @click="checked"
          class="btn w-full bg-[#4763E4] px-2 py-2 flex justify-center items-center text-white rounded-lg mt-4"
          type="submit"
        >
          Tekshirish
        </button>
        <a
          href="https://t.me/akex2"
          class="text-[#5C73DB] block text-center mt-2"
          >muammo bo'yicha ma'lumot</a
        >
      </div>
    </div>
  </div>
</template>

<style>
.check-order {
  background-image: url("../assets/images/user-map-bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
