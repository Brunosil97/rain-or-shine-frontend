<template>
  <v-theme-provider :theme="'light'">
    <v-app>
      <v-main class="pb-15" :class="getNavBarClass">
        <app-body />
      </v-main>
  </v-app>
  </v-theme-provider>
</template>

<script lang="ts" setup>
  //
</script>
