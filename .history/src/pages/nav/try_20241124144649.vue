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

<template>
    <!-- Navigation -->
    <nav class="pages-nav">
        <div class="pages-nav__item">
            <a class="link--page link" href="#page-home">Home</a>
        </div>
        <div class="pages-nav__item">
            <a class="link--page link" href="#page-docu">Documentation</a>
        </div>
        <div class="pages-nav__item">
            <a class="link--page link" href="#page-manuals">Manuals</a>
        </div>
        <div class="pages-nav__item">
            <a class="link--page link" href="#page-software">Software</a>
        </div>
        <div class="pages-nav__item">
            <a class="link--page link" href="#page-custom">
                Customization &amp; Settings
            </a>
        </div>
        <div class="pages-nav__item">
            <a class="link--page link" href="#page-training">Training</a>
        </div>
        <div class="pages-nav__item pages-nav__item--small">
            <a class="link--page link--faded link" href="#page-buy">
                Where to buy
            </a>
        </div>
        <div class="pages-nav__item pages-nav__item--small">
            <a class="link--page link--faded link" href="#page-blog">
                Blog &amp; News
            </a>
        </div>
        <div class="pages-nav__item pages-nav__item--small">
            <a class="link--page link--faded link" href="#page-contact">
                Contact
            </a>
        </div>
        <div class="pages-nav__item pages-nav__item--social">
            <a class="link--social link--faded link" href="#">
                <i class="fa fa-twitter"></i>
                <span class="text-hidden">Twitter</span>
            </a>
            <a class="link--social link--faded link" href="#">
                <i class="fa fa-linkedin"></i>
                <span class="text-hidden">LinkedIn</span>
            </a>
            <a class="link--social link--faded link" href="#">
                <i class="fa fa-facebook"></i>
                <span class="text-hidden">Facebook</span>
            </a>
            <a class="link--social link--faded link" href="#">
                <i class="fa fa-youtube-play"></i>
                <span class="text-hidden">YouTube</span>
            </a>
        </div>
    </nav>

    <!-- Pages stack -->
    <div class="pages-stack">
        <div class="page" id="page-home">
            <header class="bp-header cf">
                <span class="bp-header__present">
                    Blueprint
                    <span
                        class="bp-tooltip bp-icon bp-icon--about"
                        data-content="The Blueprints are a collection of basic and minimal website concepts, components, plugins and layouts with minimal style for easy adaption and usage, or simply for inspiration."></span>
                </span>
                <h1 class="bp-header__title">Page Stack Navigation</h1>
                <p class="bp-header__desc">
                    Based on Ilya Kostin's Dribbble shot
                    <a
                        href="https://dribbble.com/shots/2286042-Stacked-navigation">
                        Stacked navigation
                    </a>
                </p>
                <nav class="bp-nav">
                    <a
                        class="bp-nav__item bp-icon bp-icon--prev"
                        href="http://tympanus.net/Blueprints/ZoomSlider/"
                        data-info="previous Blueprint">
                        <span>Previous Blueprint</span>
                    </a>
                    <a
                        class="bp-nav__item bp-icon bp-icon--drop"
                        href="http://tympanus.net/codrops/?p=25311"
                        data-info="back to the Codrops article">
                        <span>back to the Codrops article</span>
                    </a>
                    <a
                        class="bp-nav__item bp-icon bp-icon--archive"
                        href="http://tympanus.net/codrops/category/blueprints/"
                        data-info="Blueprints archive">
                        <span>Go to the archive</span>
                    </a>
                </nav>
            </header>
            <img class="poster" src="" alt="img01" />
        </div>

        <!-- Additional pages -->
        <div class="page" id="page-docu">
            <header class="bp-header cf">
                <h1 class="bp-header__title">Documentation</h1>
                <p class="bp-header__desc">
                    Based on Ilya Kostin's Dribbble shot
                    <a
                        href="https://dribbble.com/shots/2286042-Stacked-navigation">
                        Stacked navigation
                    </a>
                </p>
                <p class="info">
                    "We cannot have peace among men whose hearts find delight in
                    killing any living creature." &mdash; Rachel Carson
                </p>
            </header>
            <img class="poster" src="" alt="img06" />
        </div>
        <!-- Additional pages like this... -->
    </div>
</template>

<script setup>
// Add interactivity or dynamic data in Vue's <script> section as needed.
// For now, this is static content, so this section can remain empty unless interaction or dynamic rendering is required.
</script>

<style scoped>
/* Copy your CSS styles here or use external stylesheets */
.pages-nav {
    /* Sample styles */
    display: flex;
    flex-direction: column;
}

.pages-stack {
    /* Additional styles */
}

.page {
    /* Page-specific styling */
}

.bp-header {
    /* Blueprint header styles */
}
</style>
