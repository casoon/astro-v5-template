<script>
  let count = 0;
</script>

<div class="p-8 border border-gray-700/30 rounded-3xl bg-black/20 backdrop-blur-md shadow-2xl text-center relative overflow-hidden">
  <!-- Background Glow -->
  <div class="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl"></div>
  
  <!-- Content -->
  <div class="relative z-10">
    <p class="mb-6 text-xl text-gray-200 font-medium">
      Svelte-Komponente: 
      <span class="text-cyan-300 font-bold text-2xl">{count}</span>
    </p>
    
    <button 
      class="group relative px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
      on:click={() => count++}
    >
      <span class="relative z-10">+1</span>
      <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
    </button>
  </div>
</div> 