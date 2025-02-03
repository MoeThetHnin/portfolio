<script setup>
    const my_skills = {
        frontend:[
            { name: "HTML", exp: 6 },
            { name: "CSS", exp: 6 },
            { name: "JavaScript", exp: 2 },
            { name: "Bootstrap", exp: 1 },
            { name: "Vue", exp: 0 },
            { name: "Nuxt", exp: 0 },
            { name: "SCSS", exp: 0 },
            { name: "Tailwind", exp: 0 },
        ],
        tools:[
            { name: "Adobe Experience Manager", exp: 4 },
            { name: "Contentful Management System", exp: 2 },
        ]
    }
    const my_edu = [
        { name: "Bachelor Of Engineering (IT)" },
        { name: "Japanese Language Proficiency Test - JLPT (N2)" },
        { name: "Front-End Web UI Frameworks and Tools : Bootstrap 5" },
        { name: "English Language (Business Level)" },
    ]
    const my_contact = [
        { name: "GMAIL", url: "mailto:moethethnin.tu@gmail.com", icon: `<svg height="35" width="35" xmlns="http://www.w3.org/2000/svg" viewBox="0 49.4 512 399.4200000000001"><g fill="none" fill-rule="evenodd"><g fill-rule="nonzero"><path d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z" fill="#4285f4"></path><path d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z" fill="#34a853"></path><path d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z" fill="#fbbc04"></path></g><path d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z" fill="#ea4335"></path><path d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z" fill="#c5221f" fill-rule="nonzero"></path></g></svg>`},
        { name: "LINKEDIN", url: "https://www.linkedin.com/in/moe-thet-hnin/", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="7.025 7.025 497.951 497.95"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="-974.482" y1="1306.773" x2="-622.378" y2="1658.877" gradientTransform="translate(1054.43 -1226.825)"><stop offset="0" stop-color="#2489be"></stop><stop offset="1" stop-color="#0575b3"></stop></linearGradient><path d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z" fill="url(#a)"></path></svg>`},
        { name: "GitHub", url: "https://github.com/MoeThetHnin", icon: `<svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-mark-github" viewBox="0 0 16 16" width="35" height="35" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg>`}
    ]
    
</script>
<template>
    <Banner />
    <div class="page-content">
        <div id="aboutme" class="about-me">
            <h3 class="">It's Me</h3>
            <ul class="p-2 ps-6 list-disc">
                <li>Hello! I'm MOE THET HNIN, a passionate web developer with a Bachelor of Engineering in Information Technology (B.E.IT).</li>
                <li>With over six years of experience in front-end development, I have honed my skills in creating visually appealing and user-friendly websites.</li>
                <li>My expertise lies in HTML, CSS, JavaScript, and modern frameworks like Vue.js. </li>
                <li>I thrive on turning complex problems into simple, beautiful, and intuitive designs.</li>
                <li>Whether it's developing responsive layouts or optimizing website permormance, I am dedicated to delivering high-quality results.</li>
                <li>Thank you for visiting my portfolio. I look forward to connecting with you!</li>
            </ul>
        </div>
        <div id="edubg" class="edubg">
            <h3>Educational Background</h3>
            <div class="edu-info">
                <ul class="edu-list">
                    <li v-for="(me,meIndex) in my_edu" :key="meIndex">
                        {{ me.name }}
                    </li>
                </ul>
            </div>
        </div>
        <div id="workexperience" class="work-experience">
            <h3 class="">Work Experience</h3>
            <div class="we-info">
                <div class="frontend">
                    <h4 class="text-xl font-semibold">Frontend Development</h4>
                    <ul class="we-skills">
                        <li v-for="(skill,sIndex) in my_skills.frontend" :key="sIndex">
                            <span>{{ skill.name }}</span>
                            <small v-if="skill.exp > 1">{{ skill.exp }} Years</small>
                            <small v-if="skill.exp == 1">{{ skill.exp }} Year</small>
                        </li>
                    </ul>
                </div>
                <hr>
                <div class="tools">
                    <h4 class="text-xl font-semibold">Tools</h4>
                    <ul class="we-skills">
                        <li v-for="(skill, sIndex) in my_skills.tools" :key="sIndex">
                            <span>{{ skill.name }}</span>
                            <template v-if="skill.exp > 0">
                                <small>{{ skill.exp }} Years</small>
                            </template>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="contact" class="contact">
            <h3 class="">Contact Info</h3>
            <ul class="c-list">
                <li v-for="(contact ,cIndex) in my_contact" :key="cIndex">
                    <NuxtLink :to="contact.url" external target="_blank">
                        <span class="svg-icon" v-html="contact.icon" >
                            
                        </span>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped lang="scss">
    @use "tailwindcss";
    .page-content{
        @apply container mx-auto  py-8 flex flex-col gap-6;
        .about-me,.edubg, .work-experience, .contact {
            @apply px-3 ;
            h3 {
                @apply px-3 py-2 text-xl shadow bg-cyan-500 text-gray-600; 
            }
        }
        .edubg{
            ul{
                @apply p-2 ps-6 list-disc;
            }
        }
        .work-experience{
            .we-info{
                @apply p-2;
                .frontend, .tools{
                    @apply py-3;
                }
                .frontend, .tools{
                    .we-skills{
                        @apply grid grid-cols-4 gap-2 p-3;
                        li{
                            @apply flex flex-col leading-4 ;
                            small{
                                @apply text-[#17a2b8];
                            }

                        }
                    }
                }
                .tools{
                    @apply pb-0;
                }
            }
        }
        .contact{
            .c-list{
                @apply p-2 flex gap-3;
                li{
                    .svg-icon{
                    }
                }
            }
        }
    }
</style>