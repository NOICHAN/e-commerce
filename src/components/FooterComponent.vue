<template>
    <footer class="bg-primary px-5 py-1">
    <div class="d-flex flex-column justify-content-between
    align-items-center flex-sm-row">
         <ul class="fs-5 my-2 ps-0">
            <li>
                <a href="tel:0912345678">
                    <i class="bi bi-telephone me-2"></i>0912345678
                </a>
            </li>
            <li>
                <a href="mailto:abcde@gmail.com">
                    <i class="bi bi-envelope-fill me-2"></i>abcde@gmail.com
                </a>
            </li>
            <li>
                <a href="https://goo.gl/maps/wWouN8Xqxv28fkwL7" target="_blank">
                    <i class="bi bi-geo-alt-fill me-2"></i>高雄市XX區XXX路XX號
                </a>
            </li>
        </ul>
        <ul class="fs-5 my-2 p-0">
            <li>
                <a href="https://www.facebook.com/" target="_blank">
                    <i class="bi bi-facebook me-2"></i>Facebook
                </a>
            </li>
            <li>
                <a href="https://line.me/zh-hant/" target="_blank">
                    <i class="bi bi-line me-2"></i>Line
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/" target="_blank">
                    <i class="bi bi-instagram me-2"></i>Instagram
                </a>
            </li>
        </ul>
        <router-link to="/user/list">
            <img src="@/assets/images/cat.png" alt="毛孩一家一LOGO">
        </router-link>
    </div>
    <div class="text-center text-sm-end my-3">
        <router-link to="/user/login" class="fs-5">
            <i class="bi bi-person-workspace me-2"></i>後台登入
        </router-link>
        <p class="text-white">© Copright 2022 僅為作品無任何商業用途</p>
    </div>
    </footer>
</template>

<style scoped lang="scss">
    li {
        list-style: none;
    }
    a {
            line-height: 36px;
            text-decoration: none;
            color: #fff;
            &:hover {
                color: #0dcaf0;
            }
        }
</style>
