<template>
  <a-config-provider :locale="zhCN">
    <router-view v-slot="{ Component }">
      <keep-alive :max="20" :include="keepAliveRegExp">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </a-config-provider>
</template>
<script lang="ts" setup>
import zhCN from "ant-design-vue/es/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";

dayjs.locale("cn");

const keepAliveRegExp = [/list/i, "homePage", "homeApplication"];
</script>
