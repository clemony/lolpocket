<script lang="ts" setup>
const {class: className,  alt, skinUrl } = defineProps<{
class?: HTMLAttributes['class']
alt: any
skinUrl: string | null
text?: string
}>()

</script>

<template>

    <Card
     :class="cn('rounded-lg shrink-0 size-full !bg-b1 w-38 bg-noise h-42 cursor-pointer parallax photo inset-shadow-xxs p-2 border-b3 group/photo grid grid-rows-[1.5fr_0.3fr]', className)">

     <transition-scale group class=" relative rounded-md overflow-hidden drop-shadow-sm shadow-sm shrink-0 size-full pointer-events-none bg-black/90 **:text-white grid place-items-center">
     <PocketIcon
     v-if="skinUrl"
            :alt="alt"
            :img="skinUrl"
            class="size-full">
          </PocketIcon>
<div  v-else class="relative opacity-40 size-8">
          <i-lol-champ class="size-8 absolute "/>
  <icon name="material-symbols:edit" class="absolute size-6 -right-4 -bottom-2"/>
</div>
            <LazyPrismaticShine class="scale-x-112 scale-y-104 !opacity-0 group-hover/photo:!opacity-100 transition duration-250 " />
     </transition-scale>

<slot>

                      <div class="w-full text-2 truncate h-5 max-h-5 w-34 max-w-34 mt-1.5 px-0.5 italic grid items-center">
{{ text }}
          </div>
</slot>

    </Card>
</template>