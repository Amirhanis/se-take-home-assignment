<template>
  <div class="flex">
    <!-- Toggle Button for Navbar -->
    <button 
      class="fixed top-4 left-4 p-2 z-20 bg-yellow-500 text-white rounded shadow-lg hover:bg-yellow-600 focus:outline-none"
      @click="toggleNavbar"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>

    <!-- Navbar -->
    <div
      :class="[
        'bg-yellow-500 text-white h-full fixed top-0 left-0 shadow-lg flex flex-col transition-all duration-300',
        isNavbarOpen ? 'w-60' : 'w-16'
      ]"
    >
      <div class="flex items-center justify-between p-4">
        <h1 v-if="isNavbarOpen" class="text-2xl font-bold">McDonald's</h1>
        <img src="../assets/mcdonalds.svg" alt="McDonald's Logo" class="h-8 w-8" />
      </div>
      <nav class="flex flex-col flex-grow">
        <router-link
          to="/dashboard"
          class="p-4 hover:bg-yellow-400 flex items-center"
          active-class="bg-yellow-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7m-9 9v-6h4v6m5-6h3m-3 0l-2 2m-6-2l-2 2m-6-2h3" />
          </svg>
          <span v-if="isNavbarOpen">Dashboard</span>
        </router-link>
        <router-link
          to="/orders"
          class="p-4 hover:bg-yellow-400 flex items-center"
          active-class="bg-yellow-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h10v2H7v-2z" />
          </svg>
          <span v-if="isNavbarOpen">Orders</span>
        </router-link>
        <router-link
          to="/bots"
          class="p-4 hover:bg-yellow-400 flex items-center"
          active-class="bg-yellow-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 2a2 2 0 00-2 2v1H8a2 2 0 00-2 2v1H4a2 2 0 00-2 2v6a2 2 0 002 2h1v1a2 2 0 002 2h8a2 2 0 002-2v-1h1a2 2 0 002-2v-6a2 2 0 00-2-2h-2V7a2 2 0 00-2-2h-2V4a2 2 0 00-2-2zm0 2h2v1h-2V4zm-4 3h8v1H8V7zm-2 3h12v6H6v-6zm2 2v2h2v-2H8zm6 0v2h2v-2h-2z" />
          </svg>
          <span v-if="isNavbarOpen">Bots</span>
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNavbarOpen: true, // Tracks whether the navbar is open or closed
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen; // Toggles the navbar visibility
      this.$emit('toggle-navbar', this.isNavbarOpen); // Emit event to parent component
    },
  },
};
</script>

<style>
.transition-all {
  transition: all 0.3s ease;
}
</style>