import { defineStore } from 'pinia'
import { hexoid } from 'hexoid'
import type { OpenTab } from 'types'

export const useSessionStore = defineStore(
    'sessionStore',
    () => {
        const openTabs = ref<OpenTab[]>([])

        function getTab(tabId) {
            console.log('inside func', tabId)
            const find = openTabs.value.find((tab) => tab.id === tabId)
            return find
        }

        const activeTab = ref('')

        const isActiveTab = (link: string) => {
            return activeTab.value === link
        }
        const router = useRouter()

        type PocketRouteParams = {
            pocketKey: string
        }

        const navigateTo = (link: string, title?, icon?) => {
            const matchedRoute = router.resolve(link)
            const params = matchedRoute.params as PocketRouteParams

            // Handle dynamic pocket routes
            if (
                typeof matchedRoute.name === 'string' &&
                matchedRoute.name.includes('pocket') &&
                params.pocketKey
            ) {
                const basePocketPath = `/pocket/${params.pocketKey}`

                // Check if a tab with the same pocketKey exists
                const existingTab = openTabs.value.find((tab) =>
                    tab.link.startsWith(basePocketPath)
                )

                if (!existingTab) {
                    // Add a new tab
                    const toID = hexoid()

                    const newId = toID()
                    openTabs.value.push({
                        id: newId,
                        name: title || `Pocket ${params.pocketKey}`,
                        link: basePocketPath,

                        title:
                            title ||
                            matchedRoute.meta?.title ||
                            `Pocket ${params.pocketKey}`,
                        icon: icon || matchedRoute.meta?.icon || 'default-icon',
                    })

                    // Set the active tab and navigate
                    activeTab.value = basePocketPath
                    router.push(basePocketPath)
                } else {
                    // Set existing tab as active
                    activeTab.value = existingTab.link
                    router.push(existingTab.link)
                }
            } else {
                // Handle non-pocket routes
                const existingTab = openTabs.value.find(
                    (tab) => tab.link === link
                )

                if (!existingTab) {
                    const toID = hexoid()

                    const newId = toID()
                    openTabs.value.push({
                        id: newId,
                        name: title || matchedRoute.name || 'home',
                        link,

                        title:
                            title ||
                            matchedRoute.meta?.title ||
                            matchedRoute.name,
                        icon: icon || matchedRoute.meta?.icon || 'default-icon',
                    })

                    activeTab.value = link
                    router.push(link)
                } else {
                    // Switch to existing tab
                    activeTab.value = link
                    router.push(link)
                }
            }
        }

        return {
            navigateTo,
            isActiveTab,
            openTabs,
            getTab,
            activeTab,
        }
    },
    {
        persist: {
            storage: localStorage,
            key: 'session',
        },
    }
)
