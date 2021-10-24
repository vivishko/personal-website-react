import './Styles.css';

export function About() {
    return(
        <div class="about">
          <div class="about_text">Hi! My name is Viola. And this is my personal website. </div>
          <button type="button" class="about_projects-button">See my projects</button>
          <button type="button" onclick="document.location='contacts_page.html'" class="about_contact_button">Contact me</button>
        </div>
    )
}