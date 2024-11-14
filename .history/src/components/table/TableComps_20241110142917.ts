import TableName from './table-name.vue'
import pocketNotes from './table-notes.vue'
import PocketTableChamps from './table-champions.vue'
import pocketTableItems from './table-items.vue'
import pocketTableRunes from './table-runes.vue'
import tableDate from './table-date.vue'
import TableCheckbox from './table-checkbox.vue'
import TableHeader from './table-header.vue'
import TableCheckboxHeader from './table-checkbox-header.vue'

export const useComps = defineExpose(() => {
    TableName,
    TableHeader,
    pocketTableItems,
    PocketTableChamps,
    pocketTableRunes,
    pocketNotes,
    tableDate,
    TableCheckboxHeader,
    TableCheckbox
})