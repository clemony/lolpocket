export const NodeService = {
    name: 'NavTree',
    expandedKeys: {
        default: 'Builds',
    },
    selectionMode: 'single',
    getTreeNodesData() {
     
            return [
            {
                key: 'home',
                label: 'Home',
                icon: 'carbon--home ',
                data: "/home",
                selectable: 'true',
                
            },
            {
                key: 'Builds',
                label: 'Builds',
                icon: 'material-symbols-light--crossword-outline-rounded',
                data: "/builds",
                selectable: 'true',
                type: 'addon',
                children: [
                   { 
                    key: 'b1',
                    label: 'enter a build name',
                    icon: 'mage--star',
                    selectable: 'true',
                    type: 'build',
                    children: [
                        { 
                            key: '1', 
                            label: 'Champions', 
                            hide: 'yes',
                            icon: 'material-symbols-light--person-celebrate', 
                            data: 'build-champions',
                            selectable: 'true',  
                        },
                        { 
                            key: '2', 
                            label: 'Items', 
                            icon: 'ph--shield-plus-light', 
                            data: 'build-items',
                            selectable: 'true',
                        },
                        { 
                            key: '3', 
                            label: 'Runes', 
                            icon: 'runes--icon ', 
                            data: 'build-runes',
                            selectable: 'true',

                        },
                    ]
                }
                ]
            },

            {
                key: 'Favorites',
                label: 'Favorites',
                icon: 'fluent-mdl2--heart',
                selectable: 'true',
                children: [
                    { 
                        key: 'f-champions', 
                        label: 'Champions', 
                        icon: 'material-symbols-light--person-celebrate', 
                        data: 'f-champions', 
                        selectable: 'true',
                    },
                    { 
                        key: 'f-items', 
                        label: 'Items', 
                        icon: 'ph--shield-plus-light', 
                        data: 'build-items',
                        selectable: 'true',

                    },
                ]
            },
            {
                key: 'calculator',
                label: 'Calculator',
                icon: 'circum--calculator-2',
                selectable: 'true',
            },
            {
                key: 'Champions',
                label: 'Champions',
                icon: 'material-symbols-light--person-celebrate',
                data: "/champions",
                selectable: 'true',
                type: 'browse',
                
            },
            {
                key: 'Items',
                label: 'Items',
                icon: 'ph--shield-plus-light',
                data: "/items",
                selectable: 'true',
                type: 'browse',
                
            },
            {
                key: 'Runes',
                label: 'Runes',
                data: "/runes",
                icon: 'runes--icon',
                selectable: 'true',
                type: 'browse',
               
            },
            {
                key: 'Settings',
                label: 'Settings',
                icon: 'fluent--settings-20-regular',
                data: "/settings",
                selectable: 'true',
                type: 'settings',
                
            },
            
        ]
    },



    getTreeNodes() {
        return Promise.resolve(this.getTreeNodesData());
    }
};
