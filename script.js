document.addEventListener('DOMContentLoaded', function() {
    const userIdInput = document.getElementById('userIdInput');
    const getUserButton = document.getElementById('getUserButton');
    const userInfoDiv = document.getElementById('user-info');

    function fetchUserData(id) {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => {
                
                userInfoDiv.innerHTML = `
                    <p><strong>Имя:</strong> ${data.name}</p>
                    <p><strong>Имя пользователя:</strong> ${data.username}</p>
                    <p><strong>Телефон:</strong> ${data.phone}</p>
                `;
            })
            .catch(error => {
                userInfoDiv.innerHTML = `<p style="color: red;">Ошибка: ${error.message}</p>`;
            });
    }

    getUserButton.addEventListener('click', function() {
        const userId = parseInt(userIdInput.value);
        if (userId >= 1 && userId <= 10) {
            fetchUserData(userId);
        } else {
            userInfoDiv.innerHTML = '<p style="color: red;">Пожалуйста, введите число от 1 до 10.</p>';
        }
    });

   
    userIdInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const userId = parseInt(userIdInput.value);
            if (userId >= 1 && userId <= 10) {
                fetchUserData(userId);
            } else {
                userInfoDiv.innerHTML = '<p style="color: red;">Пожалуйста, введите число от 1 до 10.</p>';
            }
        }
    });
});









// let root = document.getElementById('root')
// let input = document.getElementById('input')
// let btn = document.getElementById('btn')

// btn.onclick = () =>{
//     if(input.value.trim()){
//         fetch('https://jsonplaceholder.typicode.com/posts',{
//          method: 'POST',
//         headers: {
//            'Content-Type': 'application/json;charset=utf-8'
//            },
//            body: JSON.stringify.userid({
//             title: input.value
//            })
//         }).then(()=>{
//             alert('ВВедите данные')
//         }).catch(()=>{
//             alert('Произошла ошибика')
//         })
//     }

// }

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) =>{
//     return response
// })
// .then((data) =>{
//     data.forEach((item)=>{
//         root.innerHTML += `<h1>${item}</h1>`
//     })
// })