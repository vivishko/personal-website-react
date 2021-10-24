import './Styles.css';

export function Works() {
    return(
        <div class="my_works">
          <div class="works_main-text">I'm interested in different areas.
            There are some of them.</div>
          <div class="works_parts">
            <div class="works_videomaking">
              <img src="assets/images/video_making.png" alt="" />
              <div class="">Video making</div>
            </div>
            <div class="works_coding">
              <img src="assets/images/coding.png" alt="" />
              <div class="">Coding</div>
            </div>
            <div class="works_writing">
              <img src="assets/images/writing.png" alt="" />
              <div class="">Writing</div>
            </div>
            <div class="works_something">
              <img src="assets/images/someth.png" alt="" />
              <div class="">Something</div>
            </div>
          </div>
        </div>
    )
}