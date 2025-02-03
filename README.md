<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CratosBuilding Construction solutions</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
    <style>
           *{
    box-sizing:border-box;
     }
   nav{
    display:flex;
    align-items:center;
    justify-content:space-between;
    position:sticky;
    top:0;
    background: white;
    color:#1f267d;
     }
   #img1{
    width:80px;
    height:70px;
    }
    #img2{
        width:240px;
        height:270px;
    }
    #home{
    background:url(Bd6.jpg)no-repeat center fixed;
    background-size:100% 100%;
    }
     #gal{
     width:100%;
    }
     body {
      margin: 0;
      font-family: Arial, sans-serif, Helvetica;
    }

    .gallery-container {
      display: flex;
      overflow-x: auto;
      scroll-behavior: smooth;
      gap: 10px;
      padding: 10px;
    }

    .gallery-container::-webkit-scrollbar {
      height: 8px;
    }

    .gallery-container::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 4px;
    }

    .gallery-container::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    .gallery-item {
      flex: 0 0 auto; /* Prevent images from shrinking */
      width: 300px;
      height: 250px;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .gallery-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }


    /* General Form Styling */
form {
  max-width: 600px;
  margin: 50px 30px;
  padding: 20px;
  background:#1f267d;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

form h4 {
  margin-top: 20px;
  font-size: 1.5rem;
  color:white;
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.label {
  display: block;
  font-size: 1rem;
  color: white;
  margin-bottom: 8px;
  font-weight: bold;
}

#inpt, 
textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  font-family: Arial, sans-serif;
  transition: border-color 0.3s ease-in-out;
}

#inpt:focus, 
textarea:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
}

textarea {
  resize: none;
  height: 100px;
}

/* Partnerships Section */
.partnerships {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.partnerships img {
  width: 150px;
  height: auto;
  border-radius: 10px;
  border: 2px solid #ddd;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
#imG {
  width: 150px;
  height: 200px;
  border-radius: 10px;
  border: 2px solid #ddd;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
.partnerships img:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

/* Button Styling */
form button {
  display: block;
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  transition: background 0.3s ease-in-out, transform 0.2s ease;
}

form button:hover {
  background: #0056b3;
  transform: translateY(-2px);
}

form button:active {
  transform: translateY(1px);
}

.accordn {
  margin:20px 20px;
  max-width: 600px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.8);
}

.accordn-item {
  border-bottom: 1px solid #ddd;
}

.accordn-item:last-child {
  border-bottom: none;
}

.accordn-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background:#1f267d;
  color:white;
  font-size: 1.2em;
  font-weight: bold;
  transition: background 0.3s ease;
}

.accordn-header:hover {
  background: #e0e0e0;
}

.icon {
  font-size: 1.5em;
  transition: transform 0.3s;
}

.accordn-content {
  display: none; /* Initially hidden */
  padding: 0 20px;
}

.accordn-content.open {
  display: block; /* Shown when active */
}

/* Full-Viewport Modal for Content */
.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: gray;
  z-index: 1000;
  overflow-y: auto;
  display: none;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.5s ease;
}

.fullscreen.active {
  display: block;
}

.fullscreen h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.fullscreen-content {
  font-size: 1.2rem;
  line-height: 1.6;
  transition: transform 0.5s ease;
}

/* Cancel Icon */
.cancel {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 1.5rem;
  background: none;
  border: none;
  color: #333;
  transition: transform 0.3s ease;
}

.cancel:hover {
  transform: scale(1.1);
  color: #007bff;
}

.panel {
  padding: 0 18px;
  display: none;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}

.panel.show {
  display: block;
}

h1,h2,h3{
    text-align:center;
}
.btn1{
    padding:10px 10px;
    width:200px;
    height:130px;
    margin:10px 20px;
    color:#1f267d;
    background-color:white;
    border:none;
    border-radius:10px;
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.8);
}
#h1{
    color: white;
    background-color:#111b68c6 ;
    margin-bottom:0px;
}
ul{
    list-style-type:none;
    text-align:center;
}
ul li{
    text-aline:center;
}
.box{
    display:inline;
}
.btn0{
  margin:auto;
  width:40%;
  border-radius:5px;
  border:none;
  background-color:#ff7e15;
  color:white;
 }
section {
     box-shadow: 0 5px 8px rgba(0, 0, 0, 0.8);
 }

