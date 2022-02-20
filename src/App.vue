<template>
  <div id="app">
    <b-navbar>
      <!-- brand navitation in top left -->
      <b-navbar-brand to="/">
        <img src="@/assets/pearlhacks_logo_mini.png" style="padding: 10px" />
      </b-navbar-brand>

      <!-- create a quest -->
      <b-navbar-brand to="/create">
        <img src="@/assets/pearlhacks_quill_mini.png" />
        Create a Quest!
      </b-navbar-brand>

      <!-- search quests -->
      <b-navbar-brand to="/search">
        <img src="@/assets/pearlhacks_magnifying_glass_mini.png" />
        Search for a Quest...
      </b-navbar-brand>

      <b-navbar-nav>
        <b-nav-item to="/about">About</b-nav-item>
        <b-nav-item to="/contact">Contact</b-nav-item>
        <b-nav-item to="/profile">Profile</b-nav-item>
        <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
      </b-navbar-nav>
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

b-navbar {
  color: #577088;
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
