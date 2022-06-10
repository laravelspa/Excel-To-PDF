const input = document.getElementById('input')

if (input) {
	input.addEventListener('change', () => {
		
		readXlsxFile(input.files[0]).then((data) => {		
		
		  	sessionStorage.setItem('excel', JSON.stringify(data));
		
		  	location.href = 'invoice.html';
		})
	})
}








