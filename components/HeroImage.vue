<template>
  <div class="relative hero-image-container">
    <img class="hero-image" src="https://images.unsplash.com/photo-1613771404721-1f92d799e49f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" alt="hero image">
    <div class="hero-text">
      <h1 class=" text-3xl text-shadow-overlay">

      </h1>
      <small></small>
    </div>
  </div>
</template>e>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style>
.hero-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  position: relative;
}
.hero-image-container::before {
  content: "";
  position: absolute;
  bottom: 0;
  z-index: 1999;
  left: 0;
  width: 100%;
  height: 10px; /* adjust height as per your need */
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #fff); /* adjust the color as per your need */
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  text-align: center;
  color: #fff;
}

.text-shadow-overlay {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

</style>
