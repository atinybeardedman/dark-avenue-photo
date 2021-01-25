<template>
  <Layout>
      <h1>Category: {{$page.wordPressCategory.title}}</h1>
      <section class="container">
          <div class="photo" v-for="{node} in $page.wordPressCategory.belongsTo.edges" :key="node.id">
               <responsive-image
              :sources="node.featuredMedia.mediaDetails.sizes" :width="node.featuredMedia.mediaDetails.width" :height="node.featuredMedia.mediaDetails.height"
               />
          </div>
      </section>
     
  </Layout>
</template>



<page-query>
query WordPressCategory ($id:ID!, $page: Int) {
    wordPressCategory(id: $id){
        title,
        belongsTo(page: $page) {
            pageInfo {
                totalPages
            }
            edges {
                node {
                    ...on WordPressPost {
                        id,
                        featuredMedia {
                            sourceUrl,
                            mediaDetails {
                                width,
                                height,
                                sizes {
                                    medium {
                                        sourceUrl
                                    }
                                    mediumLarge {
                                        sourceUrl
                                    }
                                    large {
                                        sourceUrl
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    }
</page-query>
<script>
import ResponsiveImage from '~/components/ResponsiveImage.vue'
export default {
  components: { ResponsiveImage },
    metaInfo(){
        return {
            title: this.$page.wordPressCategory.title
        }
    }
}
</script>

<style>

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.photo{
    max-height: 90vh;
    /* margin: 0 auto; */
    padding: 1em;
    text-align: center;
}
</style>