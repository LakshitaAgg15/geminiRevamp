const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const btn = item.querySelector(".faq-question");
  const icon = item.querySelector(".faq-icon");

  btn.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    // Close all open items
    faqItems.forEach(i => {
      i.classList.remove("active");
      i.querySelector(".faq-icon").textContent = "+";
    });

    // Toggle current item
    if (!isActive) {
      item.classList.add("active");
      icon.textContent = "–";
    }
  });
});


function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}
function toggleFAQ(element) {
const answer = element.querySelector(".faq-answer");
const toggle = element.querySelector(".faq-toggle");

if (element.classList.contains("active")) {
element.classList.remove("active");
toggle.textContent = "+";
answer.style.maxHeight = "0";
answer.style.padding = "0 15px";
} else {
element.classList.add("active");
toggle.textContent = "-";
answer.style.maxHeight = answer.scrollHeight + "px";
answer.style.padding = "15px";
}
}
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        // Hide all sections
        document.querySelectorAll('section').forEach(sec => {
            sec.classList.remove('visible');
            sec.classList.add('hidden-section');
        });

        // Show the selected section
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.classList.remove('hidden-section');
        targetSection.classList.add('visible');

        window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});


  // Show/hide the button
  window.onscroll = function () {
    const topBtn = document.getElementById("backToTop");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  };

  // Scroll to top
  document.getElementById("backToTop").addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });


  const typedTitle = "Devcation '25 Events";
  let i = 0;
  const speed = 80;
  function typeWriter() {
    if (i < typedTitle.length) {
      document.getElementById("typed-title").innerHTML += typedTitle.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  window.onload = typeWriter;

