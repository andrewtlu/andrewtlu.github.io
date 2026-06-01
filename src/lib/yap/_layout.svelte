<!-- @component
layout for posts, used by mdsvex
 -->
<script lang="ts">
  import type { Snippet } from "svelte";

  let {
    title,
    date: _date,
    posted: _posted,
    children,
  }: { title: string; date: string; posted: string; children: Snippet } = $props();
  let date = $derived(new Date(_date));
  let posted = $derived(new Date(_posted));
  let expanded = $state(true);
</script>

<div class="w-full flex flex-col gap-4">
  <div class="flex flex-col flex-wrap max-w-full items-end">
    <div class="relative flex gap-2 items-center">
      <h2 class="text-xl font-bold wrap-break-word text-right inline-block text-black">
        {title}
      </h2>
      <button
        onclick={() => {
          expanded = !expanded;
        }}
        class="aspect-square h-5 sm:absolute text-md sm:-right-7 sm:top-1"
      >
        <div class="-mt-0.5 text-sm font-bold">
          {#if expanded}
            v
          {:else}
            &lt;
          {/if}
        </div>
      </button>
    </div>
    <h3 class="text-sm font-light text-gray-500">dated {date.toISOString()}</h3>
    <h3 class="text-sm font-light text-gray-500">posted {posted.toISOString()}</h3>
  </div>
  {#if expanded}
    <div class="post">
      {@render children()}
    </div>
  {/if}
</div>
