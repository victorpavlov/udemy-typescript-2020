import ProjectInputForm from "./views/ProjectInputForm.js";

const projectFormTemplate = <HTMLTemplateElement>document.getElementById('project-input');
const appElement = <HTMLElement>document.getElementById('app');

const projectForm = new ProjectInputForm(projectFormTemplate, appElement);

projectForm.init();