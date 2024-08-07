<script setup lang="ts">

</script>

<template>
  <KeepAlive>
    <div id="main" class="flex-1">
      <div class="grid-header">
        <h2>Settings</h2>



      </div>

      <div role="tablist" class="tabs tabs-lifted">
        <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Theme" checked="true" />
        <div role="tabpanel" class="p-6 tab-content bg-base-100 border-base-300 rounded-box">


          <div class="form-control">
            <label class="gap-4 cursor-pointer label">
              <span class="label-text">Lofi</span>
              <input type="radio" name="theme-radios" class="radio theme-controller" value="lofi" />
            </label>
          </div>
          <label class="gap-4 cursor-pointer label">
            <span class="label-text">Nord</span>
            <input type="radio" name="theme-radios" class="radio theme-controller" value="nord" />
          </label>
          <div class="form-control">
            <label class="gap-4 cursor-pointer label">
              <span class="label-text">Retro</span>
              <input type="radio" name="theme-radios" class="radio theme-controller" value="retro" />
            </label>
          </div>
          <div class="form-control">
            <label class="gap-4 cursor-pointer label">
              <span class="label-text">Cyberpunk</span>
              <input type="radio" name="theme-radios" class="radio theme-controller" value="cyberpunk" />
            </label>
          </div>
          <div class="form-control">
            <label class="gap-4 cursor-pointer label">
              <span class="label-text">Valentine</span>
              <input type="radio" name="theme-radios" class="radio theme-controller" value="valentine" />
            </label>
          </div>
          <div class="form-control">
            <label class="gap-4 cursor-pointer label">
              <span class="label-text">Aqua</span>
              <input type="radio" name="theme-radios" class="radio theme-controller" value="aqua" />
            </label>
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


    </div>

  </KeepAlive>
</template>
