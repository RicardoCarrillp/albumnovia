<template>
  <div id="app">
    <PhotoAlbum />
  </div>
</template>

<script>
import PhotoAlbum from './components/PhotoAlbum.vue';

export default {
  name: 'App',
  components: {
    PhotoAlbum,
  },
};
</script>

<style>
#app {
  background-color: #3c3c3c;
  margin: 0;
}
</style>
