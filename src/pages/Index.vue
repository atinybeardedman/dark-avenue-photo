<template>
  <Layout>
    <section class="home">
      <div class="logo-title">
        <g-image src="~/assets/images/logo.png" width="800" quality="90"></g-image>
      </div>
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

.home .logo-title {
  margin: auto;
  font-size: 4em;
  font-weight:400;
  width: 100%;
  text-align: center;
}

.home .logo-title img {
  width: min(90%, 800px)
}

</style>