<script lang="ts">
    let { display, content }: { display: string; content: HTMLElement[] } = $props();
</script>

<div class="whitespace-pre">
    {display}
    {#each content as h, idx (idx)}
        {h}
    {/each}
</div>
