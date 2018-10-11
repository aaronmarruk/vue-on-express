<template lang="pug">
  .component-demo
    h1 {{title}}
    p Welcome to {{title}}

</template>

<script>
  module.exports = {
    props: [ 'params' ],

    data() {
      return {
        title: this.params.title
      }
    }
  };
  
</script>

<style lang="scss">
  .component-demo {
    display: block;
    border: 2px solid yellow;
    padding: 0 1rem 1rem;

    &:before {
      content:"Server-rendered Vue component";
      background: yellow;
      text-transform: lowercase;
      font-family: monospace;
      padding: 0.5rem;
      top: -0.2rem;
      position: relative;
      font-size: 0.8rem;
      left: -1.1rem;
    }
  }
</style>