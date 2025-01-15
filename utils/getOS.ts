export default function getOS() {
  if (navigator.userAgent.indexOf('Mac OS X') != -1) {
    useTempStore().userOS = 'Mac';
    console.log('🍎 - getOS - userOS:', useTempStore().userOS);
  } else {
    useTempStore().userOS = 'Windows';
    console.log('🪟 - getOS - userOS:', useTempStore().userOS);
  }
}
