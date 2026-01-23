import { iconSetQuartzLight, themeQuartz } from 'ag-grid-community'

export const masteryGridTheme = themeQuartz
  .withPart(iconSetQuartzLight)
  .withParams({
    // oddRowBackgroundColor: 'var(--b2) / 60%',
    sidePanelBorder: true,
    widgetContainerHorizontalPadding: 9,
    widgetContainerVerticalPadding: 5,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderRadius: '0.5rem',
    cellHorizontalPadding: 16,
    cellTextColor: 'var(--bc)',
    columnBorder: false,
    fontFamily: 'var(--font-sans), system ui',
    fontSize: '12px',
    headerBackgroundColor: 'transparent',
    headerFontWeight: 500,
    headerTextColor: 'var(--bc)/0.8',
    headerVerticalPaddingScale: 0.6,
    rangeSelectionBorderStyle: 'none',
    rowBorder: true,
    rowHoverColor: 'transparent',
    rowVerticalPaddingScale: 1.1,
    selectCellBorder: true,
    selectedRowBackgroundColor: 'transparent',
    tooltipBackgroundColor: 'var(--color-neutral)',
    tooltipBorder: 'var(--color-n3)',
    tooltipTextColor: 'var(--color-nc)',
    wrapperBorder: false,
  })
