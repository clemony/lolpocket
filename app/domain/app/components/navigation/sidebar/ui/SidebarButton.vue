<script lang="ts" setup>
import type { ButtonRouteItem } from "~/types/route.types"

const props = defineProps<
  | ButtonRouteItem
  | {
      item?: ButtonRouteItem
    }
>()

const item = computed<ButtonRouteItem>(
  () => (props.item ? props.item : props) as ButtonRouteItem
)
</script>

<template>
  <UButton
    color="neutral"
    variant="ghost"
    size="md"
    :label="item.label"
    :ui="{
      base: cn(
        'group group/slide-btn card-button relative flex h-11! max-h-11! min-h-11! w-full gap-2.5! overflow-hidden rounded-xl px-3! hover:opacity-80!',
        item?.ui?.base
      ),
      leadingIcon: item?.class
    }">
    <div class="pointer-events-none flex grow items-center gap-3">
      <div v-if="!item.avatar?.src" class="anchor size-4.5">
        <Icon
          :name="String(item.icon)"
          :class="
            cn('absolute size-4.5! group-hover/btn:text-nc', item.class, {
              'group-hover/btn:opacity-0': item.iconFill
            })
          " />
        <Icon
          v-if="item.iconFill"
          :name="String(item.iconFill)"
          :class="
            cn(
              'absolute size-4.5! opacity-0 group-hover/btn:text-nc group-hover/btn:opacity-100',
              item.class
            )
          " />
      </div>
      <UAvatar
        v-else
        :src="item.avatar.src"
        size="lg"
        :ui="{ image: 'scale-110', root: 'overflow-hidden' }" />
      <h4
        :class="
          cn(
            'flex grow text-md leading-none font-semibold antialiased drop-shadow-none group-hover/btn:text-nc',
            item?.ui?.label
          )
        ">
        {{ item.label }}
      </h4>
    </div>

    <template #trailing>
      <slot name="trailing" />
    </template>
  </UButton>
</template>
