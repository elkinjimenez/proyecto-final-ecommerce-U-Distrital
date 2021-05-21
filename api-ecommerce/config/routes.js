/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

const AgendaController = require("../api/controllers/AgendaController");

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/

  'PUT /api/usuario/:id': 'UsuarioController.update',
  'DELETE /api/usuario/:id': 'UsuarioController.delete',

  'GET /api/category/list': 'CategoryController.list',
  'POST /api/category/create': 'CategoryController.create',
  'PUT /api/category/update/:id': 'CategoryController.update',

  'GET /api/product/list': 'ProductController.list',
  'POST /api/product/create': 'ProductController.create',
  'PUT /api/product/update/:id': 'ProductController.update',

  'GET /api/sale/list': 'SaleController.list',
};
