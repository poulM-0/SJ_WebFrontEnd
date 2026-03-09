const loadData = () => {
	const usersContainer = document.getElementById('users');
	usersContainer.textContent = 'Caricamento...';

	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => {
			usersContainer.innerHTML = '';
			users.forEach(user => {
				const card = document.createElement('div');
				card.className = 'user';
				card.innerHTML = `<strong>${user.name}</strong><br>${user.email}`;
				usersContainer.appendChild(card);
			});
		})
		.catch(error => {
			usersContainer.textContent = 'Errore nel caricamento';
			console.log('Fetch error:', error);
		});
};

const loadBtn = document.getElementById('load-users');
if (loadBtn) {
	loadBtn.addEventListener('click', loadData);
}

const colorBtn = document.getElementById('colorBtn');
const midasBtn = document.getElementById('midasBtn');

midasBtn.addEventListener('click',(function(){
    const users = document.getElementsByClassName("user");
    for(var i=0;i<users.length;i++){
        users[i].classList.toggle('midas');
    }
}))
colorBtn.addEventListener('click',(function(){
    const users = document.getElementsByClassName("user");
    for(var i=0;i<users.length;i++){
        users[i].classList.toggle('color'+i);
    }
}))