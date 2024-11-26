<script setup lang="ts">
import type { pocket } from 'types'
import './modernizr-custom.js'
import './classie.js'
import './main.js'
import { clean } from '@lib/utils'

const props = defineProps<{
    pocket: pocket
}>()

const pocket = ref(props.pocket)
</script>
