document.addEventListener("DOMContentLoaded", function () {
    const designations = ["Data Scientist", "Machine Learning Engineer", "Big Data Engineer"];
    let index = 0;
    const designationElement = document.querySelector(".designation");

    function changeDesignation() {
        designationElement.textContent = designations[index];
        index = (index + 1) % designations.length;
    }
    setInterval(changeDesignation, 3000);

    // Smooth scrolling to sections
    document.getElementById("about").addEventListener("click", function () {
        document.getElementById("about-section").scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("skills").addEventListener("click", function () {
        document.getElementById("skills-section").scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("experience").addEventListener("click", function () {
        document.getElementById("experience-section").scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("contact").addEventListener("click", function () {
        document.getElementById("contact-section").scrollIntoView({ behavior: "smooth" });
    });
});
