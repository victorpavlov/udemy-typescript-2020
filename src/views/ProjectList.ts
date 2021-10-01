export default class ProjectList {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLElement;
  insertElement: HTMLElement;

  constructor(
    template: HTMLTemplateElement,
    host: HTMLElement,
    private type?: 'active' | 'finished',
  ) {
    this.templateElement = template;
    this.hostElement = host;
    
    const importNode = document.importNode(this.templateElement.content, true);
    this.insertElement = <HTMLElement>importNode.firstElementChild;
    this.insertElement.id = this.type + '-projects';
  }

  private attach() {
    this.hostElement.insertAdjacentElement("beforeend", this.insertElement);
  }

  private injectContent() {
    const listId = `${this.type}-projects-list`;
    this.insertElement.querySelector('ul')!.id = listId;
    this.insertElement.querySelector('h2')!.textContent = `${this.type} Projects`;
  }

  public init() {
    this.attach();
    this.injectContent();
  }
}
