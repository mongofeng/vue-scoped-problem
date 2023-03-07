<template>
  <div class="user-info">
    <div class="persional-info"></div>
    <div class="team-info"></div>
    <div class="service-info"></div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.info-item {
  width: 326px;
  background: #ffffff;
  border-radius: 2px;
  margin-top: 24px;
}

.user-info {
  .persional-info {
    @extend .info-item;
    min-height: 846.02px;
    margin-top: 0;
  }
  .team-info {
    @extend .info-item;
  }
  .service-info {
    @extend .info-item;
    height: 288px;
  }
}
</style>
