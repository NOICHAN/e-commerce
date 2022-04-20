<template>
  <div class="modal fade" id="couponModal" tabindex="-1"
       aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal" role="dialog">
    <v-form class="modal-dialog" role="document" v-slot="{ errors }"
    @submit="$emit('update-coupon', tempCoupon)">
      <div class="modal-content border-0">
        <div class="modal-header bg-primary text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            優惠券
          </h5>
          <button type="button" class="btn-close"
                  data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
            <label for="title">標題<span class="text-danger ms-1">*</span></label>
            <v-field type="text" class="form-control" id="title"
            name="標題" rules="required" :class="{ 'is-invalid': errors['標題'] }"
            v-model="tempCoupon.title" placeholder="請輸入標題(必填)"></v-field>
            <error-message class="invalid-feedback" name="標題">
          </error-message>
          </div>
          <div class="mb-3">
              <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
            <label for="coupon_code">優惠碼<span class="text-danger ms-1">*</span></label>
            <v-field type="text" class="form-control" id="coupon_code"
            name="優惠碼" rules="required" :class="{ 'is-invalid': errors['優惠碼'] }"
            v-model="tempCoupon.code" placeholder="請輸入優惠碼(必填)"></v-field>
            <error-message class="invalid-feedback" name="優惠碼">
          </error-message>
          </div>
          <div class="mb-3">
              <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
            <label for="due_date">到期日<span class="text-danger ms-1">*</span></label>
            <v-field type="date" class="form-control" id="due_date"
            name="到期日" rules="required" :class="{ 'is-invalid': errors['到期日'] }"
            :value="due_date[0]"
            v-model="due_date"></v-field>
            <error-message class="invalid-feedback" name="到期日">
          </error-message>
          </div>
          <div class="mb-3">
              <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
            <label for="price">折扣百分比<span class="text-danger ms-1">*</span></label>
            <v-field type="number" class="form-control" id="price"
            name="折扣百分比" rules="required" :class="{ 'is-invalid': errors['折扣百分比'] }"
            v-model.number="tempCoupon.percent" placeholder="請輸入折扣百分比(必填)"></v-field>
            <error-message class="invalid-feedback" name="折扣百分比">
          </error-message>
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input class="form-check-input" type="checkbox"
                     :true-value="1"
                     :false-value="0" id="is_enabled"
                     v-model="tempCoupon.is_enabled">
            <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
              <label class="form-check-label" for="is_enabled">
                是否啟用
              </label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary"
          data-bs-dismiss="modal">取消</button>
          <button type="submit" class="btn btn-primary">確認
          </button>
        </div>
      </div>
    </v-form>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  props: {
    coupon: {},
  },
  data() {
    return {
      modal: {},
      tempCoupon: {},
      due_date: '',
    };
  },
  watch: {
    coupon() {
      this.tempCoupon = this.coupon;
      const dateAndTime = new Date(this.tempCoupon.due_date * 1000).toISOString().split('T');
      this.due_date = dateAndTime;
    },
    due_date() {
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000);
    },
  },
  mixins: [modalMixin],
};
</script>
