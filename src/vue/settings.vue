<template>
    <div class="config">

        <div class="back" @click="close()"></div>

        <div class="container">
            
            <!-- <p>Lodash is available: {{!!_}}</p> -->

            <div class="close" @click="close()" title="Close">
                &times;
            </div>

            <h1>Settings</h1>


            <form>

                <!-- Anzahl Steps -->
                <div class="form-group">
                    <input type="number" min="1" v-model="amount">
                    <label for="input" class="control-label">Amount of Steps</label><i class="bar"></i>
                </div>
                
                <div class="horizontalslider-box hs-box">
                    <template v-for="(step, index) in steps">
                        <div :key="index" class="hs-item">
                            <div class="title">Step {{index + 1}}</div>

                            <div class="form-group">
                                <input type="text" v-model="steps[index].label" placeholder="Label">
                                <label for="input" class="control-label">Label</label><i class="bar"></i>
                            </div>

                        </div>
                    </template>
                </div>


                <div class="checkbox">
                    <label>
                        <input type="checkbox" v-model="settings_button_invisibility" value="1"><i class="helper"></i>Make configuration button invisible.
                    </label>
                </div>

            </form>
        
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    components: {
        
    },
    data: function() {
        return {
            
        }
    },
    mounted () {
        console.log('settings.vue mounted.');
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
        close: function() {
            this.$emit('showSettings', false);
        }
    },
}
</script>

<style>

</style>