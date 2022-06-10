const invoice_submit 	= document.getElementById('submit_form');
if (invoice_submit) {
	invoice_submit.addEventListener('click', (e) => {
		var product_name 				= document.getElementById('product_name').value,
			product_price 				= document.getElementById('product_price').value,
			product_weight 				= document.getElementById('product_weight').value,
			product_pieces 				= document.getElementById('product_pieces').value,
			total_account 				= document.getElementById('total_account').value,
			order_id 					= document.getElementById('order_id').value,
			customer_name 				= document.getElementById('customer_name').value,
			customer_address 			= document.getElementById('customer_address').value,
			customer_phone 				= document.getElementById('customer_phone').value,
			customer_origin 			= document.getElementById('customer_origin').value,
			customer_destination 		= document.getElementById('customer_destination').value,
			customers_services 			= document.getElementById('customers_services').value,
			date 						= document.getElementById('date').value,
			barcode 					= document.getElementById('barcode').value,
			foreign_ref 				= document.getElementById('foreign_ref').value,
			ref_1 						= document.getElementById('ref_1').value,
			chargeable	 				= document.getElementById('chargeable').value;
			shipper_ref	 				= document.getElementById('shipper_ref').value;
			consignee_ref	 			= document.getElementById('consignee_ref').value;

		if(product_name !== '' && product_price !== '' && product_weight !== '' && product_pieces !== '' && total_account !== '' && customer_name !== '' && customer_address !== '' && customer_phone !== '' && customer_origin !== '' &&customer_destination !== '' && customers_services !== '' && date !== '' && barcode !== '') {
			e.preventDefault();
			localStorage.setItem('product_name', product_name);
			localStorage.setItem('product_price', product_price);
			localStorage.setItem('product_weight', product_weight);
			localStorage.setItem('product_pieces', product_pieces);
			localStorage.setItem('total_account', total_account);
			localStorage.setItem('order_id', order_id);
			localStorage.setItem('customer_name', customer_name);
			localStorage.setItem('customer_address', customer_address);
			localStorage.setItem('customer_phone', customer_phone);
			localStorage.setItem('customer_origin', customer_origin);
			localStorage.setItem('customer_destination', customer_destination);
			localStorage.setItem('customers_services', customers_services);
			localStorage.setItem('date', date);
			localStorage.setItem('barcode', barcode);
			localStorage.setItem('foreign_ref', foreign_ref);
			localStorage.setItem('ref_1', ref_1);
			localStorage.setItem('chargeable', chargeable);
			localStorage.setItem('shipper_ref', shipper_ref);
			localStorage.setItem('consignee_ref', consignee_ref);

			location.href = 'invoice_form.html';
		}
	})
}

