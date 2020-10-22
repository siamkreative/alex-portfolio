<template>
  <div class="sticky-header">
    <div class="progress-container">
      <div class="progress-bar" id="myBar"></div>
    </div>
    <div class="project-bg" style="
        background-image: url('/projects/app-dashboard/project-hero-1920.jpg');
      "></div>
    <div class="container story">
      <div class="hero">
        <h1>Performance and insights feed</h1>
        <p><span id="project-byline"><span id="project-byline-content">Published on 24 November,
              2019&nbsp;&nbsp;•&nbsp;&nbsp;14 minutes read</span></span></p>
      </div>
      <p>YCS is an enterprise tool where hotels can manage rates and allotment, bookings, promotions and much more.
        The YCS app was launched early 2018 with a limited set of features. During 2019 we set out to expand on the
        app and build out some of the wanted features.
      </p>
      <p>Our goal with this project was to provide an overview of hotel performance and operations, thus enabling
        hotels to make better decisions and accelerate their business with Agoda.
      </p>

      <div class="divider">
        <hr />
        <img src="../assets/logo.svg" alt="" />
        <hr />
      </div>

      <h3>Background</h3>
      <p>To get a better understanding on where to focus our efforts, we conducted both qualitative and quantitative
        research. We sent out surveys to hotels and asked them to rank their most important features. We also
        travelled to some of our key markets to conduct interviews with hoteliers to get a better understanding of
        their wants and needs.
      </p>
      <p>When we talked to our users, it became clear that we weren’t providing sufficient insights on how they
        perform. The most common way for hotels to get insights was in monthly meetings with a Market Manager from
        Agoda, who would bring a printed monthly report and discuss areas of improvements face-to-face.</p>
      <p>While this report was appreciated, it didn’t provide all the data our hotels wanted, and didn’t allow them to
        customize it the way they needed. By providing a more flexible way to generate these insights, we believe that
        hotels would be able to make better decisions. And we would also reduce the labour-intensive process of
        printing reports and visiting hotels.</p>

      <h4>My role in the team</h4>
      <p>I lead the design of the overall app experience and worked as the UX/UI Designer throughout this project. I
        worked together with a UX Researcher, Copywriter, Prototyper, Product Owner and a team of Developers and QA
        Engineers.</p>

      <h4>Initial research</h4>
      <p>In order to understand what data our hotels needed and which tasks they normally performed, we had to immerse
        ourselves into the daily tasks of the hotels and their staff, as well as our Market Managers who provide data
        to the hotels. We shadowed our staff and took note of the most common tasks they performed during a day, and
        scheduled hotel visits to understand how they interacted with our systems and what data was most valuable for
        them.</p>

      <p>Not all hotels operate in the same way, and it was important for us to cover as many types of markets, hotels
        and users as possible on our visits. We targeted specific hotels in our biggest markets from the data of
        active users on both app and desktop. With the help of local Partner Services teams, we could schedule visits
        with a diverse set of hotels, from small family-run boutique hotels in Taichung, Taiwan to larger chain hotels
        in Cebu, Philippines.</p>

        <div class="row">
          <div class="col-6">
            <picture>
              <source srcset="/projects/app-dashboard/initial-research-1-1920.webp" type="image/webp"/> 
              <img src="/projects/app-dashboard/initial-research-1-1920.png" alt=""/>
            </picture>
          </div>
          <div class="col-6">
            <picture>
              <source srcset="/projects/app-dashboard/initial-research-2-1920.webp" type="image/webp"/> 
              <img src="/projects/app-dashboard/initial-research-2-1920.png" alt=""/>
            </picture>
          </div>
        </div>

      <p>During our hotel visits, we interviewed the staff to understand how and when they used our system. We asked
        them to rank different features and data by importance, using card sorting.</p>

      <p>We consolidated the learnings and mapped out the most wanted features across the different types of hotels,
        markets and roles within hotels. By mapping out feature needs by role, it became clear that different roles
        have different needs:
        <ul>
          <li>
            For decision makers, it was important to get insights on hotel performance, in order for them to make
            strategic decisions.
          </li>
          <li>
            For operational staff, they would like to get a good overview of what’s going on at the hotel.
          </li>
        </ul>
      </p>

      <picture>
        <source srcset="/projects/app-dashboard/initial-research-3-1920.webp" type="image/webp"/> 
        <img src="/projects/app-dashboard/initial-research-3-1920.png" alt="Roles and tasks of operational staff versus decision makers"/>
      </picture>
    
