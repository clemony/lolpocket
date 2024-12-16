<script setup lang="ts"></script>
<template>
    <template>
        <div class="card__shine"></div>
    </template>
</template>
<style scoped>
.card__shine {
    --grain: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCI+CjxmaWx0ZXIgaWQ9Im4iPgo8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjciIG51bU9jdGF2ZXM9IjEwIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIj48L2ZlVHVyYnVsZW5jZT4KPC9maWx0ZXI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWx0ZXI9InVyacgjbikiIG9wYWNpdHk9IjAuMyI+PC9yZWN0Pgo8L3N2Zz4=');

    --space: 5%;
    --angle: 133deg;
    --imgsize: 500px;

    --red: #f80e7b;
    --yel: #eedf10;
    --gre: #21e985;
    --blu: #0dbde9;
    --vio: #c929f1;
    display: grid;
    overflow: hidden;
    z-index: 3;
    transform: translateZ(1px);
    background: transparent;
    mix-blend-mode: color-dodge;
    filter: brightness(0.85) contrast(2.75) saturate(0.65);
    background-size: cover;
    background-position: center;
    opacity: var(--o);

    &:before {
        grid-area: 1/1;
        transform: translateZ(1px);
    }

    &:after {
        grid-area: 1/1;
        transform: translateZ(1.2px);
        border-radius: var(--radius);
    }
}
</style>
