<script setup>
import Box from "../assets/images/box.png";
import Car from "../assets/images/car.png";
import useOrderStore from "@/stores/orderStore";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const orderStore = useOrderStore();
const route = useRoute();
const order = ref({});
const length = ref(0);
const operation = ref([]);
const date1 = ref();
const date2 = ref();
const date3 = ref();

async function getData() {
  const id = route.params.id;
  const res = await orderStore.getByUniqueIdUser(id);
  order.value = res;
  length.value = res.operation.length;
  operation.value = res.operation;

  if (length.value == 1) {
    date1.value = new Date(operation.value[0].createdAt).toLocaleString(
      "uz-UZ",
      { timeZone: "Asia/Tashkent" }
    );
  } else if (length.value == 2) {
    date1.value = new Date(operation.value[0].createdAt).toLocaleString(
      "uz-UZ",
      { timeZone: "Asia/Tashkent" }
    );
    date2.value = new Date(operation.value[1].createdAt).toLocaleString(
      "uz-UZ",
      { timeZone: "Asia/Tashkent" }
    );
    console.log(date.value);
  } else if (length.value == 3) {
    date1.value = new Date(operation.value[0].createdAt).toLocaleString(
      "uz-UZ",
      { timeZone: "Asia/Tashkent" }
    );
    date2.value = new Date(operation.value[1].createdAt).toLocaleString(
      "uz-UZ",
      { timeZone: "Asia/Tashkent" }
    );
    date3.value = new Date(operation.value[2].createdAt).toLocaleString(
      "uz-UZ",
      { timeZone: "Asia/Tashkent" }
    );
  }
}

onMounted(() => {
  getData();
});
</script>

