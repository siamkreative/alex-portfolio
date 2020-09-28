<template>
  <div class="sticky-header">
    <div class="progress-container">
      <div class="progress-bar" id="myBar"></div>
    </div>
    <div class="project-bg" style="
        background-image: url('/projects/reviews/project-hero-1920.png');
      "></div>
    <div class="container story">
      <div class="hero">
        <h1>Improving the review process for hotel partners</h1>
        <p><span id="project-byline"><span id="project-byline-content">Published on 25 October,
              2019&nbsp;&nbsp;•&nbsp;&nbsp;6 minutes read</span></span></p>
      </div>
      <p>YCS is an enterprise tool where hotels can manage rates and allotment, bookings, promotions and much more.
        The YCS app was launched early 2018 with a limited set of features. During 2019 we set out to expand on the
        app and build out some of the wanted features.
      </p>
      <p>Our goal with this project was to provide a way for hotels to manage their reviews on the go, via our app.
      </p>

      <div class="divider">
        <hr />
        <img src="../assets/logo.svg" alt="" />
        <hr />
      </div>

      <h3>Background</h3>
      <p>Reviews are essential for hotels as they act as a proof of quality. The review score of a hotel plays an
        important part when travellers decide between similarly priced hotels. It’s therefore important for hotels to
        maintain a good score and be responsive to both positive and negative feedback from guests.
      </p>

      <img class="img-fluid" src="/projects/reviews/agoda-reviews.png" alt="Hotel review summary on Agoda.com">
      <p class="caption">Review score for a hotel on agoda.com</p>

      <p>We were already offering a way to manage reviews via our desktop website, so the scope of this project was
        pretty straightforward - bring existing content and features to the app.</p>

      <h4>My role in the team</h4>
      <p>I conducted all research and UX/UI design throughout this project. I worked together with a Copywriter, Product
        Owner and a team of developers and QA engineers.</p>

      <h4>Initial research</h4>
      <p>Compared to other projects I’ve worked on, this one was limited in terms of both scope, time and available
        resources. I had 3 weeks to deliver an MVP design, and I had to conduct any research by myself.</p>

      <p>Reviews management was a blank slate for me as I hadn’t worked on it before. Therefore I had to get a better
        understanding of the current experience on desktop.</p>

      <p>I started off by exploring the current experience for both travellers and hotels:<br />
        <ul>
          <li>Travellers are prompted to review their experience after their stay.They are asked to rate the hotel and
            they can provide additional comments before submitting their review.</li>
          <li>Hotels can see a breakdown of their review score and read and respond to reviews.</li>
        </ul>
      </p>

      <img class="img-fluid" src="/projects/reviews/customer-review.png" alt="Review prompt for travellers">
      <img class="img-fluid" src="/projects/reviews/ycs-review.png" alt="Review management tool for hotels">

      <p>As I was exploring both user flows I added all data points and features to a mindmap, using Whimsical. </p>

      <img class="img-fluid" src="/projects/reviews/mindmap.png" alt="">

      <p>This helped me understand the existing functionality, but it didn’t tell me how well it worked. Although we
        didn’t have much room for changes in terms of functionality, there was an opportunity to improve the UX. </p>
      <p>With limited resources for research, I tried to find people within the company who had experience with Reviews
        management. I found two teams working with reviews on a regular basis: </p>
      <p>
        <ul>
          <li>Our Accomodation Services Team (AST), who are there to help our hotels whenever they’ve got issues.</li>
          <li>Our Content team, making sure that both reviews and hotel responses follow our guidelines.</li>
        </ul>
      </p>
      <p>I scheduled interviews with representatives from each team and asked them to walk through their process. We
        talked about the most common issues related to reviews today and it became clear that there was a lot of room
        for improvement. </p>

      <div class="divider">
        <hr />
        <img src="../assets/logo.svg" alt="" />
        <hr />
      </div>

      <h3>Key findings</h3>
      <h4>Hotels sometimes make mistakes when responding</h4>
      <p>This shouldn’t come as a surprise - review responses are written by humans and humans sometimes make errors.
        However, the current solution does not take this into consideration and leaves the hotel with nothing to do but
        call the AST team for help.</p>
      <p>The AST-team don’t have the tools needed to fix the issue and therefore have to escalate it to the Content
        team.</p>
      <p>The Content team can approve and decline reviews and responses, but do not have permissions to alter them.
        Instead, they will raise the issue to the IT team. </p>
      <p>The issue will be added to the backlog of the IT team, and picked up when they have the resources available.
        The developer will delete the response and once deployed, the hotels can go back and write a new response. </p>
      <p>All in all, this involves 3 internal teams and can take up to 2 weeks to resolve. 2 weeks is a long time for
        something so simple, and it often leads to frustration from our hotels. </p>

      <video controls autoplay>
        <source src="/projects/reviews/mistake.mp4" type="video/mp4">
        <source src="/projects/reviews/mistake.ogg" type="video/ogg">
        Your browser does not support the video tag.
      </video>

      <h4>Inaccurate reviews</h4>
      <p>Sometimes the content in the reviews is not correct or out of the hotel's control. For example, a hotel might
        get a negative review because the traveller thought it was too far away from the beach. While this might be
        true, the hotel can hardly be blamed. Other times guests might complain about an issue at the hotel that has
        already been addressed. </p>
      <p>From time to time a review might slip through that goes against our policy - perhaps profanity was being used,
        or the name of a staff member was revealed. </p>
      <p>In these cases the hotels would like to report the reviews, but there is no way to do that today. </p>

      <div class="divider">
        <hr />
        <img src="../assets/logo.svg" alt="" />
        <hr />
      </div>

      <h3>Early concepts</h3>
      <p>
        With these new findings and all existing features mapped out, I started to draw some initial concepts of the new
        app flow.
      </p>
      <p>
        In the first concept, the user can toggle between reviews and a breakdown of their review score:
      </p>

      <img class="img-fluid" src="/projects/reviews/wireframe-alt1.png" alt="Wireframes of solution with toggles">

      <p>
        The second concept features the review score and reviews in a dashboard-like fashion:
      </p>

      <img class="img-fluid" src="/projects/reviews/wireframe-alt2.png" alt="wireframes of dashboard solution">

      <p>
        Both concepts display the most recent reviews in a carousel and group all reviews in four different categories:
        <ul>
          <li>Published reviews</li>
          <li>Response pending approval</li>
          <li>Response rejected</li>
          <li>Response published</li>
        </ul>
      </p>

      <p>
        The idea was to use progressive disclosure to avoid overwhelming users with too many reviews at the same page.
        The concept also addressed the issues discovered earlier with response mistakes and inaccurate reviews.
      </p>

      <h4>Design critique with the team</h4>
      <p>
        As I didn’t have access to real users at the time, I scheduled feedback sessions with 3 fellow designers in my
        team. With their feedback, I managed to make the experience more intuitive. For example, we added pink dots to
        indicate that there’s a new review or rejection that has to be addressed. We also added a CTA to the latest
        reviews to draw more attention and increase the affordance of clicking:
      </p>

       <img class="img-fluid" src="/projects/reviews/app-review-before-after1.png" alt="Comparison of overview page before and after design critique">
       <p class="caption">The first page of Reviews, before and after the design critique.</p>


      <p>On the review page, the user had to scroll all the way down in order to respond to the review. After feedback
        from the team, we made the response input sticky at the bottom:
      </p>

     <img class="img-fluid" src="/projects/reviews/app-review-before-after2.png" alt="Comparison of designs before and after sticky input field was added">

      <div class="divider">
        <hr />
        <img src="../assets/logo.svg" alt="" />
        <hr />
      </div>

      <h3>Iterations and MVP</h3>
      <p>
        I presented the concept to my Product Manager and we had long discussions on how we could simplify it further.
        I’ve been lucky to work with a very detailed oriented Product Manager who likes to dissect each step of the flow
        down to each UI element. After long discussions we decided on a couple of changes to simplify the experience:
        <ul>
          <li>We replaced the carousel and the categories on the first page with a filter feature, where all reviews are
            displayed by default</li>
          <li>We tagged each review with the category name
          </li>
          <li>We sorted the reviews on the latest activity</li>
          <li>We marked unanswered reviews in bold</li>
        </ul>
      </p>

      <p>We then had to prioritize which features to build as a MVP. Since responding to reviews is the most important
        action, we decided to hold off with the review score breakdown for now. This would allow us to build out the feature
        and release it quicker.
      </p>

      <img class="img-fluid" src="/projects/reviews/mvp.png" alt="Review Overview and details pages">
      <p class="caption">Updated design based on the prioritized features in the MVP.</p>


      <div class="divider">
        <hr />
        <img src="../assets/logo.svg" alt="" />
        <hr />
      </div>

      <h3>Learnings</h3>
      <p>
        Learnings
        Despite the quick turnaround and limited resources, this project ended up being a great learning experience.
      </p>

      <h4>Take what you’ve got and make the most out of it</h4>
      <p>
        I’m very fortunate to work in a team with resources for almost everything a product design team might need - we
        have UX Researchers, Prototypers, Copywriters, Illustrators, Animators and more.
      </p>
      <p>
        But when working on a tight timeline and resources aren’t available, it’s better to do the heavy lifting
        yourself than to sit around and wait. In this case I didn’t have the budget, time or help to conduct research,
        but I found a way to discover some big issues and come up with a solution to the problems on my own.
      </p>

      <h4>Use coworkers to your advantage</h4>
      <p>
        This is true especially if you’re working in a larger company. If you can't speak to real users, you might have
        coworkers who are in touch with the users on a regular basis - such as customer support and sales. Talk to them
        and extract all their knowledge and use it to inform your design decisions.
      </p>
      <p>
        You might also have subject matter experts that can help you with knowledge and best practices - in the
        <router-link to="../app-dashboard">Performance and Insights feed</router-link> project I was designing a lot of
        graphs and various data visualisations. I had limited knowledge about this so I reached out to our data analysts
        who were happy to help out with recommendations on the designs.
      </p>

      <img class="img-fluid full-width" src="/projects/reviews/desktop-app.png" alt="">
      <img class="img-fluid full-width" src="/projects/reviews/reviews.jpg" alt="">


      <div class="divider">
        <hr />
        <img src="../assets/logo.svg" alt="" />
        <hr />
      </div>

      <div id="contact">
        <h2>
          Get in touch
        </h2>
        <p style="text-align:center;">Reach me on <a href="https://www.linkedin.com/in/alexfanden/">Linked<span
              id="linkedin">In</span></a>, email me at <a href="mailto:fanden.alex@gmail.com">fanden.alex@gmail.com</a>
          <br>or drop a message in the form below:
        </p>
        <form action="https://formspree.io/fanden.alex@gmail.com" method="POST">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="name">Name</label>
                <input required type="text" name="name" class="form-control" id="name">
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="email">Email</label>
                <input required type="email" name="_replyto" class="form-control" id="email">
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <label for="message">Message</label>
                <textarea required class="form-control" name="message" id="message" rows="3"></textarea>
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
            <h5>Duration</h5>
            <p><img src="../assets/facts/time-clock-circle.svg" alt="" />3 weeks</p>
          </span>
          <span class="fact-item">
            <h5>Tools</h5>
            <p><img src="../assets/facts/whimsical.svg" alt="" />Whimsical</p>
            <p><img src="../assets/facts/sketch.svg" alt="" />Sketch</p>
            <p><img src="../assets/facts/invision.svg" alt="" />InVision</p>
            <p><img src="../assets/facts/jira.svg" alt="" />Jira</p>
          </span>
          <span class="fact-item">
            <h5>Team</h5>
            <p><img src="../assets/facts/people-man.svg" alt="" />Product Design (me)</p>
            <p><img src="../assets/facts/people-man.svg" alt="" />Copywriting (Wesley Hsu)</p>
            <p><img src="../assets/facts/people-man.svg" alt="" />Product Owner (Ido Hertz)</p>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "appDashboard",
};
</script>