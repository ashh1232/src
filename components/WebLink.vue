<script>
// const appserver = 'https://lobulate-rhythm.000webhostapp.com'
const appserver = 'http://127.0.0.1'
const imgserver = 'https://res.cloudinary.com/dwsuclcox/image/upload'
const appLink = {
  server: 'https://lobulate-rhythm.000webhostapp.com',
  homePage: `${appserver}/docana-back/home.php`,
  onborder: `${appserver}/docana-back/onborder.php`,
  order: `${appserver}/docana-back/orders/doc_checkout.php`,
  salon: `${appserver}/salon/salon_read.php`,
  product: `${appserver}/docana-back/product.php`
}
export default {
  name: 'VueSelect',
  data() {
    return {
      appserver: appserver,
      appLink: appLink,
      imgserver: imgserver
    }
  }
}
</script>
