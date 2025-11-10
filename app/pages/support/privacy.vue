<script setup lang="ts">
import { privacyPolicy } from '~~/shared/data/policies/privacy-policy'

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
        v-for="policy, a in privacyPolicy.filter(p => p !== p[0])"
        :key="a"
        class="">
        <h3>
          {{ policy?.title }}
        </h3>
        <template v-if="policy.description">
          <p
            v-for="item, b in policy.description"
            :key="b">
            {{ item }}
          </p>
        </template>
        <template v-if="policy.sections">
          <div
            v-for="section, b in policy.sections"
            :key="b">
            {{ section.title }}
            <ol
              class="list-outside list-[upper-roman] space-y-6 pl-6 leading-7 text-pretty marker:w-12 marker:justify-start marker:pr-6 marker:text-start">
              <li
                v-for="item, c in section.description"
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
