<script setup lang="ts"></script>
<template>
    <main class="flex w-full flex-col gap-6">
        <Card>
            <CardHeader>
                <CardTitle>Store Name</CardTitle>
                <CardDescription>
                    Used to identify your store in the marketplace.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <Input placeholder="Store Name" />
                </form>
            </CardContent>
            <CardFooter class="border-t px-6 py-4">
                <Button>Save</Button>
            </CardFooter>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Plugins Directory</CardTitle>
                <CardDescription>
                    The directory within your project, in which your plugins are
                    located.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form class="flex flex-col gap-4">
                    <Input
                        placeholder="Project Name"
                        default-value="/content/plugins" />
                    <div class="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="include"
                            class="checkbox checkbox-xs" />
                        <label
                            for="include"
                            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Allow administrators to change the directory.
                        </label>
                    </div>
                </form>
            </CardContent>
            <CardFooter class="border-t px-6 py-4">
                <Button>Save</Button>
            </CardFooter>
        </Card>
    </main>
</template>
<style scoped></style>
