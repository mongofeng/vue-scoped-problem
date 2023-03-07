<template>
  <div class="module-opts">
    <div class="recent-use"></div>
   
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.module-item {
  width: 100%;
  background: #ffffff;
  border-radius: 2px;
  margin-top: 24px;
}

.module-opts {
  .recent-use {
    @extend .module-item;
    height: 144px;
    margin-top: 0;
  }
  .dataset-info {
    @extend .module-item;
    min-height: 300px;
  }
  .algorithm-model {
    @extend .module-item;
    padding-bottom: 6px;
    min-height: 300px;
  }
  .application-info {
    @extend .module-item;
    min-height: 500px;
  }
  .help-doc {
    @extend .module-item;
    min-height: 400px;
  }
}
</style>
