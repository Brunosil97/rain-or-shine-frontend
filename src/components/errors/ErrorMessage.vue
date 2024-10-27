<template>
  <template v-if="error">
    <!-- v-snackbar style error -->
    <template v-if="snackbar">
      <v-snackbar
        v-model="showSnackbar"
        color="error"
        location="bottom"
        multi-line
      >
        {{ getErrorMessage.title }}
        <div v-if="getErrorMessage.description" class="text-caption">
          {{ getErrorMessage.description }}
        </div>
        <div class="text-caption">{{ timeStamp }}</div>
        <template #actions>
          <v-btn v-if="retry" block variant="text" @click="emitRetry">
            Retry
          </v-btn>
        </template>
      </v-snackbar>
    </template>
    <template v-else>
      <!-- Wrap v-alert in a v-sheet to contain error button actions -->
      <v-sheet class="pa-1 rounded-t rounded-b mt-5" color="error" width="100%">
        <v-alert color="error" icon="mdi-alert">
          <template #title>
            <div class="d-flex justify-space-between" style="width: 100%">
              <div>
                {{ getErrorMessage.title }}
              </div>
              <div
                class="text-caption"
                data-chromatic="ignore"
              >
                {{ timeStamp }}
              </div>
            </div>
          </template>
          <template #text>
            <div class="text-left">
              <h4 class="mt-2 mb-2">
                What to do next:
              </h4>
              <ul class="ml-5">
                <li v-if="getErrorMessage.description">
                  {{ getErrorMessage.description }}
                </li>
                <li>
                  Please try the action again. If the issue persists, consider checking your network connection or refreshing the page. For ongoing issues, we recommend trying again later, as the service may be temporarily unavailable.
                </li>
              </ul>
            </div>
          </template>
        </v-alert>
        <v-row class="ma-1" justify="end">
          <v-col class="pa-0 text-right" cols="12" md="6">
            <v-btn
              v-if="retry"
              class="mr-2"
              color="error-darken-1"
              variant="flat"
              @click="emitRetry"
            >
              Retry
            </v-btn>
          </v-col>
        </v-row>
      </v-sheet>
    </template>
  </template>
</template>

<script lang="ts" setup>
  import { computed, onMounted, ref, watch } from 'vue'
  import dayjs from 'dayjs'
  import utc from 'dayjs/plugin/utc'

  dayjs.extend(utc)

  const props = defineProps<{
    error?: string | Error | object;
    retry?: boolean;
    snackbar?: boolean;
  }>()

  const emit = defineEmits(['retry'])

  // Reactive states
  const showSnackbar = ref(false)
  const timeStamp = ref<string | null>(null)

  // Computed properties
  const getErrorMessage = computed(() => {
    return {
      title: typeof props.error === 'string' ? props.error : "Error: unable to fetch today's forecast",
      description: 'Oops! Something has gone wrong',
    }
  })

  // Watchers
  watch(
    () => props.error,
    (newValue, oldValue) => {
      if (newValue !== oldValue && newValue !== undefined) {
        showSnackbar.value = true
      }
    }, { immediate: true }
  )

  // Lifecycle hooks
  onMounted(() => {
    timeStamp.value = dayjs().utc().format('YYYY-MM-DD HH:mm:ss UTC')
  })

  // Methods
  function emitRetry () {
    emit('retry')
  }
</script>
