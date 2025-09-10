import {
  logAction
} from "../logger.js";

// Main Content (Right column)
export function renderMainContent() {
  return logAction(`${renderMainContent.name}()`, () => {
    const main = document.createElement("main");
    main.id = "rightSection";
    main.className = "w-2/3 overflow-y-auto p-3 h-full custom-scrollbar pt-16 pb-0";

    // HERO (right column)
    const heroSection = document.createElement('section');
    heroSection.id = 'section0';
    heroSection.className = 'fade-in mb-6 p-0';

    const img = document.createElement('img');
    img.src = 'cover.png';            // file is next to index.html
    img.alt = 'Cover';
    img.className = 'block w-full h-32 md:h-48 object-cover rounded-xl shadow';
    img.loading = 'eager';
    img.addEventListener('error', () => {
      console.error('Image failed to load at path:', img.src);
    });

    heroSection.appendChild(img);
    main.prepend(heroSection);

    // Apply inversion when theme is light
    const applyThemeFilter = () => {
      if (document.body.classList.contains('light-theme')) {
      img.style.filter = 'invert(1)';
    } else {
        img.style.filter = 'none';
    }
    };

    // About Section
    const aboutSection = document.createElement("section");
    aboutSection.id = "section1";
    aboutSection.className =
      "fade-in mb-6 p-3 rounded-lg text-gray-400 leading-relaxed pt-8";
    const aboutContent = document.createElement("div");
    aboutContent.id = "aboutContent";
    aboutSection.appendChild(aboutContent);
    main.appendChild(aboutSection);

    // Experience Section
    const expSection = document.createElement("section");
    expSection.id = "section2";
    expSection.className = "fade-in mb-10 p-3 border-t border-gray-300 mt-4";
    expSection.innerHTML = `
      <br>
      <input type="text" id="experienceSearch" placeholder="Search experiences..."
      class="fancy-search mb-4" />
      <div class="space-y-4 w-full" id="experienceContainer"></div>
    `;
    main.appendChild(expSection);

    //Certifications Section
    const cerSection = document.createElement("section");
    cerSection.id = "section3";
    cerSection.className = "fade-in mb-10 p-3 border-t border-gray-300 mt-4";
    cerSection.innerHTML = `
      <br>
      <input type="text" id="certificationSearch" placeholder="Search ceritfications..." class
      ="fancy-search mb-4" />
      <div class="space-y-4 w-full" id="certificationsContainer"></div>
    `;
    main.appendChild(cerSection);

    // Awards Section
    const awaSection = document.createElement("section");
    awaSection.id = "section4";
    awaSection.className = "fade-in mb-10 p-3 border-t border-gray-300 mt-4";
    awaSection.innerHTML = `
      <br>
      <input type="text" id="awardSearch" placeholder="Search achievements..." class
      ="fancy-search mb-4" />
      <div class="space-y-4 w-full" id="awardsContainer"></div>
    `;
    main.appendChild(awaSection);

    // Education Section
    const eduSection = document.createElement("section");
    eduSection.id = "section5";
    eduSection.className = "fade-in mb-10 p-3 border-t border-gray-300 mt-4";
    eduSection.innerHTML = `
      <br>
      <div class="space-y-4 w-full" id="eduContainer"></div>
    `;
    main.appendChild(eduSection);    

    // Projects Section
    const projSection = document.createElement("section");
    projSection.id = "section6";
    projSection.className = "fade-in mb-10 p-3 border-t border-gray-300 mt-4";
    projSection.innerHTML = `
      <br>
      <input type="text" id="projectSearch" placeholder="Search projects..." class
      ="fancy-search mb-4" />
      <div class="space-y-4 w-full" id="projectsContainer"></div>
    `;
    main.appendChild(projSection);
    
    // Skills Section
    const skillsSection = document.createElement("section");
    skillsSection.id = "section7";
    skillsSection.className = "fade-in mb-10 p-3 border-t border-gray-300 mt-4";
    skillsSection.innerHTML = `
      <br>
      <div class="space-y-4 w-full" id="skillsContainer"></div>
    `;
    main.appendChild(skillsSection);

    // Timeline Section
    const timelineSection = document.createElement("section");
    timelineSection.id = "sectionTimeline";
    timelineSection.className = "fade-in mb-10 p-3 border-t border-gray-300 " +
      "mt-4 relative";
    const toggleBtn = document.createElement("button");
    toggleBtn.id = "toggleSortBtn";
    toggleBtn.className =
      "absolute top-0 right-0 m-4 px-4 py-2 border text-te" +
      "al-500 rounded hover:text-white bg-transparent";
    toggleBtn.textContent = "View Oldest First";
    timelineSection.appendChild(toggleBtn);

    const timelineContainer = document.createElement("div");
    timelineContainer.id = "timelineContainer";
    timelineContainer.className = "timeline-container relative mx-auto";
    timelineSection.appendChild(timelineContainer);
    main.appendChild(timelineSection);

    return main;
  });
}