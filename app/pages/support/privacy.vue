<script setup lang="ts">
import { privacyPolicy } from '~/domain/lp/policies/privacy-policy'

definePageMeta({
  title: 'Privacy Policy',
  description: 'Information regarding how your data is used.',
  icon: 'lucide:shield-check',
  listClass: 'scale-105',
  path: '/support/privacy',
})
</script>

<template>
  <SeparatorLayout>
    <LayoutAsideSplit>
      <template #aside>
        <SettingsNav />
      </template>

      <!--      <SettingsLayout
        :title="privacyPolicy[0].title"
        :description="privacyPolicy[0].description.join()">
      </SettingsLayout> -->
      <div
        v-for="(policy, a) in privacyPolicy.slice(1)"
        :key="a"
        class="grid auto-rows-max gap-4">
        <h3>
          {{ policy?.title }}
        </h3>
        <template v-if="policy.description">
          <p
            v-for="(item, b) in policy.description"
            :key="b">
            {{ item }}
          </p>
        </template>
        <template v-if="policy.sections">
          <div
            v-for="(section, b) in policy.sections"
            :key="b"
            class="grid auto-rows-max gap-4">
            <span
              class="align-middle text-md/7"
              v-html="section.title" />
            <ol
              class="grid list-outside list-[upper-roman] gap-6 pl-6 leading-5 text-pretty marker:w-12 marker:justify-start marker:pr-6 marker:text-start">
              <li
                v-for="(item, c) in section.description"
                :key="c">
                {{ item }}
              </li>
            </ol>
          </div>
        </template>
      </div>
    </LayoutAsideSplit>
  </SeparatorLayout>
</template>
