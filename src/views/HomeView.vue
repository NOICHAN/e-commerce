<template>
<Navbar></Navbar>
<div class="wrap">
  <div class="container-sm">
    <div class="banner">
      <img src="https://images.unsplash.com/photo-1529257414772-1960b7bea4eb?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170" class="d-block w-100 bannerImg" alt="全館滿499元免運">
      <div class="bannerContent bg-special text-white">
        <h3 class="text-danger">限時免運活動開跑</h3>
        <p>即日起至8月底</p>
        <p>全館無低消</p>
        <router-link class="btn btn-primary" to="/user/list">前往購物</router-link>
      </div>
    </div>
  </div>
  <div class="bg-primary text-warning text-center">
    <div class="container py-5 text-center">
      <h3 class="mb-4 h2 text-warning"><i class="bi bi-binoculars me-1"></i>探索主子的最愛</h3>
      <div class="row flex-column flex-sm-row gy-5 gy-md-0 gx-md-5
      justify-content-center align-items-center">
        <div class="col-8 col-sm-4">
          <a href="#" class="category fs-1 feed "
          @click.prevent="category('feed')"><p>飼料</p>
          <div class="bg-special textBox"><p>立即前往</p></div></a>
        </div>
        <div class="col-8 col-sm-4">
          <a href="#" class="category fs-1 canned"
          @click.prevent="category('canned')"><p>罐頭</p>
          <div class="bg-special textBox"><p>立即前往</p></div></a>
        </div>
        <div class="col-8 col-sm-4">
          <a href="#" class="category fs-1 toy"
          @click.prevent="category('toy')"><p>玩具</p>
          <div class="bg-special textBox"><p>立即前往</p></div></a>
        </div>
      </div>
      <div class="row flex-column flex-sm-row justify-content-center align-items-center mt-5">
        <div class="col-10 col-sm-7">
          <div class="knowledge">
            <img class="knowledgeImg" src="https://images.unsplash.com/photo-1555008872-f03b347ffb53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="">
            <div class="d-block d-sm-none knowledgeContent">
            <h5 class="h3 text-white fw-bold mb-5">貓咪一天要喝多少水，你知道嗎？</h5>
            <p class="text-white fw-bold">
              貓咪一天需要攝取的水量大約是每公斤40~60ml，<br/>
              如果長期食用乾飼料，且水量攝取不足，小心泌尿道疾病找上門。<br/>
              奴才可藉由每天觀察喝水量及排尿量、定期去醫院做健康檢查，確保貓咪的健康。
            </p>
          </div>
          </div>
        </div>
        <div class="col-sm-5 d-none d-sm-block">
          <h5 class="h3 text-warning fw-bold">貓咪一天要喝多少水，你知道嗎？</h5>
          <p class="text-warning fw-bold">
            貓咪一天需要攝取的水量大約是每公斤40~60ml，<br/>
            如果長期食用乾飼料，且水量攝取不足，小心泌尿道疾病找上門。<br/>
            奴才可藉由每天觀察喝水量及排尿量、定期去醫院做健康檢查，確保貓咪的健康。</p>
        </div>
      </div>
      <div class="row flex-column flex-sm-row-reverse
      justify-content-center align-items-center mt-5">
        <div class="col-10 col-sm-7">
          <div class="knowledge">
            <img class="knowledgeImg" src="https://images.unsplash.com/photo-1511275539165-cc46b1ee89bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="">
            <div class="d-block d-sm-none knowledgeContent">
            <h5 class="h3 text-white fw-bold mb-5">原來貓咪也會過敏，你知道嗎？</h5>
            <p class="text-white fw-bold">
              貓咪也會對食物過敏，<br/>
              除了常見的蛋白質過敏外，其它可能導致貓過敏的常見過敏原包含人工色素、澱粉、乳製品、穀物、膠類等...<br/>
              奴才在挑選食物時要特別注意成份，避免挑選到容易導致貓咪過敏的成份飼料。
            </p>
          </div>
          </div>
        </div>
        <div class="col-sm-5 d-none d-sm-block">
          <h5 class="h3 text-warning fw-bold">原來貓咪也會過敏，你知道嗎？</h5>
          <p class="text-warning fw-bold">
              貓咪也會對食物過敏，<br/>
              除了常見的蛋白質過敏外，其它可能導致貓過敏的常見過敏原包含人工色素、澱粉、乳製品、穀物、膠類、防腐劑等...<br/>
              奴才在挑選食物時要特別注意成份，避免挑選到容易導致貓咪過敏的成份飼料。</p>
        </div>
      </div>
      <h3 class="mb-4 mt-5 h2 text-warning"><i class="bi bi-hand-thumbs-up me-1"></i>貓店長推薦</h3>
      <div class="row flex-column flex-sm-row gy-5 gy-md-0 gx-md-5
      justify-content-center align-items-center">
        <div class="col-8 col-sm-4" v-for="item in recommend" :key="item.id">
          <div class="recommend">
            <img class="recommendImg" :src="item.imageUrl" :alt="item.title">
            <button type="button" class="more btn btn-primary"
              @click="getProduct(item.id)">查看更多</button>
          </div>
        </div>
      </div>
    <h3 class="mb-4 h2 mt-5"><i class="bi bi-flower3 me-1"></i>主要服務項目</h3>
      <div class="row row-cols-1 row-cols-md-3">
      <div class="col">
        <i class="bi bi-truck fs-1"></i>
        <h4>快速出貨</h4>
        <ul>
          <li>當日中午前下單明天到貨</li>
          <li>當日中午後下單後天到貨</li>
        </ul>
      </div>
      <div class="col">
        <i class="bi bi-award fs-1"></i>
        <h4>品質把關</h4>
        <ul>
          <li>上架產品經過嚴格篩選</li>
          <li>每季定期篩選產品品質</li>
        </ul>
      </div>
      <div class="col">
        <i class="bi bi-chat-heart fs-1"></i>
        <h4>專業客服</h4>
        <ul>
          <li>不怕你問，怕你不問。</li>
          <li>中、英、日語暢通無阻</li>
        </ul>
      </div>
    </div>
  </div>
  </div>
  <div class="d-flex justify-content-center py-5">
    <div class="bg-special p-3 text-center">
      <h3 class="my-4 h2 text-warning"><i class="bi bi-envelope-check me-1"></i>訂閱我們</h3>
      <div class="d-flex mb-4">
        <label for="email">
          <input type="email" placeholder="請輸入E-mail"
        class="border-0 rounded">
        </label>
        <button class="btn btn-outline-danger">訂閱</button>
      </div>
    </div>
  </div>
  <div class="bg-primary text-center text-warning py-5">
    <h3 class="mb-4 h2"><i class="bi bi-shop me-1"></i>門市</h3>
    <div class="container">
      <div class="row align-items-center row-cols-1 row-cols-lg-2">
      <div class="col mb-5 mb-lg-0">
        <iframe title="This is Kaohsiung" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d179203.49260681611!2d120.31850439712994!3d22.5776404791912!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e04fd209f4835%3A0x54511e7d86c87c09!2z6auY6ZuE5biC6byT5bGx5Y2A6auY6ZuE!5e0!3m2!1szh-TW!2stw!4v1653315312501!5m2!1szh-TW!2stw" height="300" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div class="col">
        <h4>高雄總店</h4>
        <p>毛孩一家一全台唯一店面，<br>網購商品也統一由此店面出貨。</p>
        <ul>
          <li>門市超大空間逛到爽</li>
          <li>現場上萬商品任你選</li>
          <li>店門口假日毛孩市集</li>
          <li>每月28號來店享85折</li>
          <li>不定期認養活動</li>
        </ul>
      </div>
    </div>
    </div>
  </div>
