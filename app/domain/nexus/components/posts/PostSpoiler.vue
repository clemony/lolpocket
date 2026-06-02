<script lang="ts" setup></script>

<template>
  <div
    class="flex h-16 w-full shrink items-center justify-center rounded-xl border border-p3/80">
    <UTooltip
      arrow
      :interactive="true"
      :ui="{ content: 'h-max! max-w-56 flex-col space-y-2 pb-0.75' }">
      <template #default="{ open }">
        <UBadge
          :active="open"
          color="base"
          size="sm"
          variant="outline"
          label="Spoiler"
          :ui="{
            base: cn(
              'bg-p0 px-4 fx-1 hover:bg-neutral hover:text-nc hover:inset-ring-n2',
              {
                'bg-neutral text-nc inset-ring-n2': open
              }
            )
          }" />
      </template>

      <template #content>
        <p class="px-1.5 pt-2 text-pretty break-all hyphens-auto">
          This post contains spoilers and preview is currently <br />hidden.
          Manage visibility in News Feed settings.
        </p>
        <div class="flex w-full justify-center">
          <UButton
            label="Settings"
            icon="i-ic-sharp-settings"
            block
            size="xs"
            :ui="{
              base: 'justify-center! gap-1 text-center!',
              label: 'grow-0 text-xs font-bold',
              leadingIcon: '-ml-2 size-3.5'
            }" />
        </div>
      </template>
    </UTooltip>
  </div>
</template>
