// ========== SKILLS TABS ==========
function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    
    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// ========== GOALS CARDS ==========
function toggleGoal(card) {
    const details = card.querySelector('.goal-details');
    details.classList.toggle('active');
}

// ========== LOGOUT FUNCTION ==========
function confirmLogout() {
    if (confirm("Are you sure you want to logout?")) {
        window.location.href = "index.html";
    }
}

// ========== GALLERY LIGHTBOX ==========
const images = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg",
    "images/photo5.jpg",
    "images/photo6.jpg"
];
let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("lightboxImage").src = images[index];
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
    document.body.style.overflow = "auto";
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;
    document.getElementById("lightboxImage").src = images[currentIndex];
}

// ========== CONTACT FORM VALIDATION ==========
function validateForm() {
    let isValid = true;
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("subjectError").textContent = "";
    document.getElementById("messageError").textContent = "";
    
    if (name.trim() === "") {
        document.getElementById("nameError").textContent = "⚠️ Please enter your name";
        isValid = false;
    }
    
    if (email.trim() === "") {
        document.getElementById("emailError").textContent = "⚠️ Please enter your email";
        isValid = false;
    } else if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").textContent = "⚠️ Please enter a valid email";
        isValid = false;
    }
    
    if (subject.trim() === "") {
        document.getElementById("subjectError").textContent = "⚠️ Please enter a subject";
        isValid = false;
    }
    
    if (message.trim() === "") {
        document.getElementById("messageError").textContent = "⚠️ Please enter your message";
        isValid = false;
    }
    
    if (isValid) {
        alert("✅ Message sent successfully! Thank you! ✨");
        document.getElementById("contactForm").reset();
    }
}

// ========== IMAGE SLIDER ==========
let slideIndex = 0;
function showSlides() {
    const slides = document.querySelector('.slides');
    if (slides) {
        slideIndex++;
        if (slideIndex >= 3) slideIndex = 0;
        slides.style.transform = `translateX(-${slideIndex * 33.333}%)`;
    }
}
setInterval(showSlides, 5000);


