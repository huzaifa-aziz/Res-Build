// script.js 

// Taking elements from HTML
const inputField = document.querySelector(".inputField");
const main = document.querySelector(".resume-builder");
const outputContainer = document.querySelector(".output_container");

let isHidden = true;

// Function to toggle between input form and resume preview
function hide() {
    if (isHidden) {
    
        // Hide the input form and show the resume preview
        main.style.display = "none";
        isHidden = false;

        outputContainer.style.display = "block";
        outputContainer.innerHTML =outputContainer.innerHTML = `
        <div class="output">
            <div class="header">
                <h1>${inputField["name"].value}</h1>
                <h4>${inputField["title"].value}</h4>
            </div>
            <div class="content">
                <div class="column left">
                    <div class="section">
                        <h2>Skills</h2>
                        <ul>
                            ${inputField["skills"].value
                              .split(',')
                              .map(skill => `<li>${skill.trim()}</li>`)
                              .join('')}
                        </ul>
                    </div>
                    <div class="section">
                        <h2>Education</h2>
                        <p>${inputField["academic_details"].value}</p>
                    </div>
                    <div class="section">
                        <h2>Contact</h2>
                        <p>${inputField["contact"].value}</p>
                    </div>
                </div>
                <div class="column right">
                    <div class="section">
                        <h2>Work Experience</h2>
                        <p>${inputField["work_experience"].value}</p>
                    </div>
                    <div class="section">
                        <h2>Projects</h2>
                        <p>${inputField["projects"].value}</p>
                    </div>
                </div>
            </div>
        </div>
        <button class="print-btn" onclick="print()">Print Resume</button>
    `;
    ;
    } else {
        // Show the input form and hide the resume preview
        main.style.display = "block";
        isHidden = true;

        outputContainer.style.display = "none";
        outputContainer.innerHTML = "";
    }
}
