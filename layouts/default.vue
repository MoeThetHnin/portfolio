<template>
    <div>
        <Nav />
        <!-- This is for page -->
        <div class="page min-h-[calc(100vh-120px)]">
            <slot />
        </div>
        <Footer />
    </div>
</template>