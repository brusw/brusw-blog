<template>
  <tag-detail :id="id" type="tag" :name="name" :cover="cover"></tag-detail>
</template>

<script>
import tagDetail from '@/components/layout/tag-detail/tag-detail'

export default {
  components: {
    tagDetail
  },

  head() {
    return {
      title: this.name
    }
  },

  async fetch({ store, params }) {
    await store.dispatch('tag/getTag', params.id)
    await store.dispatch('tag/getArticles', {
      tagId: params.id,
      page: 0
    })
  },

  data() {
    return {
      id: null,
      name: '',
      cover: '',
    }
  },

  created() {
    this.name = this.$store.state.tag.tag.name
    this.cover = 'https://resource.brusw.com/lighthouse.jpeg'
    this.id = parseInt(this.$nuxt.$route.params.id)
  }
}
</script>
