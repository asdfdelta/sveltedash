<script>
    import Nav from './Nav.svelte';

    let items = [{
        name: 'test',
        data: `import { module } from './svelte-internals';`
    },
    {
        name: 'test',
        data: `import { module } from './svelte-internals';`
    },
    {
        name: 'test',
        data: `import { module } from './svelte-internals';`
    },
    {
        name: 'test',
        data: `import { module } from './svelte-internals';`
    },
    {
        name: 'test',
        data: `import { module } from './svelte-internals';`
    },
    {
        name: 'test',
        data: `import { module } from './svelte-internals';`
    },
    {
        name: 'test',
        data: `import { module } from './svelte-internals';`
    }];
</script>

<Nav items={items} />

<div id="snippets">
    {#each items as item}
        <div class="snippet">
            <div class="title">{item.name}</div>
            <pre>{item.data}</pre>
    </div>
    {/each}
</div>

<style>
    #snippets {
        padding-top: 100px;
        display: grid;
        grid-template-columns: 45% 45%;
        column-gap: 10%;
        row-gap: 20px;
    }

    pre {
        display: block;
        border: 1px solid #000;
        background-color: hsla(0,0%,100%,.54);
        padding: .5rem 1rem;
        margin: 0;
        overflow: auto;
        line-height: 1.4em;
    }
</style>