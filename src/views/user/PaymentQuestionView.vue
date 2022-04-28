<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-10 col-lg-8 bg-white px-5">
        <ToggleQuestion></ToggleQuestion>
        <h4 class="text-center">付款相關問題</h4>
        <div class="accordion my-5" id="accordionExample">
          <div class="accordion-item">
            <h5 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                目前有什麼付款方式呢？
              </button>
            </h5>
            <div id="collapseOne" class="accordion-collapse collapse show"
              aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>現在可以使用<code>【線上刷卡】</code>、
                <code>【宅配貨到付款】</code>、<code>【Apple Pay 付款】</code>、
                以及<code>【超商取貨付款】</code>等方式付款唷！</strong>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h5 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                毛孩一家一會開發票嗎？
              </button>
            </h5>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>當然會！配合政府環保無紙發票政策，所有訂單一律在出貨的同時寄出電子發票到你的 email 信箱裡喔。</strong>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h5 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                可以開統編嗎？
              </button>
            </h5>
            <div id="collapseThree" class="accordion-collapse collapse"
              aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>可以，請在訂單結帳畫面勾選「公司戶(三聯)發票」，填寫統編、抬頭、地址，我們會在出貨的同時寄出電子發票到你的 email 信箱裡喔。</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ToggleQuestion from '../../components/ToggleQuestion.vue';

export default {
  components: {
    ToggleQuestion,
  },
};

</script>
