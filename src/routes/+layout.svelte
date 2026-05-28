<script lang="ts">
    import "../app.css";

    let { children } = $props();
</script>

<div class="flex w-full flex-col items-center">
    <div class="flex w-full flex-col items-start gap-12 py-12 sm:w-lg">
        {@render children()}
    </div>
</div>
