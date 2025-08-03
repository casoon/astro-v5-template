<script lang="ts">
  let count = 0;
</script>

<div class="p-6 sm:p-8 border border-gray-700/30 dark:border-gray-600/30 rounded-2xl sm:rounded-3xl bg-black/20 dark:bg-white/10 backdrop-blur-md shadow-2xl text-center relative overflow-hidden">
  <!-- Background Glow -->
  <div class="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-400/20 dark:to-pink-400/20 rounded-2xl sm:rounded-3xl"></div>
  
  <!-- Content -->
  <div class="relative z-10">
    <p class="mb-4 sm:mb-6 text-lg sm:text-xl text-gray-200 dark:text-gray-100 font-medium">
      Svelte-Komponente: 
      <span class="text-cyan-300 dark:text-cyan-400 font-bold text-xl sm:text-2xl">{count}</span>
    </p>
    
    <button 
      class="group relative px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
      on:click={() => count++}
    >
      <span class="relative z-10">+1</span>
      <div class="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
    </button>
  </div>
</div> 