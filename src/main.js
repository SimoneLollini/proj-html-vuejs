import { createApp } from 'vue'
import './assets/scss/style.scss'
import App from './App.vue'

/**/
//import the fontawesome core
import { library } from '../node_modules/@fortawesome/fontawesome-svg-core'

// import font awesome icon component
import { FontAwesomeIcon } from '../node_modules/@fortawesome/vue-fontawesome'

// import specific icons
import { faPhone } from '../node_modules/@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '../node_modules/@fortawesome/free-brands-svg-icons'
import { faInstagram } from '../node_modules/@fortawesome/free-brands-svg-icons'
import { faTwitter } from '../node_modules/@fortawesome/free-brands-svg-icons'
import { faYoutube } from '../node_modules/@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '../node_modules/@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '../node_modules/@fortawesome/free-solid-svg-icons'




//  add icons to the library
library.add(faPhone, faFacebookF, faInstagram, faTwitter, faYoutube, faPaperPlane, faAngleRight)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
