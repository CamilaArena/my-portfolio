const experienceSummaries = {
  "ClickUp": {
    "en": "Performed QA for a SaaS platform for task management and collaboration, covering web, iOS, and Android. My work included requirements analysis, test case design and execution in TestRail, API testing with Postman, and validation of AI-powered agents. I worked closely with Product and Engineering to investigate bugs, verify fixes, and support product quality within an Agile team.",
    "es": "Realicé QA en una plataforma SaaS de gestión de tareas y colaboración, tanto en web como en iOS y Android. Mi trabajo abarcó análisis de requerimientos, diseño y ejecución de casos en TestRail, pruebas de API con Postman y validación de agentes de IA. Colaboré con Producto y Desarrollo en la investigación de bugs, la verificación de correcciones y el cuidado de la calidad del producto dentro de un equipo ágil."
  },
  "RazorTech": {
    "en": "Worked on QA for web and mobile projects across healthcare, logistics, and corporate websites. I participated in discovery and requirements analysis, designed test scenarios, and validated workflows, integrations, and data visualizations. I also performed API testing with Postman, supported regression testing before releases, and reported and tracked bugs in GitLab.",
    "es": "Trabajé en QA para proyectos web y mobile de salud, logística y sitios institucionales. Participé en discovery y análisis de requerimientos, diseñé escenarios de prueba y validé flujos, integraciones y visualizaciones de datos. También realicé pruebas de API con Postman, colaboré con las pruebas de regresión previas a las entregas y reporté y seguí bugs en GitLab."
  }
};
const jobs = [
  {
    company: "ClickUp",
    date: ["Mar 2025 – Nov 2026", "Mar 2025 – Nov 2026"],
    en: [
      "Analyzed requirements and user stories, and reviewed Figma designs to identify expected behavior, test scenarios, edge cases, and potential risks.",
      "Designed and executed test cases for web and mobile applications on iOS and Android, managing test runs in TestRail.",
      "Tested AI-powered agents, including conversational flows, prompt variations, edge cases, and response accuracy.",
      "Performed API testing with Postman to validate service functionality and data integrity.",
      "Reported and tracked bugs with clear reproduction steps and evidence, collaborating with Product and Engineering to investigate issues and validate fixes.",
      "Participated in Scrum ceremonies within an Agile environment.",
    ],
    es: [
      "Analicé requerimientos e historias de usuario y revisé diseños en Figma para identificar comportamientos esperados, escenarios de prueba, casos límite y posibles riesgos.",
      "Diseñé y ejecuté casos de prueba para aplicaciones web y mobile en iOS y Android, gestionando las ejecuciones en TestRail.",
      "Probé agentes de IA, incluyendo flujos conversacionales, variaciones de prompts, casos límite y precisión de las respuestas.",
      "Realicé pruebas de API con Postman para validar la funcionalidad de los servicios y la integridad de los datos.",
      "Reporté y seguí bugs con pasos claros y evidencia, colaborando con Producto y Desarrollo para investigar problemas y validar correcciones.",
      "Participé en ceremonias Scrum dentro de un entorno ágil.",
    ],
  },
  {
    company: "RazorTech",
    date: ["Jun 2023 – Dec 2024", "Jun 2023 – Dic 2024"],
    en: [
      "Participated in discovery, analyzed requirements and user stories, and reviewed Figma designs to identify test scenarios for web and mobile applications.",
      "Worked on projects across different domains: Vali, a medical cytogenetics platform; Cargill and TBB, focused on quota management and business processes; and RazorWeb.",
      "Validated complex workflows, data visualizations, integrations, and core product functionality.",
      "Performed API testing with Postman and supported regression testing before releases.",
      "Reported and tracked bugs in GitLab with clear reproduction steps.",
    ],
    es: [
      "Participé en discovery, analicé requerimientos e historias de usuario y revisé diseños en Figma para identificar escenarios de prueba en aplicaciones web y mobile.",
      "Trabajé en proyectos de distintos sectores: Vali, una plataforma de citogenética médica; Cargill y TBB, enfocados en gestión de cupos y procesos de negocio; y RazorWeb.",
      "Validé flujos complejos, visualizaciones de datos, integraciones y funcionalidades centrales del producto.",
      "Realicé pruebas de API con Postman y pruebas de regresión previas a las entregas.",
      "Reporté y seguí bugs en GitLab con pasos claros para reproducirlos.",
    ],
  },
];
const skills = {
  en: [
    [
      "QA & Testing",
      "Requirements analysis · Test case design & execution · Web & mobile testing · Bug reporting · Gherkin · SQL",
    ],
    ["API Testing", "Postman · Service functionality · Data validation"],
    [
      "Automation",
      "Cypress — completed course · Selenium — academic experience · Playwright — ongoing learning & personal project",
    ],
    [
      "Tools",
      "TestRail · Postman · Git · GitHub · GitLab · Figma (design review)",
    ],
    ["Programming", "Java · JavaScript · Python — foundational knowledge"],
  ],
  es: [
    [
      "QA & Testing",
      "Análisis de requerimientos · Diseño y ejecución de casos · Testing web y mobile · Reporte de bugs · Gherkin · SQL",
    ],
    [
      "API Testing",
      "Postman · Funcionalidad de servicios · Validación de datos",
    ],
    [
      "Automation",
      "Cypress — curso completado · Selenium — experiencia académica · Playwright — aprendizaje y proyecto personal",
    ],
    [
      "Herramientas",
      "TestRail · Postman · Git · GitHub · GitLab · Figma (revisión de diseños)",
    ],
    ["Programación", "Java · JavaScript · Python — conocimientos básicos"],
  ],
};
function setLanguage(lang) {
  document.documentElement.lang = lang;
  try { sessionStorage.setItem("portfolio-language", lang); } catch {}
  document.querySelectorAll("[data-en]").forEach((el) => {
    const value = el.dataset[lang];
    el.replaceChildren(
      ...value
        .split("\\n")
        .flatMap((line, i) =>
          i
            ? [document.createElement("br"), document.createTextNode(line)]
            : [document.createTextNode(line)],
        ),
    );
  });
  document.querySelectorAll(".section-title, .contact h2").forEach((el) => {
    const last = el.lastChild;
    if (last && last.nodeType === 3) {
      const em = document.createElement("em");
      em.textContent = last.textContent;
      el.replaceChild(em, last);
    }
  });
  document
    .querySelectorAll(".language button")
    .forEach((b) => b.setAttribute("aria-pressed", b.id === lang));
  document.querySelector(".skip").textContent =
    lang === "en" ? "Skip to content" : "Ir al contenido";
  document
    .querySelector("nav")
    .setAttribute(
      "aria-label",
      lang === "en" ? "Main navigation" : "Navegación principal",
    );
  document.querySelector("#jobs").innerHTML = jobs.filter(j => !document.body.dataset.company || j.company === document.body.dataset.company)
    .map(
      (j) =>
        `<article class="job"><div><h3><a class="job-company-link" href="${j.company === "ClickUp" ? "clickup.html" : "razor.html"}">${j.company}<span aria-hidden="true"> ↗</span></a></h3><p class="role">QA Engineer</p><span class="date">${j.date[lang === "en" ? 0 : 1]}</span></div>${document.body.dataset.company ? `<ul>${j[lang].map((item) => `<li>${item}</li>`).join("")}</ul>` : `<p class="job-summary">${experienceSummaries[j.company][lang]}</p>`}</article>`,
    )
    .join("");
  if (document.querySelector("#skills")) document.querySelector("#skills").innerHTML = skills[lang]
    .map((s) => `<div class="skill-row"><h3>${s[0]}</h3><p>${s[1]}</p></div>`)
    .join("");
}
document
  .querySelectorAll(".language button")
  .forEach((b) => b.addEventListener("click", () => setLanguage(b.id)));
