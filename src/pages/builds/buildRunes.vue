<script setup lang="ts">
  import { onMounted, ref, computed } from 'vue';
  import { VueDraggable } from 'vue-draggable-plus';
  import { useBStore } from '../../stores/buildStore';
  import { useDataStore } from '../../stores/dataStore';
  import type { Rune } from '../../stores/dataStore';
  import { useRuneStore } from '../../stores/runeStore';
  const rs = useRuneStore();

  const ds = useDataStore();
  const bs = useBStore();
  const fs = ds.getShards();
  const runes = ds.runes;

  const colorClass = computed((n) => {
    return 'v' + rs.selectedSetKey + n;
  });

  onMounted(() => {
    const ds = useDataStore();
    const bs = useBStore();
    const fs = ds.getShards();
    console.log(fs);
    if (rs.runeSets.length < 1) {
      rs.newRuneSet();
      rs.defaultSet = rs.runeSets[0].key;
    }
  });
</script>

<template>
  <div class="flex gap-9 px-6 pb-4">
    <Splitpanes
      id="runesplit"
      horizontal
      class="default-theme max-w-[330px] max-h-[calc(100%-100px)] h-[calc(100%-100px)]">
      <Pane
        size="40"
        min-size="14"
        class="rounded-box !bg-base-100/90 border border-base-300 shadow-warm relative">
        <RuneSets />
      </Pane>

      <Pane>
        <RuneInfo />
      </Pane>
    </Splitpanes>

    <!-------------------------------- PRIMARY RUNES ------------------------------ */ -->

    <div
      class="rounded-box w-[340px] min-w-[340px] overflow-hidden border transition-all duration-300 ease border-base-300 shadow-warm relative gradient h-fit max-h-fit"
      :class="rs.selectedPaths.pathselect1">
      <div class="bg-gradient-to-b from-base-100/10 via-base-100/90 via-25% to-base-100 h-full">
        <!-- Only render the selected rune set -->
        <RunePath
          :data="rs.uniquePaths1"
          select-identifier="pathselect1" />
        <RuneGrid :set="1" />
      </div>
    </div>

    <!------------------------------- SECONDARY RUNES ----------------------------- */ -->

    <div>
      <div
        class="w-[320px] shadow-warm rounded-box border border-base-300 relative overflow-hidden h-fit max-h-fit gradient"
        :class="rs.selectedPaths.pathselect2">
        <div class="bg-gradient-to-b from-base-100/10 via-base-100/90 via-35% to-base-100 h-full">
          <RunePath
            :data="rs.uniquePaths2"
            select-identifier="pathselect2" />
          <div class="z-50">
            <RuneGrid :set="2" />
          </div>
        </div>
      </div>

      <!----------------------------------- SHARDS --------------------------------- */ -->

      <div class="frost shadow-warm rounded-box border border-base-300 relative h-fit max-h-fit mt-6">
        <div class="shadow-[inset_0px_0px_40px_#00000009] h-full w-full px-6 py-8">
          <RuneShards />
        </div>
      </div>
    </div>

    <div class="h-full grow"></div>
  </div>
</template>

<style>
  /* ] */
  .focus-hover:focus,
  .focus-hover:hover,
  .focus-hover:focus-within {
    @apply [&_button]:opacity-100 grow border-base-300 bg-base-100/50 shadow-inner ring-offset-base-content/40;
  }

  .gradient {
    background: linear-gradient(137deg, rgba(231, 207, 120, 0.7) 0%, rgba(220, 124, 124, 0.7) 20%, rgba(178, 164, 221, 0.7) 40%, rgba(175, 212, 150, 0.7) 60%, rgba(165, 226, 229, 0.7) 80%);
    background-size: 550%;
  }

  .none {
    background: linear-gradient(137deg, rgba(190, 190, 190, 1) 0%, rgba(193, 193, 193, 1) 19%, rgba(233, 233, 233, 1) 75%, rgba(252, 252, 252, 1) 100%);
    @apply transition-all duration-500;
  }

  .inspiration {
    background-position: 100%;

    @apply transition-all duration-500;

    #imgwrap {
      @apply ring-offset-sky-300/30;
    }
  }

  .resolve {
    background-position: 83%;
    @apply transition-all duration-500;

    #imgwrap {
      @apply ring-offset-lime-600/60;
    }
  }

  .sorcery {
    background-position: 42%;
    @apply transition-all duration-500;

    #imgwrap {
      @apply ring-offset-purple-400/60;
    }
  }

  .domination {
    background-position: 20%;
    @apply transition-all duration-500;

    #imgwrap {
      @apply ring-offset-red-500/60;
    }
  }

  .precision {
    background-position: 0%;

    @apply transition-all duration-500;

    #imgwrap {
      @apply ring-offset-amber-500/60;
    }
  }
</style>
