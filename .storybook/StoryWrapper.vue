<script setup>
const props = defineProps({
  themeName: {
    type: String,
    required: true,
  }
});
</script>

<template>
    <v-app>
      <v-main>
        <v-card>
        <slot name="story"></slot>
        </v-card>
      </v-main>
    </v-app>
</template>

<style>
/**
* Override VApp's height so it doesn't add loads of whitespace into the storybook
*/
.v-application__wrap {
  min-height: auto !important;
}
</style>

