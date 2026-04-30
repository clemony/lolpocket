export default defineNuxtRouteMiddleware((to, from) => {
  const session = useSupabaseSession()

  if (!session.value?.access_token) {
    navigateTo("/login")
    const toast = useToast()

    toast.add({
      color: "neutral",
      title: "Error!",
      description: "You must be logged in to view this page.",
      icon: "i-bxs-confused"
    })
  } else {
    console.log("Authorization confirmed!")
    navigateTo(to)
  }
})
