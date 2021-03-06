'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.home.index)

  // restful
  router.resources('products', '/api/product', app.controller.product)
  router.resources('detailpics', '/api/detailpic', app.controller.detailpic)
  router.resources('acts', '/api/act', app.controller.act)
  router.resources('actproducts', '/api/actproduct', app.controller.actproduct)
  router.resources('users', '/api/user', app.controller.user)
  router.resources('brands', '/api/brand', app.controller.brand)
  router.resources('carts', '/api/cart', app.controller.cart)
  router.resources('colors', '/api/color', app.controller.color)
  router.resources('orders', '/api/order', app.controller.order)
  router.resources('roles', '/api/role', app.controller.role)
  router.resources('actions', '/api/action', app.controller.action)
  router.resources('actiondetails', '/api/actiondetail', app.controller.actiondetail)


  // business

  // 用户登录接口
  router.post('/api/login', app.controller.user.login)

  // 查询用户购物车接口
  router.get('/api/usercart/:userId', app.controller.cart.findCartByUserId)
  // 结算购物车接口
  router.post('/api/settlement/:userId', app.controller.cart.settlement)

  // 查询用户订单接口
  router.get('/api/userorder/:userId', app.controller.order.findOrderByUserId)

  // 查询商品详情图
  router.get('/api/productpic/:productId', app.controller.detailpic.findDetailPicByProductId)

  // 查询用户登录日期
  router.get('/api/userlogindate', app.controller.actiondetail.conuntLoginDate)

  // 用户浏览商品统计
  router.get('/api/userbrowseproduct', app.controller.actiondetail.countBrowseProduct)

   // 用户加车商品统计
   router.get('/api/useraddcart', app.controller.actiondetail.countAddCart)

  // 用户下单商品统计
  router.get('/api/useraddorder', app.controller.actiondetail.countAddOrder)
}
