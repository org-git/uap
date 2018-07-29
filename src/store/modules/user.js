import { USER_INFO } from '@/kits/keys';

export default {
    state: {
        name: '',
        roles: []
    },
    mutations: {
        login(state, user) {
            state.name = user.name || '';
            state.roles = user.roles || [];

            window.localStorage.removeItem(USER_INFO);
            if(!user) {
                return;
            }
            window.localStorage.setItem(USER_INFO, JSON.stringify(user));
        }
    },
    actions: {
        login(context, user) {
            context.commit('login', user);
        }
    }
}