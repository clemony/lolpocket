import { iconSetQuartzLight, themeQuartz } from 'ag-grid-community';
import { provideGlobalGridOptions } from 'ag-grid-community';
import { Icon } from '@iconify/vue';
export const pocketTheme = themeQuartz.withPart(iconSetQuartzLight).withParams({
  accentColor: 'oklch(var(--b3))',
  backgroundColor: 'transparent',
  fontFamily: 'Geist Sans, system ui',
  fontSize: '12px',
  foregroundColor: '#000000',
  headerBackgroundColor: 'oklch(var(--b2) / 20%)',
  headerTextColor: 'oklch(var(--bc)/0.8)',
  headerFontWeight: 500,
  headerVerticalPaddingScale: 0.4,
  rowVerticalPaddingScale: 1.9,
  //oddRowBackgroundColor: 'oklch(var(--b2) / 40%)',
  rowBorder: true,
  borderColor: 'oklch(var(--b2)/0.6)',

  sidePanelBorder: true,
  wrapperBorder: false,
  wrapperBorderRadius: '0px',
  // columnBorder: true,
});
import { ref } from 'vue';

// provide localeText to all grids via global options
provideGlobalGridOptions({
  icons: {},
});
