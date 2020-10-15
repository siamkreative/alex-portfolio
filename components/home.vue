<template>
  <div>
    <div
      class="project-bg"
      style="
        background-image: url('/projects/app-dashboard/project-hero-1920.jpg');
      "
    ></div>
    <div class="container">
      <div class="hero">
        <h1>Alexander Fandén</h1>
        <p class="lead">
          <span class="bold">Product designer</span> based in Bangkok, Thailand.
        </p>
        <p class="lead">
          Currently working for Agoda, helping hotels to sell rooms easier than
          ever before.
        </p>
        <p class="lead">Scroll down to see my lastest work.</p>
      </div>

      <div class="divider">
        <hr />
        <img src="../assets/logo.svg" alt="" />
        <hr />
      </div>

      <router-link to="/app-dashboard" class="underline-h3">
        <div class="project-intro">
          <picture class="proj-img">
            <source srcset="/projects/app-dashboard.webp" type="image/webp" />
            <img src="/projects/app-dashboard.jpg" />
          </picture>
          <div class="proj-text">
            <h3>Performance and insights feed</h3>
            <p>
              Keep track of everything that’s going on at your hotel! This brand
              new feed gives hotels on Agoda.com the ability to review their
              performance and keep track of recent activities from Agoda guests.
            </p>
            <span class="btn-text">
              Read more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                class="icon"
                width="0.75em"
                height="0.75em"
              >
                <use xlink:href="#icon_arrow-right" />
              </svg>
            </span>
          </div>
        </div>
      </router-link>

      <div class="divider">
        <hr />
        <img src="../assets/logo.svg" alt="" />
        <hr />
      </div>

      <router-link to="/reviews" class="underline-h3">
        <div class="project-intro">
          <div
            class="proj-img"
            style="background-image: url('/projects/reviews.jpg')"
          ></div>
          <div class="proj-text">
            <h3>Improving the review process for hotel partners</h3>
            <p>
              This is the story of how we migrated our reviews management tools
              from web to app and how I managed to identify and solve some major
              issues in the process.
            </p>
            <span class="btn-text">
              Read more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                class="icon"
                width="0.75em"
                height="0.75em"
              >
                <use xlink:href="#icon_arrow-right" />
              </svg>
            </span>
          </div>
        </div>
      </router-link>

      <div class="divider">
        <hr />
        <img src="../assets/logo.svg" alt="" />
        <hr />
      </div>

      <router-link to="/agoda-ycs" class="underline-h3">
        <div class="project-intro">
          <div
            class="proj-img"
            style="background-image: url('/projects/agoda-ycs.jpg')"
          ></div>
          <div class="proj-text">
            <h3>Agoda YCS</h3>
            <p>
              Manage your hotel on the go! With the YCS app, hotels all over the
              world can create promotions, update rates, add allotment and see
              who’s checking in and out of the hotel.
            </p>
            <span class="btn-text">
              Read more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                class="icon"
                width="0.75em"
                height="0.75em"
              >
                <use xlink:href="#icon_arrow-right" />
              </svg>
            </span>
          </div>
        </div>
      </router-link>

      <div class="divider">
        <hr />
        <img src="../assets/logo.svg" alt="" />
        <hr />
      </div>

      <div id="dribbble">
        <a
          class="dribbble-video"
          href="https://dribbble.com/shots/8931332-Performance-scores-for-hotels"
          target="_blank"
        >
          <video autoplay loop>
            <source
              src="/projects/dribbble/dribbble-post-1.mp4"
              type="video/mp4"
            />
            <source
              src="/projects/dribbble/dribbble-post-1.ogg"
              type="video/ogg"
            />
            Your browser does not support the video tag.
          </video>
          <div class="dribbble-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <use xlink:href="#icon_dribbble" />
            </svg>
          </div>
        </a>
        <a
          class="dribbble-video"
          href="https://dribbble.com/shots/14336599-Data-visualisation-feeds"
          target="_blank"
        >
          <video autoplay loop>
            <source src="/projects/dribbble/week-full.mp4" type="video/mp4" />
            <source src="/projects/dribbble/week-full.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
          <div class="dribbble-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <use xlink:href="#icon_dribbble" />
            </svg>
          </div>
        </a>
        <a
          class="dribbble-video"
          href="https://dribbble.com/shots/13992275-Calendar-interaction"
          target="_blank"
        >
          <video autoplay loop>
            <source src="/projects/dribbble/calendar.mp4" type="video/mp4" />
            <source src="/projects/dribbble/calendar.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
          <div class="dribbble-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <use xlink:href="#icon_dribbble" />
            </svg>
          </div>
        </a>
      </div>

      <div class="divider">
        <hr />
        <img src="../assets/logo.svg" alt="" />
        <hr />
      </div>

      <div id="contact">
        <h2>Get in touch</h2>
        <p style="text-align: center">
          Reach me on
          <a href="https://www.linkedin.com/in/alexfanden/" class="underline">
            Linked<span id="linkedin">In</span> </a
          >, email me at
          <a href="mailto:fanden.alex@gmail.com" class="underline"
            >fanden.alex@gmail.com</a
          >
          or drop a message in the form below:
        </p>
        <form action="https://formspree.io/fanden.alex@gmail.com" method="POST">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  required
                  type="text"
                  name="name"
                  class="form-control"
                  id="name"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  required
                  type="email"
                  name="_replyto"
                  class="form-control"
                  id="email"
                />
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <label for="message">Message</label>
                <textarea
                  required
                  class="form-control"
                  name="message"
                  id="message"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="text-center">
            <button class="btn btn-primary" type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
    <div class="quick-facts">
      <div class="container">
        <div class="fact-items">
          <span class="fact-item">
            <h5>Tools I love</h5>
            <p><img src="../assets/facts/whimsical.svg" alt="" />Whimsical</p>
            <p><img src="../assets/facts/figma.svg" alt="" />Figma</p>
            <p><img src="../assets/facts/principle.svg" alt="" />Principle</p>
            <p><img src="../assets/facts/notion.svg" alt="" />Notion</p>
          </span>
          <span class="fact-item">
            <h5>UX</h5>
            <p>Usability and Accessibility</p>
            <p>Ideation and wireframing</p>
            <p>Omni channel</p>
            <p>User testing</p>
          </span>
          <span class="fact-item">
            <h5>UI</h5>
            <p>Desktop, mobile, tablet</p>
            <p>Mobile first</p>
            <p>Touch friendly</p>
            <p>Design Systems</p>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>
