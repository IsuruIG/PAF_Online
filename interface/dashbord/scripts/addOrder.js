$("#add_Order_form").submit(function (event) {
    event.preventDefault();

      data = {
                "supplierName": $("#addProduct_suppName").val(),
                "companyName": $("#addProduct_compName").val(),
                "email": $("#addProduct_email").val(),
                "phone": $("#addProduct_inputPhone").val(),
                "product": $("#addProduct_inputroduct").val(),
                "qty": $("#addProduct_inputQty").val()
            }

            $.ajax("http://localhost:8082/sellnbye/api/order", {
                data: JSON.stringify(data),
                contentType: 'application/json',
                type: 'POST'
            }).done(function (response) {
                if (response === true) {
                    location.reload();
                    alert("Added Successfully");
                }
                else {
                    alert("Adding product details failed");
                }
            });
      ;
});