<template>
    <nav>
        <div class="logo">
            <g-link to="/">Dark Avenue Photo</g-link>
        </div>
        <div class="categories">
            <g-link v-for="link of links" :key="link.node.id" :to="`/${link.node.slug}`">{{link.node.title}}</g-link>
        </div>
    </nav>
</template>

<script>
export default {
     name: 'NavBar',
     props: {
         links: {
             type: Array
         }
     }
}
</script>

<style>
    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 1em;
        position: fixed;
        top: 0px;
        left: 0px;
        background: #eee;
    }
    .categories{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    nav a{
        margin: 0 1em;
        text-decoration: none;
        color: black;
        text-transform: uppercase;
         position: relative;
    }
    .categories a::after {
        content: "";
        width:0px;
        height: 2px;
        background: black;
        margin: 2px 0 0;
        transition: opacity 0.5s, width 0.5s;
        opacity: 0;
        bottom: -5px;
        left: 0;
        position: absolute;
    }
    .categories a:hover::after, a.active::after {
        width: 100%;
        opacity: 1;
    }
</style>