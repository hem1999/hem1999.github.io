document.addEventListener('DOMContentLoaded', function() {
    const roles = ["Venkata Sai Ayyappa Hemanth", "a Machine Learning Engineer","a Cloud Engineer","a Full Stack Developer", "a Data Scientist", "a GenAI Developer"];
    let currentRoleIndex = 0;
    let charIndex = 0;
    const typingDelay = 150; // Time between each letter appearing, in milliseconds
    const roleChangeDelay = 2000; // Time before changing to the next role
    const roleElement = document.getElementById('role');
    let typingTimeout;

    function typeRole() {
        if (charIndex < roles[currentRoleIndex].length) {
            // Add next character
            roleElement.textContent += roles[currentRoleIndex].charAt(charIndex);
            charIndex++;
            typingTimeout = setTimeout(typeRole, typingDelay);
        } else {
            // Wait a bit before starting to type the next role
            setTimeout(() => {
                eraseRole();
            }, roleChangeDelay);
        }
    }

    function eraseRole() {
        if (charIndex > 0) {
            // Remove last character
            roleElement.textContent = roles[currentRoleIndex].substring(0, charIndex - 1);
            charIndex--;
            typingTimeout = setTimeout(eraseRole, typingDelay / 2); // Erase faster than typing
        } else {
            // Move to next role and start typing it
            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
            setTimeout(() => {
                typeRole();
            }, typingDelay);
        }
    }

    // Initially start the typing effect
    typeRole();
});

document.addEventListener("DOMContentLoaded", function() {
    const words = document.querySelectorAll('.word');

    words.forEach((word, index) => {
        setTimeout(() => {
            word.classList.remove('animate-popOut');
            void word.offsetWidth; // Trigger reflow to restart animation
            word.classList.add('animate-popOut');
        }, index * 500); // Adjust the delay time as needed
    });
});