<template>
    <div class="nav-wrapper shadow">
        <nav class="">
            <div class="name flex flex-col">
                <span class="text-cyan-500 font-bold">MOE THET HNIN</span>
                <span>モーテッニン</span>
            </div>
            <div class="nav-items">
                <NuxtLink class="each-nav" to="/#aboutme"><span>It's Me</span></NuxtLink>
                <NuxtLink class="each-nav" to="/#edubg"><span>Educaitonal Background</span></NuxtLink>
                <NuxtLink class="each-nav" to="/#workexperience"><span>Work Experience</span></NuxtLink>
                <NuxtLink class="each-nav" to="/#contact"><span>Contact</span></NuxtLink>
            </div>
        </nav>
    </div>
</template>
<style scoped lang="scss">
    @use "tailwindcss";
    .nav-wrapper{
        @apply sticky top-0 shadow z-[999] bg-white;
        nav{
            @apply container mx-auto flex p-3 items-center;
            .nav-items{
                @apply ms-auto flex gap-3;
                .each-nav{
                    @apply hover:text-cyan-600;
                }
            }
        }
    }
</style>