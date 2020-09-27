<template>
  <div>
    <div class="project-bg" style="
        background-image: url('/projects/app-dashboard/project-hero-1920.png');
      "></div>
    <div class="container">
      <h4>Web</h4>
      <h1>Dashboard</h1>
      <p>
        <span id="project-byline">
          <span id="project-byline-content">Published on 25 November, 2018&nbsp;&nbsp;•&nbsp;&nbsp;1 minute read</span>
        </span>
      </p>

      <h5>Background</h5>
      <p>In order to keep the hotels on agoda.com happy we have a team dedicated at helping the hotels to understand
        their business better. They provide insights and suggestions to increase the hotels performance.</p>
      <p>However, some of these tasks were time consuming and could be automated. By switching from a manual labour
        intensive approach to self-service we could lift the weight of our staffs shoulders and also provide insights
        faster and at any time.</p>

      <h5>The team</h5>
      <p>Product Owner, UI/UX Designers, UX Researcher, Full-stack developers, Quality Assurance.</p>

      <h5>Research and design</h5>
      <p>In order to undertand what data our hotels needed and which tasks they normally performed, we had to immerse
        ourselves into the daily tasks of the hotels and our staff. We shadowed our staff and took note of the most
        common tasks they performed during a day. We scheduled hotel visits to understand how they interact with our
        systems and what data is most valuable for them.</p>
      <p>We consolidated all feedback and started to brainstorm on different approaches. The first concept was a fully
        fledged dashboard with all the data point our hotels needed. It was appreciated by the hotels, but we quickly
        realized that it only solved one part of the problem - understanding the business. Based on that understanding
        the hotels needed to take action, but the dashboard didn’t provide any way to do this.</p>
      <p>Instead we prototyped a hybrid approach - enough data to gain insights, but also useful suggestions. This way
        the hotels wouldn’t get lost half-way through the funnel and we wouldn’t get calls to perform these tasks for
        the hotels.</p>

      <h5>Validation and improvements</h5>
      <p>We scheduled usability testing sessions with hotels to identify the remaining issues. We realized that there
        are loads of things hotels can do to improve their business so we divided the actions into groups and
        prioritized the actoins based on how much they would gain the most business.</p>
      <p>After launching the MVP version, we continued to tweak and design new features. With each tweak we A/B test to
        make sure that it would improve the performance of the dashboard.</p>

      <img class="project-img img-fluid" src="/projects/img_dashboard_1-1920.png" alt="Dashboard loading" />
      <img class="project-img img-fluid" src="/projects/img_dashboard_2-1920.png"
        alt="Promotion performance dashboard" />

      <div class="text-center">
        <router-link to="/" class="btn btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="icon" width="1em"
            height="1em">
            <use xlink:href="#icon_back" />
          </svg> Go Back
        </router-link>
      </div>
    </div>
</template>

<script>
  export default {
    name: "dashboard",
  };
</script>