const roles = ["Data Scientist", "Data Engineer", "Data Analyst"];
let index = 0;

function changeText() {
    let textElement = document.getElementById("changing-text");
    
    // Fade out effect
    textElement.style.opacity = 0;
    
    setTimeout(() => {
        // Change text
        textElement.textContent = roles[index];
        index = (index + 1) % roles.length;
        
        // Fade in effect
        textElement.style.opacity = 1;
    }, 500); // Matches CSS transition time
}

// Change every 2 seconds
setInterval(changeText, 2000);
