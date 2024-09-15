import App from './pages/App.vue';
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
import ContextMenu from '@imengyu/vue3-context-menu';
import Vue3Toastify, { toast, type ToastContainerOptions, type CSSTransitionProps } from 'vue3-toastify';

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

app.component('Splitpanes', Splitpanes);
app.component('Pane', Pane);
app.component('Icon', Icon);

export type { TitleBarStyle, WindowOptions };
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(VueShortkey);
app.use(pinia);
app.use(router);
app.use(ContextMenu);
app.use(Vue3Toastify, {
  autoClose: 4000,
  hideProgressBar: true,
  transition: customAnimation,
  position: toast.POSITION.BOTTOM_RIGHT,
  toastClassName: 'backdrop-blur-md !bg-neutral/80 !text-neutral-content !rounded-box shadow-warm text-sm',
} as ToastContainerOptions);

const ds = useDataStore();
const us = useUserSettings();
ds.fetchData();
// Mount the app to the element with id "app" in your HTML
app.mount('#app');
