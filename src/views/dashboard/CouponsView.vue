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

  <CouponModal :coupon="tempCoupon" ref="couponModal" @update-coupon="upsertCoupon"></CouponModal>

  <DelModal :item="tempCoupon" ref="delModal"
  @del-item="delCoupon"></DelModal>
</template>

<script>
import errorHandler from '@/utils/errorHandler.js';
import CouponModal from '@/components/CouponModal.vue';
import DelModal from '@/components/DelModal.vue';
import Pagination from '@/components/PaginationComponent.vue';

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
        const getCouponUrl = `${this.$apiUrl}/admin/coupons?page=${page}`;
        this.isLoading = true;
        const res = await this.$http.get(getCouponUrl);
        if (res.data.success) {
          this.coupons = res.data.coupons;
          this.pagination = res.data.pagination;
        } else {
          throw new Error('updateOrderFailed');
        }
      } catch (error) {
        errorHandler(this.$alert, error.message);
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
    async upsertCoupon(item) {
      try {
        // 預設新增
        this.tempCoupon = item;
        let httpMethod = 'post';
        let currentPage = 1;
        let couponUrl = `${this.$apiUrl}/admin/coupon`;

        if (!this.isNew) {
          // 編輯
          couponUrl = `${this.$apiUrl}/admin/coupon/${item.id}`;
          httpMethod = 'put';
          currentPage = this.pagination.current_page;
        }

        const res = await this.$http[httpMethod](couponUrl, { data: this.tempCoupon });
        if (!res.data.success) {
          throw new Error('updateOrderFailed');
        }
        await this.getCoupons(currentPage);
      } catch (error) {
        errorHandler(this.$alert, error.message);
      } finally {
        const couponComponent = this.$refs.couponModal;
        couponComponent.hideModal();
      }
    },
    openDelCouponModal(item) {
      this.tempCoupon = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.showModal();
    },
    async delCoupon() {
      try {
        const deleteCouponUrl = `${this.$apiUrl}/admin/coupon/${this.tempCoupon.id}`;
        const res = await this.$http.delete(deleteCouponUrl);
        if (!res.data.success) {
          throw new Error('updateOrderFailed');
        }
        await this.getCoupons(this.pagination.current_page);
      } catch (error) {
        errorHandler(this.$alert, error.message);
      } finally {
        const delComponent = this.$refs.delModal;
        delComponent.hideModal();
      }
    },
  },
  async created() {
    await this.getCoupons();
  },
};
</script>