<div class="divider">
        <hr />
        <img src="../assets/logo.svg" alt="" />
        <hr />
      </div>
      <h3>Diving into the data</h3>
      <p>
        We decided to focus on the decision makers because they have a bigger say at the hotel. We weren’t catering to
        their needs at all at the time, whilst operational staff already had the tools they needed on our website.
        Providing performance data was going to be a bigger challenge for us, and therefore something we wanted to
        tackle right away.
      </p>
      <p>
        I started off by creating a mind map of all scores, metrics, events and other interesting pieces of
        information that might help hotels make better decisions. It included data that we already had, data that was
        requested by our hotels, data that our competitors provided and some new ideas.
      </p>

      <picture>
        <source srcset="/projects/app-dashboard/diving-into-data-1-1920.webp" type="image/webp"/> 
        <img src="/projects/app-dashboard/diving-into-data-1-1920.png" alt="Mindmap of data points"/>
      </picture>
      <p>
        While the different types of data might provide some useful information on their own, we believed that we
        could generate much more meaningful insights by combining them. So, I had to come up with some formula to
        generate these insights. Inspired by how Google Analytics lets you generate reports, I grouped the data into
        different categories:
        <ul>
          <li><b>Metrics</b> (such as bookings, room nights, revenue)</li>
          <li><b>Dimensions</b> (such as nationality, promotion type, traveller type)
          </li>
          <li><b>Time frame</b> (e.g. today, this week, last month)
          </li>
        </ul>
      </p>

      <picture>
        <source srcset="/projects/app-dashboard/diving-into-data-2-1920.webp" type="image/webp"/> 
        <img src="/projects/app-dashboard/diving-into-data-2-1920.png" alt="Mindmap of data points"/>
      </picture>

      <p>
        By comparing the data using other dimensions or time frames, we could generate new insights.
      </p>
      <p>For example, if a hotelier analyses her bookings for the last 30 days for each nationality, compared to her
        competitors, she might find that her property attracts a significantly lower number of guests from the
        Japanese market.
      </p>
      <p>At this stage, our new tool can provide suggestions by looking at her hotel, their competitors and trends for
        Japanese travellers. For example, there might be certain amenities that are important for Japanese travellers,
        which her hotel doesn’t provide.
      </p>
      <p>
        With the insight, she can take action immediately.
      </p>

