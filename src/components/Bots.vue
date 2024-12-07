<template>
  <div class="py-8">
    <h2 class="text-3xl font-bold text-center mb-8">Bots Management</h2>
    <div class="flex space-x-6 mb-6">
      <button class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600" @click="$emit('addBot')">
        + Bot
      </button>
      <button class="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600" @click="$emit('removeBot')">
        - Bot
      </button>
    </div>
    <div>
      <h3 class="text-2xl font-bold mb-4">Bots Status</h3>
      <div v-if="bots.length === 0" class="text-gray-500">No bots available.</div>
      <ul>
        <li
          v-for="bot in bots"
          :key="bot.id"
          class="p-4 mb-2 bg-white rounded shadow flex justify-between"
        >
          <span>{{ bot.id }}</span>
          <span v-if="bot.isIdle" class="text-green-500">IDLE</span>
          <span v-else class="text-red-500">Processing {{ bot.currentOrder.id }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bots: Array,
  },
};
</script>
