<template>
  <div class="min-h-screen bg-gray-100 flex">
    <!-- Sidebar -->
    <Navbar @toggle-navbar="handleToggleNavbar" />

    <!-- Main Content -->
    <div :class="['flex-grow p-6 flex justify-center transition-all duration-300', isNavbarOpen ? 'ml-60' : 'ml-12']">
      <router-view
        :pendingOrders="pendingOrders"
        :completedOrders="completedOrders"
        :bots="bots"
        @addOrder="addOrder"
        @addBot="addBot"
        @removeBot="removeBot"
      />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: { Navbar },
  data() {
    return {
      pendingOrders: [],
      completedOrders: [],
      bots: [],
      orderCounter: 0,
      isNavbarOpen: true, // Tracks whether the navbar is open or closed
    };
  },
  methods: {
    handleToggleNavbar(isOpen) {
      this.isNavbarOpen = isOpen; // Update the state based on the event
    },
    addOrder(isVIP) {
      this.orderCounter++;
      const newOrder = { id: `Order-${this.orderCounter}`, type: isVIP ? "VIP" : "Normal" };
      if (isVIP) {
        // Add VIP orders before Normal orders
        const firstNormalIndex = this.pendingOrders.findIndex(order => order.type === "Normal");
        if (firstNormalIndex === -1) {
          this.pendingOrders.push(newOrder);
        } else {
          this.pendingOrders.splice(firstNormalIndex, 0, newOrder);
        }
      } else {
        this.pendingOrders.push(newOrder);
      }
      this.assignOrdersToBots();
    },
    addBot() {
      const botId = this.bots.length + 1;
      const newBot = { id: `Bot-${botId}`, isIdle: true, currentOrder: null, timeoutId: null };
      this.bots.push(newBot);
      this.assignOrdersToBots();
    },
    removeBot() {
      if (this.bots.length === 0) return;
      const bot = this.bots.pop();
      if (bot.timeoutId) {
        clearTimeout(bot.timeoutId); // Cancel ongoing processing
        if (bot.currentOrder) {
          this.pendingOrders.unshift(bot.currentOrder); // Return order to "PENDING"
        }
      }
    },
    assignOrdersToBots() {
      this.bots.forEach(bot => {
        if (bot.isIdle && this.pendingOrders.length > 0) {
          this.processOrders(bot);
        }
      });
    },
    processOrders(bot) {
      if (!bot.isIdle || this.pendingOrders.length === 0) return;

      bot.isIdle = false;
      const order = this.pendingOrders.shift();
      bot.currentOrder = order;

      bot.timeoutId = setTimeout(() => {
        this.completedOrders.push(order);
        bot.isIdle = true;
        bot.currentOrder = null;
        bot.timeoutId = null;
        this.assignOrdersToBots(); // Check for next order
      }, 10000); // 10 seconds
    },
  },
  watch: {
    pendingOrders() {
      this.assignOrdersToBots();
    },
  },
};
</script>

<style>
.transition-all {
  transition: all 0.3s ease;
}
</style>