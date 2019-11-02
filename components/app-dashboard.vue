<template>
  <div class="project-bg" style="background-image: url('/projects/app-dashboard/project-hero-1920.png')">
    <section class="container-fluid project">
      <div class="text-center">
        <h4>App</h4>
        <h1>Performance and insights feed</h1>
      </div>
      <p>Agoda Connect is an enterprise tool where hotels can manage rates and allotment, bookings, promotions and much more. The Agoda Connect app was launched early 2018 with a limited set of features. During 2019 we set out to expand on the app and build out some of the wanted features.
      </p>
      <p>Our goal with this project was to provide an overview of hotel performance and operations, thus enabling hotels to make better decisions and accelerate their business with Agoda.
      </p>

      <h4>Background</h4>
      <p>To get a better understanding on where to focus our efforts, we conducted both qualitative and quantitative research. We sent out surveys to hotels and asked them to rank their most important features. We also travelled to some of our key markets to conduct interviews with hoteliers to get a better understanding of their wants and needs.
      </p>
      <p>When we talked to our users, it became clear that we weren’t providing sufficient insights on how they perform. The most common way for hotels to get insights was in monthly meetings with their sales representative from Agoda, who would bring a printed monthly report and discuss areas of improvements face to face.</p>
      <p>While this report was appreciated, it didn’t provide all the data our hotels wanted, and didn’t allow them to customize it the way they needed. By providing a more flexible way to generate these insights, we believe that hotels would be able to make better decisions that would be beneficial for both them and us. By doing this we would also reduce the labour intensive process of printing reports and visiting hotels.</p>

      <h4>My role in the team</h4>
      <p>I lead the design of the overall app experience and worked as the UX/UI Designer throughout this project. I worked together with a UX Researcher, Copywriter, Prototyper, Product Owner and a team of developers and QA engineers.</p>

      <h4>Initial research</h4>
      <p>In order to understand what data our hotels needed and which tasks they normally performed, we had to immerse ourselves into the daily tasks of the hotels and their staff, as well as our Market Managers who provide data to the hotels. We shadowed our staff and took note of the most common tasks they performed during a day. We scheduled hotel visits to understand how they interact with our systems and what data is most valuable for them.</p>

      <p>Not all hotels operate in the same way, and it was important for us to cover as many types of markets, hotels and users as possible in or visits. By pulling data on active users on both app and desktop, we could target specific hotels in our biggest markets. With the help of local sales teams, we could schedule visits with a diverse set of hotels, from small family-run boutique hotels in Taichung, Taiwan to large chain hotels in Cebu, Philippines.</p>
      
      <p>
        During the hotel visits we interviewed the staff to understand how and when they are using our system. We performed card sorting activities where they ranked different features and data by importance.</p>

      <p>
        We consolidated the learnings and mapped out the most wanted features across the different types of hotels, markets and roles within hotels. By mapping out feature needs by role, it became clear that different roles have different needs:
        <ul>
          <li>
            For decision makers it was important to get insights on hotel performance, in order for them to make strategic decisions
            </li>
          <li>
            For operational staff it was important to get a good overview on what’s going on at the hotel.
          </li>
        </ul>
      </p>

