import './Styles.css'

export function Header({setPage}) {
  return (
    <div class="header"> 
      <div class="header_row nav_bar">
        <div class="nav_left">
          {/* <NavigationButton setPage={setPage} pageName='home' buttonClass="nav_main nav_buttons" text="Viola Blablabla" /> */}
          <button type="button" onClick={() => setPage('home')} class="nav_main nav_buttons">Viola Blu</button>
        </div>
        <button type="button" class="nav_burger" id="nav_click"></button>
        <div class="nav_right" id="nav_r">
          <button type="button" onClick={() => setPage('about')} class="nav_about nav_buttons">About</button>
          <button type="button" onClick={() => setPage('projects')} class="nav_projects nav_buttons">Projects</button>
          <button type="button" onClick={() => setPage('blog')} class="nav_blog nav_buttons">Blog</button>
          <button type="button" onClick={() => setPage('contacts')} class="nav_contact nav_buttons">Contact</button>
        </div>
      </div>
    </div>
  )
}