</div>

</template>

<style scoped lang="scss">
.wrap {
  background-image: url('@/assets/images/bg.png');
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  margin-top: 82px;
  @media(min-width: 576px){
      margin-top: 100px;
    }
}

ul {
  list-style: none;
  line-height: 36px;
  color: #181b46;
  padding: 0;
}
.banner {
  position: relative;
  .bannerContent {
    position: absolute;
    top: 50%;
    left: 30%;
    padding: 10px;
    transform: translateY(-50%) translateX(-50%);
    @media(min-width: 768px) {
      left: 25%;
      padding: 20px;
      h3 {
        font-size: 36px;
      }
      p {
        font-size: 24px;
      }
    }
  }
}
.bannerImg,
.discountImg {
        height: 250px;
        object-fit: cover;
        object-position: center center;
        @media(min-width: 768px) {
          height: 500px;
        }
    }
.recommend {
  height: 200px;
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  box-shadow: 5px 5px 6px #00000029;
  &:hover .recommendImg {
    transform: scale(1.1);
    transition: transform .7s;
  }
  &:hover .more {
    bottom: 10%;
  }
  .recommendImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
  .more {
    position: absolute;
    left: 50%;
    bottom: -50%;
    text-align: center;
    transition: .5s;
    transform: translateY(-50%) translateX(-50%);
  }
}