<img class="img-fluid" src="/projects/app-dashboard/initial-research-3-1920.png" alt="Roles and tasks of operational staff versus decision makers">

      <h4>Diving into the data</h4>
      <p>
        We decided to focus on the decision makers because they have a bigger say at the hotel and can make decisions that operational staff may not be allowed to make. We weren’t catering to their needs at all at the time, whilst operational staff already had the tools they needed on the desktop platform. Providing performance data was going to be a bigger challenge for us, and therefore something we wanted to tackle right away.
      </p>
      <p>
        There were tons of data we could give to the hotels - in order to get a better overview, I created a mindmap of all scores, metrics and other data that might help hotels to make better decisions. It included data that we already had, data that was requested by our hotels, data that our competitors provided and some new ideas.
      </p>

      <img class=" img-fluid" src="/projects/app-dashboard/diving-into-data-1-1920.png" alt="Mindmap of data points">
      <p>
        While the different types of data might provide some useful information on their own, we believed that we could generate much more meaningful insights by combining them. So, I had to come up with some formula to generate these insights. Inspired by how Google Analytics lets you generate reports, I grouped the data into different categories:
        <ul>
          <li><b>Metrics</b> (such as Bookings, Room nights, Revenue)</li>
          <li><b>Dimensions</b> (such as Nationality, Promotion type, Traveller type)
          </li>
          <li><b>Time frame</b> (e.g. Today, this week, last month)
        </li>
        </ul>
      </p>

      <img class=" img-fluid" src="/projects/app-dashboard/diving-into-data-2-1920.png" alt="Mindmap of data points">

      <p>
        By comparing this data to other dimensions or time frames, we could generate new insights.
      </p>
      <p>For example, if a hotelier analyses her bookings as of the last 30 days for each nationality, compared to her competitors, she might find that her property attracts a significantly lower amount of guests from the Japanese market.
      </p>
      <p>With this new insight, there are a number of things she could do to fix the issue. At this stage we can play an important role in providing suggestions by analysing her hotel as well as competitors and trends for Japanese travellers. For example, there might be certain amenities that are important for Japanese travellers, which her hotel doesn’t provide.
      </p>
      <p>
        With this insight she can take action and fix the problem.
      </p>

      <h4>Early explorations</h4>
      <p>
        With all the potential data points defined and a formula to generate insights, I started to work on some initial concepts. At the time, the landing page of our app was a very basic feed of generic suggestions. The engagement was low and our users were reluctant to take the suggestions, so we decided to replace this feed altogether with our new solution.
      </p>
      <p>
        We wanted to cater to both our key user groups from the get go - the decision makers and the operational staff. Therefore I had to come up with a solution that displayed both performance related data and activities at the hotel.
      </p>

      <img class=" img-fluid" src="/projects/app-dashboard/early-explorations-1-1920.png" alt="First iterations of the page as wireframes">

      <p>
        The first concept we wanted to try out was a dashboard with two tabs:
        <ul>
        <li>
          Performance
          <ul>
            <li>
              Hotel scores, performance metrics, competitors and more.
            </li>
          </ul>
        </li>
        <li>
          Operations
          <ul>
            <li>
              Information on new bookings, cancellations, guest messages, reviews and more.
            </li>
          </ul>
        </li>
        </ul>
      </p>

      <p>
        Our assumption was that this would be the most clear way to group the content since there was such a clear distinction between our users. Based on the wireframes, I mocked up high fidelity designs and created a simple prototype with inVision.
      </p>

      <img class=" img-fluid" src="/projects/app-dashboard/early-explorations-2-1920.png" alt="Mockup of tabbed design">

      <h4>Bringing in the users</h4>
      <p>
        We invited Bangkok-based hotels to our office to test the prototype. It quickly turned out that the tabbed approach didn’t work. Almost none of the test participants noticed the tabs, and the labels of the tabs (especially “Operation”) were not clear enough.
      </p>

      <img class=" img-fluid" src="/projects/app-dashboard/early-explorations-3-1920.png" alt="Mockup of tabbed versus one-page approach">

      <p>
        We renamed the tab “My feed” and designed an alternate layout that combined the performance and operations into one page. We invited more hotels and let them play around with both solutions.
      </p>
      <p>
        The renaming of the tab did not help the users to discover the tabbed navigation. However, when we provided all the content within the same page, we noticed that hotels instantly started to scroll the feed to find out more. In this design, we provided filters based on the type of content: Performance, Bookings, Messages etc. Almost all participants tried to interact with these filters.
      </p>
      <p>
        With these insights, we decided to move forward with the one page solution.
      </p>
      
      <h4>Accidental insights and improvements</h4>
      <p>
        One of the main features of the dashboard was a set of scores that would help hotels to understand how well they are performing:
        <ul>
          <li>
            Offer strength: do they provide competitive rates, and do they have rooms available on Agoda.com?
          </li>
          <li>
            Content: Is the content up to date, do they provide high quality photos?
          </li>
          <li>
            Reviews: What’s their review score, in what areas can they improve?
          </li>
        </ul>
      </p>
      
      <p>
        We set out to see if the hotels would understand these scores, and if they could find ways to improve the scores by using the new dashboard.
      </p>
      <p>
        During the first round of usability tests we were using the inVision app on one of our test devices. This app offers a specific mode for usability testing, however I forgot to instruct my researcher on how to turn this on prior to the labs - my bad!
      </p>
      <p>
        The usability testing mode only enables the users to navigate via the hotspots I have added to the prototype - in contrary to the default mode, where users can swipe between screens, and therefore abandon the intended navigation. Both test subjects in our morning session discovered this trick as they were trying to swipe on the line chart in the left-most screen below:
      </p>

      <img class=" img-fluid" src="/projects/app-dashboard/accidental-insights-1-1920.png" alt="Mockup of scores">

      <p>
        They expected to be able to go back and forth on the time-frame in the line chart, but instead they ended up at a different screen, the Content score (middle). Both test subjects had a similar reaction: “Oh! I don’t have to click back and then click again to see the next score - nice!”.
      </p>
      <p>
        This accident provided two valuable insights to our team:
        <ul>
          <li>
            Users understand that they can scrub on the graphs in order to reveal more data on the timeline
          </li>
          <li>
            Users want to use swipe as the main navigation between related scores
          </li>
        </ul>
      </p>
      <p>
        With these exciting insights I set out to adjust the navigation of the scores:
      </p>

      <img class=" img-fluid" src="/projects/app-dashboard/accidental-insights-2-1920.png" alt="Mockups of second iteration of the scores">

      <p>
        While the users found the swipe navigation easy to use, that was not what they intended to do. So I added dots underneath the scores in order to increase the affordance of swiping, and to indicate how many other scores we provide. I also added a hint of the next score in the corners of the screen to make it more obvious.
      </p>
      <p>
        This type of navigation is not really possible to prototype in InVision, and therefore I pulled in one of our Prototypers to the project. With Framer, we were able to build more advanced and interactive prototypes, supporting all the new interactions we wanted to test:
      </p>

       <img class=" img-fluid" src="/projects/app-dashboard/accidental-insights-vid-1920.png" alt="Swipe interaction between the scores">

      <p>
        Building a prototype in Framer, or any tool that requires coding, is fairly time consuming. What would take me a couple of hours with InVision took us a week or more to develop with Framer.
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

      <img class=" img-fluid" src="/projects/app-dashboard/accidental-insights-3-1920.png" alt="Mockups all key features of the new feed">

      <h4>Bringing the pieces together</h4>
      <p>
        As the development of the prototype was quite time consuming, I had time to build out the remaining designs and document all the new components.
      </p>
      <p>
        In my initial designs I had set up guidelines on how to use colors in our data visualisation. I wanted to distinguish many different things with color:
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
        As I added more data to the designs, I started to run out of colors to use from our palette. On top of this, we noticed that a couple of test participants confused our pink and turquoise with red and green. As a result, they thought they were performing badly on metrics where we used pink, and good where we used turquoise, even if that wasn’t the case.
      </p>
      <p>
        Our team is usually very hesitant to introduce new colors or UI elements in our designs, but we decided that this was a good enough reason to introduce more colors to the palette
      </p>

      <h4>Going forward</h4>
      <p>
        After visiting 4 markets in our initial research (Thailand, Taiwan, Japan and Philippines) and 3 markets to validate our designs (Thailand, Malaysia and Singapore), we felt confident enough to move onto the next stage of the project. Now we had to decide on a plan to build and roll out the new features!
      </p>
      <p>
        The performance metrics and scores were for the most part new. We had to pull in data analysts and our back-end team to figure out how to calculate scores and generate the data for the hotels. 
      </p>
      <p>
        The operations-focused activity feed contained a lot of information that we already displayed on our desktop version, and would therefore be a lot faster to ship. So we decided to roll out these first, whilst also building the back-end logic for the performance metrics and scores.
      </p>
      <p>
        At the time of writing this, we’re just about to start development of the MVP version.
      </p>
      
      <h4>Learnings</h4>
      <h5>Keeping it real</h5>
      <p>
        Moving between different levels of fidelity when designing is key. Low fidelity wireframes work great for quick iterations of different concepts and idea generation. However, when performing usability labs, it proves useful to use a prototype that is as realistic as possible.
        <ul>
          <li>
            Hi-fidelity mockups remove distraction and questions on how the real product would look like and work. Non-designers might have a hard time to imagine how to interact with a product by looking at a set of wireframes.
          </li>
          <li>
            Allowing real gestures reduces the risk of errors and makes it easier to understand what the user intends to do with the prototype. For example, if you’re designing a UI that affords swiping, make the element swipeable in the prototype.
          </li>
          <li>
            Use real data whenever possible. We didn’t have enough time to customize the content of our prototype to each hotel, and this caused them to focus on things that we didn’t care about from a design perspective. Despite using the right currency and hotel names, we noticed that some hotels were distracted by by certain metrics (“This seems wrong, are these really my rates? Is this really my revenue over the last month, or is it quarterly?”). We believe that some aspects of our prototype might have performed better if all the numbers were real, as they would be able to connect the dots quicker and provide feedback on the utility of the designs rather than the accuracy of the numbers.
          </li>

          <h5>Optimize for the right audience</h5>
          <p>
            After talking to 15-20 hotels, we noticed that some hoteliers are used to crunching numbers and analyzing their performance regularly and use it as a basis for their business decisions. Others tend to play by ear. In general, the first group would understand how to read the graphs, analyze the numbers and make sense of the prototype. The second group sometimes struggled with abbreviations, legends for graphs and more. We knew we wouldn’t be able to cater to both groups, at least not in the near future, and therefore we had to take a decision - do we cater to the more savvy users, or do we “dumb it down” so that everybody can understand it?
          </p>
          <p>
            When we interviewed the users we asked them about our competitors and how they use their tools. The less savvy users did not use any of their performance tools today - therefore it’s unlikely that they would use our tool in the future. Based on that we decided to cater to the more savvy users.
          </p>

          <img class=" img-fluid" src="/projects/app-dashboard/project-1-1920.png" alt="Collage of mockups from the project">




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
  name: 'agodaConnect',
}
</script>

