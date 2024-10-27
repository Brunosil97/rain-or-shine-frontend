<template>
  <transition mode="out-in" name="fade">
    <div v-if="animate">
      <div class="text-caption">
        <slot name="prefix" />
      </div>

      <h2 class="d-block mb-2">
        <slot>{{ title }}</slot>
      </h2>
    </div>
  </transition>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'

  const props = defineProps<{
    title: string | null;
  }>()

  const animate = ref(false)

  onMounted(() => {
    animate.value = true
  })
</script>
