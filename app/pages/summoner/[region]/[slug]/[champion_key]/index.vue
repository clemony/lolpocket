<script lang="ts" setup>
import type { RouteLocationNormalizedLoaded } from 'vue-router'

definePageMeta({
  middleware: 'set-champion-title',
  redirect: null
})
</script>
