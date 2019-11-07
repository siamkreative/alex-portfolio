<template>
  <div class="project-bg" style="background-image: url('/projects/bg-agoda-connect-1920.jpg')">
    <section class="container-fluid project">
      <h4>App</h4>
      <h1>Agoda Connect</h1>
      <p>
        <span id="project-byline">
          <span
            id="project-byline-content"
          >Published on 25 November, 2018&nbsp;&nbsp;•&nbsp;&nbsp;1 minute read</span>
        </span>
      </p>

      <h5>Background</h5>
      <p>Running a hotel is a 24-hour operation, one that does not always happen in front of a computer - we saw a increasing need from hotels to be able to perform daily operations on their phones, and at the same time competitors launched mobile apps to cater their needs.</p>

      <h5>The team</h5>
      <p>Product Owner, UI/UX Designer, UX Researcher, Full-stack developers, Quality Assurance.</p>

      <h5>Research and design</h5>
      <p>We visited hotels in Bangkok and Seoul to find out more about the different roles and how they use our competitors apps today. Based on the research we developed 5 personas which we used when developing concepts.</p>
      <p>As we designed the MVP concepts of the app, hotels were brought in to test prototypes. Based on the findings we were able to tweak the designs prior to development.</p>

      <h5>Validation and improvements</h5>
      <p>After launching the MVP version we developed more features as well as improving existing functionality.</p>
      <p>Whenever we change existing features we run A/B tests to assure that we only release better experiences. This oftentimes leads to fine-tuning and tweaking the designs before arriving at a desired solution.</p>

      <img
        class="project-img img-fluid"
        src="/projects/img_agoda-connect_1-1920.png"
        alt="Agoda Connect"
      />
      <img
        class="project-img img-fluid"
        src="/projects/img_agoda-connect_2-1920.png"
        alt="Agoda Connect"
      />

      <div class="text-center">
        <router-link to="/" class="btn btn-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            class="icon"
            width="1em"
            height="1em"
          >
            <use xlink:href="#icon_back" />
          </svg> Go Back
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "agodaConnect"
};
</script>

