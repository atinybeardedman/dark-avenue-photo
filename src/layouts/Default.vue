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
  allWordPressCategory (sortBy: "title", order: ASC) {
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
<style scoped>

@font-face {
  font-family: 'Typo Round';
  src: url('../assets/Typo_Round_Light.otf');
  font-weight: normal;
}

body {
  font-family: 'Typo Round';
  margin:0;
  line-height: 1.5;
}

.main-wrapper {
  display:grid;
  grid-template-columns: auto;
  grid-template-rows: 4em auto;
  grid-template-areas: 
  "nav"
  "main";
  height: 100vh;
}

main {
    overflow: auto;
    grid-area: main;
}

nav-bar{
  grid-area: nav;
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

@media screen and (min-width: 1000px){
  .main-wrapper {
    grid-template-columns: 250px auto;
    grid-template-rows: auto;
    grid-template-areas: 
    "nav main"
  }
}

</style>
