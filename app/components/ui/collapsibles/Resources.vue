<script setup lang="ts">
const props = defineProps<{
  group: any
}>()

const group = ref(props.group)
</script>

<template>
  <Collapsible
    class="group"
    :default-open="true">
    <ul
      class="**:text-3 after:border-b3 after:group-has-data-[state=open]:opacity-100' relative flex flex-col **:tracking-tight after:pointer-events-none after:absolute after:top-0 after:left-0 after:size-full after:h-[70%] after:border-l after:opacity-0 [&_li]:w-full [&_li]:pl-10">
      <CollapsibleTrigger
        class="flex justify-start gap-4"
        as-child>
        <Button
          variant="ghost"
          size="lg"
          as-child>
          <Label class="text-bc/60 font-semibold tracking-tighter">
            <Icon
              name="teenyicons:right-small-outline"
              class="size-5 transition-transform duration-200 group-data-[state=open]:rotate-90" />
            {{ group.name }}
          </Label>
        </Button>
      </CollapsibleTrigger>

      <CollapsibleContent class="w-full">
        <li v-for="link in group.links" :key="link">
          <Button
            variant="ghost"
            size="lg"
            class="relative w-full justify-start gap-4"
            as-child>
            <a
              target="_blank"
              href="https://wiki.leagueoflegends.com/en-us/">
              <div class="grid size-6 place-items-center overflow-hidden">
                <div
                  v-if="link.name == 'OP.GG'"
                  class="grid size-7 items-center justify-start -space-y-1.5 !overflow-auto leading-none">
                  <p class="!text-1">OP.</p>

                  <p class="!text-1">GG</p>
                </div>

                <div
                  v-else-if="link.name == 'Patch Notes'"
                  class="size-6">
                  <logo-league class="absolute top-0.5 left-5 size-8" />
                </div>

                <div
                  v-else-if="link.name == 'U.GG'"
                  class="grid size-6 place-items-center">
                  <logo-ugg class="text-bc size-5" />
                </div>

                <div
                  v-else
                  class="size-full">
                  <icon
                    v-if="link.icon"
                    :name="link.icon"
                    class="size-6 shrink-0"
                    :class="{
                      '-mt-px size-7': link.name == 'Wiki',
                      'size-6.25': link.name == 'Dev Updates',
                      'size-5.5 !overflow-hidden rounded-t-md rounded-b-sm object-center': link.name == 'League of Graphs',
                    }" />
                </div>
              </div>

              <span class="font-medium">
                {{ link.name }}
              </span>
            </a>
          </Button>
        </li>
      </CollapsibleContent>
    </ul>
  </Collapsible>
</template>

<style scoped></style>
