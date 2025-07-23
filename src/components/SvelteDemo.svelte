<script>
  let count = 0;
</script>

<div class="p-4 border rounded-lg bg-white shadow text-center">
  <p class="mb-2">Svelte-Komponente: {count}</p>
  <button class="px-4 py-1 bg-pink-500 text-white rounded hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 transition" on:click={() => count++}>
    +1
  </button>
</div> 