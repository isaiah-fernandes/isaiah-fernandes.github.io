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

    //Publications Section
    const pubSection = document.createElement("section");
    pubSection.id = "section3";
    pubSection.className = "fade-in mb-10 p-3 border-t border-gray-300 mt-4";
    pubSection.innerHTML = `
      <br>
      <input type="text" id="publicationSearch" placeholder="Search publications..." class
      ="fancy-search mb-4" />
      <div class="space-y-4 w-full" id="publicationsContainer"></div>
    `;
    main.appendChild(pubSection);

    // Awards Section
    const awaSection = document.createElement("section");
    awaSection.id = "section4";
    awaSection.className = "fade-in mb-10 p-3 border-t border-gray-300 mt-4";
    awaSection.innerHTML = `
      <br>
      <input type="text" id="awardSearch" placeholder="Search awards..." class
      ="fancy-search mb-4" />
      <div class="space-y-4 w-full" id="awardsContainer"></div>
    `;
    main.appendChild(awaSection);

    // Projects Section
    const projSection = document.createElement("section");
    projSection.id = "section5";
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
    skillsSection.id = "section6";
    skillsSection.className = "fade-in mb-10 p-3 border-t border-gray-300 mt-4";
    skillsSection.innerHTML = `
      <br>
      <div class="space-y-4 w-full" id="skillsContainer"></div>
    `;
    main.appendChild(skillsSection);

    // Education Section
    const eduSection = document.createElement("section");
    eduSection.id = "section7";
    eduSection.className = "fade-in mb-10 p-3 border-t border-gray-300 mt-4";
    eduSection.innerHTML = `
      <br>
      <div class="space-y-4 w-full" id="eduContainer"></div>
    `;
    main.appendChild(eduSection);

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