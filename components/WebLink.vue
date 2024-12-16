<script>
const appserver = 'https://lobulate-rhythm.000webhostapp.com'
const imgserver = 'https://res.cloudinary.com/dwsuclcox/image/upload'
const appLink = {
  server: 'https://lobulate-rhythm.000webhostapp.com',
  homePage: `${appserver}/docana/home.php`,
  onborder: `${appserver}/docana/onborder.php`,
  order: `${appserver}/docana/orders/doc_checkout.php`,
  salon: `${appserver}/salon/salon_read.php`,
  product: `${appserver}/salon/product.php`
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
