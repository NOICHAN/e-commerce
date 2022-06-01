<template>

<div class="wrap">
  <div class="container d-flex justify-content-center py-5">
      <div class="bg-special p-3 text-center">
        <ul class="h5">
          <li>想讓主子用渴望的眼神看著你?</li>
          <li>想讓主子在門口等你回家嗎?</li>
          <li>想讓主子對你撒嬌求抱抱?</li>
        </ul>
        <p class="h4 text-white">奴才們~</p>
        <router-link to="/user/list" class="h3 mb-0 btn btn-lg btn-outline-light">尋找主子的最愛
        </router-link>
      </div>
  </div>
  <div>
    <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions"
    data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions"
    data-bs-slide-to="1" aria-label="Slide 2"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1493406300581-484b937cdc41?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170" class="d-block w-100" alt="你購物，我捐款。">
      <div class="carousel-caption d-none d-md-block bg-special">
        <h5 class="text-danger h2 fw-bold">你購物，我捐款。</h5>
        <p class="fs-5">即日起至8月底，毛孩一家一所營利的百分之10，全數捐給XX動物協會。</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1529257414772-1960b7bea4eb?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170" class="d-block w-100" alt="全館滿499元免運">
      <div class="carousel-caption d-none d-md-block bg-special">
        <h5 class="text-danger h2 fw-bold">全館滿499元免運</h5>
        <p class="fs-5">一年一度週年慶，連出門都不用就可以哄主子開心，真好~</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button"
  data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button"
  data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  </div>
  <div class="container">
    <div class="py-5 text-center">
      <h3 class="my-4 h2 text-primary"><i class="bi bi-binoculars me-1"></i>探索主子的最愛</h3>
      <div class="row row-cols-1 row-cols-sm-3 g-2 g-md-5">
        <div class="col">
          <a href="#" class="category fs-1 feed "
          @click.prevent="category('feed')"><p>飼料</p>
          <div class="bg-special textBox"><p>立即前往</p></div></a>
        </div>
        <div class="col">
          <a href="#" class="category fs-1 canned"
          @click.prevent="category('canned')"><p>罐頭</p>
          <div class="bg-special textBox"><p>立即前往</p></div></a>
        </div>
        <div class="col">
          <a href="#" class="category fs-1 toy"
          @click.prevent="category('toy')"><p>玩具</p>
          <div class="bg-special textBox"><p>立即前往</p></div></a>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-primary py-5 text-white text-center">
    <h3 class="my-4 h2"><i class="bi bi-flower3 me-1"></i>主要服務項目</h3>
    <div class="container-fluid">
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
  <div class="container">
    <div class="py-5 text-center">
      <h3 class="my-4 h2 text-primary"><i class="bi bi-hand-thumbs-up me-1"></i>店貓推薦</h3>
      <div class="row">
        <div class="col-4"></div>
        <div class="col-8"><div class="row">
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
        </div></div>
      </div>
    </div>
  </div>
  <div class="bg-primary py-5 text-white text-center">
    <h3 class="my-4 h2"><i class="bi bi-info-circle me-1"></i>最新消息</h3>
    <div class="container-fluid">
      <div class="row align-items-center row-cols-1 row-cols-md-2">
      <div class="col mb-5 mb-md-0">
        <img src="https://images.unsplash.com/photo-1651720602215-7de4043a9611?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI3fHxjYXR8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500" alt="全館滿499元免運">
      </div>
      <div class="col">
        <div class="text-md-start">
          <h4 class="mb-5">歡慶周年全館八折</h4>
          <p>即日起至8月底，全館無低消，輸入優惠券打八折。</p>
          <a href="#" class="btn btn-outline-info" @click="showCoupon">取得優惠碼</a>
        </div>
      </div>
    </div>
    </div>
  </div>
  <div class="d-flex justify-content-center py-5">
    <div class="bg-special p-3 text-center">
      <h3 class="my-4 h2 text-primary"><i class="bi bi-envelope-check me-1"></i>訂閱我們</h3>
      <div class="d-flex mb-4">
        <label for="email">
          <input type="email" placeholder="請輸入Mail"
        class="border-0 rounded">
        </label>
        <button class="btn btn-outline-danger">訂閱</button>
      </div>
    </div>
  </div>
  <div class="bg-primary text-center text-white">
    <h3 class="py-4 h2"><i class="bi bi-shop me-1"></i>門市</h3>
    <div class="container-fluid">
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
  background-image: url(https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870);
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}

ul {
  list-style: none;
  line-height: 36px;
  color: #fff;
  padding: 0;
}

img {
        height: 200px;
        position: relative;
        object-fit: cover;
        object-position: center center;
        @media(min-width: 768px) {
          height: 400px;
        }
    }

  input[type="email"] {
  height: 38px;
}

.bg-special {
  background-color: rgba(0, 0, 0, 0.2);
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
    left: 0;
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
  background: url('https://img.my-best.tw/press_component/images/1abb3d2d00d7331dedcb54a77dd22774.jfif?ixlib=rails-4.2.0&q=70&lossless=0&w=690&fit=max');
  background-size: cover;
  background-position: center center;
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
export default {
  methods: {
    showCoupon() {
      this.$alert('八折優惠碼 : good-8 ');
    },
    category(item) {
      this.$router.replace({
        path: '/user/list',
        query: { category: item },
      });
    },
  },
};
</script>
