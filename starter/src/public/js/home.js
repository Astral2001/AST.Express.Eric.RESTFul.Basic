import {
    toggleForm
} from './actions/action.form.js'

// querySelectors
// query Buttons
const btnShowAddUserForm = document.querySelector('.btnShowAddUserForm')

// query Forms
const formAddUser = document.querySelector('.formAddUser')

// toggle form
toggleForm(btnShowAddUserForm, formAddUser, {show: 'Add user', hide: 'Hide form'})
