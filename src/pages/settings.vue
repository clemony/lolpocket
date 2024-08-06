<script setup lang="ts">

const mode = ref("lofi"); // Set initial mode to light
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
                  <div class="dropdown mb-72">
                    <div tabindex="0" role="button" class="m-1 btn">

                      Theme
                      <svg width="12px" height="12px" class="inline-block w-2 h-2 fill-current opacity-60"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
                        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                      </svg>
                    </div>
                    <ul tabindex="0" class="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl">
                      <li>
                        <input type="radio" name="theme-dropdown"
                          class="justify-start theme-controller btn btn-sm btn-block btn-ghost" aria-label="Default"
                          value="default" />
                      </li>
                      <li>
                        <input type="radio" name="theme-dropdown"
                          class="justify-start theme-controller btn btn-sm btn-block btn-ghost" aria-label="Retro"
                          value="retro" />
                      </li>
                      <li>
                        <input type="radio" name="theme-dropdown"
                          class="justify-start theme-controller btn btn-sm btn-block btn-ghost" aria-label="Cyberpunk"
                          value="cyberpunk" />
                      </li>
                      <li>
                        <input type="radio" name="theme-dropdown"
                          class="justify-start theme-controller btn btn-sm btn-block btn-ghost" aria-label="Valentine"
                          value="valentine" />
                      </li>
                      <li>
                        <input type="radio" name="theme-dropdown"
                          class="justify-start theme-controller btn btn-sm btn-block btn-ghost" aria-label="Aqua"
                          value="aqua" />
                      </li>
                    </ul>
                  </div>



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
