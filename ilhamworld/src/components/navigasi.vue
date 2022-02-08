<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-danger">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"> <img alt="Vue " src="../assets/red.jpg" height="50" width="50"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link to="/" class="nav-link">Home</router-link> 
      <router-link to="/about" class="nav-link">About</router-link>
      <router-link to="/product" class="nav-link">product</router-link>
      <router-link to="/contact" class="nav-link">contact</router-link>
      <router-link to="/newarival" class="nav-link">newarival</router-link>
      </div>
    </div>
  </div>
</nav>
     
  </div>
</template>