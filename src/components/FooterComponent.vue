<template>
    <footer class="bg-primary px-5 d-flex flex-column
    flex-sm-row justify-content-between
    align-items-center py-1">
        <ul class="fs-5 my-2 ps-0">
            <li>
                <a href="https://www.facebook.com/" target="_blank"><i class="bi bi-facebook me-2"></i>Facebook</a>
            </li>
            <li>
                <a href="https://line.me/zh-hant/" target="_blank"><i class="bi bi-line me-2"></i>Line</a>
            </li>
            <li>
                <a href="https://www.instagram.com/" target="_blank"><i class="bi bi-instagram me-2"></i>Instagram</a>
            </li>
        </ul>
        <ul class="fs-5 my-3 ps-0">
            <li>
                <router-link to="/user/paymentQuestion">付款相關問題</router-link>
            </li>
            <li>
                <router-link to="/user/transportQuestion">運送相關問題</router-link>
            </li>
            <li>
                <router-link to="/user/returnsQuestion">退換貨說明</router-link>
            </li>
        </ul>
        <router-link to="/user/list/all">
            <img src="@/assets/images/cat.png" alt="毛孩一家一LOGO">
        </router-link>
    </footer>
</template>

<style scoped lang="scss">
    li {
        list-style: none;
        a {
            text-decoration: none;
            color: #fff;
            &:hover {
                color: #181b46;
            }
        }
    }
</style>
