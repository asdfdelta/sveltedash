<script>
    export let items;
</script>

<div id="navigation">
    {#each items as item}
        <a href="#{item.name}">item</a>
    {/each}
</div>

<style>
    #navigation {
        width: 100%;
        border: 1px solid grey;
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: center;
        align-items: center;
    }
</style>