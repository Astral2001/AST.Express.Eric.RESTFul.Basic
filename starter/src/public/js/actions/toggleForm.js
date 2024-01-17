const toggleForm = (btn_showForm, form) => {
    btn_showForm.addEventListener('click', () => {
        form.classList.toggle('showed')

        if (form.classList.contains('showed')) {
            btn_showForm.textContent = 'Hide form'
        } else {
            btn_showForm.textContent = 'Add new user'
        }
    })
}

export default toggleForm