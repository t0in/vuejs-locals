import 'primevue/resources/themes/saga-green/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import { createApp } from 'vue';

import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import { tokenInterceptor, errorInterceptor } from '@/helpers';

import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Toolbar from 'primevue/toolbar';
import SplitButton from 'primevue/splitbutton';
import AutoComplete from 'primevue/autocomplete';

// enable interceptors for http requests
tokenInterceptor();
errorInterceptor();

const app = createApp(App);

app.use(store);
app.use(router);

app.use(PrimeVue);

app.component('InputText', InputText);
app.component('Button', Button);
app.component('Card', Card);
app.component('Toolbar', Toolbar);
app.component('SplitButton', SplitButton);
app.component('AutoComplete', AutoComplete);

app.mount('#app');
