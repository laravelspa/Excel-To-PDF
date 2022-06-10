var data = JSON.parse(sessionStorage.getItem('excel'));
console.log(data);
if (data.length != 1) {
	for (var i = 1; i < data.length; i++) {
		document.body.innerHTML += `
		<div class="container" id="container">
			<div class="section_one">
				<div class="invoice_company">
				<span class="fb">Company:</span>
				<span id="company_value" class="fb-20">FLY POST</span>
				</div>
				<div class="invoice_barcode">
					<svg id="barcode_value_${i}">/svg>
				</div>
			</div>

			<div class="section_two">
				<div class="invoice_destination">
					<span class="fb">Destination:</span>
					<span id="destination_value" class="fb-20 up">${data[i][10]}</span>
				</div>
				<div class="invoice_origin">
					<span class="fb">Origin:</span>
					<span id="origin_value" class="fb-20 up">${data[i][9]}</span>
				</div>
				<div class="invoice_date">
					<div class="date_flex">
						<span class="fb">Date:</span>
						<span class="fb-20">${data[i][12]}</span>
					</div>
					<div class="foreign_ref_flex">
						<span class="fb">Foreign Ref:</span>
						<span class="fb-20 up">${data[i][14]}</span>
					</div>
					<div class="ref_flex">
						<span class="fb ">Ref:</span>
						<span class="fb-20 up">${data[i][15]}</span>
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
						<span class="fb-20 up">${data[i][6]}</span>
					</div>
					<div class="order_flex">
						<span class="fb">Order ID:</span>
						<span class="fb-20 up">${data[i][5]}</span>
					</div>
				</div>
			</div>

			<div class="section_four">
				<div class="invoice_weight">
					<div class="weight_flex">
						<span class="fb">Weight:</span>
						<span class="fb">${data[i][2]} k.g</span>
					</div>
					<div class="chargeable_flex">
						<span class="fb">Chargeable:</span>
						<span class="fb-20 up">${data[i][16]}</span>
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
						<span class="fb-20 up">${data[i][3]}</span>
					</div>
					<div class="product_name_flex">
						<span class="fb">Product Name:</span>
						<span class="fb-20 up">${data[i][0]}</span>
					</div>
					<div class="price_flex">
						<span class="fb">Price:</span>
						<span class="fb-20">${data[i][1]}</span>
					</div>			
				</div>		
			</div>

			<div class="section_five">
				<div class="invoice_accounting">
					<div class="account_flex">
						<span class="fb">Account:</span>
						<span class="fb-20">${data[i][4]} L.E</span>
					</div>
					<div class="account_destination">
						<span class="fb-20 up">${data[i][10]}</span>
					</div>
					<div class="customers_services_flex">
						<span class="fb">Customers Services:</span>
						<span class="fb-20 up">${'0'+data[i][11]}</span>
					</div>
					<div class="eg_flex">
						<span>EG</span>
					</div>
				</div>
			</div>

			<div class="section_sex">
				<div class="invoice_customer_details">
					<div class="customer_name_flex">
						<span class="fb">Customer Name:</span>
						<span class="fb-20 up">${data[i][6]}</span>
					</div>
					<div class="customer_address_flex">
						<span  class="fb">Customer Address:</span>
						<span  class="fb-20 up">${data[i][7]}</span>
					</div>
					<div class="customer_phone_flex">
						<span  class="fb">Customer Phone:</span>
						<span  class="fb-20">${'0' + data[i][8]}</span>
					</div>
					<div class="eg_flex">
						<span>EG</span>
					</div>			
				</div>
			</div
			<div class="section_seven">
				<div class="invoice_footer">
					<div class="shipper_ref_flex">
						<span class="fb">Shipper Ref:</span>
						<span  class="fb">${data[i][17]}</span>
					</div>
					<div class="consignee_ref_flex">
						<span class="fb">Consignee Ref:</span>
						<span class="fb">${data[i][18]}</span>
					</div>
				</div>
			</div>
		</div>`;	

	JsBarcode(`#barcode_value_${i}`,data[i][13], {
		width: 1,
		height: 40
	})
	}	
} else {
	document.getElementById('invoice_print').style.display = 'none';
	document.body.innerHTML = `<div style="width:50%;text-align:center;color:#ccc;background:#000;padding:20px;margin: 20px auto">
		Sorry Your Excel File Is Empty!!!!
	</div>`
}

document.getElementById('invoice_print').addEventListener('click', function() {
	var pe = document.getElementsByClassName('container')

	for (var i = 0; i < pe.length; i++) {
		domtoimage.toJpeg(pe[i], { quality: 0.95, width:"800" })
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
	}
})


document.getElementById('invoice_pdf').addEventListener('click', function() {
	var pe = document.getElementsByClassName('container')

	for (var i = 0; i < pe.length; i++) {
		domtoimage.toJpeg(pe[i], { quality: 0.95, width:"800" })
		.then(function (dataUrl) {
		    var doc = new jsPDF();
		    doc.addImage(dataUrl, 'JPEG',0,0);
			doc.save('a4.pdf');
		});
	}
})

