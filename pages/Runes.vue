<script setup lang="ts">

</script>

<template>
  <main>
    <Header class="flex">
      <h1>Runes</h1>

      <div class="ml-6 flex gap-2 pt-px">
        <icon
          name="ph:mouse-right-click-fill"
          class="mt-px size-4.5"
        />
        rune to open details in sidebar.
      </div>
    </Header>
    <LayoutSpacer class="h-46" />
    <RunePanels />
  </main>
</template>

<style>
  .gradient {
  background: linear-gradient(
    137deg,
    rgba(231, 207, 120, 0.7) 0%,
    rgba(220, 124, 124, 0.7) 20%,
    rgba(178, 164, 221, 0.7) 40%,
    rgba(175, 212, 150, 0.7) 60%,
    rgba(165, 226, 229, 0.7) 80%
  );
  background-size: 550%;
}

/* .border-gradient {
    border-image: linear-gradient(
            to right,
            var(--b1),
            rgba(0, 0, 0, 0),
            var(--b1)
        )
        2;
}
 */

.empty {
  background: linear-gradient(
    137deg,
    rgba(190, 190, 190, 1) 0%,
    rgba(193, 193, 193, 0.8) 10%,
    rgba(233, 233, 233, 1) 75%,
    rgba(252, 252, 252, 0) 90%
  );
}

[data-path=''],
[data-path='Precision'],
[data-path='Domination'],
[data-path='Sorcery'],
[data-path='Resolve'],
[data-path='Inspiration'] {
  transition: all 0.5s ease-in-out;
}

[data-path='Precision'] {
  background-position: 0%;
}

[data-path='Domination'] {
  background-position: 20%;
}

[data-path='Sorcery'] {
  background-position: 42%;
}

[data-path='Resolve'] {
  background-position: 83%;
}

[data-path='Inspiration'] {
  background-position: 100%;
}
</style>
