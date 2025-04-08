import Navigo from "navigo";
import { header } from "../components/header";
import { catalog } from "../components/catalog";
import { breadcrumb } from "../components/breadcrumb";
import { product } from "../components/product";
import { goods } from "../components/goods";
import { cart } from "../components/cart";
import { order } from "../components/order";
import { footer } from "../components/footer";

const router = new Navigo('/', { linksSelector: 'a[href^="/"]' });

export const initRouter = () => {
  router
    .on('/', () => {
      const main = document.createElement('main');

      main.append(
        catalog(),
        breadcrumb(),
        product(),
        goods(),
        cart(),
        order(),
      );

      document.body.append(
        header(),
        main,
        footer()
      );
    })
    .on('/favorite', () => {
      console.log('FAVORITE');
    })
    .notFound(() => {
      console.log('ERROR 404');
    })

    router.resolve();
}
