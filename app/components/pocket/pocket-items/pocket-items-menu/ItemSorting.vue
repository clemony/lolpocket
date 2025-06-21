<script lang="ts" setup>
const is = useItemStore()
</script>

<template>
  <div class="px-4 py-3">
    <div>
      <StyledContrastRadio v-model="is.AZmodel" name="az" :value="1">
        a -> z
      </StyledContrastRadio>

      <StyledContrastRadio v-model="is.AZmodel" name="az" :value="2">
        {{ 'a <- z' }}
      </StyledContrastRadio>

      <StyledContrastRadio v-model="is.AZmodel" name="az" :value="0">
        off
      </StyledContrastRadio>
    </div>

    <Separator class="bg-accent mt-3 mb-3 " />

    <div>
      <StyledContrastRadio v-model="is.priceModel" :checked="is.priceModel == 1" name="price" :value="1">
        <icon name="tabler:tag" class="!shrink-0 !size-5 dst -scale-x-100" />

        <icon name="arrow-up" class="!shrink-0 dst !size-6  -mx-2" />
      </StyledContrastRadio>

      <StyledContrastRadio v-model="is.priceModel" :checked="is.priceModel == 2" name="price" :value="2">
        <icon name="tabler:tag" class="!shrink-0 !size-5 dst -scale-x-100" />

        <icon name="arrow-up" class="!shrink-0 dst !size-6  -mx-2 -scale-y-100" />
      </StyledContrastRadio>

      <StyledContrastRadio v-model="is.priceModel" :checked="is.priceModel == 0" name="price" :value="0">
        off
      </StyledContrastRadio>
    </div>
  </div>
</template>