<script lang="ts">
  import Test from "$lib/yap/test.svx";

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
    <!-- would be nice to implement date filtering and have some clean placeholder -->
    <input placeholder="filter" bind:value={filter} />
  </div>
</div>

<Test />
