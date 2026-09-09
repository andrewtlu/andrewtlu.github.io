<script lang="ts">
  import "../app.css";
  import { resolve, asset } from "$app/paths";
  import me from "$lib/assets/me.jpeg";

  let { children } = $props();
</script>

<div class="flex w-full flex-col items-center p-2">
  <div class="flex w-full flex-col items-start gap-12 py-12 sm:w-lg">
    <div class="flex flex-row justify-between w-full">
      <a href={resolve("/")} class="flex flex-row gap-4 max-w-1/2 items-center no-underline!">
        <img src={me} alt="Andrew on Guam" class="img h-10" />
        <h1 class="text-3xl font-bold">
          Andrew <span class="hidden sm:inline-block">Lu</span>
        </h1>
      </a>

      <div class="max-w-1/2 text-right wrap-break-word">
        <a href="http://www.github.com/andrewtlu" target="_blank">github</a>
        <a href="https://www.linkedin.com/in/andrewtlu/" target="_blank">linkedin</a>
        <a href={asset("/andrewtlu-resume.pdf")} target="_blank">resume</a>
        <a href={resolve("/yap")}>yap</a>
      </div>
    </div>

    {@render children()}
  </div>
</div>
