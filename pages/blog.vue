<template>
  <Layout>
    <div
      class="elementor-section elementor-top-section elementor-element elementor-element-48095135 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
    >
      <div class="elementor-container elementor-column-gap-default">
        <div class="elementor-row">
          <div
            class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7a91e284"
          >
            <div class="elementor-column-wrap elementor-element-populated">
              <div class="elementor-widget-wrap">
                <div
                  class="elementor-element elementor-element-364c6a39 elementor-widget elementor-widget-heading animated fadeInUp"
                >
                  <div class="elementor-widget-container">
                    <span class="elementor-heading-title elementor-size-default"
                      >Nuestro Blog &amp; Consejos</span
                    >
                  </div>
                </div>
                <div
                  class="elementor-element elementor-element-da945f5 elementor-widget elementor-widget-heading animated fadeInUp"
                >
                  <div class="elementor-widget-container">
                    <h2 class="elementor-heading-title elementor-size-default">
                      Noticias &amp; Blog
                    </h2>
                  </div>
                </div>
                <div
                  class="elementor-element elementor-element-da945f5 elementor-widget elementor-widget-heading animated fadeInUp"
                >
                  <div
                    class="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-100 elementor-md-100 elementor-field-required"
                  >
                    <input
                      v-model="searchText"
                      size="1"
                      class="elementor-field elementor-size-md elementor-field-textual"
                      placeholder="Buscar..."
                      style="border: 1px solid #818a91"
                    />
                  </div>
                </div>
                <div
                  class="elementor-element elementor-element-3541d809 elementor-grid-2 elementor-grid-tablet-2 elementor-grid-mobile-1 elementor-posts--thumbnail-top elementor-widget elementor-widget-posts animated fadeInUp"
                >
                  <div class="elementor-widget-container">
                    <div
                      class="elementor-posts-container elementor-posts elementor-posts--skin-classic elementor-grid elementor-has-item-ratio"
                    >
                      <BlogCard
                        v-for="(post, idx) in cardsPage"
                        :key="idx"
                        :post-id="post.id"
                        :title="post.title"
                        :date="post.date"
                        :image="post.image"
                        :short-description="post.short_description"
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="elementor-element elementor-element-527d664a elementor-absolute elementor-widget elementor-widget-spacer"
                >
                  <div class="elementor-widget-container">
                    <div class="elementor-spacer">
                      <div class="elementor-spacer-inner" />
                    </div>
                  </div>
                </div>
                <div
                  class="elementor-element elementor-element-7df9c0aa elementor-absolute elementor-widget elementor-widget-spacer"
                >
                  <div class="elementor-widget-container">
                    <div class="elementor-spacer">
                      <div class="elementor-spacer-inner" />
                    </div>
                  </div>
                </div>
                <div
                  class="elementor-element elementor-element-2c7456fd elementor-absolute elementor-widget elementor-widget-spacer"
                >
                  <div class="elementor-widget-container">
                    <div class="elementor-spacer">
                      <div class="elementor-spacer-inner" />
                    </div>
                  </div>
                </div>
                <div
                  class="elementor-element elementor-element-5aecdcc3 elementor-absolute elementor-widget elementor-widget-spacer"
                >
                  <div class="elementor-widget-container">
                    <div class="elementor-spacer">
                      <div class="elementor-spacer-inner" />
                    </div>
                  </div>
                </div>
                <div
                  class="elementor-element elementor-element-7efaba18 elementor-widget__width-initial elementor-absolute elementor-widget elementor-widget-spacer"
                >
                  <div class="elementor-widget-container">
                    <div class="elementor-spacer">
                      <div class="elementor-spacer-inner" />
                    </div>
                  </div>
                </div>
                <div
                  class="elementor-element elementor-element-548b731e elementor-widget__width-initial elementor-absolute elementor-widget elementor-widget-spacer"
                >
                  <div class="elementor-widget-container">
                    <div class="elementor-spacer">
                      <div class="elementor-spacer-inner" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="filteredPagedCardsCount > 6"
      class="elementor-row"
      style="position: absolute; z-index: 9999"
    >
      <span v-if="actualPage > 0" @click="prevPage"> Prev </span>
      <span
        v-for="(number, idx) in paginationNumbers"
        :key="`paging_${idx}`"
        @click="actualPage = number"
        >{{ number }}</span
      >
      <span v-if="actualPage < pagesCount - 1" @click="nextPage"> Next </span>
    </div>
  </Layout>
</template>
<script>
import posts from '../netlify/functions/data/posts.json'

export default {
  name: 'MyBlog',
  data() {
    return {
      rawPosts: [],
      actualPage: 0,
      searchText: '',
    }
  },
  computed: {
    filteredPagedCards() {
      const localPosts = [...this.rawPosts].filter((post) => {
        if (this.searchText) {
          const lowerCaseSearchText = this.searchText.toLowerCase()
          return (
            post.title.toLowerCase().includes(lowerCaseSearchText) ||
            post.short_description.toLowerCase().includes(lowerCaseSearchText)
          )
        }

        return true
      })
      return localPosts.sort((a, b) => a.id - b.id)
    },
    cardsPage() {
      const fromIndex = this.actualPage * 6
      return this.filteredPagedCards.slice(fromIndex, fromIndex + 6)
    },
    filteredPagedCardsCount() {
      return this.filteredPagedCards.length
    },
    pagesCount() {
      return Math.ceil(this.filteredPagedCardsCount / 6)
    },
    paginationNumbers() {
      if (this.pagesCount > 2 || Math.ceil(this.pagesCount / 3) === 1) {
        return []
      }
      return [1, Math.ceil(this.pagesCount / 3), this.pagesCount]
    },
  },
  mounted() {
    this.rawPosts = posts
  },
  methods: {
    prevPage() {
      this.actualPage--
    },
    nextPage() {
      this.actualPage++
    },
  },
}
</script>