<div class="divider">
        <hr />
        <img src="../assets/logo.svg" alt="" />
        <hr />
      </div>

      <h3>Early explorations</h3>
      <p>
        With all the potential data points defined and a formula to generate insights, I started to work on some
        initial concepts. At the time, the landing page of our app was a very basic feed of generic suggestions. The
        engagement was low and our users were reluctant to take the suggestions, so we decided to replace this feed
        altogether with our new solution.
      </p>
      <p>
        We wanted to cater to both our key user groups from the get-go—the decision makers and the operational staff.
        Therefore, I had to come up with a homepage that displayed both performance related data and activities at the
        hotel.
      </p>

      <picture>
        <source srcset="/projects/app-dashboard/early-explorations-1-1920.webp" type="image/webp"/> 
        <img src="/projects/app-dashboard/early-explorations-1-1920.png" alt="First iterations of the page as wireframes"/>
      </picture>

      <p>
        The first concept we wanted to try out was a dashboard with two tabs:
        <ul>
          <li>
            <span style="font-weight:bold;">Performance:</span> Hotel scores, performance metrics, competitors and
            more.
          </li>
          <li>
            <span style="font-weight:bold;">Operations:</span> Information on new bookings, cancellations, guest
            messages, reviews and more.
          </li>
        </ul>
      </p>

      <p>
        Our assumption was that this would be the clearest way to group the content since there was such a clear
        distinction between our users. Based on the wireframes, I mocked up high fidelity designs and created a simple
        prototype with InVision.
      </p>

      <picture>
        <source srcset="/projects/app-dashboard/early-explorations-2-1920.webp" type="image/webp"/> 
        <img src="/projects/app-dashboard/early-explorations-2-1920.png" alt="Mockup of tabbed design"/>
      </picture>

      <h4>Bringing in the users</h4>
      <p>
        We invited Bangkok-based hotels to our office to test the prototype. It quickly turned out that the tabbed
        approach didn’t work. Almost none of the test participants noticed the tabs, and the labels of the tabs
        (especially “Operation”) were not clear enough.
      </p>

      <picture>
        <source srcset="/projects/app-dashboard/early-explorations-3-1920.webp" type="image/webp"/> 
        <img src="/projects/app-dashboard/early-explorations-3-1920.png" alt="Mockup of tabbed versus one-page approach"/>
      </picture>

      <p>
        We renamed the tab “My feed” and designed an alternate layout that combined the performance and operations
        into one page. We invited more hotels and let them play around with both solutions.
      </p>
      <p>
        The renamed tab didn’t help the users discover the tabbed navigation. However, when we provided all the
        content within the same page, we noticed that hoteliers instantly started to scroll the feed to find out more.
        In this design, we provided filters based on the type of content: Performance, Bookings, Messages etc. Almost
        all participants tried to interact with these filters.
      </p>
      <p>
        With these insights, we decided to move forward with the one-page solution.
      </p>

      <h4>Accidental insights and improvements</h4>
      <p>
        One of the main features on the dashboard was a set of scores that would help hotels understand how well they
        are performing:
        <ul>
          <li>
            <span style="font-weight:bold;">Offer strength:</span> do they provide competitive rates, and do they have
            rooms available on Agoda.com?
          </li>
          <li>
            <span style="font-weight:bold;">Content:</span> Is the content up to date, do they provide high quality
            photos?
          </li>
          <li>
            <span style="font-weight:bold;">Reviews:</span> What’s their review score, in what areas can they improve?
          </li>
        </ul>
      </p>

      <p>
        We set out to see if the hotels would understand these scores, and if they could find ways to improve the
        scores by using the new dashboard.
      </p>
      <p>
        During the first round of usability tests we were using the InVision app on one of our test devices. This app
        offers a specific mode for usability testing, however I forgot to instruct my researcher on how to turn this
        on prior to the labs - my bad!
      </p>
      <p>
        The usability testing mode only enables the users to navigate via the hotspots I have added to the prototype -
        in contrary to the default mode, where users can swipe between screens, and therefore abandon the intended
        navigation. Both test subjects in our morning session discovered this trick as they were trying to swipe on
        the line chart in the left screen below:
      </p>

      <picture>
        <source srcset="/projects/app-dashboard/accidental-insights-1-1920.webp" type="image/webp"/> 
        <img src="/projects/app-dashboard/accidental-insights-1-1920.png" alt="Mockup of scores"/>
      </picture>

      <p>
        They expected to be able to go back and forth on the time-frame in the line chart, but instead they ended up
        at a different screen, the Content score (middle). Both test subjects had a similar reaction: “Oh! I don’t
        have to click back and then click again to see the next score - nice!”.
      </p>
      <p>
        This accident provided two valuable insights to our team:
        <ul>
          <li>
            Users understand that they can scrub on the graphs in order to reveal more data on the timeline.
          </li>
          <li>
            Users want to use swipe as the main navigation between related scores.
          </li>
        </ul>
      </p>
      <p>
        With these exciting insights I set out to adjust the navigation of the scores:
      </p>

      <picture>
        <source srcset="/projects/app-dashboard/accidental-insights-2-1920.webp" type="image/webp"/> 
        <img src="/projects/app-dashboard/accidental-insights-2-1920.png" alt="Mockups of second iteration of the scores"/>
      </picture>

      <p>
        While the users found the swipe navigation easy to use, that was not what they intended to do. So I added dots
        underneath the scores in order to increase the affordance of swiping, and to indicate how many other scores we
        provide. I also added a hint of the next score in the corners of the screen to make it more obvious.
      </p>
      <p>
        This type of navigation is not really possible to prototype in InVision, and therefore I pulled in one of our
        Prototypers to the project. With Framer, we were able to build more advanced and interactive prototypes,
        supporting all the new interactions we wanted to test:
      </p>

      <video controls>
        <source src="/projects/app-dashboard/dashboard-vid.mp4" type="video/mp4">
        <source src="/projects/app-dashboard/dashboard-vid.ogg" type="video/ogg">
        Your browser does not support the video tag.
      </video>

      <p>
        Building a prototype in Framer, or any tool that requires coding, is fairly time consuming. What would take me
        a couple of hours with InVision took us a week or more to develop with Framer.
      </p>
      <p>
        With this in mind, we decided to limit the prototype to some key features:
        <ul>
          <li>
            Scores
          </li>
          <li>
            The most important metrics (Revenue, Average Daily Rate, Room nights)
          </li>
          <li>
            The activity feed for operations
          </li>
      </p>

      <picture>
        <source srcset="/projects/app-dashboard/accidental-insights-3-1920.webp" type="image/webp"/> 
        <img src="/projects/app-dashboard/accidental-insights-3-1920.png" alt="Mockups all key features of the new feed"/>
      </picture>

