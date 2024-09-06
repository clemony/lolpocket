import App from './pages/App.vue';
import * as Sentry from '@sentry/vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { getCurrent } from '../node_modules/@tauri-apps/api/window.js';
import { routes } from 'vue-router/auto-routes';
import VueShortkey from 'vue3-shortkey';
import { Splitpanes, Pane } from 'splitpanes';
import { Icon } from '@iconify/vue';
import { useDataStore } from './stores/dataStore';
import { useUserSettings } from './stores/userSettings';
import { useSessionStore } from './stores/sessionStore';
import VueSimpleContextMenu from 'vue-simple-context-menu';
import Vue3Toastify, { updateGlobalOptions, toast, type ToastContainerOptions, type CSSTransitionProps } from 'vue3-toastify';

const getRoutes = routes;

// Create the router instance using generated routes
const router = createRouter({
  history: createWebHistory(),
  routes, // Use the resolved routes
});

const app = createApp(App);

Sentry.init({
  app,
  dsn: 'https://44bcf39be0c47017e7d26296f2961feb@o4507901038428160.ingest.us.sentry.io/4507901039869952',
  integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()],
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

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

app.component('Splitpanes', Splitpanes);
app.component('Pane', Pane);
app.component('Icon', Icon);
app.component('vue-simple-context-menu', VueSimpleContextMenu);

export type { TitleBarStyle, WindowOptions };
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(VueShortkey);
app.use(pinia);
app.use(router);

app.use(Vue3Toastify, {
  autoClose: 4000,
  hideProgressBar: true,
  transition: customAnimation,
  position: toast.POSITION.BOTTOM_RIGHT,
  toastClassName: 'backdrop-blur-md !bg-neutral/80 !text-neutral-content !rounded-box shadow-warm text-sm',
} as ToastContainerOptions);

const ds = useDataStore();
const us = useUserSettings();
const sn = useSessionStore();
ds.fetchData();
// Mount the app to the element with id "app" in your HTML
app.mount('#app');
