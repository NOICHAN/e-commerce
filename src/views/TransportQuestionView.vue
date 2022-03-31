<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-10 col-lg-8 bg-white px-5">
        <ToggleQuestion></ToggleQuestion>
        <h4 class="text-center">運送相關問題</h4>
        <div class="accordion my-5" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                運費是多少錢呢？
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show"
              aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong><code>【本島】</code>
                購物滿 1000 元免運 (購物金 / 優惠碼折抵後，不包含運費) <br>
                未滿 1000 元將酌收 80 元金物流費。</strong> <br> <br>
                <strong><code>【離島】</code>
                購物滿 2000 元免運 (購物金 / 優惠碼折抵後，不包含運費) <br>
                未滿 2000 元將酌收 200 元金物流費。</strong>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                有超商取貨嗎？
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>有哦！我們現在支援的超商取貨有：<br>
                <code>【7-11】【全家】【萊爾富】</code></strong>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                超商取貨有哪幾種付款方式呢？
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse"
              aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>目前支援：<br><code>【線上刷卡，超商純取貨】</code><br>
                <code>【超商取貨付款】</code><br>這兩種付款方式哦！</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ToggleQuestion from '../components/ToggleQuestion.vue';

export default {
  components: {
    ToggleQuestion,
  },
};

</script>
