<script lang="ts">
  import "../app.css";
  import { resolve } from "$app/paths";
  import Nav from "$lib/components/Nav.svelte";
  import me from "$lib/assets/me.jpeg";

  let { children } = $props();
</script>

<div class="flex w-full flex-col items-center p-2">
  <div class="flex w-full flex-col items-start gap-12 py-12 sm:w-lg">
    <div class="flex flex-row justify-between w-full">
      <a href={resolve("/")} class="flex flex-row gap-4 max-w-1/2 items-center no-underline!">
        <img src={me} alt="Andrew on Guam" class="img h-10" />
        <h1 class="text-3xl">
          Andrew <span class="hidden sm:inline-block">Lu</span>
        </h1>
      </a>
      <Nav />
    </div>

    {@render children()}
  </div>
</div>
