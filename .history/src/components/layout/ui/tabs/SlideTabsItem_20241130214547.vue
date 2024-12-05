<script setup lang="ts">
import { ref, computed, defineComponent, onMounted } from 'vue'
import { useTabsContext } from './tabsContext'
import { JSX } from 'vue/jsx-runtime';

interface Props {
  label: string | JSX.Element
  value: string
  disabled?: boolean
}

const defaultProps = {
  disabled: false,
}

defineProps<Props>()
defineEmits(['register'])

const props = withDefaults(defineProps<Props>(), defaultProps)
const { label, value, disabled } = props


const { register, currentValue } = useTabsContext()
const isActive = computed(() => currentValue.value === value)


function TabsInternalCell({
  onClick,
  onMouseOver,
  activeClassName,
  activeStyle,
  hideBorder,
}: {
  onClick?: (value: string) => void
  onMouseOver?: (event: MouseEvent) => void
  activeClassName?: string
  activeStyle?: Record<string, any>
  hideBorder?: boolean
}) {
  const tabRef = ref<HTMLDivElement | null>(null)
  const active = computed(() => currentValue.value === value)

  const clickHandler = () => {
    if (disabled) return
    onClick && onClick(value)
  }

  return (
    <div
      ref={tabRef}
      class={[
        'tab',
        { active: active.value, disabled },
        active.value && activeClassName,
        { 'hide-border': hideBorder },
      ]}
      role="button"
      onMouseover={onMouseOver}
      onClick={clickHandler}
      style={active.value ? activeStyle : {}}
      data-geist="tab-item"
    >
      {label}
      <style scoped>
        .tab {{
          position: relative;
          box-sizing: border-box;
          cursor: pointer;
          outline: 0;
          text-transform: capitalize;
          white-space: nowrap;
          background-color: transparent;
          color: {theme.palette.accents_5};
          user-select: none;
          display: flex;
          align-items: center;
          font-size: {SCALES.font(0.875)};
          line-height: normal;
          width: {SCALES.width(1, 'auto')};
          height: {SCALES.height(1, 'auto')};
          padding: {SCALES.pt(0.875)} {SCALES.pr(0.55)} {SCALES.pb(0.875)}
            {SCALES.pl(0.55)};
          margin: {SCALES.mt(0)} {SCALES.mr(0.2)} {SCALES.mb(0)}
            {SCALES.ml(0.2)};
          z-index: 1;
        }}
        .tab:hover {{
          color: {theme.palette.foreground};
        }}
        .tab:after {{
          position: absolute;
          content: '';
          bottom: -1px;
          left: 0;
          right: 0;
          width: 100%;
          height: 2px;
          border-radius: 4px;
          transform: scaleX(0.75);
          background-color: {theme.palette.foreground};
          transition: opacity, transform 200ms ease-in;
          opacity: 0;
        }}
        .active:after {{
          opacity: 1;
          transform: scaleX(1);
        }}
        .tab:first-of-type {{
          margin-left: 0;
        }}
        .active {{
          color: {theme.palette.foreground};
        }}
        .disabled {{
          color: {theme.palette.accents_3};
          cursor: not-allowed;
        }}
      </style>
    </div>
  )
}
</script>

<template>
    <template>
        <div
            ref="tabRef"
            class="tab"
            :class="[
                { active: active.value, disabled },
                active.value && activeClassName,
                { 'hide-border': hideBorder },
            ]"
            role="button"
            @mouseover="onMouseOver"
            @click="clickHandler"
            :style="active.value ? activeStyle : {}"
            data-geist="tab-item">
            {{ label }}
        </div>
    </template>
</template>
