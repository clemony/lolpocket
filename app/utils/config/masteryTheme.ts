import { iconSetQuartzLight, themeQuartz } from 'ag-grid-community'

export const masteryGridTheme = themeQuartz
  .withPart(iconSetQuartzLight)
  .withParams({
    backgroundColor: 'transparent',
    cellHorizontalPadding: 16,
    cellTextColor: 'var(--bc)',
    fontFamily: 'var(--font-sans), system ui',
    fontSize: '12px',
    headerBackgroundColor: 'transparent',
    headerFontWeight: 500,
    headerTextColor: 'var(--bc)/0.8',
    headerVerticalPaddingScale: 0.6,
    rowVerticalPaddingScale: 1.1,
    // oddRowBackgroundColor: 'var(--b2) / 60%',
    sidePanelBorder: true,
    widgetContainerHorizontalPadding: 9,
    widgetContainerVerticalPadding: 5,
    borderColor: 'transparent',
    borderRadius: '0.5rem',
    columnBorder: false,
    rangeSelectionBorderStyle: 'none',
    rowBorder: true,
    rowHoverColor: 'transparent',
    selectCellBorder: true,
    selectedRowBackgroundColor: 'transparent',
    tooltipBackgroundColor: 'var(--color-b1)',
    tooltipBorder: 'var(--color-b3)',
    tooltipTextColor: 'var(--color-bc)',
    wrapperBorder: false,
  })
