const showForm = (btnShowForm, form) => {
    btnShowForm.addEventListener('click', () => {
        if (!form.classList.contains('showed')) {
            form.classList.add('showed')
        }
    })
}

const hideForm = (btnHideForm, form) => {
    btnHideForm.addEventListener('click', (e) => {
        e.preventDefault()
        if (form.classList.contains('showed')) {
            form.classList.remove('showed')
        }
    })
}

const toggleForm = (btnShowForm, form, message) => {
    btnShowForm.addEventListener('click', () => {
        form.classList.toggle('showed')

        if (form.classList.contains('showed')) {
            btnShowForm.textContent = message.hide
        } else {
            btnShowForm.textContent = message.show
        }
    })
}

export {
    showForm,
    hideForm,
    toggleForm,
}