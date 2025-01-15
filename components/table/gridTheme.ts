import { iconSetQuartzLight, themeQuartz } from 'ag-grid-community'
import { provideGlobalGridOptions } from 'ag-grid-community'
import { Icon } from '@iconify/vue'
export const pocketTheme = themeQuartz.withPart(iconSetQuartzLight).withParams({
    backgroundColor: 'transparent',
    fontFamily: 'Geist Sans, system ui',
    fontSize: '12px',
    foregroundColor: '#000000',
    cellTextColor: 'var(--ac)',
    headerBackgroundColor: 'var(--b2) / 20%',
    headerTextColor: 'var(--bc)/0.8',
    headerFontWeight: 500,
    headerVerticalPaddingScale: 0.4,
    rowVerticalPaddingScale: 2,
    oddRowBackgroundColor: 'var(--b2) / 30%',
    rowHoverColor: 'var(--b2) / 40%',
    rowBorder: false,
    borderColor: 'var(--b2)/0.6',
    rangeSelectionBorderStyle: 'none',
    selectCellBorder: false,
    sidePanelBorder: true,
    wrapperBorder: false,
    wrapperBorderRadius: '0.7rem',
    columnBorder: false,
    checkboxCheckedBackgroundColor: 'var(--neutral)/0.8',
    checkboxCheckedBorderColor: 'var(--neutral)',
    checkboxCheckedShapeColor: 'var(--b1)',
    checkboxIndeterminateBackgroundColor: '#1C3043',
    checkboxIndeterminateBorderColor: '#1F3A4F',
    checkboxIndeterminateShapeColor: 'var(--b1)',
    checkboxUncheckedBackgroundColor: 'transparent',
    checkboxUncheckedBorderColor: 'var(--neutral)/0.25',
    // chromeBackgroundColor: "#654D4D",
    borderRadius: '0.7rem',
})

// provide localeText to all grids via global options
provideGlobalGridOptions({
    icons: {
        filter: '<div class="size-full align-text-top leading-tight items-start -mt-1.5 opacity-60 hover:opacity-100">. . .</div>',
    },
})
