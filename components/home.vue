<template>
    <div class="index">
        <div class="hero">
            <h1 class="font-weight-bold">Hi, I’m Alex!</h1>
            <p class="lead">A UX/UI Designer based in Bangkok, Thailand.<br> Scroll down to see some of my lastest work.</p>
        </div>

        <div class="section section-blue" id="work">
        <img src="/projects/bg_project_agoda-connect-375@2x.jpg" alt="Agoda connect" width="750" height="496" class="img-fluid d-block d-md-none">
        <img src="/projects/bg_project_agoda-connect-1920.jpg" alt="Agoda connect" width="1010" height="600" class="d-none d-md-block section-img">
        <div class="container">
            <div class="row">
            <div class="col-md-6">
                <div class="section-subtitle section-subtitle-blue">App</div>
                <h3>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="icon" width="1em" height="1em">
                        <use xlink:href="#icon_project_agoda-connect"></use>
                    </svg>
                    <span>Agoda connect</span>
                </h3>
                <p>Manage your hotel on the go! With the Agoda Connect app, hotels all over the world can create promotions, update rates, add allotment and see who’s checking in and out of the hotel.</p>
                <router-link to="/agoda-connect" class="btn btn-primary">Read more</router-link>
            </div>
            </div>
        </div>
        </div>

        <div class="section">
        <img src="/projects/bg_project_enterprise-ui-375@2x.jpg" alt="Enterprise UI" width="750" height="496" class="img-fluid d-block d-md-none">
        <img src="/projects/bg_project_enterprise-ui-1920.jpg" alt="Enterprise UI" width="1010" height="600" class="d-none d-md-block section-img">
        <div class="container">
            <div class="row justify-content-end">
            <div class="col-md-6">
                <div class="section-subtitle">Design system</div>
                <h3>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="icon" width="1em" height="1em">
                    <use xlink:href="#icon_project_enterprise-ui"></use>
                </svg>
                <span>Enterprise UI</span>
                </h3>
                <p>A comprehensive design system designed and built from ground up. The Enterprise UI design system makes it faster for both designers and developers to build a better and more cohesive system. Designed for web and app.</p>
                <router-link to="/enterprise-ui" class="btn btn-primary">Read more</router-link>
            </div>
            </div>
        </div>
        </div>

        <div class="section section-blue">
        <img src="/projects/bg_project_dashboard-375@2x.jpg" alt="Dashboard" width="750" height="496" class="img-fluid d-block d-md-none">
        <img src="/projects/bg_project_dashboard-1920.jpg" alt="Dashboard" width="1010" height="600" class="d-none d-md-block section-img">
        <div class="container">
            <div class="row">
            <div class="col-md-6">
                <div class="section-subtitle section-subtitle-blue">Web</div>
                <h3>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="icon" width="1em" height="1em">
                    <use xlink:href="#icon_project_dashboard"></use>
                </svg>
                <span>Dashboard</span>
                </h3>
                <p>Hotel performance at a glance! With a action-based dashboard, hotels can see their preformance and take quick actions to get more bookings at agoda.com.</p>
                <router-link to="/dashboard" class="btn btn-primary">Read more</router-link>
            </div>
            </div>
        </div>
        </div>

        <div class="section section-narrow" id="about">
        <div class="container">
            <h2>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="icon" width="60" height="60">
                <use xlink:href="#icon_about"></use>
            </svg>
            <span>About</span>
            </h2>
            <p>I am a UI/UX designer from Sweden, based in Bangkok, Thailand. I design beautiful experiences for both mobile and web. Currently I’m designing the enterprise systems at Agoda - helping hotels all over the world to sell rooms easier and quicker than ever before.</p>
            <p>Before joining Agoda I designed and lead the development of market-leading web applications for the Real Estate market in Scandinavia, US and Australia.</p>
            <div class="row">
            <div class="col-md-6">
                <h4>Tools I like</h4>
                <ul>
                <li>Sketch</li>
                <li>Abstract</li>
                <li>Invision</li>
                <li>Zeplin</li>
                <li>Balsamiq Mockups</li>
                <li>Adobe Photoshop</li>
                <li>Slack</li>
                <li>Jira</li>
                <li>Github</li>
                </ul>
            </div>
            <div class="col-md-6">
                <h4>Things I like</h4>
                <h5>UX</h5>
                <ul>
                <li>Usability and Accessibility<br><span class="subtle-text">WCAG 2.0</span></li>
                <li>Concept development<br><span class="subtle-text">Ideation, Sketching, Wireframing</span></li>
                <li>Low and hi-fidelity prototyping</li>
                <li>User testing</li>
                <li>Design sprints</li>
                </ul>
                <h5>UI</h5>
                <ul>
                <li>Multi-device experience<br><span class="subtle-text">Desktop, Tablet, Mobile, VR</span></li>
                <li>Responsive Web</li>
                <li>Mobile first</li>
                <li>Touch friendly</li>
                <li>Icons</li>
                </ul>
            </div>
            </div>
        </div>
        </div>

        <div class="section section-narrow" id="contact">
        <div class="container">
            <h2>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="icon" width="60" height="60">
                <use xlink:href="#icon_contact"></use>
            </svg>
            <span>Get in touch</span>
            </h2>
        <p>Reach me on <a href="https://www.linkedin.com/in/alexfanden/">Linked<span id="linkedin">In</span></a>, email me at <a href="mailto:alexanderfanden@hotmail.com">alexanderfanden@hotmail.com</a> or drop a message in the form below: </p>
            <form action="https://formspree.io/alexanderfanden@hotmail.com" method="POST">
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
    </div>
</template>

<script>
export default {
  name: 'home',
}
</script>

