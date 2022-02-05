import './Styles.css';

export function Works() {
    return(
        <div class="my_works">
          <div class="works_main-text">I'm interested in different areas.
            There are some of them.</div>
          <div class="works_parts">
            <div class="works_videomaking works_part">
              <img src="/assets/images/video_making_image.jpg" width="250" height="180" alt="" />
              <div class="">Video making</div>
            </div>
            <div class="works_coding works_part">
              <img src="/assets/images/coding_image.jpg" width="250" height="180" alt="" />
              <div class="">Coding</div>
            </div>
            <div class="works_writing works_part">
              <img src="/assets/images/writing_image.jpg" width="250" height="180" alt="" />
              <div class="">Writing</div>
            </div>
            <div class="works_something works_part">
              <img src="/assets/images/something_image.jpg" width="250" height="180" alt="" />
              <div class="">Something</div>
            </div>
          </div>
        </div>
    )
}