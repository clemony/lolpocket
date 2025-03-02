const img = useImage()
const backgroundStyles = computed(() => {
  const imgUrl = img('https://github.com/nuxt.png', { width: 100 })
  return { backgroundImage: `url('${imgUrl}')` }
})

// TODO nuxtimg bg