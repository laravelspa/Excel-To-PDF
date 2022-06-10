document.body.innerHTML = `
		<button id="invoice_print" class="invoice_print">Image</button>
		<button id="invoice_pdf" class="invoice_pdf">PDF</button>
<div class="container" id="container">
	<div class="section_one">
		<div class="invoice_company">
		<span class="fb">Company:</span>
		<span class="fb-20 up" id="company_value">FLY POST</span>
		</div>
		<div class="invoice_barcode">
			<svg id="barcode_value"></svg>
		</div>
	</div>

	<div class="section_two">
		<div class="invoice_destination">
			<span class="fb">Destination:</span>
			<span class="fb-20 up" id="destination_value">${localStorage.getItem('customer_destination')}</span>
		</div>
		<div class="invoice_origin">
			<span class="fb">Origin:</span>
			<span class="fb-20 up" id="origin_value">${localStorage.getItem('customer_origin')}</span>
		</div>
		<div class="invoice_date">
			<div class="date_flex">
				<span class="fb">Date:</span>
				<span class="fb-20 up">${localStorage.getItem('date')}</span>
			</div>
			<div class="foreign_ref_flex">
				<span class="fb">Foreign Ref:</span>
				<span class="fb-20 up">${localStorage.getItem('foreign_ref')}</span>
			</div>
			<div class="ref_flex">
				<span class="fb">Ref:</span>
				<span class="fb-20 up">${localStorage.getItem('ref_1')}</span>
			</div>
		</div>
	</div>

	<div class="section_three">
		<div class="invoice_dom">
			<span>DOM</span>
		</div>
		<div class="invoice_onp">
			<span>ONP</span>
		</div>
		<div class="invoice_customer">
			<div class="customer_flex">
				<span class="fb">Customer:</span>
				<span class="fb-20 up">${localStorage.getItem('customer_name')}</span>
			</div>
			<div class="order_flex">
				<span class="fb">Order ID:</span>
				<span class="fb-20 up">${localStorage.getItem('order_id')}</span>
			</div>
		</div>
	</div>

	<div class="section_four">
		<div class="invoice_weight">
			<div class="weight_flex">
				<span class="fb">Weight:</span>
				<span class="fb-20">${localStorage.getItem('product_weight')} k.g</span>
			</div>
			<div class="chargeable_flex">
				<span class="fb">Chargeable:</span>
				<span class="fb-20 up">${localStorage.getItem('chargeable')}</span>
			</div>
			<div class="codes_flex">
				<span class="fb-20 up">Services:</span>
				<span class="fb-20 up">CODS</span>
			</div>			
		</div>
		<h4>Services Code</h4>
		<div class="invoice_price">
			<div class="pieces_flex">
				<span class="fb">Pieces:</span>
				<span class="fb-20 up">${localStorage.getItem('product_pieces')}</span>
			</div>
			<div class="product_name_flex">
				<span class="fb">Product Name:</span>
				<span class="fb-20 up">${localStorage.getItem('product_name')}</span>
			</div>
			<div class="price_flex">
				<span class="fb">Price:</span>
				<span class="fb-20 up">${localStorage.getItem('product_price')}</span>
			</div>			
		</div>		
	</div>

	<div class="section_five">
		<div class="invoice_accounting">
			<div class="account_flex">
				<span class="fb">Account:</span>
				<span class="fb-20 up">${localStorage.getItem('total_account')} L.E</span>
			</div>
			<div class="account_destination">
				<span class="fb-20 up">${localStorage.getItem('customer_destination')}</span>
			</div>
			<div class="customers_services_flex">
				<span class="fb">Customers Services:</span>
				<span class="fb-20 up">${'0'+localStorage.getItem('customers_services')}</span>
			</div>
			<div class="eg_flex">
				<span class="fb">EG</span>
			</div>
		</div>
	</div>

	<div class="section_sex">
		<div class="invoice_customer_details">
			<div class="customer_name_flex">
				<span class="fb">Customer Name:</span>
				<span class="fb-20 up">${localStorage.getItem('customer_name')}</span>
			</div>
			<div class="customer_address_flex">
				<span class="fb">Customer Address:</span>
				<span class="fb-20 up">${localStorage.getItem('customer_address')}</span>
			</div>
			<div class="customer_phone_flex">
				<span class="fb">Customer Phone:</span>
				<span class="fb-20 up">${'0' + localStorage.getItem('customer_phone')}</span>
			</div>
			<div class="eg_flex">
				<span class="fb">EG</span>
			</div>			
		</div>
	</div>
	<div class="section_seven">
		<div class="invoice_footer">
			<div class="shipper_ref_flex">
				<span class="fb">Shipper Ref:</span>
				<span class="fb">${localStorage.getItem('shipper_ref')}</span>
			</div>
			<div class="consignee_ref_flex">
				<span class="fb">Consignee Ref:</span>
				<span class="fb">${localStorage.getItem('consignee_ref')}</span>
			</div>
		</div>
	</div>
</div>`;

JsBarcode(`#barcode_value`,localStorage.getItem('barcode'), {
	width: 1,
	height: 40
})


document.getElementById('invoice_print').addEventListener('click', function() {
	var pe = document.getElementById('container')
	domtoimage.toJpeg(pe, { quality: 0.95, width:"800" })
	.then(function (dataUrl) {
	    saveAs(dataUrl,'image.jpg');
	});
	function saveAs(url, filename) {
		var link = document.createElement('a');
		if (typeof link.download === 'string') {
			link.href = url;
			link.download = filename;
			document.body.appendChild(link);
			link.click();	
			document.body.removeChild(link);
		}
	}
	
})



document.getElementById('invoice_pdf').addEventListener('click', function() {
	var pe = document.getElementById('container');
	domtoimage.toJpeg(pe, { quality: 0.95, width:"800" })
	.then(function (dataUrl) {
	    var doc = new jsPDF();
	    doc.addImage(dataUrl, 'JPEG', 0,0)
	    doc.save('a4.pdf');
	});
})