<template>
    <div class="timer">
       You have {{timerCount}} seconds left
    </div>
</template>

<script>
    export default {
        props:['changeId'],
        name: "Timer",
        data() {
            return{
                timerCount:10
            }
        },
        watch:{
            timerCount: {
                handler(value) {
                    if (value > 0) {
                        setTimeout(() => {
                            this.timerCount--;
                        }, 1000);
                    } else if (value === 0) {
                        this.changeId()
                        this.timerCount=10;
                    }
                },
                immediate: true
            }
        }
    }
</script>

<style scoped>

</style>