<div class="divider">
        <hr />
        <img src="../assets/logo.svg" alt="" />
        <hr />
      </div>

      <h3>Bringing the pieces together</h3>
      <p>
        As the development of the prototype was quite time consuming, I had time to build out the remaining designs
        and document all the new components.
      </p>
      <p>
        In my initial designs I had set up guidelines on how to use colors in our data visualization. I wanted to
        distinguish many different things with color:
        <ul>
          <li>
            Good, Average and Bad performance
          </li>
          <li>
            Current performance of your hotel versus past performance
          </li>
          <li>
            Your hotel versus competitors
          </li>
          <li>
            One metric versus another metric
          </li>
        </ul>
      </p>

      <p>
        As I added more data to the designs, I started to run out of colors to use from our palette. On top of this,
        we noticed that a couple of test participants confused our pink and turquoise with red and green. As a result,
        they thought they were performing badly on metrics where we used pink, and good where we used turquoise, even
        if that wasn’t the case.
      </p>
      <p>
        Our team is usually very hesitant to introduce new colors or UI elements in our designs, but we decided that
        this was a good enough reason to introduce more colors to the palette.
      </p>
      <picture>
        <source srcset="/projects/app-dashboard/documentation-1.webp" type="image/webp"/> 
        <img src="/projects/app-dashboard/documentation-1.png" alt="Documentation of color usage"/>
      </picture>
      <picture>
        <source srcset="/projects/app-dashboard/documentation-2.webp" type="image/webp"/> 
        <img src="/projects/app-dashboard/documentation-2.png" alt="Documentation charts"/>
      </picture>

<div class="divider">
        <hr />
        <img src="../assets/logo.svg" alt="" />
        <hr />
      </div>

      <h3>Going forward</h3>
      <p>
        After visiting four markets to do our initial research (Thailand, Taiwan, Japan and Philippines) and three
        markets to validate our designs (Thailand, Malaysia and Singapore), we felt confident enough to move onto the
        next stage of the project. Now we had to decide on a plan to build and roll out the new features!
      </p>
      <p>
        The performance metrics and scores were for the most part new. We had to pull in data analysts and our
        back-end team to figure out how to calculate scores and generate the data for the hotels.
      </p>
      <p>
        The operations-focused activity feed contained a lot of information that we already displayed on our website,
        and would therefore be a lot faster to ship. So we decided to roll out these first, whilst also building the
        back-end logic for the performance metrics and scores.
      </p>
      <p>
        At the time of writing this, we’re just about to start development of the MVP version.
      </p>

      <picture>
        <source srcset="/projects/app-dashboard/documentation-3.webp" type="image/webp"/> 
        <img src="/projects/app-dashboard/documentation-3.png" alt="Documentation of MVP UI components"/>
      </picture>

