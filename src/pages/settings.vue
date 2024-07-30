<script setup lang="ts">
import { ref, watch } from "vue";
import { SunMedium, Moon } from "lucide-vue-next";

const mode = ref("light"); // Set initial mode to light
const toggleTheme = () => {
  mode.value = mode.value === "light" ? "dark" : "light";
  document.documentElement.classList.toggle("dark", mode.value === "dark");
};

// Watch for mode changes to apply the class correctly on initial load
watch(
  mode,
  (newMode) => {
    document.documentElement.classList.toggle("dark", newMode === "dark");
  },
  { immediate: true },
);
</script>

<template>
  <KeepAlive>
    <div class="flex flex-col w-full min-h-screen">
      <main class="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div class="grid w-full max-w-6xl gap-2 mx-auto">
          <h1 class="text-3xl font-semibold">Settings</h1>
        </div>
        <div class="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav class="grid gap-4 text-sm text-muted-foreground">
            <a href="#" class="font-semibold text-primary"> General </a>
            <a href="#"> Security </a>
            <a href="#"> Integrations </a>
            <a href="#"> Support </a>
            <a href="#"> Organizations </a>
            <a href="#"> Advanced </a>
          </nav>
          <div class="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Store Name</CardTitle>
                <CardDescription> Used to identify your store in the marketplace. </CardDescription>
              </CardHeader>
              <CardContent>
                <div class="relative inline-flex items-center">
                  <!-- Hidden checkbox for toggle state -->
                  <input type="checkbox" id="theme-toggle" class="sr-only" @click.stop @change="toggleTheme"
                    :checked="mode === 'dark'" />
                  <!-- Label with toggle slider -->
                  <label for="theme-toggle" class="flex items-center cursor-pointer" @click.stop>
                    <!-- Slider container -->
                    <span
                      class="relative flex items-center h-8 p-1 transition-colors bg-gray-200 rounded-full w-14 dark:bg-gray-600">
                      <!-- Moon icon -->
                      <Moon
                        class="absolute w-2 h-2 text-yellow-500 transition-transform transform -translate-y-1/2 left-1 top-1/2"
                        v-if="mode === 'dark'" />
                      <!-- Sun icon -->
                      <SunMedium
                        class="absolute w-2 h-2 text-blue-500 transition-transform transform -translate-y-1/2 right-1 top-1/2"
                        v-if="mode === 'light'" />
                      <!-- Round toggle center -->
                      <span class="absolute w-6 h-6 transition-transform bg-white rounded-full shadow-md dark:bg-black"
                        :class="mode === 'dark' ? 'translate-x-full' : 'translate-x-0'"
                        style="left: 100%; transform: translateX(-100%)"></span>
                    </span>
                  </label>
                </div>
              </CardContent>
              <CardFooter class="px-6 py-4 border-t">
                <Button>Save</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Plugins Directory</CardTitle>
                <CardDescription> The directory within your project, in which your plugins are located.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form class="flex flex-col gap-4">
                  <Input placeholder="Project Name" default-value="/content/plugins" />
                  <div class="flex items-center space-x-2">
                    <Checkbox id="include" default-checked />
                    <label for="include"
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Allow administrators to change the directory. </label>
                  </div>
                </form>
              </CardContent>
              <CardFooter class="px-6 py-4 border-t">
                <Button>Save</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  </KeepAlive>
</template>
