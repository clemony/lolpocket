import { iconSetQuartzLight, themeQuartz } from 'ag-grid-community'

export const masteryGridTheme = themeQuartz
  .withPart(iconSetQuartzLight)
  .withParams({
    backgroundColor: 'transparent',
    fontFamily: 'var(--font-sans), system ui',
    fontSize: '12px',
    cellTextColor: 'var(--bc)',
    headerBackgroundColor: 'transparent',
    headerTextColor: 'var(--bc)/0.8',
    headerFontWeight: 500,
    headerVerticalPaddingScale: 0.6,
    rowVerticalPaddingScale: 1.1,
    cellHorizontalPadding: 16,
    // oddRowBackgroundColor: 'var(--b2) / 60%',
    rowHoverColor: 'transparent',
    selectedRowBackgroundColor: 'transparent',
    rowBorder: true,
    borderColor: 'transparent',
    rangeSelectionBorderStyle: 'none',
    selectCellBorder: true,
    sidePanelBorder: true,
    wrapperBorder: false,
    columnBorder: false,
    borderRadius: '0.7rem',
    tooltipBackgroundColor: 'var(--neutral)',
    tooltipTextColor: 'var(--nc)',
    widgetContainerHorizontalPadding: 9,
    widgetContainerVerticalPadding: 5,
    tooltipBorder: false,
  })
