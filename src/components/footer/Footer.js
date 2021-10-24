import './Styles.css'

export function Footer() {
    return (
        <div class="footer">
        <div class="footer_row">
            <div class="footer_first-contacts footer_item">
                <a class="footer_header" href="file:///C:/Users/Xiaomi/Desktop/personal-website/contacts.html">Get in touch</a>
                <div class="footer_text">Here is the portfolio of my projects.</div>
                <button type="button" class="footer_meeting footer_button">MEET WITH ME</button>
                <button type="button" class="footer_github footer_button">PROJECTS</button>
            </div>
            <div class="footer_other-contacts footer_item">
                <div class="footer_emailing">Email</div>
                <div class="footer_linkedin">LinkedIn</div>
                <div class="footer_resume">Resume</div>
                <div class="footer_github">Github</div> 
            </div>
        </div>
      </div> 
    )
}