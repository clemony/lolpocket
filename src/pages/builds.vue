<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>

<template>
  <div class="builds-main">

    <div class="p2-header">
      <div class="pg-head">
        <h1 class="text-xl font-bold">Builds
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button variant="ghost" size="small" class="gap-1 h-7">
                  <Icon icon="lucide:plus" class="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>New build</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </h1>


        <div class="b-filter">
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="outline" size="small" class="h-8 gap-1 border-neutral-500">
                <Icon icon="fluent:filter-20-regular" class="b-icon" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end w-full">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem checked>Champion</DropdownMenuItem>
              <DropdownMenuItem>Patch</DropdownMenuItem>
              <DropdownMenuItem>Day</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>



      </div>

      <Separator />
    </div>

    <div class="flex flex-col sm:gap-4 ">



      <main class="grid items-start flex-1 gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">




        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead class="hidden w-[100px] sm:table-cell">
                  <span class="sr-only">img</span>
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead class="hidden md:table-cell">
                  Price
                </TableHead>
                <TableHead class="hidden md:table-cell">
                  Total Sales
                </TableHead>
                <TableHead class="hidden md:table-cell">
                  Created at
                </TableHead>
                <TableHead>
                  <span class="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody class="font-normal font-sm">
              <TableRow>
                <TableCell class="hidden sm:table-cell">
                  <img alt="Product image" class="object-cover rounded-md aspect-square" height="64"
                    src="../../public/img/ui/ashe.webp" width="64">
                </TableCell>
                <TableCell>
                  Laser Lemonade Machine
                </TableCell>
                <TableCell>
                  <Badge variant="outline">
                    Draft
                  </Badge>
                </TableCell>
                <TableCell class="hidden md:table-cell">
                  $499.99
                </TableCell>
                <TableCell class="hidden md:table-cell">
                  25
                </TableCell>
                <TableCell class="hidden md:table-cell">
                  2023-07-12 10:42 AM
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                      <Button aria-haspopup="true" size="small" variant="ghost">
                        <Icon icon="lucide:more-horizontal" class="w-4 h-4" />
                        <span class="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell class="hidden sm:table-cell">
                  <img alt="Product image" class="object-cover rounded-md aspect-square" height="64"
                    src="../../public/img/ui/ashe.webp" width="64">
                </TableCell>
                <TableCell>
                  Hypernova Headphones
                </TableCell>
                <TableCell>
                  <Badge variant="outline">
                    Active
                  </Badge>
                </TableCell>
                <TableCell class="hidden md:table-cell">
                  $129.99
                </TableCell>
                <TableCell class="hidden md:table-cell">
                  100
                </TableCell>
                <TableCell class="hidden md:table-cell">
                  2023-10-18 03:21 PM
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                      <Button aria-haspopup="true" size="small" variant="ghost">
                        <Icon icon="lucide:more-horizontal" class="w-4 h-4" />
                        <span class="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell class="hidden sm:table-cell">
                  <img alt="Product image" class="object-cover rounded-md aspect-square" height="64"
                    src="../../public/img/ui/ashe.webp" width="64">
                </TableCell>
                <TableCell>
                  AeroGlow Desk Lamp
                </TableCell>
                <TableCell>
                  <Badge variant="outline">
                    Active
                  </Badge>
                </TableCell>
                <TableCell class="hidden md:table-cell">
                  $39.99
                </TableCell>
                <TableCell class="hidden md:table-cell">
                  50
                </TableCell>
                <TableCell class="hidden md:table-cell">
                  2023-11-29 08:15 AM
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                      <Button aria-haspopup="true" size="small" variant="ghost">
                        <Icon icon="lucide:more-horizontal" class="w-4 h-4" />
                        <span class="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell class="hidden sm:table-cell">
                  <img alt="Product image" class="object-cover rounded-md aspect-square" height="64"
                    src="../../public/img/ui/ashe.webp" width="64">
                </TableCell>
                <TableCell>
                  TechTonic Energy Drink
                </TableCell>
                <TableCell>
                  <Badge variant="secondary">
                    Draft
                  </Badge>
                </TableCell>
                <TableCell class="hidden md:table-cell">
                  $2.99
                </TableCell>
                <TableCell class="hidden md:table-cell">
                  0
                </TableCell>
                <TableCell class="hidden md:table-cell">
                  2023-12-25 11:59 PM
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                      <Button aria-haspopup="true" size="small" variant="ghost">
                        <Icon icon="lucide:more-horizontal" class="w-4 h-4" />
                        <span class="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell class="hidden sm:table-cell">
                  <img alt="Product image" class="object-cover rounded-md aspect-square" height="64"
                    src="../../public/img/ui/ashe.webp" width="64">
                </TableCell>
                <TableCell>
                  Gamer Gear Pro Controller
                </TableCell>
                <TableCell>
                  <Badge variant="outline">
                    Active
                  </Badge>
                </TableCell>
                <TableCell class="hidden md:table-cell">
                  $59.99
                </TableCell>
                <TableCell class="hidden md:table-cell">
                  75
                </TableCell>
                <TableCell class="hidden md:table-cell">
                  2024-01-01 12:00 AM
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                      <Button aria-haspopup="true" size="small" variant="ghost">
                        <Icon icon="lucide:more-horizontal" class="w-4 h-4" />
                        <span class="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell class="hidden sm:table-cell">
                  <img alt="Product image" class="object-cover rounded-md aspect-square" height="64"
                    src="../../public/img/ui/ashe.webp" width="64">
                </TableCell>
                <TableCell>
                  Luminous VR Headset
                </TableCell>
                <TableCell>
                  <Badge variant="outline">
                    Active
                  </Badge>
                </TableCell>
                <TableCell class="hidden md:table-cell">
                  $199.99
                </TableCell>
                <TableCell class="hidden md:table-cell">
                  30
                </TableCell>
                <TableCell class="hidden md:table-cell">
                  2024-02-14 02:14 PM
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                      <Button aria-haspopup="true" size="small" variant="ghost">
                        <Icon icon="lucide:more-horizontal" class="w-4 h-4" />
                        <span class="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

        </div>
        <div class="text-xs text-muted-foreground">
          Showing <strong>1-10</strong> of <strong>32</strong>
          products
        </div>


      </main>
    </div>
  </div>
</template>

<style>
.builds-main {
  @apply flex min-h-screen w-full flex-col;
}
</style>