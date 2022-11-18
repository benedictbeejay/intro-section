const menu = document.querySelector('.menu');

menu.addEventListener('click', e => {
	document.querySelector('.overlay').classList.toggle('show')
})

const close = document.querySelector('.close');

close.addEventListener('click', e => {
	document.querySelector('.overlay').classList.toggle('show')
})


const features = document.getElementById('features')

features.addEventListener('click', e => {
	document.querySelector('.up').classList.toggle('hide')
	document.querySelector('.down').classList.toggle('hide')
	document.querySelector('.dropdown').classList.toggle('dropdown-content')
});

const company = document.getElementById('company')

company.addEventListener('click', e => {
	document.querySelector('.up-1').classList.toggle('hide')
	document.querySelector('.down-1').classList.toggle('hide')
	document.querySelector('.dropdown-1').classList.toggle('dropdown-content')
});

const overlayFeatures = document.getElementById('overlay-features')

overlayFeatures.addEventListener('click', e => {
	document.querySelector('.up-2').classList.toggle('hide')
	document.querySelector('.down-2').classList.toggle('hide')
	document.querySelector('.dropdown-2').classList.toggle('dropdown-content')
});

const overlayCompany = document.getElementById('overlay-company')

overlayCompany.addEventListener('click', e => {
	document.querySelector('.up-3').classList.toggle('hide')
	document.querySelector('.down-3').classList.toggle('hide')
	document.querySelector('.dropdown-3').classList.toggle('dropdown-content')
});


