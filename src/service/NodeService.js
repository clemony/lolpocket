export const NodeService = {
  name: "NavTree",
  expandedKeys: {
    default: "Builds",
  },
  selectionMode: "single",
  getTreeNodesData() {
    return [
      {
        key: "home",
        label: "Home",
        icon: "ph--house-simple",
        data: "/",
        selectable: "true",
      },
      {
        key: "Builds",
        label: "Builds",
        icon: "ph--cube",
        data: "/builds",
        selectable: "true",
        type: "addon",
        children: [
          {
            key: "b1",
            label: "enter a build name ahhfhidididididiiddiid",
            icon: "mage--star",
            selectable: "true",
            type: "build",
            children: [
              {
                key: "1",
                label: "Champions",
                hide: "yes",
                icon: "ph--crown-simple",
                data: "build-champions",
                selectable: "true",
              },
              {
                key: "2",
                label: "Items",
                icon: "ph--sword",
                data: "build-items",
                selectable: "true",
              },
              {
                key: "3",
                label: "Runes",
                icon: "ph--hexagon",
                data: "build-runes",
                selectable: "true",
              },
            ],
          },
        ],
      },

      {
        key: "Favorites",
        label: "Favorites",
        icon: "ph--heart-straight",
        selectable: "true",
        children: [
          {
            key: "f-champions",
            label: "Champions",
            icon: "ph--crown-simple",
            data: "f-champions",
            selectable: "true",
          },
          {
            key: "f-items",
            label: "Items",
            icon: "ph--axe-fill",
            data: "build-items",
            selectable: "true",
          },
        ],
      },
      {
        key: "calculator",
        label: "Calculator",
        icon: "ph--calculator-fill",
        selectable: "true",
      },
      {
        key: "Browse",
        label: "Browse",
        icon: "pepicons-pop--line-x",
        data: "d",
        selectable: "false",
        type: "divider",
      },
      {
        key: "Champions",
        label: "Champions",
        icon: "ph--crown-simple",
        data: "/champions",
        selectable: "true",
        type: "browse",
      },
      {
        key: "Items",
        label: "Items",
        icon: "ph--sword",
        data: "/items",
        selectable: "true",
        type: "browse",
      },
      {
        key: "Runes",
        label: "Runes",
        data: "/runes",
        icon: "ph--hexagon",
        selectable: "true",
        type: "browse",
      },
      {
        key: "Divider",
        label: "Utilities",
        icon: "pepicons-pop--line-x",
        data: "",
        selectable: "false",
        type: "divider",
      },
      {
        key: "Account",
        label: "Account",
        icon: "ph--at",
        data: "/account",
        selectable: "true",
        type: "settings",
      },
      {
        key: "Settings",
        label: "Settings",
        icon: "ph--gear-six",
        data: "/settings",
        selectable: "true",
        type: "settings",
      },
    ];
  },

  getTreeNodes() {
    return Promise.resolve(this.getTreeNodesData());
  },
};
