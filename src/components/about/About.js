import './Styles.css';

export function About({setPage}) {
    return(
        <div class="about">
          <div class="about_text">Hi! My name is Viola. And this is my personal website. </div>
          <div class="about_button_block">
            <button type="button" onClick={() => setPage('projects')} class="about_projects_button about_main_button buttons">See my projects</button>
            <button type="button" onClick={() => setPage('contacts')} class="about_contact_button about_main_button buttons">Contact me</button>
          </div>
        </div>
    )
}