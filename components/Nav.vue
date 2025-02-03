<script setup>
    const menuToggle = ref(false)

    const closeMenu = () => {
        menuToggle.value = false;
    }
</script>
<template>
    <div class="nav-wrapper shadow">
        <nav class="">
            <div class="name flex flex-col">
                <span class="text-cyan-500 font-bold">MOE THET HNIN</span>
                <span>モーテッニン </span>
            </div>
            <span class="openMenu" @click="menuToggle = true">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>          
            </span>
            <div class="nav-items-wrapper" :class="menuToggle ? 'menu-show' : '' ">
                <div class="nav-item-cover" @click="closeMenu"></div>
                <div class="nav-items" @click="closeMenu">
                    <div class="each-nav close-menu">
                        <span @click="closeMenu">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                            </svg>
                        </span>
                    </div>
                    <NuxtLink class="each-nav" to="/#aboutme"><span>It's Me</span></NuxtLink>
                    <NuxtLink class="each-nav" to="/#edubg"><span>Educaitonal Background</span></NuxtLink>
                    <NuxtLink class="each-nav" to="/#workexperience"><span>Work Experience</span></NuxtLink>
                    <NuxtLink class="each-nav" to="/#contact"><span>Contact</span></NuxtLink>
                </div>
            </div>
        </nav>
    </div>
</template>
<style scoped lang="scss">
    @use "tailwindcss";
    .nav-wrapper{
        @apply sticky top-0 shadow z-[999] bg-white;
        nav{
            @apply relative container mx-auto flex p-3 items-center;
            .openMenu{
                @apply ms-auto;
                @apply md:hidden;
            }
            .nav-items-wrapper{
                @apply ms-auto;
                .nav-item-cover{
                    @apply absolute top-0 left-0 w-100 h-screen bg-gray-600 opacity-[75%];
                    @apply md:hidden;
                }
                .nav-items{
                    // for all devices (including sp)
                    @apply flex flex-col absolute bg-cyan-500 top-0 right-0 text-white w-[75%] h-screen;
                    // for pc 
                    @apply md:flex-row md:gap-3 md:static md:bg-white md:text-[#666] md:h-[auto] md:w-[unset];
                    .each-nav{
                        @apply p-3 border-b;
                        @apply md:hover:text-cyan-600 md:p-0 md:border-b-0;
                    }
                    .close-menu{
                        @apply h-[72px] flex items-center;
                        @apply md:hidden;
                        >span{
                            @apply ms-auto;
                        }
                    }
                }
            }
            .nav-items-wrapper:not(.menu-show){
                @apply hidden;
                @apply md:flex;
            }
        }
    }
    // @media only screen and (max-width: 576px) {
    //     .nav-wrapper{
    //         nav{
    //             .nav-items{
    //                 @apply flex-col;
    //             }
    //         }
    //     }
    // }
</style>