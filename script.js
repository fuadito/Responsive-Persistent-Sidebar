document.addEventListener("DOMContentLoaded", () => {
const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");
const toggleIcon = document.getElementById("toggleIcon");
const navLinks = document.querySelectorAll(".nav-links a");

// function to update icon based on sidebar state
const updateToggleIcon = () => {
    if (sidebar.classList.contains("collapsed")) {
        toggleIcon.classList.remove("fa-chevron-left");
        toggleIcon.classList.add("fa-chevron-right");
    } else {
        toggleIcon.classList.remove("fa-chevron-right");
        toggleIcon.classList.add("fa-chevron-left");
    }
};

// Load saved state when page loads

    const savedState = localStorage.getItem("sidebarState");
    if (savedState === "collapsed") {
        sidebar.classList.add("collapsed");
    } else if (savedState === "expanded") {
        sidebar.classList.remove("collapsed");
    }


    // Auto collapse on small screens
if (!savedState && window.innerWidth <= 768) {
    sidebar.classList.add("collapsed");
}
   
    //Make sure icon matches the current state
    updateToggleIcon();

    // Toggle sidebar on button click
    toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    updateToggleIcon();

    // Save current state
        if (sidebar.classList.contains("collapsed")) {
         localStorage.setItem("sidebarState", "collapsed");
    } else {
        localStorage.setItem("sidebarState", "expanded"); 
    }
    });
    // Nav links active state
    navLinks.forEach(link => {
    link.addEventListener("click", () => {

        //Remove active class from all links
        navLinks.forEach(link => link.classList.remove("active"));

        //Add active class to clicked link
        link.classList.add("active");
    });
});

});