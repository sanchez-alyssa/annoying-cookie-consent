//dom
let closeBtn = document.getElementById('close-btn')
let modal = document.getElementById('modal')
let acceptBtn = document.getElementById('accept-btn')
let declineBtn = document.getElementById('decline-btn')
let modalBtns = document.getElementById('modal-btns')
let secondText = document.getElementById('second-text')
let formContainer = document.getElementById('form-container')
let secondModal = document.getElementById('second-modal')

setTimeout(function () {
	modal.style.display = 'inline'
}, 1500)

closeBtn.addEventListener('click', function () {
	modal.style.display = 'none'
})

formContainer.addEventListener('submit', function (e) {
	e.preventDefault()

	secondText.innerHTML = `
    <div class="message-text">
        <img src="images/loading.svg">
        <p id="funny-message">Uploading your data to the dark web ...</p>
    </div>
    `
	setTimeout(function () {
		document.getElementById('funny-message').textContent = `Making the sale ...`
	}, 2000)

	//get data from form
	let userFormData = new FormData(formContainer)
	let fullName = userFormData.get('fullName')

	setTimeout(function () {
		secondModal.innerHTML = `
        <h3>Thanks <span class="modal-name"> ${fullName}! </span>, we just sold the rights of your eternal soul</h3>
        <img class="modal-img" src="images/pirate-laughing.gif">
        `
		closeBtn.disabled = false
		closeBtn.style.cursor = 'pointer'
	}, 4000)
})
// toggle buttons
declineBtn.addEventListener('mouseenter', function () {
	modalBtns.classList.toggle('reverse')
})
