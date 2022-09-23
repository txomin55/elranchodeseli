<template>
  <header
    class="elementor-section elementor-top-section elementor-element elementor-element-eb63a5d elementor-section-boxed elementor-section-height-default elementor-section-height-default"
  >
    <div class="elementor-container elementor-column-gap-default">
      <div class="elementor-row">
        <div
          class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-cf1f5b2"
          data-element_type="column"
        >
          <div class="elementor-column-wrap elementor-element-populated">
            <div class="elementor-widget-wrap">
              <div
                class="elementor-element elementor-element-1fd19a7 elementor-widget__width-auto elementor-widget elementor-widget-image"
              >
                <div class="elementor-widget-container">
                  <div class="elementor-image">
                    <img
                      alt=""
                      class="attachment-large size-large"
                      loading="lazy"
                      src="/logo.png"
                      width="500"
                    />
                  </div>
                </div>
              </div>
              <div
                class="elementor-element elementor-element-5998cf1 elementor-widget__width-auto elementor-widget elementor-widget-heading"
              >
                <div class="elementor-widget-container">
                  <div class="elementor-heading-title elementor-size-default">
                    El rancho de Seli
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-28f46ad"
        >
          <div class="elementor-column-wrap elementor-element-populated">
            <div class="elementor-widget-wrap">
              <div
                class="elementor-element elementor-element-4371366 elementor-nav-menu__align-right elementor-widget__width-auto elementor-nav-menu--stretch elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu"
              >
                <div class="elementor-widget-container">
                  <nav
                    class="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-text e--animation-float"
                  >
                    <ul class="elementor-nav-menu">
                      <li
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-1047 current_page_item menu-item-1055"
                      >
                        <a
                          class="elementor-item elementor-item-active"
                          href="https://bimberonline.com/dogworks/"
                        >
                          Home
                        </a>
                      </li>
                      <li
                        class="menu-item menu-item-type-custom menu-item-object-custom"
                      >
                        <a
                          class="elementor-item"
                          href="https://bimberonline.com/dogworks/template-kit/about-us/"
                        >
                          About Us
                        </a>
                      </li>
                      <li
                        class="menu-item menu-item-type-custom menu-item-object-custom"
                      >
                        <a
                          class="elementor-item"
                          href="https://bimberonline.com/dogworks/template-kit/about-us/"
                        >
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="elementor-row" style="position: absolute; top: 0">
        <div class="elementor-column-wrap elementor-element-populated">
          <div class="elementor-widget-wrap" style="width: 100%">
            <div
              style="width: 100%"
              class="elementor-element elementor-element-4371366 elementor-nav-menu__align-right elementor-widget__width-auto elementor-nav-menu--stretch elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu"
            >
              <div class="elementor-widget-container" style="width: 100%">
                <div
                  class="elementor-menu-toggle elementor-active"
                  role="button"
                  @click="menuOpened = !menuOpened"
                  style="width: 100%"
                >
                  <i
                    style="text-align: right; width: 100%"
                    :class="
                        menuOpened ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
                      "
                  />
                </div>

                <nav
                  v-if="menuOpened"
                  class="elementor-nav-menu--dropdown elementor-nav-menu__container"
                  role="navigation"
                  style="top: 30px; width: 90vw;"
                >
                  <ul class="elementor-nav-menu">
                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-1047 current_page_item menu-item-1055"
                    >
                      <a
                        class="elementor-item elementor-item-active"
                        href="https://bimberonline.com/dogworks/"
                      >
                        Home
                      </a>
                    </li>
                    <li
                      class="menu-item menu-item-type-custom menu-item-object-custom"
                    >
                      <a
                        class="elementor-item"
                        href="https://bimberonline.com/dogworks/template-kit/about-us/"
                      >
                        About Us
                      </a>
                    </li>
                    <li
                      class="menu-item menu-item-type-custom menu-item-object-custom"
                    >
                      <a
                        class="elementor-item"
                        href="https://bimberonline.com/dogworks/template-kit/about-us/"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      menuOpened: false,
    }
  },
}
</script>
<style>
.elementor-404 .elementor-element.elementor-element-1fd19a7 img {
  width: unset;
}
</style>
