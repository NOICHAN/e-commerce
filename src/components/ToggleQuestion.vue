<template>
    <div class="my-5 d-flex justify-content-center flex-column flex-md-row">
        <router-link class="fs-5 mx-3 mb-3 mb-md-0"
        to="/user/paymentQuestion">付款相關問題</router-link>
        <router-link class="fs-5 mx-3 mb-3 mb-md-0"
        to="/user/transportQuestion">運送相關問題</router-link>
        <router-link class="fs-5 mx-3"
        to="/user/returnsQuestion">退換貨說明</router-link>
    </div>
</template>

<style scoped lang="scss">
a {
    text-decoration: none;
    color: #aaa;
    border-bottom: 3px solid #aaa;

    &:hover {
        color: #ff6745;
        border-bottom: 3px solid #ff6745;
        }

    &.active {
        text-decoration: none;
        color: #ff6745;
        border-bottom: 3px solid #ff6745;
        }
}
</style>
