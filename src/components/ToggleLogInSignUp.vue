<template>
    <div class="mb-5">
        <router-link class="fs-2 mx-2" to="/login">登入</router-link>
        <router-link class="fs-2 mx-2" to="/signup">註冊</router-link>
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
