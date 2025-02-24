document.addEventListener("DOMContentLoaded", function () {
    const designations = ["Data Scientist", "Machine Learning Engineer", "Big Data Engineer"];
    let index = 0;
    const designationElement = document.querySelector(".designation");

    function changeDesignation() {
        designationElement.textContent = designations[index];
        index = (index + 1) % designations.length;
    }
    setInterval(changeDesignation, 3000);

    document.getElementById("about").addEventListener("click", function () {
        alert("About section coming soon!");
    });

    document.getElementById("skills").addEventListener("click", function () {
        alert("Skills section coming soon!");
    });

    document.getElementById("experience").addEventListener("click", function () {
        alert("Experience section coming soon!");
    });

    document.getElementById("contact").addEventListener("click", function () {
        alert("Contact section coming soon!");
    });
});
