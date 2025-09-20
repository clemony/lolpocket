<script setup lang="ts">
interface Props {
  className?: string
  delay?: number
  direction?: 'up' | 'down'
  duration?: number
  from?: number
  onEnd?: () => void
  onStart?: () => void
  separator?: string
  startWhen?: boolean
  to: number
}

const props = withDefaults(defineProps<Props>(), {
  className: '',
  delay: 0,
  direction: 'up',
  duration: 2,
  from: 0,
  separator: '',
  startWhen: true,
})

const elementRef = useTemplateRef<HTMLSpanElement>('elementRef')
const currentValue = ref(props.direction === 'down' ? props.to : props.from)
const isInView = ref(false)
const animationId = ref<number | null>(null)
const hasStarted = ref(false)

let intersectionObserver: IntersectionObserver | null = null

const damping = computed(() => 20 + 40 * (1 / props.duration))
const stiffness = computed(() => 100 * (1 / props.duration))

let velocity = 0
let startTime = 0

function formatNumber(value: number) {
  const options = {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
    useGrouping: !!props.separator,
  }

  const formattedNumber = Intl.NumberFormat('en-US', options).format(
    Number(value.toFixed(0))
  )

  return props.separator
    ? formattedNumber.replace(/,/g, props.separator)
    : formattedNumber
}

function updateDisplay() {
  if (elementRef.value) {
    elementRef.value.textContent = formatNumber(currentValue.value)
  }
}

function springAnimation(timestamp: number) {
  if (!startTime)
    startTime = timestamp

  const target = props.direction === 'down' ? props.from : props.to
  const current = currentValue.value

  const displacement = target - current
  const springForce = displacement * stiffness.value
  const dampingForce = velocity * damping.value
  const acceleration = springForce - dampingForce

  velocity += acceleration * 0.016 // Assuming 60fps
  currentValue.value += velocity * 0.016

  updateDisplay()

  if (Math.abs(displacement) > 0.01 || Math.abs(velocity) > 0.01) {
    animationId.value = requestAnimationFrame(springAnimation)
  }
  else {
    currentValue.value = target
    updateDisplay()
    animationId.value = null

    if (props.onEnd) {
      props.onEnd()
    }
  }
}

function startAnimation() {
  if (hasStarted.value || !isInView.value || !props.startWhen)
    return

  hasStarted.value = true

  if (props.onStart) {
    props.onStart()
  }

  setTimeout(() => {
    startTime = 0
    velocity = 0
    animationId.value = requestAnimationFrame(springAnimation)
  }, props.delay * 1000)
}

function setupIntersectionObserver() {
  if (!elementRef.value)
    return

  intersectionObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !isInView.value) {
        isInView.value = true
        startAnimation()
      }
    },
    {
      rootMargin: '0px',
      threshold: 0,
    }
  )

  intersectionObserver.observe(elementRef.value)
}

function cleanup() {
  if (animationId.value) {
    cancelAnimationFrame(animationId.value)
    animationId.value = null
  }

  if (intersectionObserver) {
    intersectionObserver.disconnect()
    intersectionObserver = null
  }
}

watch(
  [() => props.from, () => props.to, () => props.direction],
  () => {
    currentValue.value = props.direction === 'down' ? props.to : props.from
    updateDisplay()
    hasStarted.value = false
  },
  { immediate: true }
)

watch(
  () => props.startWhen,
  () => {
    if (props.startWhen && isInView.value && !hasStarted.value) {
      startAnimation()
    }
  }
)

onMounted(() => {
  updateDisplay()
  setupIntersectionObserver()
})

onUnmounted(() => {
  cleanup()
})
</script>

<template>
  <span
    ref="elementRef"
    :class="className" />
</template>

<!--
<script setup lang="ts">
  import CountUp from "./CountUp.vue";

  const handleStart = () => {
    console.log("Count animation started!");
  };

  const handleEnd = () => {
    console.log("Count animation ended!");
  };
</script>
<template>
  <CountUp
    :from="0"
    :to="100"
    separator=","
    direction="up"
    :duration="1"
    :delay="0"
    :start-when="true"
    class-name="count-up-text"
    @start="handleStart"
    @end="handleEnd"
  />
</template>
 -->