<template>
  <template v-if="length == 1">
    <main class="w-screen h-screen flex">
      <div class="hidden md:block w-[25%] h-full section-left"></div>
      <div
        class="w-full md:w-[75%] h-full section-right py-16 px-2 sm:px-8 lg:px-16 flex flex-col justify-between"
      >
        <div class="flex flex-col">
          <h2 class="text-lg sm:text-xl mb-2">
            <span class="font-bold">ID:</span> {{ order.order_unique_id }}
          </h2>
          <h2 class="text-lg sm:text-xl">
            <span class="font-bold">Holati:</span> Yangi
          </h2>
        </div>
        <div class="flex w-[85%] mx-auto">
          <!-- 1 -->
          <div class="border-b border-blue-600 w-[25%] relative pb-6">
            <img
              :src="Box"
              alt="Box png"
              class="-translate-x-1/2 w-[30px] sm:w-[50px] lg:w-[60px]"
            />
            <div
              class="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full border border-blue-600 bg-blue-600 flex items-center justify-center"
            >
              <i
                class="bx bx-check text-sm sm:text-lg lg:text-xl text-white"
              ></i>
            </div>
            <div
              class="-translate-x-[35%] sm:-translate-x-1/2 absolute -bottom-[60px] sm:-bottom-[70px] left-0 text-xs sm:text-sm font-semibold text-blue-600"
            >
              {{ date1.split(" ")[0] }} <br />
              {{ date1.split(" ")[1] }}
            </div>
          </div>
          <!-- 2 -->
          <div class="border-b border-gray-400 w-[25%] relative pb-6">
            <i
              class="bx bxs-plane-alt text-[40px] sm:text-[65px] lg:text-[80px] -translate-x-1/2 text-[#7970E2] opacity-50"
            ></i>
            <div
              class="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full border border-blue-600 bg-white flex items-center justify-center"
            >
              <i
                class="bx bxs-circle text-blue-600 text-[10px] sm:text-xs lg:text-sm"
              ></i>
            </div>
          </div>
          <!-- 3 -->
          <div class="border-b border-gray-400 w-[25%] relative pb-6">
            <i
              class="bx bxs-plane-alt text-[40px] sm:text-[65px] lg:text-[80px] -translate-x-1/2 rotate-90 text-[#7970E2] opacity-50"
            ></i>
            <div
              class="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full border border-gray-400 bg-white flex items-center justify-center"
            >
              <i
                class="bx bxs-circle text-gray-400 text-[10px] sm:text-xs lg:text-sm"
              ></i>
            </div>
          </div>
          <!-- 4 -->
          <div
            class="border-b border-gray-400 w-[25%] relative pb-6 flex items-center"
          >
            <img
              :src="Car"
              alt="Car png"
              class="-translate-x-1/2 w-[50px] sm:w-[85px] lg:w-[100px] opacity-50"
            />
            <i
              class="bx bxs-check-circle absolute right-0 translate-x-1/2 text-[40px] sm:text-[50px] text-[#13C39C] opacity-50"
            ></i>
            <div
              class="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full border border-gray-400 bg-white flex items-center justify-center"
            ></div>
            <div
              class="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full border border-gray-400 bg-white flex items-center justify-center"
            ></div>
          </div>
        </div>
        <div class="text-center">
          <router-link to="/" class="inline-block">
            <button
              class="py-1 px-3 sm:py-2 sm:px-4 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white duration-200 outline-none"
            >
              Check Order
            </button>
          </router-link>
        </div>
      </div>
    </main>
  </template>

  <template v-if="length == 2">
    <main class="w-screen h-screen flex">
      <div class="hidden md:block w-[25%] h-full section-left"></div>
      <div
        class="w-full md:w-[75%] h-full section-right py-8 px-2 sm:px-8 lg:px-16 flex flex-col justify-between"
      >
        <div class="flex flex-col">
          <h2 class="text-lg sm:text-xl mr-4 mb-2">
            <span class="font-bold">ID:</span> {{ order.order_unique_id }}
          </h2>
          <h2 class="text-lg sm:text-xl mr-4">
            <span class="font-bold">Holati:</span> Kutilmoqda
          </h2>
        </div>
        <div class="flex w-[85%] mx-auto">
          <!-- 1 -->
          <div class="border-b border-blue-600 w-[25%] relative pb-6">
            <img
              :src="Box"
              alt="Box png"
              class="-translate-x-1/2 w-[30px] sm:w-[50px] lg:w-[60px]"
            />
            <div
              class="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full border border-blue-600 bg-blue-600 flex items-center justify-center"
            >
              <i
                class="bx bx-check text-sm sm:text-lg lg:text-xl text-white"
              ></i>
            </div>
            <div
              class="-translate-x-[35%] sm:-translate-x-1/2 absolute -bottom-[60px] sm:-bottom-[70px] left-0 text-xs sm:text-sm font-semibold text-blue-600"
            >
              {{ date1.split(" ")[0] }} <br />
              {{ date1.split(" ")[1] }}
            </div>
          </div>
          <!-- 2 -->
          <div class="border-b border-blue-600 w-[25%] relative pb-6">
            <i
              class="bx bxs-plane-alt text-[40px] sm:text-[65px] lg:text-[80px] -translate-x-1/2 text-[#7970E2]"
            ></i>
            <div
              class="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full border border-blue-600 bg-blue-600 flex items-center justify-center"
            >
              <i
                class="bx bx-check text-sm sm:text-lg lg:text-xl text-white"
              ></i>
            </div>
          </div>
          <!-- 3 -->
          <div class="border-b border-gray-400 w-[25%] relative pb-6">
            <i
              class="bx bxs-plane-alt text-[40px] sm:text-[65px] lg:text-[80px] -translate-x-1/2 rotate-90 text-[#7970E2] opacity-50"
            ></i>
            <div
              class="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full border border-blue-600 bg-white flex items-center justify-center"
            >
              <i
                class="bx bxs-circle text-blue-600 text-[10px] sm:text-xs lg:text-sm"
              ></i>
            </div>
            <div
              class="-translate-x-1/2 text-center sm:text-left absolute -bottom-[60px] sm:-bottom-[70px] left-0 text-xs sm:text-sm font-semibold text-blue-600"
            >
              {{ date2.split(" ")[0] }} <br />
              {{ date2.split(" ")[1] }}
            </div>
          </div>
          <!-- 4 -->
          <div
            class="border-b border-gray-400 w-[25%] relative pb-6 flex items-center"
          >
            <img
              :src="Car"
              alt="Car png"
              class="-translate-x-1/2 w-[50px] sm:w-[85px] lg:w-[100px] opacity-50"
            />
            <i
              class="bx bxs-check-circle absolute right-0 translate-x-1/2 text-[40px] sm:text-[50px] text-[#13C39C] opacity-50"
            ></i>
            <div
              class="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full border border-gray-400 bg-white flex items-center justify-center"
            >
              <i
                class="bx bxs-circle text-gray-400 text-[9px] sm:text-xs lg:text-sm"
              ></i>
            </div>
            <div
              class="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full border border-gray-400 bg-white flex items-center justify-center"
            ></div>
          </div>
        </div>
        <div class="text-center">
          <router-link to="/" class="inline-block">
            <button
              class="py-1 px-3 sm:py-2 sm:px-4 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white duration-200 outline-none"
            >
              Check Order
            </button>
          </router-link>
        </div>
      </div>
    </main>
  </template>

  <template v-if="length == 3">
    <main class="w-screen h-screen flex">
      <div class="hidden md:block w-[25%] h-full section-left"></div>
      <div
        class="w-full md:w-[75%] h-full section-right py-8 px-2 sm:px-8 lg:px-16 flex flex-col justify-between"
      >
        <div class="flex flex-col">
          <h2 class="text-lg sm:text-xl mr-4 mb-2">
            <span class="font-bold">ID:</span> {{ order.order_unique_id }}
          </h2>
          <h2 class="text-lg sm:text-xl mr-4">
            <span class="font-bold">Holati:</span> Yakunlangan
          </h2>
        </div>
        <div class="flex w-[85%] mx-auto">
          <!-- 1 -->
          <div class="border-b border-blue-600 w-[25%] relative pb-6">
            <img
              :src="Box"
              alt="Box png"
              class="-translate-x-1/2 w-[30px] sm:w-[50px] lg:w-[60px]"
            />
            <div
              class="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full border border-blue-600 bg-blue-600 flex items-center justify-center"
            >
              <i
                class="bx bx-check text-sm sm:text-lg lg:text-xl text-white"
              ></i>
            </div>
            <div
              class="-translate-x-[35%] sm:-translate-x-1/2 absolute -bottom-[60px] sm:-bottom-[70px] left-0 text-xs sm:text-sm font-semibold text-blue-600"
            >
              {{ date1.split(" ")[0] }} <br />
              {{ date1.split(" ")[1] }}
            </div>
          </div>
          <!-- 2 -->
          <div class="border-b border-blue-600 w-[25%] relative pb-6">
            <i
              class="bx bxs-plane-alt text-[40px] sm:text-[65px] lg:text-[80px] -translate-x-1/2 text-[#7970E2]"
            ></i>
            <div
              class="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full border border-blue-600 bg-blue-600 flex items-center justify-center"
            >
              <i
                class="bx bx-check text-sm sm:text-lg lg:text-xl text-white"
              ></i>
            </div>
          </div>
          <!-- 3 -->
          <div class="border-b border-blue-600 w-[25%] relative pb-6">
            <i
              class="bx bxs-plane-alt text-[40px] sm:text-[65px] lg:text-[80px] -translate-x-1/2 rotate-90 text-[#7970E2]"
            ></i>
            <div
              class="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full border border-blue-600 bg-blue-600 flex items-center justify-center"
            >
              <i
                class="bx bx-check text-sm sm:text-lg lg:text-xl text-white"
              ></i>
            </div>
            <div
              class="-translate-x-1/2 text-center sm:text-left absolute -bottom-[60px] sm:-bottom-[70px] left-0 text-xs sm:text-sm font-semibold text-blue-600"
            >
              {{ date2.split(" ")[0] }} <br />
              {{ date2.split(" ")[1] }}
            </div>
          </div>
          <!-- 4 -->
          <div
            class="border-b border-blue-600 w-[25%] relative pb-6 flex items-center"
          >
            <img
              :src="Car"
              alt="Car png"
              class="-translate-x-1/2 w-[50px] sm:w-[85px] lg:w-[100px]"
            />
            <i
              class="bx bxs-check-circle absolute right-0 translate-x-1/2 text-[40px] sm:text-[50px] text-[#13C39C]"
            ></i>
            <div
              class="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full border border-blue-600 bg-blue-600 flex items-center justify-center"
            >
              <i
                class="bx bx-check text-sm sm:text-lg lg:text-xl text-white"
              ></i>
            </div>
            <div
              class="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full border border-blue-600 bg-blue-600 flex items-center justify-center"
            >
              <i
                class="bx bx-check text-sm sm:text-lg lg:text-xl text-white"
              ></i>
            </div>
            <div
              class="translate-x-[35%] text-right sm:text-left sm:translate-x-1/2 absolute -bottom-[60px] sm:-bottom-[70px] right-0 text-xs sm:text-sm font-semibold text-blue-600"
            >
              {{ date3.split(" ")[0] }} <br />
              {{ date3.split(" ")[1] }}
            </div>
          </div>
        </div>
        <div class="text-center">
          <router-link to="/" class="inline-block">
            <button
              class="py-1 px-3 sm:py-2 sm:px-4 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white duration-200 outline-none"
            >
              Check Order
            </button>
          </router-link>
        </div>
      </div>
    </main>
  </template>
</template>

<style scoped>
.section-left {
  background-image: url("../assets/images/exp3.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.section-right {
  background-image: url("../assets/images/user-map-bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
