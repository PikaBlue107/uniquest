<template>
  <div id="app">
    <b-navbar>
      <b-navbar-brand to="/">
        <img src="@/assets/pearlhacks_logo_mini.png"/>
      </b-navbar-brand>
      <router-link to="/">Hooome</router-link> |
      <router-link to="/about">About</router-link>
    </b-navbar>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
