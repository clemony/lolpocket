<script lang="ts" setup>
import { DialogTrigger, DropdownMenuPortal } from 'reka-ui'

const { pocket: p } = defineProps<{
  pocket: Pocket
}>()

const pocket = computed (() => p)
</script>

<template>
  <div class="absolute bottom-0 bg-b1/94 backdrop-blur-md left-0 pb-4 pt-2 w-full">
    <div class=" w-full gap-0.5  flex  px-4 ">
      <DropdownMenu>
        <DropdownMenuTrigger class="btn btn-square btn-ghost group/drop data-[state=open]:border-b3/60 data-[state=open]:bg-b2/50">
          <icon name="gear-solid" class="group-data-[state=open]/drop:opacity-80 group-hove/dropr:opacity-80 opacity-60" />
        </DropdownMenuTrigger>

        <ContrastDropdownContent class="min-w-76 ml-3" align="center">
          <ContrastDropdownItem as-child>
            <DeletePocketDialog :pocket="pocket">
              <icon name="trash" class="size-5.25 dst" />
              Delete Pocket
            </DeletePocketDialog>
          </ContrastDropdownItem>

          <ContrastDropdownItem>
            <icon name="teenyicons:send-outline" class="size-4.5" />
            Share
          </ContrastDropdownItem>

          <ContrastDropdownItem>
            <icon name="hugeicons:image-download" class=" dst " />
            Download Pocket Card
          </ContrastDropdownItem>

          <DropdownMenuSub>
            <ContrastDropdownSubTrigger>
              <icon name="ph:upload-simple" class="size-5.25 dst " />
              Export to League Client
            </ContrastDropdownSubTrigger>

            <DropdownMenuPortal>
              <ContrastDropdownSubContent class="min-w-54" align="end">
                <ContrastDropdownItem>
                  Items & Champions
                </ContrastDropdownItem>

                <ContrastDropdownItem>
                  Runes
                </ContrastDropdownItem>
              </ContrastDropdownSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </ContrastDropdownContent>
      </DropdownMenu>

      <label v-if="pocket" v-tippy="pocket.location?.pinned == true ? 'Unpin' : 'Pin'" class="btn btn-square  btn-ghost relative grid place-items-center group/pin *:tldr-20 *:size-5.75 *:dst *:absolute">
        <input v-model="pocket.location.pinned" type="checkbox" class="peer hidden" />

        <icon name="pin" class="  group-hover/pin:opacity-0 peer-checked:opacity-0 opacity-60 *:stroke-[1.8]" />

        <icon name="pin-solid" class="opacity-0  group-hover/pin:not-checked:opacity-100 group-hover/pin:not-checked:text-bc/50 peer-checked:opacity-60 peer-checked:hover:text-bc" />

        <icon name="iconoir:pin-slash-solid" class="opacity-0 group-hover/pin:peer-checked:opacity-80 peer-checked:text-bc" />

      </label>
    </div>
  </div>
</template>