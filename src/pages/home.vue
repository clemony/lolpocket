<script setup lang="ts">
import { Icon } from '@iconify/vue';
interface article {
    title: string
    source: string
    icon?: string
    source2?: string
    image: string
}

const hasSource2 = ref('false');

</script>

<template>



    <div class="w-full py-4 grid gap-y-3  m-0 !z-0">


        <div class="gap-2 flex items-end">
            <h2 class="text-2xl font-semibold font-serif tracking-tight">
                League News
            </h2>
            <p class="text-sm text-muted-foreground italic pb-[3px]">
                the happening things.
            </p>
        </div>
        <div class="flex h-64 gap-5 pointer-events-none">


        </div>



        <div class="grid grid-cols-2 gap-6 pr-12 w-full pt-2">
            <div class="col-start-1 grid grid-cols-1 gap-3">
                <h2 class="text-lg font-normal tracking-tight h-10">
                    Recent Builds
                </h2>
                <div
                    class="overflow-x-hidden overflow-y-scroll scrollbar-hide  card bg-base-100/60  backdrop-blur-md shadow-lg">
                    <table class="table table-pin-rows">
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
                                            <div class="rounded-lg h-12 w-12">
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
                                            <div class="rounded-lg h-12 w-12">
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
                                            <div class="rounded-lg h-12 w-12">
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
                                            <div class="rounded-lg h-12 w-12">
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


            <div class="col-start-2 grid grid-cols-1 gap-3">
                <h2 class="text-lg font-medium h-10">
                    Champion Winrates
                </h2>

                <div class="overflow-x-auto  card bg-base-100/60 backdrop-brightness-105 backdrop-blur-m shadow-lg">

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
                                            <div class="rounded-lg h-12 w-12">
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
                                            <div class="rounded-lg h-12 w-12">
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
                                            <div class="rounded-lg h-12 w-12">
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
                                            <div class="rounded-lg h-12 w-12">
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


</template>
