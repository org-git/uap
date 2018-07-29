import '@/kits/keys';
import { LOCAL_LANGUAGE, DEFAULT_LANG, ACCESS_TOKEN } from '@/kits/keys';

export default {
    state: {
        language: window.localStorage.getItem(LOCAL_LANGUAGE) || DEFAULT_LANG
    },
    mutations: {
        settoken(state, token) {
            window.localStorage.removeItem(ACCESS_TOKEN);
            if(!token) {
                return;
            }
            window.localStorage.setItem(ACCESS_TOKEN, token);
        }
    },
    actions: {
        settoken(context, token) {
            context.commit('settoken', token);
        }
    }
}