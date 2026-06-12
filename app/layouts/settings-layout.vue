<script lang="ts" setup>
import type { PageLinkRouteItem } from "~/types/route.types"

const { useRouteGroups } = routeStore()
const settings = computed(
  () => useRouteGroups().value?.settings?.items as PageLinkRouteItem[]
)
</script>

<template>
  <Layout>
    <UContainer>
      <UPage :ui="{ left: 'lg:col-span-3', center: '-ml-10 lg:col-span-7' }">
        <template #left>
          <UPageAside
            :ui="{
              container:
                'flex size-full space-x-2 gap-y-1 overflow-hidden pr-4 pl-20 lg:flex-col lg:space-x-0'
            }">
            <UPageLinks
              title="Settings"
              :ui="{
                link: 'py-2 pl-1 font-medium capitalize hover:underline',
                title: 'pt-9 pb-6 text-4xl font-bold'
              }"
              :links="settings"
              size="xl" />
          </UPageAside>
        </template>
        <UPageBody class="w-full space-y-8">
          <UPageHeader :title="String($route.meta?.title)" />

          <UTheme
            :props="{
              switch: { color: 'card' }
            }"
            :ui="{
              form: {
                base: 'flex w-full max-w-170 flex-col gap-12'
              },
              formField: {
                root: 'max-w-full min-w-90 grow',
                container: 'flex flex-col gap-4',
                wrapper: '',
                hint: 'hidden'
              },
              input: { root: 'w-full' },
              card: {
                root: 'h-max! w-full rounded-xl bg-transparent group-hover:ring-pc/70!',
                body: 'pointer-events-none grid w-full items-center gap-3 overflow-hidden p-4!'
              },
              switch: {
                root: 'py-4!',
                container: 'mt-0 self-center',
                label: 'pr-2'
              }
            }">
            <FormWrapper>
              <slot />
            </FormWrapper>
          </UTheme>
        </UPageBody>
      </UPage>
    </UContainer>
  </Layout>
</template>
