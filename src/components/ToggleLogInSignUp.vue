<template>
    <div class="mb-5">
        <router-link class="fs-2 mx-2" to="/user/login">登入</router-link>
        <router-link class="fs-2 mx-2" to="/user/signup">註冊</router-link>
    </div>
</template>

<style scoped lang="scss">
a {
    text-decoration: none;
    color: #aaa;
    border-bottom: 3px solid #aaa;

    &:hover {
        color: #0dcaf0;
        border-bottom: 3px solid #0dcaf0;
        }

    &.active {
        text-decoration: none;
        color: #0dcaf0;
        border-bottom: 3px solid #0dcaf0;
        }
}
</style>
