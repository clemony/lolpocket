export const NodeService = {
    getTreeNodesData() {
        return [
            {

                key: 'Builds',
                label: 'Builds',
                icon: 'pi pi-fw pi-calendar',
                
                children: [
                    { key: '', label: 'Champions', icon: 'pi pi-fw pi-calendar-plus', data: 'build-champions' },
                    { 
                        key: '1-1', 
                        label: 'Items', 
                        icon: 'pi pi-fw pi-calendar-plus', 
                        data: 'build-items',
                        children: [
                            { key: '2-0', label: 'Scarface', icon: 'pi pi-fw pi-video', data: 'Scarface Movie' },
                            { key: '2-1', label: 'Serpico', icon: 'pi pi-fw pi-video', data: 'Serpico Movie' }
                        ]
                    },
                    { 
                        key: '1-2', 
                        label: 'Runes', 
                        icon: 'pi pi-fw pi-calendar-plus', 
                        data: 'build-runes',
                        children: [
                            { key: '3-0', label: 'Goodfellas', icon: 'pi pi-fw pi-video', data: 'Goodfellas Movie' },
                            { key: '3-1', label: 'Untouchables', icon: 'pi pi-fw pi-video', data: 'Untouchables Movie' }
                        ]
                     }
                ]
            },
                

                
            
        ];
    },

 

    getTreeNodes() {
        return Promise.resolve(this.getTreeNodesData());
    }
};
