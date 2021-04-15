import '~/assets/styles.css'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout);
  head.meta.push({
    name: 'keywords',
    content: 'photography, photos, portfolio, showcase'
  });

}