.knowledge {
  height: 400px;
  overflow: hidden;
  border-radius: 24px;
  position: relative;
  box-shadow: 5px 5px 6px #00000029;
  &:hover .knowledgeImg {
    transform: scale(1.1);
    transition: transform .7s;
  }
  &:hover .knowledgeContent {
    bottom: 0;
    transition: .5s;
  }
  .knowledgeImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
  .knowledgeContent {
    width: 100%;
    padding: 10px 5px 0 5px;
    position: absolute;
    bottom: -46%;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
  }
}

input[type="email"] {
  height: 38px;
  padding: 10px;
}

.bg-special {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 24px;
  box-shadow: 5px 5px 6px #00000029;
}
.category {
  display: block;
  height: 250px;
  border: 1px solid #fff;
  border-radius: 50%;
  text-decoration:none;
  color: #181b46;
  position: relative;
  overflow: hidden;
  box-shadow: 5px 5px 6px #00000029;
  &:hover .textBox{
      top: -1%;
    }
  &:hover p{
      top: -10%;
    }
  p {
    margin: 0;
    padding: 0;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    transition: .3s;
  }
  .textBox {
    position: absolute;
    left: 0%;
    top: -102%;
    width: 100%;
    height: 102%;
    text-align: center;
    transition: .5s;
    p {
      margin: 0;
      padding: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      color: #fff;
    }
  }
}
.feed {
  background: url('https://img.mweb.com.tw/thumb/896/1000x1000/istock-807894744.jpg');
  background-size: cover;
  background-position: center right;
}
.canned {
  background: url('https://secretary.nuu.edu.tw/var/file/3/1003/pictures/259/m/mczh-tw800x800_large10404_419276364205.png');
  background-size: cover;
  background-position: right bottom;
}
.toy {
  background: url('https://img10.360buyimg.com/n1/jfs/t1/8717/33/8512/98797/5c0cdd63E9832525b/de2842c83800b271.jpg');
  background-size: cover;
  background-position: center center;
}
iframe {
  width: 330px;
  @media(min-width: 768px) {
    width: 450px;
  }
}
</style>

<script>
import errorHandler from '@/utils/errorHandler.js';
import Navbar from '@/components/NavbarHome.vue';

export default {
  data() {
    return {
      products: [],
      recommend: [],
    };
  },
  components: {
    Navbar,
  },
  methods: {
    async getShoppingProducts() {
      try {
        const getAllShoppingProducts = `${this.$apiUrl}/products/all`;
        this.isLoading = true;
        const res = await this.$http.get(getAllShoppingProducts);
        if (res.data.success) {
          this.products = res.data.products;
        } else {
          throw new Error('updateOrderFailed');
        }
      } catch (error) {
        errorHandler(this.$alert, error.message);
      } finally {
        this.isLoading = false;
      }
    },
    getRecommend() {
      for (let i = 0; this.recommend.length < 3; i += 1) {
        const randomIndex = Math.floor(Math.random() * (this.products.length));
        const product = this.products[randomIndex];
        if (!this.recommend.includes(product)) {
          this.recommend.push(product);
          this.products.splice(randomIndex, 1);
        }
      }
    },
    showCoupon() {
      this.$alert('八折優惠碼 : good-8 ');
    },
    category(item) {
      this.$router.replace({
        path: '/user/list',
        query: { category: item },
      });
    },
    getProduct(id) {
      this.$router.push(`/user/product/${id}`);
    },
  },
  async mounted() {
    await this.getShoppingProducts();
    this.getRecommend();
  },
};
</script>
