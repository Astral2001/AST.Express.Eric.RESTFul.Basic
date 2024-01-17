import toggleForm from './actions/toggleForm.js'
const btn_showForm = document.querySelector('.btn__show-form')
const form_addUser = document.querySelector('.form__add-user')

toggleForm(btn_showForm, form_addUser)