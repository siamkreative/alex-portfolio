<template>
  <div class="sticky-header">
    <div class="progress-container">
      <div class="progress-bar" id="myBar"></div>
    </div>
    <div
      class="project-bg"
      style="background-image: url('/projects/figma/project-hero-1920.jpg')"
    ></div>
    <div class="container story">
      <div class="hero">
        <h1>How we migrated our design team to Figma</h1>
        <p>
          <span id="project-byline"
            ><span id="project-byline-content"
              >Published on 15 October, 2020&nbsp;&nbsp;•&nbsp;&nbsp;Part 1 of
              3&nbsp;&nbsp;•&nbsp;&nbsp;1 minute read</span
            ></span
          >
        </p>
      </div>
      <p>
        As the corona virus hit the travel industry earlier this year, the
        design team at Agoda looked at how we could save costs without
        sacrificing the quality of the work we're doing.
      </p>
      <p>
        The collaborative features and the opportunity to shrink the cost of
        multiple licence fees to just one was two compelling reasons to review
        Figma and propose a plan to migrate our whole design organisation to the
        new tool.
      </p>
      <p>
        In this guide I will walk through the research we did and how our
        working group planned and executed the migration to Figma.
      </p>

      <div class="divider">
        <hr />
        <img src="../assets/logo.svg" alt="" />
        <hr />
      </div>

      <h3>Analyzing the cost of design tools</h3>
      <p>
        To get a better sense of the cost savings, we documented all the design
        tools we use and pay for today, analyzed the annual cost and whether or
        not they could be replaced by Figma:
      </p>
      <div class="row">
        <div class="col-sm">
          <h4>Sketch</h4>
          <ul>
            <li>99 USD per year and license</li>
            <li>Used for UI design</li>
            <li>Is replaceable by Figma</li>
            <li>Verdict: Cancel</li>
          </ul>
        </div>
        <div class="col-sm">
          <h4>Abstract</h4>
          <ul>
            <li>180 USD per year and license</li>
            <li>Used for version control and file management</li>
            <li>
              The file management aspect is replaceable by Figma, the version
              control is not. We need to investigate if an alternative workflow
              would be feasible
            </li>
            <li>Verdict: Cancel</li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-sm">
          <h4>Zeplin</h4>
          <ul>
            <li>130 USD per year and license</li>
            <li>Used for developer hand-off</li>
            <li>The hand-off is replaceable by Figma</li>
            <li>
              Zeplin also charges for view-only users such as developers and
              PM's. This easily makes the licence fees skyrocket when working
              with bigger tech teams
            </li>
            <li>Verdict: Cancel</li>
          </ul>
        </div>
        <div class="col-sm">
          <h4>Invision</h4>
          <ul>
            <li>≈100 USD per Year and license</li>
            <li>Used for developer hand-off and prototyping</li>
            <li>Both hand-off and prototyping is replaceable by Figma</li>
            <li>
              Again, the cost can easily skyrocket as view-only users are
              charged as well
            </li>
            <li>Verdict: Cancel</li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-sm">
          <h4>Principle</h4>
          <ul>
            <li>129 USD per year and license</li>
            <li>Used to animate micro-interactions</li>
            <li>This is not replaceable by Figma</li>
            <li>
              It's worth noting that a license can be shared across multiple
              devices and therefore be shared by multiple colleagues, thus
              driving down the cost
            </li>
            <li>Verdict: Keep</li>
          </ul>
        </div>
        <div class="col-sm">
          <h4>Framer</h4>
          <ul>
            <li>240 USD per year and license</li>
            <li>Used for advanced interactions and prototypes</li>
            <li>This is not replaceable by Figma</li>
            <li>
              Only a few people on our team have the skillset to code
              prototypes. The main use case for these prototypes were user labs,
              however the pandemic has prevented us from doing this at the same
              scale as before thus we decided that Framer is no longer an
              essential tool
            </li>
            <li>Verdict: Cancel</li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-sm">
          <h4>Whimsical</h4>
          <ul>
            <li>144 USD per year and license</li>
            <li>
              Used for user flows, wireframes and other early stage UX work
            </li>
            <li>This is not replaceable by Figma</li>
            <li>Verdict: Cancel</li>
          </ul>
        </div>
        <div class="col-sm">
          <h4>Miro</h4>
          <ul>
            <li>192 USD per year and license</li>
            <li>
              Used for user flows, wireframes and other early stage UX work
            </li>
            <li>This is not replaceable by Figma</li>
            <li>
              Miro and Whimsical are two very similar tools, and since most of
              our team is already using Miro, we recommend to keep it and cancel
              Whimsical
            </li>
            <li>Verdict: Keep</li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-sm">
          <h4>Figma</h4>
          <ul>
            <li>540 USD per year and license</li>
            <li>Used for UI Design, developer hand-off and prototyping</li>
          </ul>
        </div>
        <div class="col-sm"></div>
      </div>
      <h4>Conclusion</h4>
      <p>
        As we compare the current and proposed toolsets, the total saving is
        roughly 350 USD per year and license:
      </p>
      <p>Current: 1214 USD per year and license</p>
      <p>Proposal (Figma, Principle and Miro): 861 USD per year and license</p>
      <p>
        The cost savings per designer is good, but the biggest savings are made
        on the Zeplin licenses where we no longer need to pay anything for
        developers and other stakeholders, requiring view-only access. It's not
        uncommon for the designer-developer ratio to be 1:10 or larger, so
        considering this in a large organisation, the cost savings are
        tremendous.
      </p>

      <div class="divider">
        <hr />
        <img src="../assets/logo.svg" alt="" />
        <hr />
      </div>

      <h3>Establish a working group with clear responsibilities</h3>

      <p>With the cost review done, we got the green light to move ahead and continue investigating how a migration could be done.</p>
      <p>What started as a small team of designers from one of our product teams quickly expanded to a working group with designers from different product teams across our organization - Consumer and supply product designers working on both web and app were represented in the working group. So was designers from our design systems teams.</p>
      <p>With a wide range of designers involved we could challange each problem from many different angles and split the responsibilities better. For some of us, this was the first time we had an opportinuty to work together with other designers across different teams.</p>
      <p>We divided work into following workstreams and assigned an owner for each:</p>

        <div class="row">
          <div class="col-sm">
      <h4>Organization and setup</h4>
            <p>
              <ul>
                <li>Team, Project and file structure</li>
                <li>Design System and UI libraries</li>
              </ul>
            </p>
          </div>
          <div class="col-sm">
      <h4>Workflows</h4>
            <p>
              <ul>
                <li>General workflows</li>
                <li>Master file management (our source of truth)</li>
              </ul>
            </p>
          </div>
          <div class="col-sm">
      <h4>Communication and governance</h4>
            <p>
              <ul>
                <li>Commuincation channels and contact persons</li>
                <li>Maintenance plans</li>
              </ul>
            </p>
          </div>
        </div>

      <div class="divider">
        <hr />
        <img src="../assets/logo.svg" alt="" />
        <hr />
      </div>

      <h3>Learn from other design teams</h3>
      <p>Luckily we were not the first design team to migrate to Figma. As we started to research into how other teams had managed the migration, we were suprised to see how much other companies has shared on their transition. We dived into tutorials, blog posts, podcasts and youtube videos. </p>
      <p>Liferay uses the cover page for each file to display useful information such as project status, stakeholders and author. They are sharing this and other handy utilities on their <a href="https://liferay.design/resources/figma/" target="_blank">design website</a>.</p>
      <img class=" img-fluid" src="/projects/figma/liferay.png"
        alt="">
      <p class="caption">Color coded statuses on cover pages helps to get a quick overview in your Figma projects.</p>

      <p><a href="https://www.youtube.com/watch?v=Xww-x7DgiDw" target="_blank">Spotify's approach to design systems</a> - a family of systems, layered like an onion. A layer with core elements spans across all products and features, such as branding elements, logos, colors and typography. </p>
      <p>The next layer is platform specific and provides components specific for web, app and other platforms. </p>
      <p>The final layer is unique to each product/segment and allows designers who work on those products to have more autonomy in crafting their own components and socialize them throguhout their product.</p>
      <img class=" img-fluid" src="/projects/figma/spotify-ds.png"
        alt="">
      <p class="caption">Shaun Bent presents "Reimagining Design Systems at Spotify" at the Design Systems London conference.</p>

      <p><a href="https://www.youtube.com/watch?v=_syNkoHyy8w" target="_blank">Credit Karma</a> has one Design Systems Team in Figma with separate projects for assets, components, layouts, OS and devices and more.</p>
      <p>Each component is divided to a individual figma file, where everything about that component is documented in detail - all research, iterations, symbols, states, do's and dont's can be found here. </p>
      <p>This approach allows for easier versioning, less risk of breaking components and more documentation per component without making it overwhealming. But it also means that designers have to link a large amount of libraries to every project (one per component).</p>
      <img class=" img-fluid" src="/projects/figma/credit-karma.png"
        alt="">

        <p><a href="https://www.figma.com/blog/how-shopify-facilitates-collaboration-in-figma/" target="_blank">Shopify</a>  has embedded a checklist in their working files on Figma to help designers cover all the bases as they are designing on different features.</p>
      <img class=" img-fluid" src="/projects/figma/shopify.png"
        alt="">
    
    <p>Too speed up work and to keep designers aligned, some larger design organisations take it a step further and build their own plugins and extensions.</p>
    <p><a href="https://medium.com/uber-design/uber-design-platform-1ebff86c89e7" target="_blank">Uber</a> built this nifty Mac OS extensions which includes icons, assets, spacings, branding guidelines and more. Updates can be sent via push notifications to the whole team.</p>
    <p>At Agoda, we built a Sketch plugin to populate our designs with hotel names, facilities, airport codes, room photos and more. This might not be worth the efforts in smaller teams, but in teams of 50+ designers this can prove to be a real time saver in the long run. We are planning to migrate the plugin to Figma as a part of this process. </p>
    <p>For smaller teams it's worthwile to dig into the existing Figma plugins. </p>
<img class=" img-fluid" src="/projects/figma/uber.png"
        alt="">

        <p>For each product, <a href="https://www.figma.com/community/file/832911648132248625/Spotify-Ways-of-Working" target="_blank">Spotify</a> has a dedicated project where they host all their specs - the source of truth for that product. This makes for a clear separation between the live product and work in progress.</p>
        <img class=" img-fluid" src="/projects/figma/spotify-specs.png"
        alt="">

      <div class="divider">
        <hr />
        <img src="../assets/logo.svg" alt="" />
        <hr />
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

