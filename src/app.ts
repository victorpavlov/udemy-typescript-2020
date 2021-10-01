import ProjectInputForm from "./views/ProjectInputForm.js";
import ProjectList from "./views/ProjectList.js";

const projectFormTemplate = <HTMLTemplateElement>document.getElementById('project-input');
const projectsListTemplate = <HTMLTemplateElement>document.getElementById('projects-list');
const appElement = <HTMLElement>document.getElementById('app');

const projectForm = new ProjectInputForm(projectFormTemplate, appElement);
const activeProjectsList = new ProjectList(projectsListTemplate, appElement, 'active');
const finishedProjectsList = new ProjectList(projectsListTemplate, appElement, 'finished');

projectForm.init();
activeProjectsList.init();
finishedProjectsList.init()