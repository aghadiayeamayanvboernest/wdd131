const hambutton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const heading = document.querySelector('.heading');
hambutton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hambutton.classList.toggle('show');
    heading.classList.toggle('hide')
});
// java script for control over the hero image slide 
const slides = document.querySelectorAll('.slide');
let index = 0;

function fadeImages() {
    slides.forEach((slide, i) => {
        slide.classList.remove('active'); // Hide all slides
    });
    slides[index].classList.add('active'); // Show the current slide
    
    index = (index + 1) % slides.length; 
}
setInterval(fadeImages, 5000); // Change image every 5 seconds
 
// JavaScript for extra control over hover effects for service section
document.addEventListener("DOMContentLoaded", () => {
    const services = document.querySelectorAll(".service");

    services.forEach(service => {
        service.addEventListener("mouseenter", () => {
            service.classList.add("hovered");
        });

        service.addEventListener("mouseleave", () => {
            service.classList.remove("hovered");
        });
    });
});
// the newsletter section in the footer
document.addEventListener("DOMContentLoaded", function() {
    const newsletterForm = document.getElementById("newsletterForm");  // Target specific form by ID
    const emailInput = document.getElementById("newsletter-email");    // Target specific email input
    const subscribedEmails = JSON.parse(localStorage.getItem("subscribedEmails")) || [];

    // Check if the entered email is already subscribed
    newsletterForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const email = emailInput.value.trim();

        if (subscribedEmails.includes(email)) {
            alert("This email is already subscribed: " + email);
        } else {
            subscribedEmails.push(email);  // Add the email to the list
            localStorage.setItem("subscribedEmails", JSON.stringify(subscribedEmails));
            alert("Thank you for subscribing!");
            emailInput.value = "";  // Clear the input field
        }
    });
});

//about us page works for the team section
document.addEventListener("DOMContentLoaded", () => {
    // Toggle bio in the Team Section
    const teamMembers = document.querySelectorAll(".team-member");
    teamMembers.forEach(member => {
        member.addEventListener("click", () => {
            const bio = member.querySelector(".bio");
            bio.style.display = bio.style.display === "block" ? "none" : "block";
        });
    });
});
document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
        // Toggle the visibility of the answer
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';

        // Change the icon based on the answer visibility
        const toggleIcon = question.querySelector('.toggle-icon');
        toggleIcon.textContent = answer.style.display === 'block' ? '▲' : '▼';
    });
});

//project page
const projects = [
    {
        name: "Solar Installation - Green Valley",
        description: "Residential solar panel installation with energy optimization.",
        category: "recent",
        type: "residential",
        completionDate: "2024-10-15",
        image: "images/solar1.webp"
    },
    {
        name: "Corporate Office Solar Installation",
        description: "Large-scale solar installation for commercial use.",
        category: "commercial",
        type: "commercial",
        completionDate: "2023-06-20",
        image: "images/solar2.webp"
    },
    {
        name: "Small Office Solar Upgrade",
        description: "Energy-efficient solar upgrade for a small business.",
        category: "small",
        type: "commercial",
        completionDate: "2024-08-10",
        image: "images/solar3.webp"
    },
    {
        name: "Rooftop Solar Installation",
        description: "Solar panels installed on a residential rooftop.",
        category: "old",
        type: "residential",
        completionDate: "2022-04-18",
        image: "images/solar4.webp"
    },
    {
        name: "Community Center Solar Project",
        description: "Solar energy for a community recreational center.",
        category: "recent",
        type: "commercial",
        completionDate: "2024-09-01",
        image: "images/solar5.webp"
    },
    {
        name: "Factory Solar Power Project",
        description: "Industrial-grade solar installation for sustainable manufacturing.",
        category: "commercial",
        type: "industrial",
        completionDate: "2023-11-12",
        image: "images/solar6.webp"
    },
    {
        name: "Solar Farm Setup",
        description: "Large-scale solar farm for energy distribution.",
        category: "old",
        type: "industrial",
        completionDate: "2021-05-20",
        image: "images/solar7.webp"
    },
    {
        name: "School Solar Power Project",
        description: "Sustainable energy solutions for educational facilities.",
        category: "small",
        type: "commercial",
        completionDate: "2023-01-27",
        image: "images/solar8.webp"
    },
    {
        name: "Solar Water Heater Installation",
        description: "Solar-powered water heating system for residential use.",
        category: "recent",
        type: "residential",
        completionDate: "2024-10-02",
        image: "images/solar9.webp"
    },
    {
        name: "Energy Storage Facility",
        description: "Battery storage for renewable energy backup.",
        category: "commercial",
        type: "industrial",
        completionDate: "2023-03-15",
        image: "images/solar10.webp"
    },
    {
        name: "Solar Carport Installation",
        description: "Solar panels installed on a carport structure.",
        category: "old",
        type: "residential",
        completionDate: "2022-08-30",
        image: "images/solar11.webp"
    },
    {
        name: "Residential Backup System",
        description: "Backup solar power solution for residential homes.",
        category: "small",
        type: "residential",
        completionDate: "2024-06-12",
        image: "images/solar12.webp"
    },
    {
        name: "Community Solar Program",
        description: "Shared solar power for community housing.",
        category: "recent",
        type: "commercial",
        completionDate: "2024-09-21",
        image: "images/solar13.webp"
    },
    {
        name: "Warehouse Solar Installation",
        description: "Commercial-grade solar installation for warehousing.",
        category: "commercial",
        type: "industrial",
        completionDate: "2023-05-08",
        image: "images/solar14.webp"
    },
    {
        name: "Solar Roof Shingles",
        description: "Innovative solar roofing solution for modern homes.",
        category: "small",
        type: "residential",
        completionDate: "2024-07-15",
        image: "images/solar15.webp"
    }
];

// Function to display projects based on selected category
function displayProjects(filter) {
    const projectDisplay = document.getElementById("project-display");
    projectDisplay.innerHTML = ""; // Clear existing projects
    
    // Filter projects based on the selected category
    const filteredProjects = filter === "all" ? projects : projects.filter(project => project.category === filter);
    
    // Loop through filtered projects and create a card for each
    filteredProjects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.name}" class="project-image" loading="lazy">
            <h4>${project.name}</h4>
            <p>${project.description}</p>
            <small>Completion Date: ${project.completionDate}</small>
        `;
        projectDisplay.appendChild(projectCard);
    });
}

// Event listeners for navigation buttons
document.querySelectorAll(".project-nav button").forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");
        displayProjects(filter);
    });
});

// Initial display of all projects
displayProjects("all");



/* contact form */
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents page refresh on form submission

        // Get form input values
        const firstName = document.getElementById("first-name").value.trim();
        const lastName = document.getElementById("last-name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validation check
        if (!firstName || !lastName || !email || !message) {
            alert("Please fill in all required fields.");
            return;
        }

        // Create an object to store the data
        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            message: message
        };

        // Store form data in localStorage
        localStorage.setItem("contactFormData", JSON.stringify(formData));

        // Confirmation message
        alert("Your message has been saved!");
        form.reset(); // Clears the form after submission
    });
});

