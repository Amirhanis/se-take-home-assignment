<template>
  <div class="py-8 px-4">
    <h2 class="text-3xl font-bold mb-8 text-center">Manage Orders</h2>
    <div class="flex justify-center space-x-4 mb-8">
      <button
        @click="addOrder(false)"
        class="bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded"
      >
        Add Normal Order
      </button>
      <button
        @click="addOrder(true)"
        class="bg-yellow-400 hover:bg-yellow-500 py-2 px-4 rounded"
      >
        Add VIP Order
      </button>
    </div>
    <order-list :orders="pendingOrders" />
  </div>
</template>

<script>
import OrderList from "@/components/OrderList.vue";

export default {
  components: { OrderList },
  props: {
    pendingOrders: Array,
  },
  methods: {
    addOrder(isVIP) {
      this.$emit("addOrder", isVIP);
    },
  },
};
</script>
