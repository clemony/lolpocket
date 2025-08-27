<script lang="ts" setup>
import { HoverCardArrow } from 'reka-ui'

const route = useRoute()

const inset = shallowRef()
const { focused } = useFocus(inset, { initialValue: true })
</script>

<template>
  <SidebarProvider
    :default-open="false"
    :auto-focus="false"
    class="w-full  h-screen flex"
    :style="{
      '--sidebar-width': '320px',
    }">
    <!-- sidebar  { 'pl-14': !as().settings.lockSidebar } -->

    <AppSidebar />

    <SidebarInset
      ref="inset"
      :class="cn('overflow-y-auto ')">
      <!-- header -->
      <header class="sticky top-0 h-[45px] flex shrink-0 items-center gap-3 border-b z-2  border-b3 bg-b1/80 backdrop-blur-lg  px-4">
        <!--         <SidebarTrigger
          variant="ghost"
          size="lg"
          class="rounded-md  size-11"
          @dblclick="as().toggleSidebarLock" /> -->
        <!--         <Separator
          orientation="vertical"
          class="mr-2 h-4 bg-b4" /> -->
        <Breadcrumb>
          <BreadcrumbList>
            <template v-if="route?.meta?.parent">
              <BreadcrumbItem
                class="hidden md:block">
                <BreadcrumbLink
                  as-child>
                  <HoverCard>
                    <HoverCardTrigger>
                      <Blink
                        :to="route?.meta?.parent"
                        class="capitalize  opacity-40 font-medium hover:opacity-80 text-4 "
                        variant="link"
                        size="xs">
                        {{ route?.meta?.parent?.toString().replace('/', '') }}
                      </Blink>
                    </HoverCardTrigger>

                    <HoverPopContent
                      align="start"
                      class="w-fit px-1 space-y-1"
                      :side-offset="-2"
                      :align-offset="-10">
                      <HoverCardArrow
                        class="fill-black/10 dst translate-y-px"
                        :height="10"
                        :width="16"
                        rounded />
                      <HoverCardArrow
                        :height="10"
                        :width="16"
                        class="fill-b1"
                        rounded />
                      <Blink
                        v-for="item in route.matched[0].children"
                        :key="item.name"
                        variant="tick"
                        class="min-w-44 text-2 justify-start group"
                        size="sm"
                        :to="item.path">
                        <span class="grow">
                          {{ item.meta?.title || item.name }}
                        </span>
                        <icon
                          v-show="item.path == route.path"
                          name="lucide:map-pin"
                          class="opacity-90 " />
                      </Blink>
                    </HoverPopContent>
                  </HoverCard>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator
                class="hidden md:block" />
            </template>

            <BreadcrumbItem>
              <BreadcrumbPage class="capitalize text-4">
                {{ route?.meta?.title ?? route?.name ?? '' }}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div
          id="layout-header"
          class="justify-self-end">
        </div>
      </header>
      <div class="flex flex-1 flex-col gap-4 relative h-[calc(100vh-45px)]">
        <slot />
      </div>
    </SidebarInset>

    <!-- command -->
    <!--     <LazyAppCommand /> after:absolute after:bottom-0 after:w-full after:h-1/4 after:bg-neutral after:z-0 -->

    <!-- toaster -->
    <Toast
      position="top-right"
      :expand="true"
      :duration="10000" />

    <!-- loading -->
    <NuxtLoadingIndicator
      style="
      top: auto;
      bottom: 0;
      height: 5px;
    background: repeating-linear-gradient(to right, var(--color-n3) 0%, var(--color-n2), var(--color-neutral) 100%);
    " />
  </SidebarProvider>
</template>