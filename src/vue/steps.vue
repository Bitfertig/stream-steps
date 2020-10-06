<template>
    <div class="steps_window">

        <ul class="steps">
            <li v-for="(step, index) in steps"
                :key="index"
                :data-step="index + 1"
                :class="{step:1, 'is-complete':(index+1<active), 'is-active':(index+1==active)}"
                v-on:click="active = index + 1"
            >
                <div>
                    {{ step.label }}
                </div>
            </li>
        </ul>

    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    props: [ ],
    components: {
        
    },
    data: function() {
        return {
            
        }
    },
    mounted () {
        console.log('steps.vue mounted.');
        
        var that = this;

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
        active: {
            get: function() {
                return this.$store.state.steps.active;
            },
            set: function(newValue) {
                this.setActive(newValue);
            }
        },
    },
    methods: {
        ...mapActions({
            setAmount: 'steps/setAmount',
            setSettingsButtonInvisibility: 'steps/setSettingsButtonInvisibility',
            setSteps: 'steps/setSteps',
            setActive: 'steps/setActive',
        }),
    },
}
</script>

<style>

</style>