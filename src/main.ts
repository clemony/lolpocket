import App from "@pages/App.vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { getCurrent } from "../node_modules/@tauri-apps/api/window.js";
import { routes } from "vue-router/auto-routes";
import VueShortkey from "vue3-shortkey";

const getRoutes = routes;

// Create the router instance using generated routes
const router = createRouter({
  history: createWebHistory(),
  routes, // Use the resolved routes
});


const app = createApp(App);

// Get the current webview window
const currentWindow = getCurrent();

document.addEventListener("DOMContentLoaded", () => {
  const minimizeButton = document.getElementById("titlebar-minimize");
  if (minimizeButton && currentWindow) {
    minimizeButton.addEventListener("click", () => currentWindow.minimize());
  }

  const maximizeButton = document.getElementById("titlebar-maximize");
  if (maximizeButton && currentWindow) {
    maximizeButton.addEventListener("click", () =>
      currentWindow.toggleMaximize(),
    );
  }

  const closeButton = document.getElementById("titlebar-close");
  if (closeButton && currentWindow) {
    closeButton.addEventListener("click", () => currentWindow.close());
  }
});

type TitleBarStyle = "visible" | "transparent" | "overlay";

interface WindowOptions {
  titleBarStyle?: TitleBarStyle;
}

export type { TitleBarStyle, WindowOptions };
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(VueShortkey);
app.use(pinia);
app.use(router);

// Mount the app to the element with id "app" in your HTML
app.mount("#app");
