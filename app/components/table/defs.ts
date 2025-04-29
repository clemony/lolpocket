export const columnDefs = ref([
  {
    headerName: '',
    field: 'checkbox header',
    colId: 'checkbox',
    headerComponent: 'TableCheckboxHeader',
    width: 50,
    maxWidth: 50,
    minWidth: 50,
    pinned: 'right',
    cellRenderer: 'TableCheckbox',
    filter: false,
    valueFormatter: '',
    filterValueGetter: '',
  },

  {
    headerName: 'Pocket',
    field: 'name',
    cellRenderer: 'TableName',
    width: 250,
    maxWidth: 300,
    minWidth: 85,
    cellClass: 'm-0! px-2',
    filterValueGetter: (params) => {
      const name = params.data.name.split(' ')
      return name
    },
  },
  {
    headerName: 'Champions',
    field: 'header', // The field in the row data
    filter: 'agTextColumnFilter', // Set the text filter
    filterValueGetter: (params) => {
      const champions = params.data.champions[0].champions
      return champions.map(champion => champion.name).join(', ')
    },
    width: 200,
    maxWidth: 300,
    minWidth: 49,
    cellRenderer: 'PocketTableChamps',
    cellClass: 'overflow-x-auto! flex items-center w-200px! p-0! rounded-l overflow-hidden',

    valueFormatter: (params) => {
      if (params.value && params.value.champions) {
        return params.value.champions.map(champion => champion.name).join(', ')
      }
      return ''
    },
  },
  {
    headerName: 'Items',
    width: 400,
    maxWidth: 500,
    minWidth: 49,
    cellRenderer: 'pocketTableItems',
    filterValueGetter: (params) => {
      if (params.data.items[0].itemSets[0]) {
        const items = params.data.items[0].itemSets[0].items
        return items.map(item => item.name).join(', ')
      }
    },
    valueFormatter: (params) => {
      if (params.value && params.value.itemSets[0]) {
        return params.value.itemSets[0].items.map(item => item.name).join(', ')
      }
      return ''
    },
  },
  {
    headerName: 'Runes',
    width: 120,
    cellRenderer: 'pocketTableRunes',
  },
  {
    headerName: 'Updated',
    field: 'dateUpdated',
    width: 100,

    maxWidth: 200,
    minWidth: 50,
    cellRenderer: 'tableDate',
    cellRendererParams: { type: 'updated' },
    valueFormatter: (params) => {
      const { date, time, patch } = params.value
      return `${date} - ${time} (Patch: ${patch})`
    },
    filterValueGetter: (params) => {
      const dateObj = params.data.dateUpdated[0]
      return `${dateObj.date}, ${dateObj.patch}, ${dateObj.time}`
    },
  },

  {
    // ⟳
    headerName: 'Created',
    field: 'dateCreated',
    width: 100,
    maxWidth: 200,
    minWidth: 50,
    cellRenderer: 'tableDate',
    cellRendererParams: { type: 'created' },
    valueFormatter: (params) => {
      const { date, time, patch } = params.value
      return `${date} - ${time} (Patch: ${patch})`
    },
    filterValueGetter: (params) => {
      const dateObj = params.data.dateCreated[0]
      return `${dateObj.date}, ${dateObj.patch}, ${dateObj.time}`
    },
  },

  {
    headerName: 'Tags',
    width: 200,
    maxWidth: 500,
    minWidth: 50,
    cellRenderer: 'TableTags',
    filterValueGetter: (params) => {
      const tags = params.data.tags
      return tags
    },
  },
])

export const defaultColDef = {
  flex: 1,
  cellClass: ['flex items-center p-0 m-0'],
  sortable: true,
  // filter: false,
  resizable: true,
}

export const iconColDef = {
  /* width: 100,
  headerComponentParams: {
    template: `<div class="ag-cell-label-container" role="presentation">
              <span data-ref="eMenu" class="ag-header-icon ag-header-cell-menu-button"></span>
              <span data-ref="eFilterButton" class="ag-header-icon ag-header-cell-filter-button"></span>
              <div data-ref="eLabel" class="ag-header-cell-label" role="presentation">
                <span data-ref="eSortOrder" class="ag-header-icon ag-sort-order"></span>
                <span data-ref="eSortAsc" class="ag-header-icon ag-sort-ascending-icon"></span>
                <span data-ref="eSortDesc" class="ag-header-icon ag-sort-descending-icon"></span>
                <span data-ref="eSortNone" class="ag-header-icon ag-sort-none-icon"></span>
                ** <span data-ref="eText" class="ag-header-cell-text" role="columnheader">
                 <icon :name="lsicon:refresh-done-outline" />
                 </span>
                <span data-ref="eFilter" class="ag-header-icon ag-filter-icon"></span>
              </div>
            </div>`,
  }, */
}

export const rowSelectionOptions = {
  mode: 'multiple',
  checkboxes: false,
  enableClickSelection: false,
  hideDisabledCheckboxes: true,
  headerCheckbox: false,
}

export const autoSizeStrategy = {
  type: 'fitGridWidth',
}

export const getRowId = params => params.data.key

export function quickFilterParser(quickFilter) {
  const quickFilterParts: string[] = []
  let lastSpaceIndex = -1

  const isQuote = index => quickFilter[index] === '"'

  const getQuickFilterPart = (lastSpaceIndex: number, currentIndex: number): string => {
    const startsWithQuote = isQuote(lastSpaceIndex + 1)
    const endsWithQuote = isQuote(currentIndex - 1)
    const startIndex = startsWithQuote && endsWithQuote ? lastSpaceIndex + 2 : lastSpaceIndex + 1
    const endIndex = startsWithQuote && endsWithQuote ? currentIndex - 1 : currentIndex
    return quickFilter.slice(startIndex, endIndex)
  }
  for (let i = 0; i < quickFilter.length; i++) {
    const char = quickFilter[i]
    if (char === ' ') {
      if (!isQuote(lastSpaceIndex + 1) || isQuote(i - 1)) {
        quickFilterParts.push(getQuickFilterPart(lastSpaceIndex, i))
        lastSpaceIndex = i
      }
    }
  }
  if (lastSpaceIndex !== quickFilter.length - 1) {
    quickFilterParts.push(getQuickFilterPart(lastSpaceIndex, quickFilter.length))
  }
  return quickFilterParts
}

export function quickFilterMatcher(quickFilterParts, rowQuickFilterAggregateText) {
  let result
  try {
    result = quickFilterParts.every(part => rowQuickFilterAggregateText.match(part))
  }
  catch {
    result = false
  }
  return result
}
