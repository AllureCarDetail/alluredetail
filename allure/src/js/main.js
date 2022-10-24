// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

function add_footer_text() {
    const footer = document.querySelector('#footer-copyright')
    let current_year = new Date().getFullYear()
    footer.textContent = `© ${current_year} Allure Car Detail`
}

add_footer_text()