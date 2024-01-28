import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const KEY = 'feedback-form-state';
const data = JSON.parse(localStorage.getItem(KEY)) ?? {
  email: '',
  message: '',
};

const setFormData = (form, data) => {
  form.elements.email.value = data.email;
  form.elements.message.value = data.message;
};

const onInput = throttle(e => {
  data[e.target.name] = e.target.value;
  localStorage.setItem(KEY, JSON.stringify(data));
}, 500);

const onSubmit = e => {
  e.preventDefault();

  console.log(data);
  localStorage.removeItem(KEY);
  setFormData(form, { email: '', message: '' });
};

setFormData(form, data);
form.addEventListener('submit', onSubmit);
form.addEventListener('input', onInput);
