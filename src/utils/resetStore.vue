<script setup lang="ts">
import { useResetStore } from './useResetStore'

const resetStore = useResetStore()

// Reset stores individually
resetStore.dataStore()
resetStore.sessionStore()
//resetStore.auth()

// Reset all stores
//resetStore.all()
</script>
