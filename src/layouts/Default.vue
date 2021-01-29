<template>
  <div class="main-wrapper">
      <nav-bar :links="$static.allWordPressCategory.edges" />
      <transition name="fade" appear>
        <main>
          <slot/>
        </main>
      </transition>
  </div>
</template>


<static-query>
query {
  allWordPressCategory {
    edges {
      node {
        id,
        title,
        slug
      }
    }
  }
}
</static-query>

<script>
import NavBar from '~/components/NavBar.vue';
export default {
  components: {
    NavBar
  }
}
</script>
<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  line-height: 1.5;
}

.main-wrapper {
  display:grid;
  grid-template-columns: auto;
  grid-template-rows: 4em auto;
  grid-template-areas: 
  "header"
  "main";
  height: 100vh;
}

main {
    overflow: auto;
    padding: 0 1em;
    grid-area: main;
}

nav-bar{
  grid-area: header;
}


.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}

@media screen and (max-width: 600px) {
  .main-wrapper {
    grid-template-rows: 6em auto;
  }
}

</style>
