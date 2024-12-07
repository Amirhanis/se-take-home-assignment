<template>
  <div class="py-8 w-full">
    <h2 class="text-3xl font-bold text-center mb-8">Dashboard</h2>
    <div class="flex justify-center space-x-6 mb-6">
      <button class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600" @click="$emit('addOrder', false)">
        New Normal Order
      </button>
      <button class="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600" @click="$emit('addOrder', true)">
        New VIP Order
      </button>
    </div>
    <div class="text-center grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- PENDING Orders -->
      <div>
        <h3 class="text-2xl font-bold mb-4">Pending Orders</h3>
        <div v-if="pendingOrders.length === 0" class="text-gray-500">No pending orders.</div>
        <ul>
          <li
            v-for="order in pendingOrders"
            :key="order.id"
            class="p-4 mb-2 bg-white rounded shadow justify-between"
          >
            <span>{{ order.id }} ({{ order.type }})</span>
          </li>
        </ul>
      </div>
      <!-- COMPLETE Orders -->
      <div>
        <h3 class="text-2xl font-bold mb-4">Completed Orders</h3>
        <div v-if="completedOrders.length === 0" class="text-gray-500">No completed orders.</div>
        <ul>
          <li
            v-for="order in completedOrders"
            :key="order.id"
            class="p-4 mb-2 bg-green-100 rounded shadow justify-between"
          >
            <span>{{ order.id }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pendingOrders: Array,
    completedOrders: Array,
  },
};
</script>
