<!-- @component
layout for posts, used by mdsvex
 -->
<script lang="ts">
  import type { Snippet } from "svelte";

  let {
    title,
    date: _date,
    children,
  }: { title: string; date: string; children: Snippet } = $props();
  let date = $derived(new Date(_date));
  let expanded = $state(true);
</script>

<!-- TODO: style posts -->

<div class="w-full flex flex-col gap-4">
  <div class="flex flex-col flex-wrap max-w-full items-end">
    <div class="relative flex gap-2 items-center">
      <h2 class="text-xl font-semibold wrap-break-word text-right inline-block">{title}</h2>
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
    <h3 class="text-sm font-light">{date.toISOString()}</h3>
  </div>
  {#if expanded}
    <div class="flex flex-col gap-2 w-full">
      {@render children()}
    </div>
  {/if}
</div>
