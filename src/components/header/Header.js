import './Styles.css'

export function Header({setPage}) {
  return (
    <div class="header"> 
      <div class="header-nav_bar header-main">
        <div class="header-nav_left"> 
          <button type="button" onClick={() => setPage('home')} class="header-nav__main buttons">Viola Blu</button>
        </div>
        <button type="button" class="nav_burger" id="nav_click"></button>
        <div class="header-nav_right" id="nav_r">
          <button type="button" onClick={() => setPage('about')} class="header-nav_about buttons">About</button>
          <button type="button" onClick={() => setPage('projects')} class="header-nav_projects buttons">Projects</button>
          <button type="button" onClick={() => setPage('blog')} class="header-nav_blog buttons">Blog</button>
          <button type="button" onClick={() => setPage('contacts')} class="header-nav_contact buttons blue-text">Contact</button>
        </div>
      </div>
      <div class="header-detail">
        <div class="header-detail__geo"></div>
        <div class="header-detail__contacts"></div>
      </div>
    </div>
  )
}