<script setup lang="ts">
import { championRoles } from '#shared/appdata'

<<<<<<< HEAD
const { class: className, clear = false, hover = 'btn', size = ['sq-xs', 'xs'], variant = 'ghost' } = defineProps<{
  class?: HTMLAttributes['class']
  clear?: boolean
  size?: ButtonVariants['size'][]
  variant?: ButtonVariants['variant']
  hover?: ButtonVariants['hover']
}>()
</script>

<template>
  <Listbox
    v-model:model-value="cs().filters.role"
    :multiple="false">
    <ListboxContent as-child>
      <TransitionSlideLeft
        group
        :class="cn('flex items-center w-full z-1 py-0 flex-wrap gap-2  relative flex-col flex-wrap gap-y-3 w-9/10 max-h-64 items-start', className)">
        <Button
          v-if="cs().filters.role && clear"
          :variant
          :hover
          :size="size[0]"
          class="order-first hover:*:opacity-100"
          @click="cs().filters.role = null">
          <icon
            name="x"
            class="size-4" />
        </Button>

        <BaseListboxItem
          v-for="role in championRoles"
          :key="role.name"
          class="bg-transparent fx-0"
          :value="role.name"
          as-child>
          <RoleBadge

            as="label"
            :variant
            :size="size[1]"
            :role>
          </RoleBadge>
        </BaseListboxItem>
      </TransitionSlideLeft>
    </ListboxContent>
  </Listbox>
=======
const { filtered, filters, setFilter } = useItemFilter()
function reset() {
  filters.role = null
  console.log('💠 - reset -  filters.role:', filters.role)
}
</script>

<template>
  <transition-fade
    group
    class="items-center flex">
    <button
      v-if="filters.role"
      class="btn !h-9 w-36 border-b3 border btn-neutral pr-2.5 inset-shadow-xs inset-shadow-b3/53 shadow-sm drop-shadow-sm !bgneutral/90 rounded-xl hover:opacity-90"
      @click="reset()">
      <span class="grow">
        {{ filters.role }}
      </span>

      <icon name="x-sm" />
    </button>

    <div v-else>
      <Select v-model:model-value="filters.role">
        <SelectTrigger
          class="max-w-36 bg-b2/70 w-36 hover:ring border-b3 hover:inset-shadow-sm data-[state=open]:inset-shadow-sm hover:ring-b4/60 h-9 rounded-xl">
          <div class="size-full pt-0.5 bg-noise">
            <SelectValue
              placeholder="Role"
              class="placeholder:!text-bc/40 font-medium" />
          </div>
        </SelectTrigger>

        <ContrastSelectContent class="w-(--reka-select-trigger-width)">
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>

            <ContrastSelectItem
              v-for="(role, i) in championRoles"
              :key="`${role.name}${i}`"
              :value="role.name">
              {{ role.name }}
            </ContrastSelectItem>
          </SelectGroup>
        </ContrastSelectContent>
      </Select>
    </div>
  </transition-fade>
>>>>>>> refs/remotes/origin/main
</template>

<style scoped></style>
