<script lang="ts" setup>
const masterwork = defineModel<boolean>("masterwork", { default: false })
const clicked = refAutoReset<boolean>(false, 150)

const toggleMasterwork = useToggle(masterwork)
function showMasterwork() {
  if (!clicked.value) clicked.value = true
  toggleMasterwork()
}
</script>

<template>
  <GlassTooltip
    :content="{ side: 'right', sideOffset: 30 }"
    :text="masterwork ? 'Show Base Stats' : 'Show Masterwork Stats'"
    arrow>
    <UButton
      size="xs"
      icon="i-mdi-anvil"
      :active="masterwork"
      color="transparent"
      :ui="{
        base: cn(
          'anchor absolute rounded-full duration-100! hover:bg-p2! hover:inset-ring hover:inset-ring-n3',
          {
            'bg-p2 hover:bg-n5! hover:inset-shadow-xs   inset-ring inset-ring-n3':
              masterwork,
            'animate-click-sm': clicked,
          }
        ),
        leadingIcon: cn('size-4 text-nc/80 group-hover/btn:text-pc', {
          'text-pc group-hover/btn:text-nc!': masterwork,
        }),
      }"
      :aria-label="masterwork ? 'Show Base Stats' : 'Show Masterwork Stats'"
      @click="showMasterwork()" />
  </GlassTooltip>
</template>
