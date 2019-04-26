const Router = require('koa-router');
const ArtileController = require('../controllers/article');

const router = new Router({
  prefix: '/api/v1'
});


/**
 * 文章接口
 */
router.post('/article/create', ArtileController.create); //创建文章
router.get('/article/:id', ArtileController.detail);  //获取文章详情



module.exports = router