import './Styles.css';

export function Works() {
    return(
        <div class="my_works">
          <div class="works_main-text">I'm interested in different areas.
            There are some of them.</div>
          <div class="works_parts">
            <div class="works_line">
              <a class="works_videomaking works_part" href="https://www.youtube.com/channel/UC_MJVl8pbKD-G38uXAiH8OQ">
                <img src="/assets/images/video_making_image.jpg" width="250" height="180" alt="" />
                <div class="">Videomaking</div>
              </a>
              <a class="works_coding works_part" href="https://github.com/viloloshka">
                <img src="/assets/images/coding_image.jpg" width="250" height="180" alt="" />
                <div class="">Programming</div>
              </a>
            </div>
            <div class="works_line">
              <a class="works_writing works_part" href="https://t.me/runaway_with_me">
                <img src="/assets/images/writing_image.jpg" width="250" height="180" alt="" />
                <div class="">Writing</div>
              </a>
              <a class="works_something works_part" href="https://twitter.com/vivishko">
                <img src="/assets/images/something_image.jpg" width="250" height="180" alt="" />
                <div class="">Art</div>
              </a>
            </div>
          </div>
        </div>
    )
}