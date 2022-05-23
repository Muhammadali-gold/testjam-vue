import { createApp } from 'vue';
import App from './App.vue';

import BalmUI from 'balm-ui'; // Official Google Material Components
import BalmUIPlus from 'balm-ui-plus'; // BalmJS Team Material Components
import 'balm-ui-css';

const app = createApp(App);

app.use(BalmUI);
app.use(BalmUIPlus);


import VueCodemirror from 'vue-codemirror'
import { basicSetup } from '@codemirror/basic-setup'



app.use(VueCodemirror, {
    // optional default global options
    autofocus: true,
    disabled: false,
    indentWithTab: true,
    tabSize: 2,
    placeholder: 'Code gose here...',
    extensions: [basicSetup]
    // ...
})

import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            count: 0
        }
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})

app.use(store)

// import VueLaTeX2JS from 'latex2vue';
//
// app.use(VueLaTeX2JS);

// import * as MathLive from "https://unpkg.com/mathlive/dist/mathlive.min.mjs";
// import VueMathfield from "vue-math-field";
//
// app.use(VueMathfield, MathLive);


app.mount('#app');