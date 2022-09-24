<template>
  <div
    class="home page-template page-template-elementor_header_footer page page-id-1047 elementor-default elementor-template-full-width elementor-kit-374 e--ua-blink e--ua-chrome e--ua-webkit"
  >
    <div class="elementor elementor-404 elementor-location-header">
      <div class="elementor-section-wrap">
        <client-only>
          <AppHeader />
        </client-only>
      </div>
    </div>
    <div class="elementor elementor-1154">
      <slot />
    </div>
    <div class="elementor elementor-location-footer">
      <AppFooter />
    </div>
  </div>
</template>
<script>
import AppHeader from '~/components/AppHeader'
import AppFooter from '~/components/AppFooter'

export default {
  name: 'MyLayout',
  components: { AppFooter, AppHeader },
}
</script>
