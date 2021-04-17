<template>
  <nav>
    <div class="logo">
      <g-link to="/">
        <g-image
          class="no-text"
          src="~/assets/images/logo-no-text.png"
          width="200"
        ></g-image>
        <g-image
          class="with-text"
          src="~/assets/images/logo-small.png"
        ></g-image>
      </g-link>
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
  padding: 1em;
  border-bottom: 1px #eee solid;
  background: #1a1a1a;
  height: 4em;
}

.with-text {
  display: none;
  visibility: hidden;
}

.no-text {
  display: inline;
  visibility: visible;
}

.logo {
  text-align: center;
  height: inherit;
}

.logo img {
  height: 90%;
  width: auto;
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
nav .logo a {
  display: inline-block;
  height: 100%;
  padding: 0.5em 0;
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

@media screen and (min-width: 1000px) {
  nav,
  .categories {
    flex-direction: column;
  }

  .no-text {
    display: none;
    visibility: hidden;
  }

  .with-text {
    display: inline;
    visibility: visible;
  }

  .logo {
    flex: 0 1 auto;
    border-bottom: 1px #eee solid;
    width: 90%;
    height: auto;
  }

  .categories {
    height: 100%;
    justify-content: start;
  }

  .categories a {
    margin-top: 2em;
    font-size: 1.25rem;
  }

  nav {
    height: 100%;
    border-right: 1px solid #eee;
    border-bottom: none;
    justify-content: start;
  }

  .logo img {
    width: 90%;
    height: auto;
  }
}
</style>