<script lang="ts">
  let newest = $state(true);
  let filter = $state("");
</script>

<div class="flex justify-end w-full">
  <div class="bg-gray-50 p-1 rounded-md flex flex-row gap-2">
    <button
      onclick={() => {
        newest = !newest;
      }}
      class="aspect-square h-full"
    >
      {#if newest}
        ▼
      {:else}
        ▲
      {/if}
    </button>
    <input placeholder="filter" bind:value={filter} />
  </div>
</div>

<div>post</div>
