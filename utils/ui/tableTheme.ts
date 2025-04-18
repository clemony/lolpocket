import { iconSetQuartzLight, provideGlobalGridOptions, themeQuartz } from 'ag-grid-community'

export const pocketTheme = themeQuartz.withPart(iconSetQuartzLight).withParams({
  backgroundColor: 'transparent',
  fontFamily: 'var(--font-sans), system ui',
  fontSize: '12px',
  // foregroundColor: 'transparent',
  cellTextColor: 'var(--bc)',
  headerBackgroundColor: 'transparent',
  headerTextColor: 'var(--bc)/0.8',
  headerFontWeight: 500,
  headerVerticalPaddingScale: 0.6,
  rowVerticalPaddingScale: 1.1,
  cellHorizontalPadding: 6,
  // oddRowBackgroundColor: 'var(--b2) / 60%',
  rowHoverColor: 'transparent',
  selectedRowBackgroundColor: 'transparent',
  rowBorder: true,
  borderColor: 'transparent',
  rangeSelectionBorderStyle: 'none',
  selectCellBorder: true,
  sidePanelBorder: true,
  wrapperBorder: false,
  wrapperBorderRadius: '0.7rem',
  columnBorder: false,
  columnHoverColor: 'color-mix(in oklch, var(--b2) 30%, transparent)',
  checkboxCheckedBackgroundColor: 'var(--neutral)/0.8',
  checkboxCheckedBorderColor: 'var(--neutral)',
  checkboxCheckedShapeColor: 'var(--b1)',
  checkboxIndeterminateBackgroundColor: '#1C3043',
  checkboxIndeterminateBorderColor: '#1F3A4F',
  checkboxIndeterminateShapeColor: 'var(--b1)',
  checkboxUncheckedBackgroundColor: 'transparent',
  checkboxUncheckedBorderColor: 'var(--neutral)',
  // chromeBackgroundColor: "#654D4D",
  borderRadius: '0.7rem',
  tooltipBackgroundColor: 'var(--neutral)',
  tooltipTextColor: 'var(--nc)',
  widgetContainerHorizontalPadding: 9,
  widgetContainerVerticalPadding: 5,
  tooltipBorder: false,
})

// provide localeText to all grids via global options
provideGlobalGridOptions({
  icons: {
    filter: '<div class="size-full align-text-top leading-tight items-start -mt-1.5 opacity-60 hover:opacity-100">. . .</div>',
    sortAscending: '<div class="text-4 text-bc -mb-0.5">⌃</div>',

    sortDescending: '<div class="text-6 text-bc -mt-3">⌵</div>',
  },
})
