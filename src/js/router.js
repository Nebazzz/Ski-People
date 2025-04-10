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
  const headerElement = header();
  const footerElement = footer();
  
  document.body.append(headerElement);
  document.body.append(footerElement);

  router
    .on('/', () => {
      const main = document.createElement('main');
      main.append(
        catalog(),
        breadcrumb(),
        product(),
      );
      
      const oldMain = document.querySelector('main');
      if (oldMain) oldMain.remove();
      
      footerElement.before(main);
      
      return main;
    })
    .on('/favorite', () => {
      const main = document.createElement('main');
      main.append(
        breadcrumb(),
        goods(),
      );
      
      const oldMain = document.querySelector('main');
      if (oldMain) oldMain.remove();
      
      footerElement.before(main);
      
      return main;
    })
    .on('/cart', () => {
      const main = document.createElement('main');
      main.append(
        cart(),
      );
      
      const oldMain = document.querySelector('main');
      if (oldMain) oldMain.remove();
      
      footerElement.before(main);
      
      return main;
    })
    .notFound(() => {
      console.log('ERROR 404');
    });

    router.resolve();
}