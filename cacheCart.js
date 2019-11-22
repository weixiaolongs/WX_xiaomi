//定义一个单例类
class CacheCart {
  constructor(data) {
    //1.在新建对象时，如果没有创建过就创建该类
    if (CacheCart.prototype.Instance === undefined) {
      this.data = data;
      CacheCart.prototype.Instance = this;
    }

    /**
     * 定义一个有两个商品的购物车
     *  */
    this.cart = {
      goods: [
        { id: 12, title: "红米Note 5A 高配版", counts: 1, price: 799, imageUrl: "http://kumanxuan1.f3322.net:8090/image/pic1.png", isSelect: true },
        { id: 14, title: "红米Note 6A 高配版", counts: 3, price: 688, imageUrl: "http://kumanxuan1.f3322.net:8090/image/pic2.png", isSelect: false },
      ],
    };

    //2.如果已经创建过就直接返回
    return CacheCart.prototype.Instance;
  }


  /**
   * 1.查找一个商品
   */
  findGood(id) {
    let goods = this.cart.goods;
    for (let i = 0; i < this.cart.goods.length; i++) {
      let good = goods[i];
      if (id == good.id) {
        return true;
      }
    }
    return false;
  }

  /**
   * 2.修改商品的数量
   */
  editGoodCounts(id, counts) {
    let goods = this.cart.goods;
    for (let i = 0; i < this.cart.goods.length; i++) {
      let good = goods[i];
      if (id == good.id) {
        good.counts = good.counts + counts;
        return true;
      }
    }
    return false;
  }

  /**
   * 3.添加一个商品到购物车
   * { id:1000, title:'红米高配版', counts:2, price:799, imageUrl: 'htpp://xxx', isSelect:false }
   */
  addGood(good) {
    let result = this.findGood(good.id);
    if (result) {
      this.editGoodCounts(good.id, good.counts);
    } else {
      this.cart.goods.push(good);
    }
  }

  /**4.删除数据中指定的数据 */
  removeGood(index) {
    this.cart.goods.splice(index, 1);
  }

  /**5.获取购物车所有的商品 */
  getGoods() {
    return this.cart.goods;
  }

  /**
   * 6.统计选中商品的总价格
   */
  getAccount() {
    let sumPrice = 0;
    this.cart.goods.forEach((value, index) => {
      //已勾选的商品
      if (value.isSelect) {
        //1.购买的数量
        let counts = value.counts;
        //2.商品的单价
        let price = value.price;
        sumPrice += (counts * price)
      }
    })
    return sumPrice;
  }

  /**
   * 7.选中所有的商品
   */
  selectAllGoods(isSelect) {
    this.cart.goods.forEach((value, index) => {
      //已勾选的商品
      value.isSelect = isSelect;
    })
  }


  /**
 * 8.仅选中指定选中的商品
 */
  selectOnlySelect(ids) {//["3000", "2000"]
    //代表没有选中的商品
    if (ids.length == 0) {
      this.selectAllGoods(false);
      return;
    }

    //先取消所有的选中
    this.selectAllGoods(false);

    //在this.cart.goods找到了，就设为true
    ids.forEach((id, index) => {
      this.cart.goods.forEach((value, i) => {
        //仅仅比较id的值
        if (value.id == id) {
          //已勾选的商品
          value.isSelect = true;
        }
      })
    })
  }

  /**
   * 9.判断是否全选
   */
  isAllSelect() {
    let goods = this.cart.goods;
    for (let i = 0; i < this.cart.goods.length; i++) {
      let good = goods[i];
      //如果存在一个没有选中的，就返回false
      if (!good.isSelect) {
        return false;
      }
    }
    return true;
  }

}

module.exports = {
  CacheCart: CacheCart
};