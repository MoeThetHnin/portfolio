<template>
    <div class="banner">
        <img class="banner-image" src="/assets/images/portfolio_banner.jpg" alt="">
        <div class="banner-info">
            <div class="greeting flex flex-col text-white items-center">
                <span class="me-auto">Hello, I'm</span> 
                <h2 class="text-2xl md:text-3xl font-bold">MOE THET HNIN</h2>
                <h3 class="text-xl">Bachelor of Engineering (IT)</h3>
            </div>
            <div class="short-bio flex flex-col items-center">
                <h3 class="text-xl md:text-2xl">Frontend Developer</h3>
                <div class="my-skills ">
                    <span class="each-ms">HTML</span>
                    <span class="and">&</span>
                    <span class="each-ms">CSS</span>
                    <span class="and">&</span>
                    <span class="each-ms">JavaScript</span>
                    <span class="and">&</span>
                    <span class="each-ms">SCSS</span>
                    <span class="and">&</span>
                    <span class="each-ms">Bootstrap</span>
                    <span class="and">&</span>
                    <span class="each-ms">Tailwind</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
    @use "tailwindcss";
    .banner{
        position: relative;
        background: #3db5ca;
        display: flex;
        .banner-image{
            margin-left: auto;
        }
        .banner-info{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            .short-bio{
                @apply text-gray-600;
                .my-skills{
                    @apply hidden;
                    @apply md:flex gap-1 items-center;
                    .each-ms{
                        
                    }
                }
            }
        }
    }
</style>