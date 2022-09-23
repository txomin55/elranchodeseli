<template>
  <main
    class="home page-template page-template-elementor_header_footer page page-id-1047 elementor-default elementor-template-full-width elementor-kit-374 e--ua-blink e--ua-chrome e--ua-webkit"
  >
    <div class="elementor elementor-404 elementor-location-header">
      <div class="elementor-section-wrap">
        <AppHeader />
      </div>
    </div>
    <div class="elementor elementor-1154">
      <AppBody />
    </div>
    <div class="elementor elementor-location-footer">
      <AppFooter />
    </div>
  </main>
</template>
<script>
import AppHeader from '~/pages/AppHeader'
import AppBody from '~/pages/AppBody'
import AppFooter from '~/pages/AppFooter'

export default {
  components: { AppFooter, AppBody, AppHeader },
}
</script>
