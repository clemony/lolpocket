<script setup lang="ts">

</script>

<template>
  <KeepAlive>
    <div id="main" class="flex-1">
      <div class="grid-header">
        <h2>Settings</h2>



      </div>

      <!-- THEME TAB -->

      <div role="tablist" class="tabs tabs-lifted">
        <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Theme" checked="true" />
        <div role="tabpanel" class="p-6 tab-content bg-base-100 border-base-300 rounded-box">


          <div class="">

            <div role="tablist" class="tabs tabs-lifted">
              <input type="radio" name="theme-tabs" role="tab" class="tab prose prose-lg font-bold pl-5 pt-5"
                aria-label="Light Themes" checked="true" />
              <div role="tabpanel" class="p-6 tab-content bg-base-100 border-base-300 rounded-box">


                <div class="grid theme-grid grid-flow-row gap-5 p-5 text-xs">



                  <!-- /* light */ -->
                  <div class="form-control">
                    <label class="gap-4 cursor-pointer label">
                      <div class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline
            outline-2 outline-offset-2 outline-transparent" data-act-class="!outline-base-content"
                        data-set-theme="light">
                        <div class="bg-base-100 text-base-content w-full cursor-pointer font-sans" data-theme="light">
                          <div class="grid grid-cols-5 grid-rows-3">
                            <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                            <div class="bg-base-300 col-start-1 row-start-3"></div>
                            <div
                              class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                              <div class="font-semibold">light</div>
                              <div class="flex flex-wrap gap-1">
                                <div
                                  class="bg-primary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                                  <div class="text-primary-content text-sm font-semibold">A</div>
                                </div>
                                <div
                                  class="bg-secondary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                                  <div class="text-secondary-content text-sm font-semibold">A</div>
                                </div>
                                <div
                                  class="bg-accent flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                                  <div class="text-accent-content text-sm font-semibold">A</div>
                                </div>
                                <div
                                  class="bg-neutral flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                                  <div class="text-neutral-content text-sm font-semibold">A</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <input type="radio" name="theme-radios" class="radio theme-controller hidden" value="light" />
                    </label>
                  </div>

                  <!-- nord -->

                  <div
                    class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
                    data-act-class="!outline-base-content" data-set-theme="nord">
                    <div class="bg-base-100 text-base-content w-full cursor-pointer font-sans" data-theme="nord">
                      <div class="grid grid-cols-5 grid-rows-3">
                        <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                        <div class="bg-base-300 col-start-1 row-start-3"></div>
                        <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                          <div class="font-semibold">nord</div>
                          <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-primary-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-secondary-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-accent-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-neutral-content text-sm font-semibold">A</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- cupcake -->
                  <div
                    class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
                    data-act-class="!outline-base-content" data-set-theme="cupcake">
                    <div class="bg-base-100 text-base-content w-full cursor-pointer font-sans" data-theme="cupcake">
                      <div class="grid grid-cols-5 grid-rows-3">
                        <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                        <div class="bg-base-300 col-start-1 row-start-3"></div>
                        <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                          <div class="font-semibold">cupcake</div>
                          <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-primary-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-secondary-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-accent-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-neutral-content text-sm font-semibold">A</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- bumblebee -->
                  <div
                    class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
                    data-act-class="!outline-base-content" data-set-theme="bumblebee">
                    <div class="bg-base-100 text-base-content w-full cursor-pointer font-sans" data-theme="bumblebee">
                      <div class="grid grid-cols-5 grid-rows-3">
                        <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                        <div class="bg-base-300 col-start-1 row-start-3"></div>
                        <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                          <div class="font-semibold">bumblebee</div>
                          <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-primary-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-secondary-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-accent-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-neutral-content text-sm font-semibold">A</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- emerald -->
                  <div
                    class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
                    data-act-class="!outline-base-content" data-set-theme="emerald">
                    <div class="bg-base-100 text-base-content w-full cursor-pointer font-sans" data-theme="emerald">
                      <div class="grid grid-cols-5 grid-rows-3">
                        <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                        <div class="bg-base-300 col-start-1 row-start-3"></div>
                        <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                          <div class="font-semibold">emerald</div>
                          <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-primary-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-secondary-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-accent-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-neutral-content text-sm font-semibold">A</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- winter -->
                  <div
                    class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
                    data-act-class="!outline-base-content" data-set-theme="winter">
                    <div class="bg-base-100 text-base-content w-full cursor-pointer font-sans" data-theme="winter">
                      <div class="grid grid-cols-5 grid-rows-3">
                        <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                        <div class="bg-base-300 col-start-1 row-start-3"></div>
                        <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                          <div class="font-semibold">winter</div>
                          <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-primary-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-secondary-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-accent-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-neutral-content text-sm font-semibold">A</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- corporate -->
                  <div
                    class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
                    data-act-class="!outline-base-content" data-set-theme="corporate">
                    <div class="bg-base-100 text-base-content w-full cursor-pointer font-sans" data-theme="corporate">
                      <div class="grid grid-cols-5 grid-rows-3">
                        <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                        <div class="bg-base-300 col-start-1 row-start-3"></div>
                        <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                          <div class="font-semibold">corporate</div>
                          <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-primary-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-secondary-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-accent-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-neutral-content text-sm font-semibold">A</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <!-- garden -->
                  <div
                    class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
                    data-act-class="!outline-base-content" data-set-theme="garden">
                    <div class="bg-base-100 text-base-content w-full cursor-pointer font-sans" data-theme="garden">
                      <div class="grid grid-cols-5 grid-rows-3">
                        <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                        <div class="bg-base-300 col-start-1 row-start-3"></div>
                        <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                          <div class="font-semibold">garden</div>
                          <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-primary-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-secondary-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-accent-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-neutral-content text-sm font-semibold">A</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>





                  <!-- lofi -->
                  <div
                    class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
                    data-act-class="!outline-base-content" data-set-theme="lofi">
                    <div class="bg-base-100 text-base-content w-full cursor-pointer font-sans" data-theme="lofi">
                      <div class="grid grid-cols-5 grid-rows-3">
                        <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                        <div class="bg-base-300 col-start-1 row-start-3"></div>
                        <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                          <div class="font-semibold">lofi</div>
                          <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-primary-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-secondary-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-accent-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-neutral-content text-sm font-semibold">A</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- pastel -->
                  <div
                    class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
                    data-act-class="!outline-base-content" data-set-theme="pastel">
                    <div class="bg-base-100 text-base-content w-full cursor-pointer font-sans" data-theme="pastel">
                      <div class="grid grid-cols-5 grid-rows-3">
                        <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                        <div class="bg-base-300 col-start-1 row-start-3"></div>
                        <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                          <div class="font-semibold">pastel</div>
                          <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-primary-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-secondary-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-accent-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-neutral-content text-sm font-semibold">A</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- fantasy -->
                  <div
                    class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
                    data-act-class="!outline-base-content" data-set-theme="fantasy">
                    <div class="bg-base-100 text-base-content w-full cursor-pointer font-sans" data-theme="fantasy">
                      <div class="grid grid-cols-5 grid-rows-3">
                        <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                        <div class="bg-base-300 col-start-1 row-start-3"></div>
                        <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                          <div class="font-semibold">fantasy</div>
                          <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-primary-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-secondary-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-accent-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-neutral-content text-sm font-semibold">A</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- wireframe -->
                  <div
                    class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
                    data-act-class="!outline-base-content" data-set-theme="wireframe">
                    <div class="bg-base-100 text-base-content w-full cursor-pointer font-sans" data-theme="wireframe">
                      <div class="grid grid-cols-5 grid-rows-3">
                        <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                        <div class="bg-base-300 col-start-1 row-start-3"></div>
                        <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                          <div class="font-semibold">wireframe</div>
                          <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-primary-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-secondary-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-accent-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-neutral-content text-sm font-semibold">A</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- autumn -->
                  <div
                    class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
                    data-act-class="!outline-base-content" data-set-theme="autumn">
                    <div class="bg-base-100 text-base-content w-full cursor-pointer font-sans" data-theme="autumn">
                      <div class="grid grid-cols-5 grid-rows-3">
                        <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                        <div class="bg-base-300 col-start-1 row-start-3"></div>
                        <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                          <div class="font-semibold">autumn</div>
                          <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-primary-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-secondary-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-accent-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-neutral-content text-sm font-semibold">A</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <!-- cmyk -->
                  <div
                    class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
                    data-act-class="!outline-base-content" data-set-theme="cmyk">
                    <div class="bg-base-100 text-base-content w-full cursor-pointer font-sans" data-theme="cmyk">
                      <div class="grid grid-cols-5 grid-rows-3">
                        <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                        <div class="bg-base-300 col-start-1 row-start-3"></div>
                        <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                          <div class="font-semibold">cmyk</div>
                          <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-primary-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-secondary-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-accent-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-neutral-content text-sm font-semibold">A</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- acid -->
                  <div
                    class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
                    data-act-class="!outline-base-content" data-set-theme="acid">
                    <div class="bg-base-100 text-base-content w-full cursor-pointer font-sans" data-theme="acid">
                      <div class="grid grid-cols-5 grid-rows-3">
                        <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                        <div class="bg-base-300 col-start-1 row-start-3"></div>
                        <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                          <div class="font-semibold">acid</div>
                          <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-primary-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-secondary-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-accent-content text-sm font-semibold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                              <div class="text-neutral-content text-sm font-semibold">A</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <input type="radio" name="theme-tabs" role="tab"
              class="tab-primary text-neutral-content tab prose prose-lg font-bold pl-5 pt-5" aria-label="Dark Themes"
              checked="false" />
            <div role="tabpanel" class="p-6 tab-content bg-neutral border-base-300 rounded-box">
              <div class="grid theme-grid grid-flow-row gap-5 p-5 text-xs">

                <!--  halloween -->
                <div
                  class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
                  data-act-class="!outline-base-content" data-set-theme="halloween">
                  <div class="bg-base-100 text-base-content w-full cursor-pointer font-sans" data-theme="halloween">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                      <div class="bg-base-300 col-start-1 row-start-3"></div>
                      <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-semibold">halloween</div>
                        <div class="flex flex-wrap gap-1">
                          <div class="bg-primary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-primary-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-secondary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-secondary-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-accent flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-accent-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-neutral flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-neutral-content text-sm font-semibold">A</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <!-- forest -->
                <div
                  class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
                  data-act-class="!outline-base-content" data-set-theme="forest">
                  <div class="bg-base-100 text-base-content w-full cursor-pointer font-sans" data-theme="forest">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                      <div class="bg-base-300 col-start-1 row-start-3"></div>
                      <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-semibold">forest</div>
                        <div class="flex flex-wrap gap-1">
                          <div class="bg-primary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-primary-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-secondary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-secondary-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-accent flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-accent-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-neutral flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-neutral-content text-sm font-semibold">A</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- black -->
                <div
                  class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
                  data-act-class="!outline-base-content" data-set-theme="black">
                  <div class="bg-base-100 text-base-content w-full cursor-pointer font-sans" data-theme="black">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                      <div class="bg-base-300 col-start-1 row-start-3"></div>
                      <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-semibold">black</div>
                        <div class="flex flex-wrap gap-1">
                          <div class="bg-primary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-primary-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-secondary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-secondary-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-accent flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-accent-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-neutral flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-neutral-content text-sm font-semibold">A</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- luxury -->
                <div
                  class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
                  data-act-class="!outline-base-content" data-set-theme="luxury">
                  <div class="bg-base-100 text-base-content w-full cursor-pointer font-sans" data-theme="luxury">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                      <div class="bg-base-300 col-start-1 row-start-3"></div>
                      <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-semibold">luxury</div>
                        <div class="flex flex-wrap gap-1">
                          <div class="bg-primary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-primary-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-secondary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-secondary-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-accent flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-accent-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-neutral flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-neutral-content text-sm font-semibold">A</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- dracula -->
                <div
                  class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
                  data-act-class="!outline-base-content" data-set-theme="dracula">
                  <div class="bg-base-100 text-base-content w-full cursor-pointer font-sans" data-theme="dracula">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                      <div class="bg-base-300 col-start-1 row-start-3"></div>
                      <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-semibold">dracula</div>
                        <div class="flex flex-wrap gap-1">
                          <div class="bg-primary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-primary-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-secondary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-secondary-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-accent flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-accent-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-neutral flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-neutral-content text-sm font-semibold">A</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>




                <!-- business -->
                <div
                  class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
                  data-act-class="!outline-base-content" data-set-theme="business">
                  <div class="bg-base-100 text-base-content w-full cursor-pointer font-sans" data-theme="business">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                      <div class="bg-base-300 col-start-1 row-start-3"></div>
                      <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-semibold">business</div>
                        <div class="flex flex-wrap gap-1">
                          <div class="bg-primary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-primary-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-secondary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-secondary-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-accent flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-accent-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-neutral flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-neutral-content text-sm font-semibold">A</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>





                <!-- night -->
                <div
                  class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
                  data-act-class="!outline-base-content" data-set-theme="night">
                  <div class="bg-base-100 text-base-content w-full cursor-pointer font-sans" data-theme="night">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                      <div class="bg-base-300 col-start-1 row-start-3"></div>
                      <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-semibold">night</div>
                        <div class="flex flex-wrap gap-1">
                          <div class="bg-primary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-primary-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-secondary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-secondary-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-accent flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-accent-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-neutral flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-neutral-content text-sm font-semibold">A</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- coffee -->
                <div
                  class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
                  data-act-class="!outline-base-content" data-set-theme="coffee">
                  <div class="bg-base-100 text-base-content w-full cursor-pointer font-sans" data-theme="coffee">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                      <div class="bg-base-300 col-start-1 row-start-3"></div>
                      <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-semibold">coffee</div>
                        <div class="flex flex-wrap gap-1">
                          <div class="bg-primary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-primary-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-secondary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-secondary-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-accent flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-accent-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-neutral flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-neutral-content text-sm font-semibold">A</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



                <!--  dim -->
                <div
                  class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
                  data-act-class="!outline-base-content" data-set-theme="dim">
                  <div class="bg-base-100 text-base-content w-full cursor-pointer font-sans" data-theme="dim">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                      <div class="bg-base-300 col-start-1 row-start-3"></div>
                      <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-semibold">dim</div>
                        <div class="flex flex-wrap gap-1">
                          <div class="bg-primary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-primary-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-secondary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-secondary-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-accent flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-accent-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-neutral flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-neutral-content text-sm font-semibold">A</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



                <!-- sunset -->
                <div
                  class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
                  data-act-class="!outline-base-content" data-set-theme="sunset">
                  <div class="bg-base-100 text-base-content w-full cursor-pointer font-sans" data-theme="sunset">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                      <div class="bg-base-300 col-start-1 row-start-3"></div>
                      <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-semibold">sunset</div>
                        <div class="flex flex-wrap gap-1">
                          <div class="bg-primary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-primary-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-secondary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-secondary-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-accent flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-accent-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-neutral flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-neutral-content text-sm font-semibold">A</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- dark  -->
                <div
                  class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
                  data-act-class="!outline-base-content" data-set-theme="dark">
                  <div class="bg-base-100 text-base-content w-full cursor-pointer font-sans" data-theme="dark">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                      <div class="bg-base-300 col-start-1 row-start-3"></div>
                      <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-semibold">dark</div>
                        <div class="flex flex-wrap gap-1">
                          <div class="bg-primary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-primary-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-secondary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-secondary-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-accent flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-accent-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-neutral flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-neutral-content text-sm font-semibold">A</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



              </div>
            </div>

            <input type="radio" name="theme-tabs" role="tab"
              class="bg-[var(--primary)] text-primary tab prose prose-lg font-bold pl-5 pt-5"
              aria-label="Colorful Themes" checked="false" />
            <div role="tabpanel" class="p-6 tab-content bg-primary border-base-300 rounded-box bg-opacity-35">
              <div class="grid theme-grid grid-flow-row gap-5 p-5 text-xs">

                <!--  lemonade -->
                <div
                  class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
                  data-act-class="!outline-base-content" data-set-theme="lemonade">
                  <div class="bg-base-100 text-base-content w-full cursor-pointer font-sans" data-theme="lemonade">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                      <div class="bg-base-300 col-start-1 row-start-3"></div>
                      <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-semibold">lemonade</div>
                        <div class="flex flex-wrap gap-1">
                          <div class="bg-primary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-primary-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-secondary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-secondary-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-accent flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-accent-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-neutral flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-neutral-content text-sm font-semibold">A</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- synthwave -->
                <div
                  class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
                  data-act-class="!outline-base-content" data-set-theme="synthwave">
                  <div class="bg-base-100 text-base-content w-full cursor-pointer font-sans" data-theme="synthwave">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                      <div class="bg-base-300 col-start-1 row-start-3"></div>
                      <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-semibold">synthwave</div>
                        <div class="flex flex-wrap gap-1">
                          <div class="bg-primary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-primary-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-secondary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-secondary-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-accent flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-accent-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-neutral flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-neutral-content text-sm font-semibold">A</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!--  retro -->
                <div
                  class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
                  data-act-class="!outline-base-content" data-set-theme="retro">
                  <div class="bg-base-100 text-base-content w-full cursor-pointer font-sans" data-theme="retro">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                      <div class="bg-base-300 col-start-1 row-start-3"></div>
                      <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-semibold">retro</div>
                        <div class="flex flex-wrap gap-1">
                          <div class="bg-primary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-primary-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-secondary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-secondary-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-accent flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-accent-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-neutral flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-neutral-content text-sm font-semibold">A</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <!-- cyberpunk -->
                <div
                  class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
                  data-act-class="!outline-base-content" data-set-theme="cyberpunk">
                  <div class="bg-base-100 text-base-content w-full cursor-pointer font-sans" data-theme="cyberpunk">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                      <div class="bg-base-300 col-start-1 row-start-3"></div>
                      <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-semibold">cyberpunk</div>
                        <div class="flex flex-wrap gap-1">
                          <div class="bg-primary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-primary-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-secondary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-secondary-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-accent flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-accent-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-neutral flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-neutral-content text-sm font-semibold">A</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- valentine -->
                <div
                  class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
                  data-act-class="!outline-base-content" data-set-theme="valentine">
                  <div class="bg-base-100 text-base-content w-full cursor-pointer font-sans" data-theme="valentine">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                      <div class="bg-base-300 col-start-1 row-start-3"></div>
                      <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-semibold">valentine</div>
                        <div class="flex flex-wrap gap-1">
                          <div class="bg-primary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-primary-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-secondary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-secondary-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-accent flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-accent-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-neutral flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-neutral-content text-sm font-semibold">A</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- aqua -->
                <div
                  class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
                  data-act-class="!outline-base-content" data-set-theme="aqua">
                  <div class="bg-base-100 text-base-content w-full cursor-pointer font-sans" data-theme="aqua">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                      <div class="bg-base-300 col-start-1 row-start-3"></div>
                      <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-semibold">aqua</div>
                        <div class="flex flex-wrap gap-1">
                          <div class="bg-primary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-primary-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-secondary flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-secondary-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-accent flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-accent-content text-sm font-semibold">A</div>
                          </div>
                          <div class="bg-neutral flex aspect-square w-4 items-center justify-center rounded lg:w-5">
                            <div class="text-neutral-content text-sm font-semibold">A</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>





      <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Tab 2" />
      <div role="tabpanel" class="p-6 tab-content bg-base-100 border-base-300 rounded-box">
        Tab content 2
      </div>

      <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Tab 3" />
      <div role="tabpanel" class="p-6 tab-content bg-base-100 border-base-300 rounded-box">
        Tab content 3
      </div>
    </div>




  </KeepAlive>
</template>


<style scoped>
.theme-grid {
  grid-template-columns: repeat(auto-fit, minmax(135px, 1fr));
}
</style>