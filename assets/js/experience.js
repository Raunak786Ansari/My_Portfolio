AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Future Ready Talent Internship(Ongoing...)",
    cardImage: "assets/images/experience-page/microsoft_logo.png",
    place: "@Microsoft & future skillPrime",
    time: "(1 April,022 - 15 June,022 )",
    desp: "<li>In which we are learning lost of Microsoft Azrue corses  and make lots of practices coures. </li> <li>This is 9 week Virtual internship programme where we have to perform self learning module,taking industry session,project snyopsis and then submit the project that is based on the azure technology.</li>",
  },
  {
    title: "Android Development Internship",
    cardImage: "assets/images/experience-page/Oasis_internship_certificate.png",
    place: "@Oasis InfoByte",
    time: "(1 May,022 - 31 May,022 )",
    desp: "<li>In which internship I have learned to make best UI </li> <li>To learned lots of bakend coding in java like authentication as well as firebase management and make three task -1)basic calculator app 2)Stop watch app 3)Unit convertor app.</li>",
  },
  {
    title: "NSS District Camp 2019-20",
    cardImage: "assets/images/experience-page/Nss.png",
    place: "@Dhablarai village Sehore madhya pradesh",
    time: "(janurary, 2020 -(7 days))",
    desp: "<li>This is non profit organisation,In which </li> <li>We are supporting rural families, creating awareness as well as social work.</li>",
  },
  {
    title: "Filo tutor",
    cardImage: "assets/images/experience-page/filo.png",
    place: "@Filo Edutech pvt Ltd.",
    time: "(March, 2022 - present)",
    desp: "<li>This application is great for teaching as well as learning</li> <li>Here I am teaching iit mains and class 12th subject in online mode.</li>",
  },
  {
    title: "Internshala Student Partner(ISP'22)",
    cardImage: "assets/images/experience-page/ISP_22_certificate.png",
    place: "@INTERNSHALA",
    time: "(July,021 - Aug,021)",
    desp: "<li>In which creating awareness of internship and job with internshala</li> <li>Making leadership skills by organising teams and promoting internshala.</li>",
  },
  {
    title: "Campus Ambassdor",
    cardImage: "assets/images/experience-page/acmegrade_campus_ambassdor.png",
    place: "@Acmegrade",
    time: "(May,022 - June,022)",
    desp: "<li>In which we are Promoting acmegrade pvt Ltd. in our university for internship and varoius job oppurtunities. </li> <li>This is the great experience during the 1 month journey.</li>",
  },
  
  /*{
    title: "Student Developer",
    cardImage: "assets/images/experience-page/gsoc.png",
    place: "Google Summer Of Code",
    time: "(Mar - Aug, 2019)",
    desp: "<li>Worked with MOZILLA as a part of Google Summer Of Code.</li><li>Worked on Extension Activity Monitor which is a privileged extension for Firefox that uses the activityLog API (privileged API) to monitor the activities of the other installed extensions.</li><li>The activityLog API listens for logs from other installed extensions.</li>",
  },
  {
    title: "Research Intern",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    place: "IIT, Bombay",
    time: "(Dec, 19 - Jan, 20)",
    desp:"<li>Worked on the project ???LTI (Learning Tools Interoperability) 2.0 standards Implementation for ekShiksha.</li><li>Designed a software that would help faculty to create a quiz using the questions from the database based on his/her choice of topics and he should be provided with various facilities and options to create a quiz of his choice.</li>",
  },*/
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

/*const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Nationl Service Scheme District Camp 2009-20",
    cardImage: "assets/images/experience-page/Nss.png",
    description:
      "This is not profit organisation to support rular background people and making awarness as well do social works",
  },
  {
    title: "Filo Tutor",
    cardImage: "assets/images/experience-page/filo.png",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },

 /* {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
];*/

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Hackathon Section


const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "PMI-GAMETHON-2021",
    subtitle: "Finalist",
    image: "assets/images/experience-page/PMI.jpg",
    desp: "In this Hackathon we had to submit the idea of professional or unique game degien in the first round.After clearing the First Round We had to give the Protptype submission means to make the basic Game after that PP presentation or Fianl Round.",
  }
 /* {
    title: "ULHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
  },
  {
    title: "WaffleHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/wafflehacks.png",
    desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
  },
  {
    title: "Elevate Tech",
    subtitle: "Judge",
    image: "assets/images/experience-page/elevate.png",
    desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
  },
  {
    title: "PitchTeen",
    subtitle: "Judge",
    image: "assets/images/experience-page/pitchteen.png",
    desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
  },
  {
    title: "Hack-A-Solution",
    subtitle: "Judge",
    image: "assets/images/experience-page/hackasolution.png",
    desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
  },
  {
    title: "UniGlobe Hacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/uniglobe.png",
    desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
  },
  {
    title: "AtlasHacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/atlas.png",
    desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
  },
  {
    title: "NeoHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/neo.png",
    desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
  },
  {
    title: "Mission Inspired",
    subtitle: "Judge",
    image: "assets/images/experience-page/mission.png",
    desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
  },
  {
    title: "Hack3",
    subtitle: "Judge",
    image: "assets/images/experience-page/hack3.png",
    desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
  },
  {
    title: "JITHack",
    subtitle: "Mentor",
    image: "assets/images/experience-page/jithack.png",
    desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
  },
  {
    title: "Recess Hacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/recess.png",
    desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
  },
  {
    title: "Citro Tech",
    subtitle: "Mentor",
    image: "assets/images/experience-page/citro.png",
    desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
  },
  {
    title: "NHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/nhacks.png",
    desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
  }*/
  

];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp}) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
