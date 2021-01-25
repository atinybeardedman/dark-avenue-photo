<template>
  <div class="layout">
      <nav-bar :links="$static.allWordPressCategory.edges" />
    <slot/>
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
  padding:56px 0;
  line-height: 1.5;
}

.layout {
  max-width: 90vw;
  margin: 0 auto;
}

</style>
