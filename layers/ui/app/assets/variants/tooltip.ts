import { cn } from '#layers/lib/app/utils'

export default {
  tooltip: {
    slots: {
      arrow: 'fill-neutral/90',
      content: cn(
        'animate-none transition-none',
        'pointer-events-auto flex cursor-default flex gap-1 h-6 items-center gap-1 rounded-lg border-tint-neutral/30 bg-neutral/86 px-2 py-0.75 text-[0.9rem] font-medium text-nc shadow-md ring drop-shadow-sm ring-neutral inset-shadow-white/10 backdrop-blur-md select-none'
      ),
    },
  }
}
