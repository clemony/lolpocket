import { iconSetQuartzLight, themeQuartz } from 'ag-grid-community'
import { provideGlobalGridOptions } from 'ag-grid-community'
import { Icon } from '@iconify/vue'
export const pocketTheme = themeQuartz.withPart(iconSetQuartzLight).withParams({
    accentColor: 'oklch(var(--b3))',
    backgroundColor: 'transparent',
    fontFamily: 'Geist Sans, system ui',
    fontSize: '12px',
    foregroundColor: '#000000',
    cellTextColor: 'oklch(var(--bc))',
    headerBackgroundColor: 'oklch(var(--b2) / 20%)',
    headerTextColor: 'oklch(var(--bc)/0.8)',
    headerFontWeight: 500,
    headerVerticalPaddingScale: 0.4,
    rowVerticalPaddingScale: 2,
oddRowBackgroundColor: 'oklch(var(--b2) / 20%)',
 rowHoverColor:  'oklch(var(--b2) / 40%)',
    rowBorder: false,
    borderColor: 'oklch(var(--b2)/0.6)',
        rangeSelectionBorderStyle: "none",
        selectCellBorder: false,
    sidePanelBorder: true,
    wrapperBorder: false,
    wrapperBorderRadius: '0px',
     columnBorder: false,
       checkboxCheckedBackgroundColor: 'oklch(var(--n)/0.8)',
        checkboxCheckedBorderColor: 'oklch(var(--n))',
        checkboxCheckedShapeColor: 'oklch(var(--b1))',
        checkboxIndeterminateBackgroundColor: "#1C3043",
        checkboxIndeterminateBorderColor: "#1F3A4F",
        checkboxIndeterminateShapeColor: 'oklch(var(--b1))',
        checkboxUncheckedBackgroundColor: 'transparent',
        checkboxUncheckedBorderColor: 'oklch(var(--n)/0.25)',
       // chromeBackgroundColor: "#654D4D",
        borderRadius: "8px",
})


// provide localeText to all grids via global options
provideGlobalGridOptions({
    icons: {
        filter: '<div class="size-full align-text-top leading-tight items-start -mt-1.5 opacity-60 hover:opacity-100">. . .</div>'
    },
})
