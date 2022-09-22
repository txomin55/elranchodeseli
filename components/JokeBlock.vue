<script>
export default {
  data: () => ({
    joke: '',
  }),
  async mounted() {
    const develop = process.env.environment === "development"
    if(!develop){
      this.joke = await fetch('/api/joke').then((res) => res.json())
    }
  },
}
</script>

<template>
  <article>
    <blockquote>
      <p>{{ joke }}</p>
    </blockquote>
  </article>
</template>

<style scoped>
blockquote {
  border-left: 5px solid #ccc;
  padding: 0.5rem;
}
</style>
