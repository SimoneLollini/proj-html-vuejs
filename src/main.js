import { createApp } from 'vue'
import './assets/scss/style.scss'
import App from './App.vue'

/**/
//import the fontawesome core
import { library } from '../node_modules/@fortawesome/fontawesome-svg-core'

// import font awesome icon component
import { FontAwesomeIcon } from '../node_modules/@fortawesome/vue-fontawesome'

// import specific icons
import { faAngleUp, faPhone, faAngleRight, faPaperPlane } from '../node_modules/@fortawesome/free-solid-svg-icons'
import { faFacebookF, faYoutube, faInstagram, faTwitter } from '../node_modules/@fortawesome/free-brands-svg-icons'
import { faCopyright } from '../node_modules/@fortawesome/free-regular-svg-icons'



//  add icons to the library
library.add(faPhone, faFacebookF, faInstagram, faTwitter, faYoutube, faPaperPlane, faAngleRight, faCopyright, faAngleUp)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
