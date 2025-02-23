<script setup lang="ts">
const props = defineProps<{
  pocket?: pocket
  class?: HTMLAttributes['class']
  bgClass?: HTMLAttributes['class']
  title?: string
  crumbOne?: string
  crumbTwo?: string
  linkOne?: string
  linkTwo?: string
  iconOne?: string
  iconTwo?: string
}>()

const ts = useTempStore()

const pocket = ref(props.pocket)
</script>

<template>
  <div class="pt-[5vh] w-full">
    <header :class="cn('w-full  px-8 flex flex-nowrap shrink-0 flex-col justify-center items-start gap-3 h-[8vh]', props.bgClass)">
      <div v-if="crumbOne || crumbTwo" class="breadcrumbs text-2 font-medium tracking-tight bread">
        <ul class="flex items-center **:[&_li]:before:!hidden">
          <li>
            <NuxtLink :to="props.linkOne">
              <span class="inline-flex items-center gap-2.5 capitalize"> <icon v-if="props.iconOne" :name="props.iconOne" class="size-4 shrink-0" />{{ props.crumbOne }} </span>
            </NuxtLink>
          </li>
          <li class="before:!opacity-100 before:dst">
            <NuxtLink :to="props.linkTwo">
              <span class="inline-flex items-center !gap-2.5 capitalize">
                <icon v-if="props.iconTwo" :name="props.iconTwo" class="shrink-0" />
                {{ props.crumbTwo }}
              </span>
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div :class="cn('flex w-full  items-center', props.class)">
        <h1 class="!text-8 text-start dst tracking-tight !leading-none truncate shrink-0 w-fit overflow-hidden capitalize  flex">
          {{ props.title }}
        </h1>
        <slot />
      </div>
    </header>
  </div>
</template>

<style scoped></style>
