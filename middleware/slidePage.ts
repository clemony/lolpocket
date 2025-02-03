export default defineNuxtRouteMiddleware((to, from) => {

        if (to.meta.pageTransition && typeof to.meta.pageTransition !== 'boolean')
            to.meta.pageTransition.name = +to.params.id! > +from.params.id! ? 'slide-up' : 'slide-down'
    
})
