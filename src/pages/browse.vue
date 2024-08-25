<template>
  <KeepAlive>
    <div class="drawer drawer-end">
      <input id="my-drawer" type="checkbox" class="drawer-toggle hidden" />
      <div class="drawer-content z-10">
        <!-- Champ Tab -->

        <div id="" class="main flex-1">
          <div role="tablist" class="tabs layout">
            <input
              type="radio"
              name="browse-tabs"
              role="tab"
              class="tab font-semibold"
              aria-label="Champions"
              checked
            />

            <div role="tabpanel" class="tab-content"></div>

            <input
              type="radio"
              name="browse-tabs"
              role="tab"
              class="tab font-semibold"
              aria-label="Items"
            />

            <div role="tabpanel" class="tab-content">
              <Items />
            </div>
          </div>
        </div>
      </div>
    </div>
  </KeepAlive>
</template>
