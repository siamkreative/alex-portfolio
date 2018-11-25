<template>
  <div class="project-bg" style="background-image: url('/projects/bg-enterprise-ui-1920.jpg')">
    <section class="container-fluid project">
      <div class="text-center">
        <h4>Design System</h4>
        <h1>Enterprise UI</h1>
      </div>

      <h4>Background</h4>
      <p>As our enterprise tool has been developed over the years, many different design styles and patterns have made their way into the site. The inconsistent UX and UI made it hard for our users to us - it also made it hard for us to gain the users trust, as they were never 100% sure how a feature would work and what they could expect.</p>

      <h4>The team</h4>
      <p>UI/UX Designer, Full-stack developers, Quality Assurance.</p>

      <h4>Research and design</h4>
      <p>In order to scope the project I went through the existing system, page by page, and collected existing UI components.</p>
      <p>As a rebranding of the tool was being done simuntaniously, we took the opportunity to syncronize the look and feel with the agoda.com website - however with a stronger business tone.</p>
      <p>In order to get a head start we decided to use Bootstrap as it provided many of the UI components we needed out of the box, and a robust grid system.</p>
      <p>Three UI libraries were designed - one for web, a second for native app and a third with shared components such as colors, and icons.</p>

      <h4>Validation and improvements</h4>
      <p>Once we had all the basic components, me and my team re-designed a number of existing pages with the new component. By doing so, we could verify which components worked, and where we needed to fine tune and add new UI.</p>
      <p>Our development team comitted to rebuilding page by page using our new design system. As the pages were developed, we A/B tested them towards the previous design to assure they performed as expected.</p>

      <img class="project-img img-fluid" src="/projects/img_enterprise-ui_2-1920.png" alt="Date picker states in Enterprise UI">
      <img class="project-img img-fluid" src="/projects/img_enterprise-ui_1-1920.png" alt="Promotion set-up in Enterprise UI">

      <div class="text-center">
        <router-link to="/" class="btn btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="icon" width="1em" height="1em">
                    <use xlink:href="#icon_back"></use>
          </svg> Go Back
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'enterpriseUI',
}
</script>

