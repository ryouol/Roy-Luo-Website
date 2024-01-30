document.getElementsByTagName("h1")[0].style.fontSize = "6vw";
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
        // Display the main content and all sections after the loader is hidden
        document.getElementById('mainContent').style.display = 'block';
        document.getElementById('experienceSkills').style.display = 'block';
        document.getElementById('experienceContent').style.display = 'block';
        document.getElementById('projectsContent').style.display = 'block';
        document.getElementById('contactContent').style.display = 'block'; // If you want the contact section also to appear
        document.getElementById('educationContent').style.display = 'block'; // If you want the education section also to appear
        document.getElementById('intrestsContent').style.display = 'block'; // If you want the interests section also to appear
    }, 10500); // This time should be adjusted to match the end of your loading animation
});







function toggleSkills() {1
    var content = document.getElementById("experienceSkills");
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function toggleExperience() {
    var content = document.getElementById("experienceContent");
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function toggleProjects() {
    var content = document.getElementById("projectsContent");
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}


function toggleContact() {
    var content = document.getElementById("contactContent");
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}


function toggleIntrests() {
    var content = document.getElementById("intrestsContent");
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}


function toggleEducation() {
    var content = document.getElementById("educationContent");
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}



// Get the elements
var elements = document.querySelectorAll('.content');
console.log("elements --- ", elements);
// Function to check for fade effect on scroll and resize
function checkForFade() {
var windowHeight = window.innerHeight;
elements.forEach(function (element) {
    var elementHeight = element.offsetHeight;
    var elementOffset = element.getBoundingClientRect().top;
    var space = windowHeight - (elementHeight + elementOffset - window.pageYOffset);

    if (space < 150) {
    element.classList.add('non-focus');
    } else {
    element.classList.remove('non-focus');
    }
});
}

// Add event listeners for scroll and resize and call the checkForFade function
window.addEventListener('scroll', checkForFade);
window.addEventListener('resize', checkForFade);

// Trigger the scroll event on initial load
window.dispatchEvent(new Event('scroll'));