.counter{
    font-weight:bold;
    font-size:27px;
}

        footer {
            background:#111b68c6;
            color: white;
            padding: 20px;
            font-family: Arial, sans-serif;
            overflow: hidden;
        }

        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        .footer-logo {
            width: 150px;
            height: auto;
            display: block;
            margin: 0 auto 20px;
            border-radius: 10px;
        }

        .contact-rows {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .contact-group {
            background:#778eee;
            padding: 15px;
            border-radius: 10px;
            text-align: center;
            animation: slideIn 1s ease-out;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .contact-group:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .footer-heading {
            color: #fff;
            font-size: 1.5rem;
            margin-bottom: 10px;
            border-bottom: 2px solid #4a90e2;
            padding-bottom: 5px;
            text-align: center;
            animation: fadeIn 2s ease-in;
        }

        .footer-list {
            list-style: none;
            padding: 0;
            margin: 0;
            text-align: center;
        }

        .footer-list li {
            margin-bottom: 10px;
            line-height: 1.6;
        }

        .list-heading {
            font-weight: bold;
            color: #4a90e2;
            margin-bottom: 10px;
        }

        .footer-list a {
            color: #fff;
            text-decoration: none;
            transition: color 0.3s ease;
        }

        .footer-list a:hover {
            color: #4a90e2;
        }

        /* Animations */
        @keyframes float {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-10px);
            }
        }

        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateX(-100%);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        /* Mobile Responsiveness */
        @media (max-width: 600px) {
            .footer-logo {
                width: 120px;
                border-radius: 10px;
            }

            .footer-heading {
                font-size: 1.2rem;
            }
        }

/* General Section Styling */
.services-parallax-section {
    position: relative;
    overflow: hidden;
    color: white;
    text-align: center;
    padding: 60px 20px;
    background-color: #1f267d; /* Added a fallback solid color */
}

/* Parallax Background */
.parallax-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('https://source.unsplash.com/1600x900/?construction') no-repeat center center/cover;
    z-index: -1;
    transform: translateY(0);
    transition: transform 0.1s ease-in-out;
    opacity: 0.6; /* Slight opacity to blend with the theme */
}

/* Foreground Content */
.services-parallax-section .container {
    position: relative;
    z-index: 1;
}

