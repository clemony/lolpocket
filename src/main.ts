import App from './pages/App.vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from 'vue-router/auto-routes';
import { Splitpanes, Pane } from 'splitpanes';
import { Icon } from '@iconify/vue';
import { useDataStore } from './stores/dataStore';
import { usegeneralStore } from './stores/generalStore.js';
import Vue3Toastify, { toast, type ToastContainerOptions, type CSSTransitionProps } from 'vue3-toastify';
import FloatingVue from 'floating-vue';

const getRoutes = routes;

// Create the router instance using generated routes
const router = createRouter({
  history: createWebHistory(),
  routes, // Use the resolved routes
});

const app = createApp(App);

const customAnimation = {
  enter: 'fade-in-bottom',
  exit: 'fade-out-bottom',
  // appendPosition: true, // default to false
} as CSSTransitionProps;

app.component('Splitpanes', Splitpanes);
app.component('Pane', Pane);
app.component('Icon', Icon);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(router);

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
    select: {
      $extend: 'dropdown',
      triggers: ['click', 'focus'],
      autoHide: true,
      eagerMount: false,
      flip: true,
      distance: -21,
      instantMove: true,
      placement: 'bottom-start',
      handleResize: true,
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
      distance: -94,
      placement: 'top-start',
      container: 'body',
      boundary: 'body',
      strategy: 'absolute',
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
const us = usegeneralStore();
ds.fetchData();
// Mount the app to the element with id "app" in your HTML
app.mount('#app');
