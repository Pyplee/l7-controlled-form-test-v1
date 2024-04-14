import { doc } from "prettier";

const app = () => {
  const rootElement = document.querySelector('.form-container');

  const form = document.createElement('form');
  form.setAttribute("id", "registrationForm");

  const divFormGroup1 = document.createElement('div');
  divFormGroup1.classList.add("form-group");
  const labelName = document.createElement('label');
  const inputName = document.createElement('input');
  labelName.setAttribute("for", "inputName");
  labelName.textContent = "Name";
  inputName.setAttribute("type", "text");
  inputName.setAttribute("placeholder", "Введите ваше имя");
  inputName.setAttribute("name", "name");
  inputName.setAttribute("required", "");
  inputName.classList.add("form-control");
  inputName.setAttribute("id", "inputName");
  divFormGroup1.appendChild(labelName);
  divFormGroup1.appendChild(inputName);
  
  const divFormGroup2 = document.createElement('div');
  divFormGroup2.classList.add("form-group");
  const labelEmail = document.createElement('label');
  const inputEmail = document.createElement('input');
  labelEmail.setAttribute("for", "inputEmail");
  labelEmail.textContent = "Email";
  inputEmail.setAttribute("type", "text");
  inputEmail.setAttribute("placeholder", "Введите email");
  inputEmail.setAttribute("name", "email");
  inputEmail.setAttribute("required", "");
  inputEmail.classList.add("form-control");
  inputEmail.setAttribute("id", "inputEmail");
  divFormGroup2.appendChild(labelEmail);
  divFormGroup2.appendChild(inputEmail);

  const inputSubmit = document.createElement('input');
  inputSubmit.setAttribute("type", "submit");
  inputSubmit.setAttribute("value", "Submit");
  inputSubmit.classList.add("btn", "btn-primary");

  form.appendChild(divFormGroup1);
  form.appendChild(divFormGroup2);
  form.appendChild(inputSubmit);

  rootElement.appendChild(form);
}

export default app;