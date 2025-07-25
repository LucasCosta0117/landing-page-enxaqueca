import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faMedrt } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faNotesMedical } from '@fortawesome/free-solid-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faArrowsDownToPeople } from '@fortawesome/free-solid-svg-icons';
import { faStethoscope } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import { faHouseMedical } from '@fortawesome/free-solid-svg-icons';


library.add(
    faCircle,
    faMedrt,
    faEye,
    faNotesMedical,
    faQuoteLeft,
    faCircleCheck,
    faClipboardList,
    faStar,
    faStarRegular,
    faUser,
    faArrowsDownToPeople,
    faStethoscope,
    faDownload,
    faEnvelope,
    faSeedling,
    faHouseMedical
);

createApp(App)
    .component('FontAwesomeIcon', FontAwesomeIcon)
    .mount('#app');
