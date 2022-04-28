<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-10 col-lg-8 bg-white px-5">
        <ToggleQuestion></ToggleQuestion>
        <h4 class="text-center">退換貨說明</h4>
        <div class="accordion my-5" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                毛孩一家一可以退貨嗎？(毛孩一家一不提供換貨服務)
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show"
              aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>可以，毛孩市集所有商品皆有<code> 七天鑑賞期 </code>
                享有免費退貨服務！在收到商品後，如果不喜歡都能於七日內向店長要求退貨（以收執聯簽收日或郵戳為憑 )。
                <br>不過<code> 鑑賞期不等於試用期 </code>，一旦商品拆封使用後，就無法提供退貨囉。
                單筆訂單僅提供一次退貨，不提供第二次退貨，若第二次退貨則會請消費者負擔運費喔。</strong>
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
import ToggleQuestion from '../../components/ToggleQuestion.vue';

export default {
  components: {
    ToggleQuestion,
  },
};

</script>
