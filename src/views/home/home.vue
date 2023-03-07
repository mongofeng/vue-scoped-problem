<template>
  <div class="index bg">
    <div class="px-6 pb-4 pt-10 bg-white">
      <div class="title pt-1">首页</div>
    </div>
    <div class="flex index-container min-h-180 rounded m-6 pb-6 relative h-full">
      <div class="left"><ModuleOpts ref="moduleOptsEl" /></div>
      <div class="right ml-6"><UserInfo @refresh="onRefresh" /></div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "homePage",
};
</script>
<script lang="ts" setup>
import UserInfo from "./user-info/user-info.vue";
import ModuleOpts from "./module-opts/module-opts.vue";
import { ref } from "vue";
const moduleOptsEl = ref<InstanceType<typeof ModuleOpts>>();

function onRefresh() {
  console.log(moduleOptsEl.value);
  
}
</script>

<style lang="scss" scoped>
.title {
  color: #000000d9;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
}

.index {
  .index-container {
    .left {
      flex: 1;
      height: 100%;
    }
    .right {
      width: 326px;
    }
  }
}
</style>
