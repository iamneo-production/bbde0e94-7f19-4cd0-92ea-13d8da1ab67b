import "./App.css"
function Home() {
  return (
    
    <>
    
    

  <div class="sidebar">
    <a href ="#Home">Home</a>
  <a href="#About us">About us</a>
  <a href="#Courses "> Courses</a>
  <a href="#Registration "> Survey</a>
  <a href="#Contact us "> Contact us</a>
  <a href="#Location">Location</a>
  
</div>


    <div class="content">
    <div className="letter">
    {/* <p><b>Gym</b></p> */}
    <h2 id="About us"><u>About us</u></h2>
    <p>At Gym and Fitness, we believe that fitness and wellbeing are the cornerstones of a full and vibrant life. Established in 2002, we began our journey as a family-owned business dedicated to providing exceptional gym equipment at affordable prices. But, we dreamed bigger than just being an ordinary fitness equipment supplier; we aspired to lead the industry.

Two decades later, we are proud to have transformed Gym and Fitness into one of Australia's premier online retailers of fitness equipment. We've moved beyond just supplying gear – we've become advocates for fitness, wellbeing and life enrichment. Our commitment to excellence is reflected not only in the quality equipment we provide but also in the lives we've improved.

Our real success lies in the thousands of customers we've empowered to live longer, more joyful, and healthier lives. We're more than just a fitness company – we're your partners in health, your cheerleaders on the sideline, motivating you to reach your personal fitness goals. Embrace the fitness journey with us and see how it transforms your world.

Join us in our mission to improve lives through fitness and wellness, because at Gym and Fitness, your health is our passion.</p>

<p>
  <h2 id="Courses"> <u>Courses</u></h2>
  <ul>
    <li>
      <h1>Muscle Building.</h1>
      <p> When it comes to physique improvements, muscle building is often a top priority.

Added muscle mass will increase the definition of your muscles, improve your lean body mass, and add bulk and size to your frame in all the right places.

Muscle growth takes time, persistence, and a long-term commitment to the process.

While gaining large amounts of muscle may seem daunting, with proper training programs and adequate consumption of certain foods, serious muscle building is possible for most people.

This article breaks down everything you need to know when it comes to building muscle, including how to work out, what to eat, and recovery protocols.</p>
    </li>
    <li>
      <h1>Weight loss</h1>
      <p> Healthy weight isn't about following a diet or program. Instead, it involves a lifestyle with healthy eating patterns, regular physical activity, and stress management.

People with gradual, steady weight loss (about 1 to 2 pounds per week) are more likely to keep the weight off than people who lose weight quickly.

Sleep, age, genetics, diseases, medications, and environments may also contribute to weight management. If you are concerned about your weight or have questions about your medications, talk with your health care provider.</p>
    </li>
    <li> 
      <h1>Body building</h1>

     <p> Bodybuilding is the use of progressive resistance exercise to build, control, and develop one's muscles via hypertrophy. An individual who engages in this activity is referred to as a bodybuilder. It is primarily undertaken for aesthetic purposes over functional ones, distinguishing it from similar activities such as powerlifting, which focuses solely on gaining physical strength.,/p</p>
</li>
  </ul>
</p>
<p>
    <h2 id="Registration"><u>Survey</u></h2>
    <form className="register">
    <label for="fname">age</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>

    <label for="lname">WHICH FITNESS COURSE ARE YOU INTRESTED</label>
    <input type="text" id="lname" name="lastname" placeholder="Your intrested  course.."></input>
    <label for="email"><b>FEEDBACK</b></label>
    <input type="text" placeholder="Enter your feedback" name="email" id="email" required></input>
    </form>
</p>

    <p>
    <h2 id="Contact us "><u>Contact us</u></h2>
      
      Mobile no:9568741235<br/>
      Telephone:0422-256413<br/>
      Email:fitness4life@gmail.com
    </p>
    <p>
    <h2 id="Location"><u> Location</u></h2>
      7/4 vadavalli,<br/>
      Coimbatore-641019.
    </p>
        </div>
        </div>


    </>
  );
}
    

export default Home;
