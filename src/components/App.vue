<script>
    export default {
        el:"#app",
        data () {
            return {

            }
        }
    }
</script>
<template>
    <div>
        <h1>Hello Porco!</h1>
        <p>
            <a v-link="{ path: '/foo' }">Go to Foo</a>
            <a v-link="{ path: '/bar' }">Go to Bar</a>
        </p>
        <router-view></router-view>
    </div>
</template>
<style lang="sass">

</style>
