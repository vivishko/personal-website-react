import './Styles.css'

export function Footer({setPage}) {
    return (
        <div class="footer">
            <div class="footer_row">
                <div class="footer_first-contacts footer_borders">
                    {/* <a class="footer_header" href="file:///C:/Users/Xiaomi/Desktop/personal-website/contacts.html">Get in touch</a> */}
                    <div class="footer_texts footer_borders">
                        <div class="footer_header">Get in touch</div>
                        <div class="footer_text">Here is the portfolio of my projects.</div>
                    </div>
                    <div class="footer_buttons">
                        <button type="button" class="footer_meeting footer_button buttons">MEET WITH ME</button>
                        <button type="button" onClick={() => setPage('projects')} class="footer_github footer_button buttons">PROJECTS</button>
                    </div>
                </div>
                <div class="footer_other-contacts">
                    <a class="footer_list_item" href="https://twitter.com/vivishko">Twitter</a>
                    &nbsp;&nbsp;| &nbsp;
                    <a class="footer_list_item" href="https://github.com/viloloshka">Github</a>
                    &nbsp;&nbsp;| &nbsp;
                    <a class="footer_list_item" href="https://www.linkedin.com/in/violazaletova/">LinkedIn</a>
                    &nbsp;&nbsp;| &nbsp;
                    <a class="footer_list_item" href="mailto:viloloshka8@gmail.com">Email</a>
                    &nbsp;&nbsp;| &nbsp;
                    <a class="footer_list_item" href="https://docs.google.com/document/d/1od6_v0zD6axM4yUaXvI4rXXF5jYREdW5vWJR8O71f08/edit?usp=sharing">Resume</a>
                </div>
            </div>
      </div> 
    )
}