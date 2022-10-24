// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

function add_footer_text() {
    const footer = document.getElementById('footer')
    footer.innerHTML = 'This is a footer'
}