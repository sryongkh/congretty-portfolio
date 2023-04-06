document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", function () {
    var loading = document.getElementById("loading");
    var text = document.getElementById("loading-text");
    var count = 0;
    var interval = setInterval(function () {
      count++;
      text.textContent = count + "%";
      if (count === 100) {
        clearInterval(interval);
        loading.style.opacity = 0;
        setTimeout(function () {
          loading.style.transition = "opacity 0.5s ease";
          loading.style.display = "none";
        }, 1000);
      }
    }, 20);
  });

  document.getElementById("btn-me").addEventListener("click", function () {
    document
      .getElementById("myInformation")
      .scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("btn-social").addEventListener("click", function () {
    document
      .getElementById("section-social")
      .scrollIntoView({ behavior: "smooth" });
  });

  document
    .getElementById("btn-projects")
    .addEventListener("click", function () {
      document
        .getElementById("section-projects")
        .scrollIntoView({ behavior: "smooth" });
    });

  const buttons = document.querySelectorAll(".circle-button");
  const btnProfile = document.getElementById(".circle-button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const section = button.dataset.section;
      const topicElement = document.getElementById("topic");
      const detailInformation = document.getElementById("description");

      switch (section) {
        case "profile":
          gsap.fromTo(
            topicElement,
            { opacity: 0, y: -40 },
            {
              duration: 1,
              opacity: 1,
              y: 0,
              text: { value: "PROFILE" },
            }
          );
          gsap.fromTo(
            detailInformation,
            { opacity: 0, y: -40 },
            {
              duration: 1,
              opacity: 1,
              y: 0,
              text: { value: "Sirinya Ongkhamhaeng" },
            }
          );
          break;
        case "project":
          gsap.fromTo(
            topicElement,
            { opacity: 0, y: -40 },
            {
              duration: 1,
              opacity: 1,
              y: 0,
              text: { value: "EXPERIENCE" },
            }
          );
          gsap.fromTo(
            detailInformation,
            { opacity: 0, y: -40 },
            {
              duration: 1,
              opacity: 1,
              y: 0,
              text: { value: "" },
            }
          );
          break;
        case "artwork":
          gsap.fromTo(
            topicElement,
            { opacity: 0, y: -40 },
            {
              duration: 1,
              opacity: 1,
              y: 0,
              text: { value: "PROJECT" },
            }
          );
          gsap.fromTo(
            detailInformation,
            { opacity: 0, y: -40 },
            {
              duration: 1,
              opacity: 1,
              y: 0,
              text: { value: "" },
            }
          );
          break;
        default:
          gsap.fromTo(
            nameElement,
            { opacity: 0, y: -20 },
            {
              duration: 0.5,
              opacity: 1,
              y: 0,
              text: { value: "SIRINYA ONGKHAMHAENG" },
            }
          );
          break;
      }
    });
  });

  // background animation
  const background = document.getElementById("background");
  const constellation_a = document.createElement("div");
  const constellation_b = document.createElement("div");
  const constellation_c = document.createElement("div");
  constellation_a.classList.add("constellation", "stars-a");
  constellation_b.classList.add("constellation", "stars-b");
  constellation_c.classList.add("constellation", "stars-c");

  for (let i = 1; i < 25; i++) {
    const star = document.createElement("div");
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    const size = Math.random() * 4;
    const duration = Math.random() * 0.5 + 0.1;

    star.classList.add("star");
    star.style.top = y + "px";
    star.style.left = x + "px";
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.animation = "blink ${" + duration + "}s infinite";

    star.classList.add("star");
    constellation_a.appendChild(star);
  }

  for (let i = 1; i < 25; i++) {
    const star = document.createElement("div");
    const x = Math.floor(window.innerWidth);
    const y = Math.floor(window.innerHeight);
    const size = Math.random() * 4;

    star.style.top = y + "px";
    star.style.left = x + "px";
    star.style.width = 1 + size + "px";
    star.style.height = 1 + size + "px";
    star.style.animationDelay = Math.random() * 2.6 + "s";
    star.style.animationDuration = "0.1s";
    star.style.animationName = "blink";
    star.style.animationIterationCount = "infinite";
    constellation_b.appendChild(star);
  }

  for (let i = 1; i < 25; i++) {
    const star = document.createElement("div");
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    const size = Math.random() * 3;

    star.style.top = y + "px";
    star.style.left = x + "px";
    star.style.width = 1 + size + "px";
    star.style.height = 1 + size + "px";
    star.style.animationDelay = Math.random() * 3 + "s";
    star.style.animationDuration = "0.3s";
    star.style.animationName = "blink";
    star.style.animationIterationCount = "infinite";
    constellation_c.appendChild(star);
  }

  background.appendChild(constellation_a);
  background.appendChild(constellation_b);
  background.appendChild(constellation_c);

  const starsContainer = document.getElementById("stars");

  for (let i = 0; i < 10; i++) {
    const star = document.createElement("i");
    star.classList.add("fas", "fa-star", "decorate-star");
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    starsContainer.appendChild(star);
  }

  gsap.utils.toArray("#square-profile").forEach(function (element) {
    ScrollTrigger.create({
      trigger: element,
      start: "top 100%",
      end: "bottom 20%",
      onEnter: function () {
        gsap.fromTo(
          element,
          { y: 100, autoAlpha: 0 },
          {
            duration: 4,
            y: 0,
            autoAlpha: 1,
            ease: "back",
            overwrite: "auto",
          }
        );
      },
      onLeave: function () {
        gsap.fromTo(
          element,
          { autoAlpha: 1 },
          { autoAlpha: 0, overwrite: "auto" }
        );
      },
      onEnterBack: function () {
        gsap.fromTo(
          element,
          { y: -100, autoAlpha: 0 },
          {
            duration: 4,
            y: 0,
            autoAlpha: 1,
            ease: "back",
            overwrite: "auto",
          }
        );
      },
      onLeaveBack: function () {
        gsap.fromTo(
          element,
          { autoAlpha: 1 },
          { autoAlpha: 0, overwrite: "auto" }
        );
      },
    });
  });

  gsap.utils.toArray("#social").forEach(function (contactElement) {
    ScrollTrigger.create({
      trigger: contactElement,
      start: "top 100%",
      end: "bottom 20%",
      onEnter: function () {
        gsap.fromTo(
          contactElement,
          { y: 100, autoAlpha: 0 },
          {
            duration: 2,
            y: 0,
            autoAlpha: 1,
            ease: "back",
            overwrite: "auto",
          }
        );
      },
      onLeave: function () {
        gsap.fromTo(
          contactElement,
          { autoAlpha: 1 },
          { autoAlpha: 0, overwrite: "auto" }
        );
      },
      onEnterBack: function () {
        gsap.fromTo(
          contactElement,
          { y: -100, autoAlpha: 0 },
          {
            duration: 2,
            y: 0,
            autoAlpha: 1,
            ease: "back",
            overwrite: "auto",
          }
        );
      },
      onLeaveBack: function () {
        gsap.fromTo(
          contactElement,
          { autoAlpha: 1 },
          { autoAlpha: 0, overwrite: "auto" }
        );
      },
    });
  });

  gsap.utils
    .toArray("#myInformation-section-1")
    .forEach(function (informationSection) {
      ScrollTrigger.create({
        trigger: informationSection,
        start: "top 100%",
        end: "bottom 20%",
        onEnter: function () {
          gsap.fromTo(
            informationSection,
            { y: 100, autoAlpha: 0 },
            {
              duration: 2,
              y: 0,
              autoAlpha: 1,
              ease: "back",
              overwrite: "auto",
            }
          );
        },
        onLeave: function () {
          gsap.fromTo(
            informationSection,
            { autoAlpha: 1 },
            { autoAlpha: 0, overwrite: "auto" }
          );
        },
        onEnterBack: function () {
          gsap.fromTo(
            informationSection,
            { y: -100, autoAlpha: 0 },
            {
              duration: 2,
              y: 0,
              autoAlpha: 1,
              ease: "back",
              overwrite: "auto",
            }
          );
        },
        onLeaveBack: function () {
          gsap.fromTo(
            informationSection,
            { autoAlpha: 1 },
            { autoAlpha: 0, overwrite: "auto" }
          );
        },
      });
    });

  // Text Running

  consoleText(["Artist", "Learner", "Developer"], "text", ["var(--alabaster)"]);

  function consoleText(words, id, colors) {
    if (colors === undefined) colors = ["var(--alabaster)"];
    var visible = true;
    var con = document.getElementById("console");
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id);
    target.setAttribute("style", "color:" + colors[0]);
    window.setInterval(function () {
      if (letterCount === 0 && waiting === false) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount);
        window.setTimeout(function () {
          var usedColor = colors.shift();
          colors.push(usedColor);
          var usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          target.setAttribute("style", "color:" + colors[0]);
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = true;
        window.setTimeout(function () {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (waiting === false) {
        target.innerHTML = words[0].substring(0, letterCount);
        letterCount += x;
      }
    }, 120);
    window.setInterval(function () {
      if (visible === true) {
        con.className = "console-underscore hidden";
        visible = false;
      } else {
        con.className = "console-underscore";

        visible = true;
      }
    }, 400);
  }

  // Download Botton
  const btnDownload = document.getElementById("btn-download");
  const dropdownHover = document.getElementById("dropdown-content");

  btnDownload.addEventListener("mouseover", () => {
    dropdownHover.style.visibility = "visible";
    dropdownHover.classList.add("fade-in");
    dropdownHover.classList.remove("fade-out");
  });

  btnDownload.addEventListener("mouseout", () => {
    dropdownHover.style.visibility = "hidden";
    dropdownHover.classList.add("fade-out");
    dropdownHover.classList.remove("fade-in");
  });

  const proceedingBtn = document.getElementById("tni-proceeding");
  const resumeBtn = document.getElementById("resume");
  const cvBtn = document.getElementById("curri-vitae");
  proceedingBtn.addEventListener("click", () => {
    window.open("assets/files/TNIAC_2022_Proceedings.pdf", "_blank");
  });
  resumeBtn.addEventListener("click", () => {
    window.open("assets/files/Sirinya_Resume.pdf", "_blank");
  });
  // cvBtn.addEventListener("click", () => {
  //   window.open("assets/files/Sirinya_Resume.pdf", "_blank");
  // });

  // Skill Button

  const skillButton = document.getElementById("expand-skill-button");
  const skillContainer = document.getElementById("skill-container");
  const expButton = document.getElementById("expand-exp-button");
  const expContainer = document.getElementById("exp-container");

  skillButton.addEventListener("click", () => {
    if (skillContainer.classList.contains("hidden")) {
      skillContainer.classList.remove("hidden");
      expContainer.classList.add("hidden");
    } else {
      skillContainer.classList.add("hidden");
    }
  });

  const skillBoxes = document.querySelectorAll(".skill-box");

  skillBoxes.forEach((skillBox) => {
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.textContent = skillBox.dataset.tooltip;
    skillBox.appendChild(tooltip);

    skillBox.addEventListener("mouseover", () => {
      tooltip.style.visibility = "visible";
    });
    skillBox.addEventListener("mouseout", () => {
      tooltip.style.visibility = "hidden";
    });
  });

  expButton.addEventListener("click", () => {
    if (expContainer.classList.contains("hidden")) {
      expContainer.classList.remove("hidden");
      skillContainer.classList.add("hidden");
    } else {
      expContainer.classList.add("hidden");
    }
  });

  // Information Button

  gsap.utils
    .toArray("#myInformation-section-2")
    .forEach(function (btnContainer) {
      ScrollTrigger.create({
        trigger: btnContainer,
        start: "top 100%",
        end: "bottom 20%",
        onEnter: function () {
          gsap.fromTo(
            btnContainer,
            { y: 100, autoAlpha: 0 },
            {
              duration: 3,
              y: 0,
              autoAlpha: 1,
              ease: "back",
              overwrite: "auto",
            }
          );
        },
        onLeave: function () {
          gsap.fromTo(
            btnContainer,
            { autoAlpha: 1 },
            { autoAlpha: 0, overwrite: "auto" }
          );
        },
        onEnterBack: function () {
          gsap.fromTo(
            btnContainer,
            { y: -100, autoAlpha: 0 },
            {
              duration: 3,
              y: 0,
              autoAlpha: 1,
              ease: "back",
              overwrite: "auto",
            }
          );
        },
        onLeaveBack: function () {
          gsap.fromTo(
            btnContainer,
            { autoAlpha: 1 },
            { autoAlpha: 0, overwrite: "auto" }
          );
        },
      });
    });

  gsap.utils.toArray("#section-projects").forEach(function (projectsContainer) {
    ScrollTrigger.create({
      trigger: projectsContainer,
      start: "top 100%",
      end: "bottom 20%",
      onEnter: function () {
        gsap.fromTo(
          projectsContainer,
          { y: 100, autoAlpha: 0 },
          {
            duration: 3,
            y: 0,
            autoAlpha: 1,
            ease: "back",
            overwrite: "auto",
          }
        );
      },
      onLeave: function () {
        gsap.fromTo(
          projectsContainer,
          { autoAlpha: 1 },
          { autoAlpha: 0, overwrite: "auto" }
        );
      },
      onEnterBack: function () {
        gsap.fromTo(
          projectsContainer,
          { y: -100, autoAlpha: 0 },
          {
            duration: 3,
            y: 0,
            autoAlpha: 1,
            ease: "back",
            overwrite: "auto",
          }
        );
      },
      onLeaveBack: function () {
        gsap.fromTo(
          projectsContainer,
          { autoAlpha: 1 },
          { autoAlpha: 0, overwrite: "auto" }
        );
      },
    });
  });

  // Gallery
});
