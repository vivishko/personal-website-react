import './Styles.css'

export function Footer({setPage}) {
    return (
        <div class="footer">
        <div class="footer_row">
            <div class="footer_first-contacts footer_item">
                {/* <a class="footer_header" href="file:///C:/Users/Xiaomi/Desktop/personal-website/contacts.html">Get in touch</a> */}
                <div class="footer_texts">
                    <div class="footer_header">Get in touch</div>
                    <div class="footer_text">Here is the portfolio of my projects.</div>
                </div>
                <div class="footer_buttons">
                    <button type="button" class="footer_meeting footer_button buttons">MEET WITH ME</button>
                    <button type="button" onClick={() => setPage('projects')} class="footer_github footer_button buttons">PROJECTS</button>
                </div>
            </div>
            <div class="footer_other-contacts footer_item">
                <a class="footer_list_item" href="https://twitter.com/vivishko">Twitter</a>
                &nbsp;&nbsp;| &nbsp;
                <a class="footer_list_item" href="https://github.com/viloloshka">Github</a>
                &nbsp;&nbsp;| &nbsp;
                <a class="footer_list_item" href="mailto:viloloshka8@gmail.com">LinkedIn</a>
                &nbsp;&nbsp;| &nbsp;
                <a class="footer_list_item" href="mailto:viloloshka8@gmail.com">Email</a>
                &nbsp;&nbsp;| &nbsp;
                <a class="footer_list_item" href="https://github.com/viloloshka">Resume</a>
            </div>
        </div>
      </div> 
    )
}