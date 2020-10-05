<template>
    <div class="steps_window">

        <ul class="steps">
            <li class="step is-complete is-active" v-for="(step, index) in steps" :key="index" :data-step="index + 1">
                <div :class="{'select-button':1, 'active':step.active}">
                    {{ step.label }}
                </div>
            </li>
        </ul>

    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    props: ['activeSteps'],
    components: {
        
    },
    data: function() {
        return {
            
        }
    },
    mounted () {
        console.log('steps.vue mounted.');
        
        var that = this;

        /* document.addEventListener('keypress', function(e) {
            if ( that.activeSteps ) {
                for (let i in that.steps) {
                    let step = that.steps[i];
                    if ( e.key == step.key ) {
                        console.log('"'+e.key+'" bzzzt!');
                        that.steps[i].active = true;
                    }
                }
            }
        }); */

    },
    computed: {
        amount: {
            get: function() {
                return this.$store.state.steps.amount;
            },
            set: function(newValue) {
                this.setAmount(newValue);
            }
        },
        settings_button_invisibility: {
            get: function() {
                return this.$store.state.steps.settings_button_invisibility;
            },
            set: function(newValue) {
                this.setSettingsButtonInvisibility(newValue);
            }
        },
        steps: {
            get: function() {
                return this.$store.state.steps.steps;
            },
            set: function(newValue) {
                this.setSteps(newValue);
            }
        },
    },
    methods: {
        ...mapActions({
            setAmount: 'steps/setAmount',
            setSettingsButtonInvisibility: 'steps/setSettingsButtonInvisibility',
            setSteps: 'steps/setSteps',
        }),
    },
}
</script>

<style>

</style>