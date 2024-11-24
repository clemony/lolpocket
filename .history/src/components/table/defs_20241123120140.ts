import { pocket } from 'types'
import { usePocketStore } from '@/stores/pocketStore'

export const columnDefs = ref([
    {
        headerName: '',
        colId: 'checkbox',
        headerComponent: 'TableCheckboxHeader',
        width: 50,
        maxWidth: 50,
        minWidth: 50,
        pinned: 'left',
        cellRenderer: 'TableCheckbox',
        filter: false,
    },

    {
        headerName: 'Pocket',
        field: 'name',
        cellRenderer: 'TableName',
        width: 170,
        //hide: true,
        maxWidth: 200,
        minWidth: 180,
        cellClass: 'w-[170px] !p-0',
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
            return champions.map((champion) => champion.name).join(', ')
        },
        width: 200,
        maxWidth: 300,
        minWidth: 47,
        cellRenderer: 'PocketTableChamps',
        cellClass:
            '!overflow-x-auto flex items-center !w-200px !p-0 rounded-l overflow-hidden',

        valueFormatter: (params) => {
            if (params.value && params.value.champions) {
                return params.value.champions
                    .map((champion) => champion.name)
                    .join(', ')
            }
            return ''
        },
    },
    {
        headerName: 'Items',
        width: 400,
        maxWidth: 500,
        minWidth: 50,
        cellRenderer: 'pocketTableItems',
        filterValueGetter: (params) => {
            if (params.data.items[0].itemSets[0]) {
                const items = params.data.items[0].itemSets[0].items
                return items.map((item) => item.name).join(', ')
            }
        },
        valueFormatter: (params) => {
            if (params.value && params.value.itemSets[0]) {
                return params.value.itemSets[0].items
                    .map((item) => item.name)
                    .join(', ')
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
        headerName: 'Notes',
        hide: true,
        width: 400,
        maxWidth: 500,
        minWidth: 50,
        cellRenderer: 'pocketNotes',
        filterValueGetter: (params) => {
            const notes = params.data.notes.split(' ')
            return notes
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
    cellClass: ['flex items-center !px-1 py-[3px]'],
    sortable: true,
    filter: true,
    resizable: true,
}

export const rowSelection = {
    mode: 'multiRow',
    checkboxes: false,
    enableClickSelection: false,
    hideDisabledCheckboxes: true,
    headerCheckbox: false,
}

export const autoSizeStrategy = {
    type: 'fitGridWidth',
}

export const getRowId = (params) => params.data.key

export const quickFilterParser = (quickFilter) => {
    let quickFilterParts: string[] = []
    let lastSpaceIndex = -1

    const isQuote = (index) => quickFilter[index] === '"'

    const getQuickFilterPart = (
        lastSpaceIndex: number,
        currentIndex: number
    ): string => {
        const startsWithQuote = isQuote(lastSpaceIndex + 1)
        const endsWithQuote = isQuote(currentIndex - 1)
        const startIndex =
            startsWithQuote && endsWithQuote ?
                lastSpaceIndex + 2
            :   lastSpaceIndex + 1
        const endIndex =
            startsWithQuote && endsWithQuote ? currentIndex - 1 : currentIndex
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
        quickFilterParts.push(
            getQuickFilterPart(lastSpaceIndex, quickFilter.length)
        )
    }
    return quickFilterParts
}

export const quickFilterMatcher = (
    quickFilterParts,
    rowQuickFilterAggregateText
) => {
    let result
    try {
        result = quickFilterParts.every((part) =>
            rowQuickFilterAggregateText.match(part)
        )
    } catch {
        result = false
    }
    return result
}
