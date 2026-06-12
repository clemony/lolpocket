import { externalResources } from "~/domain/about/external/externalResources"
import { referenceItems } from "~/domain/app/components/navigation/command/build/lolCommands"
import type {
  CommandRouteItem,
  RouteGroup,
  RouteItem,
  RouteReturn
} from "~/types/route.types"
import { routeItem } from "~/utils/routes/useRouteGroups"

type RouteGroupReturn = Record<string, RouteGroup<RouteItem>>

export const routeStore = defineStore(
  "route-store",
  () => {
    const routes = ref<RouteReturn>()
    const routeGroups = shallowRef<RouteGroupReturn>()

    function setRoutes() {
      routes.value = buildRoutes()
      routeGroups.value = undefined
    }

    function buildRouteGroups(routes: RouteReturn): RouteGroupReturn {
      return {
        nexus: {
          id: "base",
          value: "base-command",
          label: "Base",
          description:
            "A one stop shop for the latest League news and data highlights",
          items: routes.nexus
        },
        tools: {
          id: "tools",
          value: "tools-command",
          label: "Tools",
          description:
            "Lolpocket utilities great to have handy. Share a pocket card or theorycraft.",
          items: routes.tools
        },
        backpack: {
          id: "backpack",
          value: "Backpack-command",
          label: "Backpack",
          description: "Hold your pockets.",
          items: routes.backpack
        },
        library: {
          id: "library",
          value: "Library-command",
          label: "Library",
          description: "Browse and filter complete data.",
          items: routes.library?.map((r) => routeItem(r))
        },
        docs: {
          value: "docs-command",
          icon: "i-lucide-square-terminal",
          id: "docs",
          label: "Docs",
          description: "Get help.",
          trailingIcon: "i-up",
          items: routes.docs
        },
        settings: {
          value: "settings-command",
          id: "settings",
          icon: "i-gear",
          ui: {
            leadingIcon: "**:stroke-[2.2]"
          },
          label: "Settings",
          description: "Other external tools worthy of your backpack.",
          trailingIcon: "i-up",
          items: routes.settings
        },
        external: {
          value: "External-command",
          id: "external",
          label: "Resources",
          description: "Other external tools worthy of your backpack.",
          trailingIcon: "i-up",
          icon: "i-external",
          items: externalResources.map((r) => ({
            ...r,
            id: r?.label,
            value: r?.label,
            target: "_blank",
            external: true,
            itemTrailingIcon: "i-external",
            avatar: {
              src: r?.avatar?.src,
              size: "xs"
            },
            ui: {
              itemLabelBase: "normal-case!"
            }
          }))
        }
      }
    }

    function buildReference(): RouteGroup<CommandRouteItem> {
      return {
        id: "reference",
        value: "reference-command",
        label: "Reference",
        description: "Quick, detailed, information cards right in your navbar.",
        items: referenceItems?.value
      }
    }

    const reference = ref<RouteGroup<CommandRouteItem>>()

    const useReferenceItems = () => {
      if (!routes.value) setRoutes()
      if (!reference.value) reference.value = buildReference()
    }

    const useRouteGroups = () => {
      if (!routes.value) setRoutes()
      if (!routeGroups.value) {
        routeGroups.value = buildRouteGroups(
          routes.value as RouteReturn
        ) as RouteGroupReturn
      }

      return routeGroups
    }

    function refreshRouteGroups() {
      setRoutes()
      routeGroups.value = buildRouteGroups(
        routes.value as RouteReturn
      ) as RouteGroupReturn

      return routeGroups
    }

    return {
      routes,
      setRoutes,
      refreshRouteGroups,
      useRouteGroups
    }
  },
  {
    persist: piniaPluginPersistedstate.sessionStorage()
  }
)