<div class="divider">
        <hr />
        <img src="../assets/logo.svg" alt="" />
        <hr />
      </div>
      
      <h3>Learnings</h3>
      <h4>Keeping it real</h4>
      <p>
        Moving between different levels of fidelity when designing is key. Low fidelity wireframes work great for
        quick iterations of different concepts and idea generation. However, when performing usability labs, it proves
        useful to use a prototype that is as realistic as possible.
        <ul>
          <li>
            Hi-fidelity mockups remove distraction and questions on how the real product would look like and work.
            Non-designers might have a hard time to imagine how to interact with a product by looking at a set of
            wireframes.
          </li>
          <li>
            Allowing real gestures reduces the risk of errors and makes it easier to understand what the user intends
            to do with the prototype. For example, if you’re designing a UI that affords swiping, make the element
            swipeable in the prototype.
          </li>
          <li>
            Use real data whenever possible. We didn’t have enough time to customize the content of our prototype to
            each hotel, and this caused them to focus on things that we didn’t care about from a design perspective.
            Despite using the right currency and hotel names, we noticed that some hotels were distracted by by
            certain metrics (“This seems wrong, are these really my rates? Is this really my revenue over the last
            month or is it quarterly?”). We believe that some aspects of our prototype might have performed better if
            all the numbers were real, as they would be able to connect the dots quicker and provide feedback on the
            utility of the designs rather than the accuracy of the numbers.
          </li>

          <h4>Optimize for the right audience</h4>
          <p>
            After talking to 15-20 hotels, we noticed that some hoteliers are used to crunching numbers and analyzing
            their performance regularly and use it as a basis for their business decisions. 
          </p>
          <p>
            Others tend to play by
            ear. In general, the first group would understand how to read the graphs, analyze the numbers and make
            sense of the prototype.
          </p>
          </p>The second group sometimes struggled with abbreviations, legends for graphs and
            more. We knew we wouldn’t be able to cater to both groups, at least not in the near future, and therefore
            we had to make a decision - do we cater to the savvier users, or do we simplify it so that everybody can
            understand it?
          </p>
          <p>
            When we interviewed the users, we asked them about our competitors and how they use their tools. The less
            savvy users did not use any of their performance tools today - therefore it’s unlikely that they would use
            our tool in the future. Based on that we decided to cater to the savvier users.
          </p>

          <picture>
           <source srcset="/projects/app-dashboard/project-1-1920.webp" type="image/webp"/> 
           <img src="/projects/app-dashboard/project-1-1920.png" alt="Collage of mockups from the project"/>
					</picture>
					
					<!-- <div class="divider">
						<hr />
            <span>Published on</span>
            <hr />
					</div> -->

					<p>To promote design thinking and attract talented designers to Agoda, this article was published on the <span class="bold">Careers at agoda</span> and <span class="bold">Agoda Engineering and Design</span> blogs. It was also promoted on Agoda's social media acounts and LinkedIn.</p>

        <div class="row">
          
          <div class="col-md-6 card-blogs">
            <a href="https://careersatagoda.com/blog/agoda-ycs-performance-insights-feed/" rel=”noopener” target="_blank" class="thumbnail">
          <div class="row no-gutters">
            <div class="col-auto">
            <picture>
              <source srcset="/projects/app-dashboard/ext-links/blog-careersatagoda.webp" type="image/webp"/> 
              <img src="/projects/app-dashboard/ext-links/blog-careersatagoda.png" alt=""/>
            </picture>
            </div>
          <div class="col">
          <span class="card-heading">Careers at Agoda</span><br>
          <span class="caption">February 27, 2020</span>
          </div>
          </div>
          </a>
          </div>
          
          <div class="col-md-6 card-blogs">
          <a href="https://medium.com/agoda-engineering/designing-a-performance-and-insights-feed-for-hotels-e8725b86faaf" rel=”noopener” target="_blank" class="thumbnail">
          <div class="row no-gutters">
            <div class="col-auto">
            <picture>
              <source srcset="/projects/app-dashboard/ext-links/blog-agodaengineering.webp" type="image/webp"/> 
              <img src="/projects/app-dashboard/ext-links/blog-agodaengineering.png" alt=""/>
            </picture>
            </div>
          <div class="col">
          <span class="card-heading">Agoda Engineering & Design</span><br>
          <span class="caption">February 7, 2020</span>
          </div>
          </div>
          </a>
          </div>
        </div>
          

          <div class="divider">
            <hr />
            <img src="../assets/logo.svg" alt="" />
            <hr />
          </div>

          <div id="contact">
            <h2>
              Get in touch
            </h2>
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
                <span class="fact-item duration">
                  <h5>Duration</h5>
                  <p><img src="../assets/facts/time-clock-circle.svg" alt=""/>10 months</p>
                </span>
                <span class="fact-item tools">
                  <h5>Tools</h5>
                  <p><img src="../assets/facts/whimsical.svg" alt=""/>Whimsical</p>
                  <p><img src="../assets/facts/sketch.svg" alt=""/>Sketch</p>
                  <p><img src="../assets/facts/invision.svg" alt=""/>InVision</p>
                  <p><img src="../assets/facts/gdocs.svg" alt=""/>Google Docs</p>
                  <p><img src="../assets/facts/jira.svg" alt=""/>Jira</p>
                </span>
                <span class="fact-item team">
                  <h5>Team</h5>
                  <p><img src="../assets/facts/people-man.svg" alt=""/>Product Design (me)</p>
                  <p><img src="../assets/facts/people-man.svg" alt=""/>User Research (Trey Hurst)</p>
                  <p><img src="../assets/facts/people-man.svg" alt=""/>Copywriting (Wesley Hsu)</p>
                  <p><img src="../assets/facts/people-man.svg" alt=""/>Prototyping (Muhammad Athar)</p>
                  <p><img src="../assets/facts/people-man.svg" alt=""/>Product Owner (Ido Hertz)</p>
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
