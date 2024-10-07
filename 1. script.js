console.log("Script running...")

// Initially hide the cross icon and toggle the sidebar when the hamburger is clicked
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if (document.querySelector('.sidebar').classList.contains('sidebarGo')) {
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'

    }
    else {
        document.querySelector('.ham').style.display = 'none'
        document.querySelector('.cross').style.display = 'inline'
    }
})


// Close sidebar when clicking any link
document.querySelectorAll('.sidebar nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.sidebar').classList.add('sidebarGo');
        document.querySelector('.ham').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';
    });
});

// Close sidebar on scroll
window.addEventListener('scroll', () => {
    if (!document.querySelector('.sidebar').classList.contains('sidebarGo')) {
        document.querySelector('.sidebar').classList.add('sidebarGo');
        document.querySelector('.ham').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';
    }
});



// Initialize the typing effect for the element with various developer roles
var typed = new Typed('#element', {
    strings: ['Front-End Developer', 'Web Designer', 'Python Developer', 'Java Developer', 'C Developer'],
    typeSpeed: 75,
    loop: true,
});



// Update the active navigation link based on the current scroll position
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const mainNavLinks = document.querySelectorAll('.mainbar nav ul li a');
    const sidebarNavLinks = document.querySelectorAll('#sidebar nav ul li a');

    function changeActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) { }

        mainNavLinks.forEach((link) => link.classList.remove('active'));
        sidebarNavLinks.forEach((link) => link.classList.remove('active'));

        mainNavLinks[index].classList.add('active');
        sidebarNavLinks[index].classList.add('active');
    }

    changeActiveLink();
    window.addEventListener('scroll', changeActiveLink);
}); 



// Show or hide the back-to-top button based on scroll position
document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.querySelector('.back-2-top');
    const homeSection = document.querySelector('.infoContainer'); // Adjust selector if needed

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        // Show the back-to-top button after scrolling past the first section
        if (scrollPosition > window.innerHeight) {  // Change to homeSection.offsetHeight if needed
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
});




// Configure ScrollReveal animation settings based on screen width
ScrollReveal({
    distance: window.innerWidth < 700 ? "25px" : "80px",
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal(".mydetails, heading", { origin: "top" });
ScrollReveal().reveal(
    ".devPic, .intro-img, .service, .project-card, .skills-container .skill-card, .certificates img",
    { origin: "bottom" }
);
ScrollReveal().reveal(".mydetails h4, .box, .contactform form", {
    origin: "left",
});
ScrollReveal().reveal(".moreabout p, .intro, .blog-card", {
    origin: "right",
});
