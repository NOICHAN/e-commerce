<template>
  <div class="modal fade" id="exampleModal" tabindex="-1"
  aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
<v-form class="modal-dialog modal-xl" role="document" v-slot="{ errors }"
@submit="$emit('update-product',tempProduct)">
  <div class="modal-content border-0">
    <div class="modal-header bg-primary text-white">
      <h5 class="modal-title" id="exampleModalLabel">
        產品
      </h5>
      <button type="button" class="btn-close"
              data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <div class="row">
        <div class="col-sm-4">
          <div class="mb-3">
            <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
            <label for="image" class="form-label">輸入圖片網址</label>
            <input type="text" class="form-control" id="image" v-model="tempProduct.imageUrl"
                    placeholder="請輸入圖片連結">
          </div>
          <div class="mb-3">
              <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
            <label for="customFile" class="form-label">或 上傳圖片
              <i class="fas fa-spinner fa-spin"></i>
            </label>
            <input type="file" id="customFile" class="form-control" ref="fileInput"
            @change="uploadFile">
          </div>
          <img class="img-fluid" :src="tempProduct.imageUrl" alt="">
          <!-- 多圖 -->
          <div class="mt-5" v-if="tempProduct.imageUrl">
            <div class="mb-3 input-group"
            v-for="(image, key) in tempProduct.imagesUrl" :key="key">
              <input type="url" class="form-control form-control"
                      placeholder="請輸入連結" v-model="tempProduct.imagesUrl[key]">
              <button type="button" class="btn btn-outline-danger"
              @click="tempProduct.imagesUrl.splice(key, 1)">
                移除
              </button>
            </div>
            <div>
              <button class="btn btn-outline-primary btn-sm d-block w-100"
              type="button" @click="tempProduct.imagesUrl.push('')">
                新增圖片
              </button>
            </div>
          </div>
        </div>
        <div class="col-sm-8">
          <div class="mb-3">
              <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
            <label for="title" class="form-label">標題<span class="text-danger ms-1">*</span></label>
            <v-field type="text" class="form-control" id="title"
            name="標題" rules="required" :class="{ 'is-invalid': errors['標題'] }"
            placeholder="請輸入標題 (必填)" v-model="tempProduct.title"></v-field>
        <error-message class="invalid-feedback" name="標題">
          </error-message>
          </div>

          <div class="row gx-2">
            <div class="mb-3 col-md-6">
                <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
              <label for="category" class="form-label">分類
                <span class="text-danger ms-1">*</span></label>
              <v-field type="text" class="form-control" id="category"
              name="分類" rules="required" :class="{ 'is-invalid': errors['分類'] }"
              v-model="tempProduct.category"
            placeholder="請輸入分類 (必填)"></v-field>
            <error-message class="invalid-feedback" name="分類">
          </error-message>
            </div>
            <div class="mb-3 col-md-6">
                <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
              <label for="price" class="form-label">單位
                  <span class="text-danger ms-1">*</span></label>
              <v-field type="text" class="form-control" id="unit"
              name="單位" rules="required" :class="{ 'is-invalid': errors['單位'] }"
              v-model="tempProduct.unit"
            placeholder="請輸入單位 (必填)"></v-field>
            <error-message class="invalid-feedback" name="單位">
          </error-message>
            </div>
          </div>

          <div class="row gx-2">
            <div class="mb-3 col-md-6">
                <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
              <label for="origin_price" class="form-label">原價
                  <span class="text-danger ms-1">*</span>
              </label>
              <v-field type="number" class="form-control" id="origin_price"
              name="原價" rules="required" :class="{ 'is-invalid': errors['原價'] }"
              v-model.number="tempProduct.origin_price"
            placeholder="請輸入原價 (必填)"></v-field>
            <error-message class="invalid-feedback" name="原價">
          </error-message>
            </div>
            <div class="mb-3 col-md-6">
                <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
              <label for="price" class="form-label">售價
                  <span class="text-danger ms-1">*</span>
              </label>
              <v-field type="number" class="form-control" id="price"
              name="售價" rules="required" :class="{ 'is-invalid': errors['售價'] }"
              v-model.number="tempProduct.price"
            placeholder="請輸入售價 (必填)"></v-field>
            <error-message class="invalid-feedback" name="售價">
          </error-message>
            </div>
          </div>
          <hr>

          <div class="mb-3">
              <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
            <label for="description" class="form-label">產品描述</label>
            <textarea type="text" class="form-control" id="description"
            v-model="tempProduct.description"
            placeholder="請輸入產品描述"></textarea>
          </div>
          <div class="mb-3">
              <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
            <label for="content" class="form-label">說明內容</label>
            <textarea type="text" class="form-control" id="content"
            v-model="tempProduct.content"
            placeholder="請輸入產品說明內容"></textarea>
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input class="form-check-input" type="checkbox"
              :true-value="1" :false-value="0"
              id="is_enabled" v-model="tempProduct.is_enabled">
                      <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
              <label class="form-check-label" for="is_enabled">
                是否啟用
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-secondary"
              data-bs-dismiss="modal">取消
      </button>
      <button type="submit" class="btn btn-outline-primary"
       >確認</button>
    </div>
  </div>
</v-form>
</div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  props: {
    product: {
      type: Object,
      default() { return {}; },
    },
  },
  watch: {
    product() {
      this.tempProduct = this.product;
      if (!this.tempProduct.imagesUrl) {
        this.tempProduct.imagesUrl = [];
      }
    },
  },
  data() {
    return {
      modal: {},
      tempProduct: {},
    };
  },
  mixins: [modalMixin],
  methods: {
    uploadFile() {
      const uploadFile = this.$refs.fileInput.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', uploadFile);
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
      this.$http.post(api, formData)
        .then((res) => {
          if (res.data.success) {
            this.tempProduct.imageUrl = res.data.imageUrl;
          } else {
            this.$alert('上傳檔案格式錯誤或檔案過大，請選擇其它檔案並再次嘗試。');
          }
        })
        .catch(() => {
          this.$alert('sorry，目前服務不可用，請稍後再試或聯絡管理員。');
        });
    },
  },
};
</script>
