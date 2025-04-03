<script lang="ts" setup>
/* @property --border-angle {
  inherits: false;
  initial-value: 0deg;
  syntax: '<angle>';
}    */
</script>

<template>
  <!-- Animated Gradient Border -->
  <section class="flex justify-center">
    <!-- Card -->
    <div class="w-full max-w-[422px] [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent animate-border">
      <div class="p-5">
        <div class="flex justify-between items-center">
          <div>
            <div class="flex space-x-2 items-center mb-0.5">
              <div class="text-2xl font-bold text-slate-200 mb-1">
                17,479
              </div>
              <div class="text-xs font-medium text-emerald-500">
                +48%
              </div>
            </div>
            <div class="text-sm font-medium text-slate-500">
              Monthly visits
            </div>
          </div>
          <button class="w-8 h-8 flex justify-center items-center text-slate-500 hover:text-slate-400">
            <span class="sr-only">Open menu</span>
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="4" fill="none">
              <path d="M8 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM14 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
            </svg>
          </button>
        </div>
      </div>
      <div class="px-5">
        <img class="group-hover:opacity-0 transition-opacity duration-500" src="https://cruip-tutorials.vercel.app/animated-gradient-border/card-01.png" width="380" height="173" alt="Card image 01">
      </div>
    </div>
  </section>
</template>