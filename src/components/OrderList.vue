<template>
  <div>
    <h2 class="text-lg font-bold mb-2">Pending Orders</h2>
    <div v-if="orders.length === 0" class="text-gray-500">No pending orders.</div>
    <ul>
      <li v-for="order in orders" :key="order.id" class="mb-2">
        <span class="font-semibold">{{ order.id }}</span> ({{ order.type }})
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    orders: Array,
  },
};
</script>
