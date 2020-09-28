<template>
  <div>
    <div
      class="project-bg"
      style="
        background-image: url('/projects/app-dashboard/project-hero-1920.png');
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

      <router-link to="/app-dashboard">
        <div class="project-intro">
          <div
            class="proj-img"
            style="
              background-image: url('/projects/app-dashboard/project-1-1920.png');
            "
          ></div>
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

      <router-link to="/reviews">
        <div class="project-intro">
          <div
            class="proj-img"
            style="background-image: url('/projects/reviews/reviews.jpg')"
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

      <router-link to="/agoda-ycs">
        <div class="project-intro">
          <div
            class="proj-img"
            style="
              background-image: url('/projects/bg_project_agoda-ycs-1920.jpg');
            "
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

      <div id="contact">
        <h2>Get in touch</h2>
        <p style="text-align: center">
          Reach me on
          <a href="https://www.linkedin.com/in/alexfanden/">
            Linked<span id="linkedin">In</span> </a
          >, email me at
          <a href="mailto:fanden.alex@gmail.com">fanden.alex@gmail.com</a> or
          drop a message in the form below:
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
            <p>Whimsical</p>
            <p>Figma</p>
            <p>Principle</p>
            <p>Notion</p>
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