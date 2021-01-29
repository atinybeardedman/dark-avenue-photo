<template>
  <nav>
    <div class="logo">
      <g-link to="/">Dark Avenue Photo</g-link>
    </div>
    <div class="categories">
      <g-link
        v-for="link of links"
        :key="link.node.id"
        :to="`/${link.node.slug}`"
        >{{ link.node.title }}</g-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    links: {
      type: Array,
    },
  },
};
</script>

<style>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* width: 100vw; */
  padding: 1em;
  border-bottom: 1px #eee solid;
  background: #1a1a1a;
  height: 4em;
}

.logo {
  text-align: center;
}
.categories {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
nav a {
  margin: 0 1em;
  text-decoration: none;
  color: #eee;
  text-transform: uppercase;
  position: relative;
}
.categories a::after {
  content: "";
  width: 0px;
  height: 2px;
  background: #eee;
  margin: 2px 0 0;
  transition: opacity 0.5s, width 0.5s;
  opacity: 0;
  bottom: -5px;
  left: 0;
  position: absolute;
}
.categories a:hover::after,
a.active::after {
  width: 100%;
  opacity: 1;
}

@media screen and (max-width: 600px) {
  .logo,
  .categories {
    flex: 1;
  }

  .categories {
    font-size: 0.8rem;
  }

  nav {
    flex-wrap: wrap;
    height: 6em;
  }
}

@media screen and (min-width: 1000px) {
  nav,
  .categories {
    flex-direction: column;
  }

  .logo {
    flex: 0 1 auto;
    padding: 1em 0;
    border-bottom: 1px #eee solid;
    width: 100%;
  }

  .categories {
    height: 100%;
    justify-content: start;
  }

  .categories a {
      /* width: 100%; */
      padding-top: 2em;
      /* text-align: center; */
      font-size: 1.25rem;
  }

  nav {
    height: 100%;
    border-right: 1px solid #eee;
    border-bottom: none;
    justify-content: start;
  }
}
</style>