const menuBtn = document.getElementById('collapse');
const menu = document.getElementById('collapse-menu');
const textarea = document.getElementById('questions');
const lengthText = document.getElementById('textarea-length');
const maxLength = 200;

if (textarea && lengthText) {
    textarea.addEventListener('input', () => {
	    const currentLength = textarea.value.length;
        lengthText.textContent = `${currentLength}/${maxLength}`;

        if (currentLength >= maxLength) {
    	    lengthText.style.color = "red";
        } else {
		    lengthText.style.color = "black";
	    }
    });
};

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});