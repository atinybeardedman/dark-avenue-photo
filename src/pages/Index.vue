<template>
  <Layout>
    <section class="home">
      <h1 class="title">Dark Avenue Photo</h1>
    </section>

  </Layout>
</template>

<style>
.home{
  display: flex;
  height: 100%;
  background-image: linear-gradient(
    rgba(0,0,0,0.5),rgba(0,0,0,0.5)
  ),url('../assets/background.jpg');
  background-size: cover;
  background-position: center center;
  background-blend-mode: darken;
}

.home .title {
  margin: auto;
  font-size: 4em;
  font-weight:400;
  width: 100%;
  text-align: center;
}

</style>