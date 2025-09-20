import { provideGlobalGridOptions } from 'ag-grid-community'

// provide  to all grids via global options
provideGlobalGridOptions({
  icons: {
    filter:
      '<div class="size-full align-text-top leading-tight items-start -mt-1.5 opacity-60 hover:opacity-100">. . .</div>',
    sortAscending: '<div class="text-md text-bc -mb-0.5">⌃</div>',
    sortDescending: '<div class="text-6 text-bc -mt-3">⌵</div>',
  },
})
