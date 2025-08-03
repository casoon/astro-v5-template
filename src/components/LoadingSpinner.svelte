<script lang="ts">
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let type: 'spinner' | 'dots' | 'pulse' = 'spinner';
  export let color: 'primary' | 'secondary' | 'white' = 'primary';

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const colorClasses = {
    primary: 'text-cyan-500',
    secondary: 'text-blue-500',
    white: 'text-white'
  };
</script>

{#if type === 'spinner'}
  <div class="flex justify-center">
    <div class="animate-spin rounded-full border-2 border-gray-300 border-t-{color === 'primary' ? 'cyan' : color === 'secondary' ? 'blue' : 'white'}-500 {sizeClasses[size]}"></div>
  </div>
{:else if type === 'dots'}
  <div class="flex justify-center space-x-1">
    <div class="animate-bounce w-2 h-2 bg-{color === 'primary' ? 'cyan' : color === 'secondary' ? 'blue' : 'white'}-500 rounded-full"></div>
    <div class="animate-bounce w-2 h-2 bg-{color === 'primary' ? 'cyan' : color === 'secondary' ? 'blue' : 'white'}-500 rounded-full" style="animation-delay: 0.1s;"></div>
    <div class="animate-bounce w-2 h-2 bg-{color === 'primary' ? 'cyan' : color === 'secondary' ? 'blue' : 'white'}-500 rounded-full" style="animation-delay: 0.2s;"></div>
  </div>
{:else if type === 'pulse'}
  <div class="flex justify-center">
    <div class="animate-pulse w-{size === 'sm' ? '4' : size === 'md' ? '6' : '8'} h-{size === 'sm' ? '4' : size === 'md' ? '6' : '8'} bg-{color === 'primary' ? 'cyan' : color === 'secondary' ? 'blue' : 'white'}-500 rounded-full"></div>
  </div>
{/if} 