<template>
  <article
    class="elementor-post elementor-grid-item post-908 post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized"
  >
    <a
      class="elementor-post__thumbnail__link"
    >
      <div class="elementor-post__thumbnail">
        <img
          alt="Man with dog in the forest"
          class="attachment-large size-large"
          height="533"
          loading="lazy"
          :src="$props.image"
          width="800"
        />
      </div>
    </a>
    <div class="elementor-post__text">
      <h3 class="elementor-post__title">
        <a
        >
          {{ $props.title }}
        </a>
      </h3>
      <div class="elementor-post__meta-data">
        <span class="elementor-post-date">
          {{ $props.date }}
        </span>
      </div>
      <div class="elementor-post__excerpt">
        <p>
          {{ $props.shortDescription }}
        </p>
      </div>
      <NuxtLink
        :to="{ path: '/post', query: { id: $props.postId } }"
        class="elementor-post__read-more"
        >Leer más »</NuxtLink
      >
    </div>
  </article>
</template>
<script>
export default {
  name: 'BlogCard',
  props: {
    postId: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    shortDescription: {
      type: String,
      default: '',
    },
  },
}
</script>
