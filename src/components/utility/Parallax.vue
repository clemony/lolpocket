<template>
    <div ref="scrollParallax">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ScrollParallax',
    props: {
        speed: {
            type: Number,
            default: 0.15,
        },
        down: {
            type: Boolean,
            default: false,
            required: false,
        },
        up: {
            type: Boolean,
            default: true,
            required: false,
        },
        right: {
            type: Boolean,
            default: true,
            required: false,
        },
        left: {
            type: Boolean,
            default: false,
            requiredequired: false,
        },
        direction: {
            type: String,
            default: 'y',
            required: false,
        },
    },
    data() {
        return {
            el: null,
            axes: null,
            speedCoeff: null,
        }
    },
    mounted() {
        this.loadParallax()
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handler)
    },
    methods: {
        loadParallax() {
            this.initDirection()
            this.el = this.$refs.scrollParallax
            window.addEventListener('scroll', this.handler)
        },
        handler() {
            const rec = this.el.getBoundingClientRect()
            const cord = rec.top - rec.height / 2
            const calc = cord * this.speedCoeff
            this.el.style.transform = `translate${this.axes}(${calc - cord}px)`
        },
        initDirection() {
            if (this.direction === 'x') {
                this.axes = 'X'
                if (this.left) {
                    this.speedCoeff = -this.speed
                } else {
                    this.speedCoeff = this.speed
                }
            } else if (this.direction === 'y') {
                this.axes = 'Y'
                if (this.down) {
                    this.speedCoeff = -this.speed
                } else {
                    this.speedCoeff = this.speed
                }
            }
        },
    },
}
</script>
