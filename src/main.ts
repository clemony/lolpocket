import App from './pages/App.vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { getCurrent } from '../node_modules/@tauri-apps/api/window.js';
import { routes } from 'vue-router/auto-routes';
import { Splitpanes, Pane } from 'splitpanes';
import { Icon } from '@iconify/vue';
import { useDataStore } from './stores/dataStore';
import { useUserStore } from './stores/userStore.js';
import Vue3Toastify, { toast, type ToastContainerOptions, type CSSTransitionProps } from 'vue3-toastify';
import FloatingVue from 'floating-vue';
import { createVfm } from 'vue-final-modal';

const getRoutes = routes;

// Create the router instance using generated routes
const router = createRouter({
  history: createWebHistory(),
  routes, // Use the resolved routes
});

const app = createApp(App);

// Get the current webview window
const currentWindow = getCurrent();

document.addEventListener('DOMContentLoaded', () => {
  const minimizeButton = document.getElementById('titlebar-minimize');
  if (minimizeButton && currentWindow) {
    minimizeButton.addEventListener('click', () => currentWindow.minimize());
  }

  const maximizeButton = document.getElementById('titlebar-maximize');
  if (maximizeButton && currentWindow) {
    maximizeButton.addEventListener('click', () => currentWindow.toggleMaximize());
  }

  const closeButton = document.getElementById('titlebar-close');
  if (closeButton && currentWindow) {
    closeButton.addEventListener('click', () => currentWindow.close());
  }
});

type TitleBarStyle = 'visible' | 'transparent' | 'overlay';

interface WindowOptions {
  titleBarStyle?: TitleBarStyle;
}

const customAnimation = {
  enter: 'fade-in-bottom',
  exit: 'fade-out-bottom',
  // appendPosition: true, // default to false
} as CSSTransitionProps;

const vfm = createVfm();

app.component('Splitpanes', Splitpanes);
app.component('Pane', Pane);
app.component('Icon', Icon);

export type { TitleBarStyle, WindowOptions };
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(router);
app.use(vfm);
app.use(FloatingVue, {
  disabled: false,
  distance: 5,
  skidding: 0,
  container: 'body',
  boundary: undefined,
  instantMove: false,
  disposeTimeout: 5000,
  popperTriggers: [''],
  strategy: 'absolute',
  preventOverflow: true,
  flip: true,
  shift: true,
  // Overflow padding (px)
  overflowPadding: 15,
  // Arrow padding (px)
  arrowPadding: 30,
  // Compute arrow overflow (useful to hide it)
  arrowOverflow: true,
  /**
   * By default, compute autohide on 'click'.
   */
  themes: {
    detail: {
      $resetCss: false,
      triggers: ['click', 'focus'],
      autoHide: true,
      eagerMount: false,
      flip: true,
      instantMove: true,
      placement: 'bottom',
      handleResize: true,
      overflowPadding: 25,
    },
    minitt: {
      $extend: 'tooltip',
      triggers: ['hover'],
      eagerMount: false,
      delay: {
        show: 600,
        hide: 200,
      },
      autoHide: true,
      placement: 'bottom',
    },
    menuLight: {
      $extend: 'dropdown',
      triggers: ['click'],
      autoHide: true,
      placement: 'bottom',
      distance: 8,
      instantMove: true,
      boundary: '#itemGrid',
      delay: {
        show: 100,
        hide: 0,
      },
    },
    btn: {
      $extend: 'tooltip',
      triggers: ['click'],
      eagerMount: false,
      delay: {
        show: 600,
        hide: 200,
      },
      autoHide: true,
    },
    overlay: {
      $extend: 'dropdown',
      triggers: ['click'],
      autoHide: true,
      placement: 'bottom-start',
    },
    menuDark: {
      $extend: 'menu',
      eagerMount: false,
      distance: 1,
      placement: 'right-start',
      instantMove: true,
    },
  },
});
app.use(Vue3Toastify, {
  autoClose: 4000,
  hideProgressBar: true,
  transition: customAnimation,
  position: toast.POSITION.TOP_CENTER,
  toastClassName: 'toasty',
} as ToastContainerOptions);

const ds = useDataStore();
const us = useUserStore();
ds.fetchData();
// Mount the app to the element with id "app" in your HTML
app.mount('#app');
