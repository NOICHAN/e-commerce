<template>
<VLoading :active="isLoading"></VLoading>
  <div>
    <div class="text-end">
      <button class="btn btn-outline-primary mt-2"
      @click="openCouponModal(true)">
        新增優惠券
      </button>
    </div>
    <table class="table mt-4">
      <thead>
      <tr>
        <th>名稱</th>
        <th>折扣百分比</th>
        <th>到期日</th>
        <th>是否啟用</th>
        <th class="d-none d-sm-block">編輯</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,key) in coupons" :key="key">
        <td>{{ item.title }}</td>
        <td>{{ item.percent }}%</td>
        <td>{{ $filters.date(item.due_date) }}</td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-muted" v-else>未起用</span>
        </td>
        <td class="d-none d-sm-block">
          <div class="btn-group">
            <button class="btn btn-outline-info btn-sm" @click="openCouponModal(false,item)"
            >編輯</button>
            <button class="btn btn-outline-danger btn-sm" @click="openDelCouponModal(item)"
            >刪除</button>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
  <Pagination :pages="pagination" @emit-pages="getCoupons"></Pagination>

  <CouponModal :coupon="tempCoupon" ref="couponModal" @update-coupon="updateCoupon"></CouponModal>

  <DelModal :item="tempCoupon" ref="delModal"
  @del-item="delCoupon"></DelModal>
</template>

<script>
import CouponModal from '../../components/CouponModal.vue';
import DelModal from '../../components/DelModal.vue';
import Pagination from '../../components/PaginationComponent.vue';

export default {
  data() {
    return {
      coupons: [],
      tempCoupon: {},
      pagination: {},
      isNew: false,
      isLoading: false,
    };
  },
  components: {
    CouponModal,
    DelModal,
    Pagination,
  },
  methods: {
    async getCoupons(page = 1) {
      try {
        const getAllCouponUrl = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`;
        this.isLoading = true;
        const res = await this.$http.get(getAllCouponUrl);
        if (res.data.success) {
          this.coupons = res.data.coupons;
          this.pagination = res.data.pagination;
        }
      } catch (error) {
        this.$alert('sorry，目前服務不可用，請稍後再試或聯絡管理員。');
      } finally {
        this.isLoading = false;
      }
    },
    openCouponModal(isNew, item) {
      if (isNew) {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000,
          is_enabled: 0,
          percent: 100,
        };
      } else {
        this.tempCoupon = { ...item };
      }
      this.isNew = isNew;
      const couponComponent = this.$refs.couponModal;
      couponComponent.showModal();
    },
    async updateCoupon(item) {
      const couponComponent = this.$refs.couponModal;
      try {
        this.tempCoupon = item;
        let httpMethod = '';
        if (this.isNew) {
          // 新增
          const postCouponUrl = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`;
          httpMethod = 'post';
          await this.$http[httpMethod](postCouponUrl, { data: this.tempCoupon });
          await this.getCoupons();
        } else {
          // 編輯
          const putCouponUrl = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`;
          httpMethod = 'put';
          await this.$http[httpMethod](putCouponUrl, { data: this.tempCoupon });
          await this.getCoupons(this.pagination.current_page);
        }
      } catch (error) {
        this.$alert('sorry，目前服務不可用，請稍後再試或聯絡管理員。');
      } finally {
        await couponComponent.hideModal();
      }
    },
    openDelCouponModal(item) {
      this.tempCoupon = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.showModal();
    },
    async delCoupon() {
      try {
        const deleteCouponUrl = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
        await this.$http.delete(deleteCouponUrl);
        const delComponent = this.$refs.delModal;
        delComponent.hideModal();
        await this.getCoupons(this.pagination.current_page);
      } catch (error) {
        this.$alert('sorry，目前服務不可用，請稍後再試或聯絡管理員。');
      }
    },
  },
  async created() {
    await this.getCoupons();
  },
};
</script>
