import './Styles.css'

export function Footer() {
    return (
        <div class="footer">
        <div class="footer_row">
            <div class="footer_first-contacts footer_item">
                {/* <a class="footer_header" href="file:///C:/Users/Xiaomi/Desktop/personal-website/contacts.html">Get in touch</a> */}
                <div class="footer_header">Get in touch</div>
                <div class="footer_text">Here is the portfolio of my projects.</div>
                <div class="footer_buttons">
                    <button type="button" class="footer_meeting footer_button">MEET WITH ME</button>
                    <button type="button" class="footer_github footer_button">PROJECTS</button>
                </div>
            </div>
            <div class="footer_other-contacts footer_item">
                <ol>
                    <a class="footer_list_item" href="mailto:viloloshka8@gmail.com">
                        <div >
                            <li class="footer_list">
                                ::before
                                "Email"
                            </li>
                        </div>
                    </a>
                    <a class="footer_list_item" href="">
                        <div >
                            <li class="footer_list">
                                ::before
                                "LinkedIn"
                            </li>
                        </div>
                    </a>
                    <a class="footer_list_item" href="">
                        <div>
                            <li class="footer_list">
                                ::before
                                "Resume"
                            </li>
                        </div>
                    </a>
                    <a class="footer_list_item" href="">
                        <div>
                            <li class="footer_list">
                                ::before
                                "Github"
                            </li> 
                        </div>
                    </a>
                </ol>
            </div>
        </div>
      </div> 
    )
}