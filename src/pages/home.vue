<route lang="json">{
  "name": "home",
  "alias": "/",
  "meta": {
    "title": "Home",
    "icon": "teenyicons:home-outline"
  }
}</route>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { NewsArticles } from '../stores/news';
import { ref } from 'vue';
import { useSessionStore } from '../stores/sessionStore';

const sn = useSessionStore();

export interface article {
  title: string;
  source: string;
  icon?: string;
  source2?: string;
  image: string;
  link?: string;
  linkTitle?: string;
  color?: string;
  date?: string;
}
const hasSource2 = ref('false');

function handleLinks() { }
</script>

<template>
  <div class="w-full py-4 grid gap-y-3 m-0 mt-2 !z-0">
    <div class="flex items-end w-full gap-2 px-6">
      <div class="flex items-center gap-4 grow">
        <h1 class="text-xl font-bold tracking-tight">News & Updates</h1>

        <div class="font-mono badge badge-primary text-mini">1 new!</div>
      </div>

      <div class="flex self-start gap-4 justify-self-end">
        <div class="tooltip tooltip-bottom tooltip-accent" data-tip="10/20/1923">
          <div class="font-mono select-none badge badge-secondary text-mini">21 days ago</div>
        </div>
        <div class="tooltip tooltip-bottom tooltip-accent" data-tip="current patch">
          <div class="font-mono select-none badge badge-accent text-mini">14.16.1</div>
        </div>
      </div>
    </div>

    <div
      class="flex w-full overflow-x-scroll h-64 content-center items-center gap-5 scrollbar-hide !z-1 -transition-all duration-700 delay-200 news-after pl-6">
      <a v-for="article in NewsArticles"
        class="card h-56 text-sm shadow-warm min-w-96 !z-0 !*:z-0 group hover:scale-[1.02] p-0 m-0 transition-transform duration-700 group bg-cover relative border border-base-100 overflow-hidden"
        :title="article.link" :style="{ backgroundImage: 'url(' + article.image + ')' }" :href="article.link"
        target="_blank">
        <div
          class="absolute top-0 left-0 grid content-start w-full h-full grid-cols-1 pt-6 text-xs italic transition-all duration-500 shadow-inner opacity-0 group-hover:opacity-100 bg-neutral/40 backdrop-blur-sm justify-items-center rounded-box">
        </div>

        <div
          class="card-body group-hover:h-1/2 transition-all duration-500 pt-5 pb-0 absolute !bg-base-100/90 h-2/5 frost inset-x-0 bottom-0 m-0 z-1  object-bottom">
          <div class="z-10 col-start-1 overflow-hidden">
            <p v-if="article && article.date" class="flex gap-1 font-mono text-xxs">
              {{ article.date }}
            </p>
            <h2 class="mb-0 text-base card-title text-balanced">
              {{ article.title }}
            </h2>

            <div
              class="opacity-0 group-hover:opacity-100 transition-all duration-500 align-bottom flex text-xs mt-0 gap-2 *:text-pretty *:content-start *:justify-start relativ w-full">
              <div class="flex items-baseline gap-2 mt-1 grow">
                {{ article.source }}

                <span v-if="article && article.source2" class="flex gap-1 italic text-xxs">
                  by {{ article.source2 }}
                </span>
              </div>

              <div class="grid self-end grid-cols-1 pr-3 mr-3">
                <p class="flex items-baseline gap-1 italic">
                  {{ article.linkTitle }}
                  <Icon icon="cil:external-link" class="size-2.5" />
                </p>
              </div>
            </div>
          </div>

          <div class="absolute bottom-5 right-5">
            <Icon v-if="article && article.icon" :icon="article.icon" :class="article.color"
              class="opacity-50 size-5" />
          </div>
        </div>
      </a>
    </div>

    <div class="grid w-full grid-cols-2 gap-6 pt-2 pr-12 mx-6">
      <div class="col-start-1">
        <h2 class="justify-end w-full h-8 pl-1 text-xl font-bold tracking-tight">Recent builds</h2>

        <div class="grid grid-cols-1 gap-4 mt-4">
          <div
            class="overflow-x-hidden overflow-y-scroll scrollbar-hide card bg-base-100/60 backdrop-blur-md shadow-warm">
            <table class="table table-pin-rows 0">
              <!-- head -->
              <thead>
                <tr class="bg-base-200/50 shadow-cham">
                  <th>Champion</th>
                  <th>Role</th>
                  <th>Winrate</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <!-- row 1 -->
                <tr>
                  <td>
                    <div class="flex items-center gap-3">
                      <div class="avatar">
                        <div class="w-12 h-12 rounded-lg">
                          <img src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div class="font-bold">Hart Hagerty</div>
                        <div class="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span class="badge badge-ghost badge-sm">Desktop Support Technician</span>
                  </td>
                  <td>Purple</td>
                </tr>
                <!-- row 2 -->
                <tr>
                  <td>
                    <div class="flex items-center gap-3">
                      <div class="avatar">
                        <div class="w-12 h-12 rounded-lg">
                          <img src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div class="font-bold">Brice Swyre</div>
                        <div class="text-sm opacity-50">China</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Carroll Group
                    <br />
                    <span class="badge badge-ghost badge-sm">Tax Accountant</span>
                  </td>
                  <td>Red</td>
                </tr>
                <!-- row 3 -->
                <tr>
                  <td>
                    <div class="flex items-center gap-3">
                      <div class="avatar">
                        <div class="w-12 h-12 rounded-lg">
                          <img src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div class="font-bold">Marjy Ferencz</div>
                        <div class="text-sm opacity-50">Russia</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Rowe-Schoen
                    <br />
                    <span class="badge badge-ghost badge-sm">Office Assistant I</span>
                  </td>
                  <td>Crimson</td>
                </tr>
                <!-- row 4 -->
                <tr>
                  <td>
                    <div class="flex items-center gap-3">
                      <div class="avatar">
                        <div class="w-12 h-12 rounded-lg">
                          <img src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div class="font-bold">Yancy Tear</div>
                        <div class="text-sm opacity-50">Brazil</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Wyman-Ledner
                    <br />
                    <span class="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                  </td>
                  <td>Indigo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="col-start-2 pl-1">
        <h2 class="justify-end w-full h-8 pr-5 text-xl font-bold tracking-tight">Champion Winrates</h2>
        <div class="grid grid-cols-1 gap-4 mt-4">
          <div class="overflow-x-auto card bg-base-100/60 backdrop-brightness-105 frost shadow-warm">
            <table class="table">
              <!-- head -->
              <thead>
                <tr>
                  <th>Champion</th>
                  <th>Role</th>
                  <th>Winrate</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <!-- row 1 -->
                <tr>
                  <td>
                    <div class="flex items-center gap-3">
                      <div class="avatar">
                        <div class="w-12 h-12 rounded-lg">
                          <img src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div class="font-bold">Hart Hagerty</div>
                        <div class="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span class="badge badge-ghost badge-sm">Desktop Support Technician</span>
                  </td>
                  <td>Purple</td>
                </tr>
                <!-- row 2 -->
                <tr>
                  <td>
                    <div class="flex items-center gap-3">
                      <div class="avatar">
                        <div class="w-12 h-12 rounded-lg">
                          <img src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div class="font-bold">Brice Swyre</div>
                        <div class="text-sm opacity-50">China</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Carroll Group
                    <br />
                    <span class="badge badge-ghost badge-sm">Tax Accountant</span>
                  </td>
                  <td>Red</td>
                </tr>
                <!-- row 3 -->
                <tr>
                  <td>
                    <div class="flex items-center gap-3">
                      <div class="avatar">
                        <div class="w-12 h-12 rounded-lg">
                          <img src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div class="font-bold">Marjy Ferencz</div>
                        <div class="text-sm opacity-50">Russia</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Rowe-Schoen
                    <br />
                    <span class="badge badge-ghost badge-sm">Office Assistant I</span>
                  </td>
                  <td>Crimson</td>
                </tr>
                <!-- row 4 -->
                <tr>
                  <td>
                    <div class="flex items-center gap-3">
                      <div class="avatar">
                        <div class="w-12 h-12 rounded-lg">
                          <img src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div class="font-bold">Yancy Tear</div>
                        <div class="text-sm opacity-50">Brazil</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Wyman-Ledner
                    <br />
                    <span class="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                  </td>
                  <td>Indigo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
