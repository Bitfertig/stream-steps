
const default_step = { label:'', active:false };

const initialState = {
    amount: 1,
    settings_button_invisibility: false,
    steps: [ {label:'', active:false} ],
};

export const steps = {
    namespaced: true,
    state: initialState,
    getters: {
        getSteps(state) {
            return state.steps;
        }
    },
    actions: {
        setAmount({dispatch, commit, getters}, amount) {
            commit('amount', amount);
            var steps = [];
            for (let i = 0; i < amount; i++) {
                if ( i in getters.getSteps ) { steps[i] = { ...getters.getSteps[i] }; }
                else steps[i] = { ...default_step };
            }
            commit('steps', steps);
        },
        setSettingsButtonInvisibility({dispatch, commit}, settings_button_invisibility) {
            commit('settings_button_invisibility', settings_button_invisibility);
        },
        setSteps({dispatch, commit}, steps) {
            commit('steps', steps);
        },
    },
    mutations: {
        amount(state, amount) {
            state.amount = amount;
        },
        settings_button_invisibility(state, settings_button_invisibility) {
            state.settings_button_invisibility = settings_button_invisibility;
        },
        steps(state, steps) {
            state.steps = steps;
        },
    }
}
