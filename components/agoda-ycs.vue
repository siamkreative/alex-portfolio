<template>
  <div class="sticky-header">
    <div class="progress-container">
      <div class="progress-bar" id="myBar"></div>
    </div>
    <div
      class="project-bg"
      style="background-image: url('/projects/reviews/project-hero-1920.png')"
    ></div>
    <div class="container story">
      <div class="hero">
        <h1>Agoda YCS</h1>
        <p>
          <span id="project-byline"
            ><span id="project-byline-content"
              >Published on 25 November, 2018&nbsp;&nbsp;•&nbsp;&nbsp;1 minute
              read</span
            ></span
          >
        </p>
      </div>
      <h5>Background</h5>
      <p>
        Running a hotel is a 24-hour operation, one that does not always happen
        in front of a computer - we saw a increasing need from hotels to be able
        to perform daily operations on their phones, and at the same time
        competitors launched mobile apps to cater their needs.
      </p>

      <h5>The team</h5>
      <p>
        Product Owner, UI/UX Designer, UX Researcher, Full-stack developers,
        Quality Assurance.
      </p>

      <h5>Research and design</h5>
      <p>
        We visited hotels in Bangkok and Seoul to find out more about the
        different roles and how they use our competitors apps today. Based on
        the research we developed 5 personas which we used when developing
        concepts.
      </p>
      <p>
        As we designed the MVP concepts of the app, hotels were brought in to
        test prototypes. Based on the findings we were able to tweak the designs
        prior to development.
      </p>

      <h5>Validation and improvements</h5>
      <p>
        After launching the MVP version we developed more features as well as
        improving existing functionality.
      </p>
      <p>
        Whenever we change existing features we run A/B tests to assure that we
        only release better experiences. This oftentimes leads to fine-tuning
        and tweaking the designs before arriving at a desired solution.
      </p>

      <img
        class="project-img img-fluid"
        src="/projects/img_agoda-ycs_1-1920.png"
        alt="Agoda YCS"
      />
      <img
        class="project-img img-fluid"
        src="/projects/img_agoda-ycs_2-1920.png"
        alt="Agoda YCS"
      />

      <div class="divider">
        <hr />
        <img src="../assets/logo.svg" alt="" />
        <hr />
      </div>

      <div id="contact">
        <h2>Get in touch</h2>
        <p style="text-align: center">
          Reach me on
          <a href="https://www.linkedin.com/in/alexfanden/"
            >Linked<span id="linkedin">In</span></a
          >, email me at
          <a href="mailto:fanden.alex@gmail.com">fanden.alex@gmail.com</a>
          <br />or drop a message in the form below:
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
  </div>
</template>

<script>
export default {
  name: "agodaYCS",
};
</script>

