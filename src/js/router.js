import Navigo from "navigo";
import { header } from "../components/header";
import { main } from "../components/main";
import { catalog } from "../components/catalog";
import { product } from "../components/product";
import { footer } from "../components/footer";
import { productList } from "../components/productList";
import { getData } from "./api";

const router = new Navigo('/', { linksSelector: 'a[href^="/"]' });

export const initRouter = () => {
  router
    .on('/', async () => {
      const goods = await getData();
        header(),
        catalog(main(), goods);
        productList('Список товаров', goods, main()),
        footer(),
        console.log('main');
    })
    .on('/product', () => {
      console.log('product');
    })
    .on('/favorite', async() => {
      const goods = await getData();
      header();
      productList('Избранное', goods, main());
      footer();
      console.log('favorite');
    })
    .notFound(() => {
      console.log('ERROR 404');
    });

    router.resolve();
}