const Router = require('koa-router');
const ArtileController = require('../controllers/article');
const ShipperController = require('../controllers/shipper');
const OrganizeController = require('../controllers/organize');
const CustomerController = require('../controllers/customer');

const router = new Router({
  prefix: '/api/v1'
});


/**
 * 文章接口
 */
router.post('/article/create', ArtileController.create); //创建文章
router.get('/article/:id', ArtileController.detail);  //获取文章详情
/**
 * 货主接口
 */
router.post('/shipper/create', ShipperController.create); // 创建货主
router.get('/shipper/:id', ShipperController.detail); //获取货主详情
/**
 * 基地接口
 */
router.post('/organize/create', OrganizeController.create); // 创建基地
router.get('/organize/:id', OrganizeController.detail); //获取基地详情
/**
 * 客户接口
 */
router.post('/customer/create', CustomerController.create); // 创建基地
router.get('/customer/:id', CustomerController.detail); //获取基地详情



module.exports = router