
const default_step = { label:'' };

const initialState = {
    amount: 3,
    settings_button_invisibility: false,
    active: 1,
    steps: [ {...default_step}, {...default_step}, {...default_step} ],
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
        setActive({dispatch, commit}, active) {
            commit('active', active);
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
        active(state, active) {
            state.active = active;
        },
    }
}
