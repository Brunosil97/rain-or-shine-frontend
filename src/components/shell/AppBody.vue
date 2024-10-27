<template>
  <v-card
    :key="$route.name"
    class="ml-sm-2 mt-sm-5 mr-sm-2 transition-frame"
    :class="getExtraClasses"
    :color="getCardColour"
    :elevation="getElevation"
    min-height="92vh"
  >
    <v-container class="pa-0" fluid role="main">
      <router-view v-slot="{ Component }">
        <transition :mode="'out-in'" :name="'slide-right'">
          <component :is="Component" :key="$route.path" />
        </transition>
      </router-view>
    </v-container>
  </v-card>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'

  // Access the current route object using useRoute
  const route = useRoute()

  // Define computed properties based on the route meta
  const getCardColour = computed(() => {
    return route.meta.darkBg ? 'primary-lighten-2' : 'background'
  })

  const getElevation = computed(() => {
    return route.meta.darkBg ? 0 : 4
  })

  const getExtraClasses = computed(() => {
    return route.meta.darkBg ? '' : 'rounded-sm-tl-xl darker-shadow'
  })
</script>

<style scoped>
.darker-shadow {
  box-shadow:
    0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.6) !important;
}

.transition-frame {
  transition: all 0.3s linear;
}
</style>
