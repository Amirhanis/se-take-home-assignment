<template>
  <div>
    <h2 class="text-lg font-bold mb-2">Bots</h2>
    <div v-if="bots.length === 0" class="text-gray-500">No bots available.</div>
    <ul>
      <li v-for="bot in bots" :key="bot.id" class="mb-2">
        <div>
          <span class="font-semibold">{{ bot.id }}</span> -
          <span :class="bot.isIdle ? 'text-green-500' : 'text-blue-500'">
            {{ bot.isIdle ? 'IDLE' : `Processing ${bot.order.id} (${bot.order.type})` }}
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    bots: Array,
  },
};
</script>