let initialLanguage = "en";
try { initialLanguage = sessionStorage.getItem("portfolio-language") === "es" ? "es" : "en"; } catch {}
setLanguage(initialLanguage);
if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("reveal");
          observer.unobserve(e.target);
        }
      }),
    { threshold: 0.08 },
  );
  document
    .querySelectorAll(".section-title,.project,.job,.about-copy")
    .forEach((el) => observer.observe(el));
}

const projectNav = document.querySelector('.nav-projects');
const projectToggle = document.querySelector('.projects-toggle');
const projectMenu = document.querySelector('.projects-menu');
function showProjects(open) {
  projectToggle.setAttribute('aria-expanded', String(open));
  projectMenu.hidden = !open;
}
projectToggle.addEventListener('click', () => showProjects(projectMenu.hidden));
projectNav.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') showProjects(true); });
projectNav.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse' && !projectNav.contains(document.activeElement)) showProjects(false); });
projectNav.addEventListener('focusout', e => { if (!projectNav.contains(e.relatedTarget)) showProjects(false); });
projectNav.addEventListener('keydown', e => { if (e.key === 'Escape') { showProjects(false); projectToggle.focus(); } });
document.addEventListener('click', e => { if (!projectNav.contains(e.target)) showProjects(false); });
projectMenu.addEventListener('click', e => { if (e.target.closest('a')) showProjects(false); });

const mobileToggle = document.querySelector('.mobile-menu-toggle');
const siteHeader = document.querySelector('header');
const mainNavigation = document.querySelector('#main-navigation');
const mobileViewport = matchMedia('(max-width: 650px)');
function setMobileMenu(open, returnFocus = false) {
  siteHeader.classList.toggle('mobile-menu-open', open);
  mobileToggle.setAttribute('aria-expanded', String(open));
  if (!open) showProjects(false);
  if (returnFocus) mobileToggle.focus();
}
mobileToggle.addEventListener('click', () => setMobileMenu(mobileToggle.getAttribute('aria-expanded') !== 'true'));
mainNavigation.addEventListener('click', event => {
  if (mobileViewport.matches && event.target.closest('a')) setMobileMenu(false, true);
});
siteHeader.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobileViewport.matches && siteHeader.classList.contains('mobile-menu-open')) {
    setMobileMenu(false, true);
  }
});
document.addEventListener('click', event => {
  if (!siteHeader.contains(event.target) && mobileViewport.matches) setMobileMenu(false);
});
mobileViewport.addEventListener('change', () => setMobileMenu(false));
