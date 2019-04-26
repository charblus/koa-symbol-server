// 引入mysql的配置文件
const db = require('../config/db');

// 引入sequelize对象
const Sequelize = db.sequelize;

// 引入数据表模型
const Customer = Sequelize.import('../schema/customer');
Customer.sync({force: false}); //自动创建表

class CustomerModel {
    /**
     * 创建文章模型
     * @param data
     * @returns {Promise<*>}
     */
    static async createCustomer(data){
        return await Customer.create({
            title: data.title, //标题
            author: data.author,  //作者
            content: data.content,  //文章内容
            category: data.category //文章分类
        });
    }

    /**
     * 查询文章的详情
     * @param id 文章ID
     * @returns {Promise<Model>}
     */
    static async getCustomerDetail(id){
        return await Customer.findOne({
            where:{
                id
            }
        });
    }
}

module.exports = CustomerModel;