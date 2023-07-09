import usersData from './users.json';
import usersItemTpl from './templates/gallery-item.handlebars'
const Filter = document.querySelector('.filter-list')
const list = document.querySelector('.js-users')
const filteredUsers = usersData.filter(user => user.age > 0);
function templateUsers(filteredUsers) {
    const compiledTemplate = usersItemTpl({
        user: filteredUsers,
    });
    list.innerHTML = compiledTemplate
}
templateUsers(filteredUsers)

//Filter buttons callbacks
Filter.addEventListener('click', filterUsers)
function filterUsers(event) {
    if (event.target.classList.contains('standart-filter')) {
        const filteredUsers = usersData.filter(user => user.age > 0);
        templateUsers(filteredUsers)
    }
    if (event.target.classList.contains('years-filter-btn')) {
        const filteredUsers = usersData.filter(user => user.age >= 30);
        templateUsers(filteredUsers)
    }
}

