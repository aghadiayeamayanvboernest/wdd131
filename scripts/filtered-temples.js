// This script toggles the visibility of the navigation menu and 
//temple content when the hamburger button is clicked, changing the 
//appearance of the menu and hiding the temple section when the menu is open.
const hambutton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const temple = document.querySelector('.temple');


hambutton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hambutton.classList.toggle('show');
    temple.classList.toggle('hide')
});



// Array of Temple object 
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },

    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },

    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },

    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },

    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },

    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },

    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
        templeName: "Johannesburg South Africa",
        location: "Johannesburg, South Africa",
        dedicated: "1985, August, 24", 
        area: 19184, 
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/400x250/johannesburg-south-africa-temple-1021295-wallpaper.jpg"
    },

    {
        templeName: "Durban South Africa",
        location: "Durban, South Africa",
        dedicated: "2018, November, 16",
        area: 19860, 
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/durban-south-africa/400x250/1-8b3f1b895a7c92ee66c2d0c7e78606f75f0d0cc8.jpg" 
    },

    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11", 
        area: 17500, 
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x250/accra-ghana-temple-detail-249022-2400x1200.jpg"
    },

    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, utah, USA",
        dedicated: "1893, April, 6", 
        area: 382207, 
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
    },

    {
        templeName: "Calgary Alberta Temple",
        location: "Calgary, Alberta Canada",
        dedicated: "2012, October, 28", 
        area: 33000, 
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/calgary-alberta/400x250/calgary-alberta-temple-lds-1025065-wallpaper.jpg"
    },

    {
        templeName: "Nauvoo Temple",
        location: "Nauvoo Illinois, United States",
        dedicated: "1846, may, 1-3", 
        area: 50000, 
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nauvoo-illinois/400x250/nauvoo-temple-756497-wallpaper.jpg"
    },

    {
        templeName: "Nuku'alofa Tonga Temple",
        location: "Halaloto Road - Liahona Tongatapu Tonga",
        dedicated: "1983, November, 9-11", 
        area: 21184, 
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nukualofa-tonga/400x250/nukualofa-tonga-temple-lds-435567-wallpaper.jpg"
    },

    {
        templeName: "Mexico City Mexico Temple",
        location: " Mexico City, CDMX, Mexico",
        dedicated: "1983, December, 2-4", 
        area: 116642,  
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
];


// This is a Function to display all temple cards
function displayTemples(temples) {
  const templeCardContainer = document.getElementById('temple-card');
  templeCardContainer.innerHTML = ''; // Clear existing content

  temples.forEach(temple => {
    // Create temple card elements
    const card = document.createElement('div');
    card.classList.add('temple-card');

        // Temple name
        const name = document.createElement('h3');
        name.textContent = temple.templeName;
        card.appendChild(name);
    
        // Temple location
        const location = document.createElement('p');
        location.textContent = `Location: ${temple.location}`;
        card.appendChild(location);
    
        // Temple dedication date
        const dedicated = document.createElement('p');
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;
        card.appendChild(dedicated);
    
        // Temple area
        const area = document.createElement('p');
        area.textContent = `Area: ${temple.area} sq ft`;
        card.appendChild(area);

    // Temple image
    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy"; // Lazy loading for better performance
    card.appendChild(img);



    // this Append card to container
    templeCardContainer.appendChild(card);
  });
}

// This Call this function to display all temples initially
displayTemples(temples);

// Function to filter temples by criteria
function filterTemples(criteria) {
  let filteredTemples;

  if (criteria === 'Old') {
    filteredTemples = temples.filter(temple => {
      const year = parseInt(temple.dedicated.split(",")[0]);
      return year <= 1900;
    });
  } else if (criteria === 'New') {
    filteredTemples = temples.filter(temple => {
      const year = parseInt(temple.dedicated.split(",")[0]);
      return year >= 2000;
    });
  } else if (criteria === 'Large') {
    filteredTemples = temples.filter(temple => temple.area > 90000);
  } else if (criteria === 'Small') {
    filteredTemples = temples.filter(temple => temple.area < 10000);
  } else {
    filteredTemples = temples; // Display all temples for 'Home'
  }

  // Update the display with filtered temples
  displayTemples(filteredTemples);
}

// Event listeners for navigation links
const navLinks = document.querySelectorAll('.navigation a');
navLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default anchor behavior

    const linkText = this.textContent;
    sectionTitle.textContent = linkText; // Update section title

    filterTemples(linkText); // Call the filter function based on link clicked
  });
});