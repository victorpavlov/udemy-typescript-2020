function autoBind(
  _target: any,
  _methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    }
  }

  return adjustedDescriptor;
}

export default class ProjectInputForm {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLElement;
  insertElement: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLTextAreaElement;
  peopleInputElement: HTMLInputElement;

  constructor( template: HTMLTemplateElement, host: HTMLElement ) {
    this.templateElement = template;
    this.hostElement = host;
    
    const importNode = document.importNode(this.templateElement.content, true);
    this.insertElement = <HTMLFormElement>importNode.firstElementChild;
    this.insertElement.id = 'user-input';
    this.titleInputElement = <HTMLInputElement>this.insertElement.querySelector('#title');
    this.descriptionInputElement = <HTMLTextAreaElement>this.insertElement.querySelector('#description');
    this.peopleInputElement = <HTMLInputElement>this.insertElement.querySelector('#people')
    this.configure();
  }

  private gatherUserInput(): [string, string, number] | void {
    const title = this.titleInputElement.value;
    const description = this.descriptionInputElement.value;
    const people = this.peopleInputElement.value;
    if (!title.length || !description.length || !people.length ) {
      alert('Please fill in all fields.');
    } else {
      return [title, description, +people];
    }
  }

  @autoBind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();
    console.log(userInput);
    this.clearInputs();
  }

  private clearInputs() {
    this.insertElement.reset();
  }

  private configure() {
    this.insertElement.addEventListener('submit', this.submitHandler);
  }

  public init() {
    this.hostElement.insertAdjacentElement("afterbegin", this.insertElement);
  }
}
