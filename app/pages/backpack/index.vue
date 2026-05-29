<script lang="ts" setup>
definePageMeta({
  middleware: () => navigateTo("/backpack/:id", { replace: true })
})
</script>