/* Heading Styling */
.services-parallax-section h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #ffffff; /* Main heading in white */
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.services-parallax-section p {
    font-size: 1.1rem;
    margin-bottom: 40px;
    color: #ffffff; /* Paragraph text in white */
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* Cards Layout */
.services-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.card {
    background: #ffffff; /* Solid white for better contrast */
    color: #1f267d; /* Theme color for text */
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    padding: 20px;
    width: 250px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

/* Icons Styling */
.card .icon {
    font-size: 2rem;
    margin-bottom: 15px;
    color: #1f267d; /* Theme color for icons */
    transition: color 0.3s ease;
}

.card:hover .icon {
    color: #f39c12; /* Accent color for hover effect */
}

/* Card Text */
.card h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    font-family: 'Poppins', sans-serif;
    color: #1f267d; /* Theme color for headings */
}

.card p {
    font-size: 0.9rem;
    color: #555; /* Slightly subdued text for readability */
}

/* Parallax Animation */
.services-parallax-section:hover .parallax-bg {
    transform: translateY(-20px); /* Moves background slightly upward */
}

/* Responsive Adjustments */
@media (max-width: 720px) {
    .services-parallax-section h2 {
        font-size: 2rem;
    }

    .services-parallax-section p {
        font-size: 1rem;
    }

    .card {
        width: 100%;
    }
}

    </style>
</head>
<body>
    <nav>
        <img src="Logo2.jpg" alt="CratosLogo" id="img1">
        <h2>CRATOS BUILDING SOLUTIONS</h2>
        <i class="bi bi-list"></i>
    </nav>
    <div id="home">
        <h1 style="margin-top:0px;padding:100px 50px;" id="h1">"Quality In Every Foundation"
        <button class="btn0">Learn More 》</button></h1>
        <button class="btn1">
            <h1>PROJECTS</h1>
            <p class="counter" data-target="200">0</p>
        </button>
        <button class="btn1">
            <h1>CLIENTS</h1>
            <p class="counter" data-target="99">0</p>
        </button>
   
    </div>
    <div id="about">
        <h1>About us</h1>
 <div class="accordn">
  <!-- Accordion Items -->
  <div class="accordn-item">
    <div class="accordn-header">
      <span>MISSION</span>
      <span class="icon">+</span>
    </div>
    <div class="accordn-content">
        <h2>OUR MISSION</h2>
       <p>"To provide innovative, sustainable, and high-quality construction and design services, including building constructions, architectural design, structure drawings, M&E drawings, and valuation and cost estimates. We aim to exceed client expectations through our dedication to excellence, integrity, and collaborative teamwork."
</p>
    </div>
  </div>

  <div class="accordn-item">
    <div class="accordn-header">
      <span>VISION</span>
      <span class="icon">+</span>
    </div>
    <div class="accordn-content">
        <h2>OUR VISION</h2>
      <p>"To be the leading construction and design firm renowned for transforming client dreams into reality, fostering sustainable development, and contributing to the growth and enhancement of our communities."
</p>
    </div>
  </div>


  <div class="accordn-item">
    <div class="accordn-header">
      <span>GOALS</span>
      <span class="icon">+</span>
    </div>
    <div class="accordn-content">
        <h2>OUR GOALS</h2>
         <ol>
            <li><b>Client Satisfaction.</b> Ensure every project meets or exceeds client expectations in quality, timelines and budget.</li>
            <li><b>Innovation and Excellence.</b> Continuously integrate modern technologies and creative solutions to deliver superior architectural designs and construction services.</li>
            <li><b>Sustainability. </b>Promote environmentally friendly practices and materials in all phases of construction and design.</li>
            <li><b>Professional Development.</b> Invest in the growth and development of our team to stay at the fore-front of industry standards and best practices. </li>
            <li><b>Operational Efficiency.</b> Streamline project management processes to optimize resources and deliver value-driven outcomes.</li>
            <li><b>Community Impact.</b> Contribute positively to local communities by creating durable, functional and aesthetically pleasing structures that enrich lives.</li>
            <li><b>Ethical Practices.</b> Uphold transparency, integrity and accountability in every aspect of business operations.</li>
        </ol>
    </div>
  </div>


  <div class="accordn-item">
    <div class="accordn-header">
      <span>TEAM</span>
      <span class="icon">+</span>
    </div>
    <div class="accordn-content">
      <h2>OUR TEAM</h2>
        <img src="Chimp.jpg" alt="" id="imG">
        <ul>
            <h5>MANAGING DIRECTOR</h5>
            <li>MR. Gerald Kabali</li>
            <li>masembeg4@gmail.com</li>
        </ul>
        <hr/>
        <img src="Gorilla.jpg" alt="" id="imG">
        <ul>
            <h5>GENERAL OPERATIONAL MANAGER</h5>
            <li>MR. Tomusangye Moses</li>
            <li>tomusangemze45@gmail.com</li>
        </ul>
        <hr/>
        <img src="FunnyGuy.jpg" alt="" id="imG">
        <ul>
            <h5>CHIEF FINANCIAL OFFICER</h5>
            <li>MR. Joel Nkwanga</li>
            <li>joelnkwanga@gmail.com</li>
        </ul>
    </div>
  </div>
</div>
<!-- Fullscreen Modal -->
<div class="fullscreen">
  <button class="cancel">&times;</button>
  <div class="fullscreen-content">
    <!-- Dynamic content will be inserted here -->
  </div>
</div>
 
     <section id="services" class="services-parallax-section">
    <div class="parallax-bg"></div>
    <div class="container">
        <h2>Our Services</h2>
        <p>Explore our specialized services designed to exceed your expectations.</p>
        <div class="services-cards">
            <div class="card">
                <i class="icon fa fa-building"></i>
                <h3>Building Constructions</h3>
                <p>Professional construction solutions for your projects.</p>
            </div>
            <div class="card">
                <i class="icon fa fa-drafting-compass"></i>
                <h3>Architectural Designs</h3>
                <p>Creative designs that bring your vision to life.</p>
            </div>
            <div class="card">
                <i class="icon fa fa-ruler-combined"></i>
                <h3>Structure Drawings</h3>
                <p>Accurate and precise structural plans.</p>
            </div>
            <div class="card">
                <i class="icon fa fa-cogs"></i>
                <h3>M&E Drawings</h3>
                <p>Mechanical and electrical engineering blueprints.</p>
            </div>
            <div class="card">
                <i class="icon fa fa-calculator"></i>
                <h3>Valuation & Cost Estimates</h3>
                <p>Detailed cost assessments for informed decisions.</p>
            </div>
        </div>
    </div>
</section>

    <div id="projects">
        <h1>Project FortPolio</h1>
          <div class="gallery-container">
                 <div class="gallery-item">
      <img src="Bd14.jpg" alt="Photo 1">
    </div>
    <div class="gallery-item">
      <img src="Bd17.jpg" alt="Photo 2">
    </div>
    <div class="gallery-item">
      <img src="Bd11.jpg" alt="Photo 3">
    </div>
    <div class="gallery-item">
      <img src="Bd6.jpg" alt="Photo 4">
    </div>
    <div class="gallery-item">
      <img src="Bd3.jpg" alt="Photo 5">
    </div>
          </div>
    </div>
    <h2>Quote request</h2>
    <form>
  <label class="label">Name:</label>
  <input type="text" id="inpt" placeholder="Your name...">
  <label class="label">Email:</label>
  <input type="email" id="inpt" placeholder="Your e-mail...">
  <label class="label">Tel.</label>
  <input type="number" id="inpt" placeholder="123-4567-890...">
  <label class="label">Comment:</label>
  <textarea placeholder="Your comment..."></textarea>
  <button type="submit">Submit</button>
</form>
  <h4>Partnerships</h4>
  <div class="partnerships">
    <img src="TazaFassi.jpg" alt="" id="img1">
  </div>
    <footer>
        <div class="footer-content">
            <img src="LogoNew.jpg" alt="Company Logo" class="footer-logo">
            <h3 class="footer-heading">Contact Us</h3>
            <div class="contact-rows">
                <div class="contact-group">
                    <ul class="footer-list">
                        <li class="list-heading">Managing Director</li>
                        <li>0789512738</li>
                        <li>0703346694</li>
                        <li><a href="mailto:masembeg4@gmail.com">masembeg4@gmail.com</a></li>
                    </ul>
                </div>
                <div class="contact-group">
                    <ul class="footer-list">
                        <li class="list-heading">General Operations Manager</li>
                        <li>0774367213</li>
                        <li><a href="mailto:tomusangemze45@gmail.com">tomusangemze45@gmail.com</a></li>
                    </ul>
                </div>
                <div class="contact-group">
                    <ul class="footer-list">
                        <li class="list-heading">Chief Financial Officer</li>
                        <li>0706143116</li>
                        <li>0783317981</li>
                        <li><a href="mailto:joelnkwanga@gmail.com">joelnkwanga@gmail.com</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
<script>
        // JavaScript for handling accordion and fullscreen display
document.querySelectorAll('.accordn-header').forEach((header, index) => {
  header.addEventListener('click', () => {
    const fullscreen = document.querySelector('.fullscreen');
    const fullscreenContent = document.querySelector('.fullscreen-content');

    // Get the content of the clicked accordion item
    const content = header.nextElementSibling.innerHTML;

    // Update the fullscreen content
    fullscreenContent.innerHTML = content;

    // Show the fullscreen container
    fullscreen.classList.add('active');
  });
});

// Close fullscreen content
document.querySelector('.cancel').addEventListener('click', () => {
  document.querySelector('.fullscreen').classList.remove('active');
});


//annonymous
document.querySelectorAll('.counter').forEach(counter => {
  const updateCounter = () => {
    const target = +counter.dataset.target;
    const current = +counter.innerText;
    const increment = target / 200;
    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCounter, 10);
    }
  };
  updateCounter();
});


document.querySelectorAll('.accordion-header').forEach(header => {
      header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const icon = header.querySelector('.icon');

        // Toggle open/close
        content.classList.toggle('open');
        icon.textContent = content.classList.contains('open') ? '-' : '+';
      });
    });
    
// JavaScript for handling accordion and fullscreen display
document.querySelectorAll('.accordn-header').forEach((header, index) => {
  header.addEventListener('click', () => {
    const fullscreen = document.querySelector('.fullscreen');
    const fullscreenContent = document.querySelector('.fullscreen-content');

    // Get the content of the clicked accordion item
    const content = header.nextElementSibling.innerHTML;

    // Update the fullscreen content
    fullscreenContent.innerHTML = content;

    // Show the fullscreen container
    fullscreen.classList.add('active');
  });
});

// Close fullscreen content
document.querySelector('.cancel').addEventListener('click', () => {
  document.querySelector('.fullscreen').classList.remove('active');
});


//annonymous
document.querySelectorAll('.counter').forEach(counter => {
  const updateCounter = () => {
    const target = +counter.dataset.target;
    const current = +counter.innerText;
    const increment = target / 200;
    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCounter, 10);
    }
  };
  updateCounter();
});


</script>
</body>
</html>
