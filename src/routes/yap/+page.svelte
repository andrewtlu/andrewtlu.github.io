<script lang="ts">
  import Post from "$lib/components/Post.svelte";

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

<Post title="testasdfsadfadfas" date={new Date(Date.now())}>
  <div>content content content</div>
  <div>content content content</div>
</Post>
