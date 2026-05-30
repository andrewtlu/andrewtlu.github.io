<script lang="ts">
  import posts, { type Post } from "$lib/yap";

  let newest = $state(true);
  let filter = $state("");
  let parsedFilter = $derived(filter.toLowerCase());

  const includePost = $derived((post: Post) => {
    return (
      post.title.toLowerCase().includes(parsedFilter) ||
      post.date.toISOString().toLowerCase().includes(parsedFilter) ||
      post.raw.toLowerCase().includes(parsedFilter)
    );
  });

  let filteredPosts = $derived(
    posts
      .filter((post) => includePost(post))
      .toSorted((a, b) =>
        newest ? b.date.getTime() - a.date.getTime() : a.date.getTime() - b.date.getTime(),
      ),
  );
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

{#if filteredPosts.length === 0}
  nothing here! broaden search or wait a while :)
{/if}
{#each filteredPosts as post, idx (idx)}
  <post.component />
{/each}
