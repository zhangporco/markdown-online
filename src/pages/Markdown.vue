<script>
//    function Editor(input, preview) {
//        this.update = function () {
//            preview.innerHTML = markdown.toHTML(input.value);
//        };
//        input.editor = this;
//        this.update();
//    }
//    var $ = function (id) { return document.getElementById(id); };
//    new Editor($("text-input"), $("preview"));
    export default {
        data () {
            return {
                name:"Porco",
                age:"18"
            }
        }
    }
</script>
<template>
    <div id="markdown-input">
        <!--<textarea id="text-input" oninput="this.editor.update()"-->
                  <!--rows="6" cols="60">Type **Markdown** here.</textarea>-->
        <textarea id="text-input" rows="6" cols="60">Type **Markdown** here.</textarea>
        <div id="preview"> </div>
    </div>
</template>
<style lang="sass">

</style>