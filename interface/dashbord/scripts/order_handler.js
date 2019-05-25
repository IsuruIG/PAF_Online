$("#products_productlist").ready(function () {

    $.ajax("http://localhost:8082/sellnbye/api/order", {
        contentType: 'application/json',
        type: 'GET'
    }).done(function (response) {
        var newItem = "";
        $.each(response, function (index, value) {

            newItem += `<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div class="personal-info-wrap">
                <div class="widget-head-info-box">
                    <div class="persoanl-widget-hd">
                    <h2 class="username_header_id" >${value.product}</h2>
                    <h2 class="proId" >${value.orderId}</h2>
                        <p>${value.supplierName}</p>
                    </div>
                    <img src="${value.productImage}" class="img-circle circle-border m-b-md center" alt="profile"  width="150" height="150">
                    <input type="hidden" id="proId" name="proId" value="${value.orderId}">
                    <div class="social-widget-result">
                        <span>${value.qty}</span> <br>
                        <span><button type="button" id="user_editUser_btn" class="btn btn-primary">
                        EDIT
                    </button></span> |
                        <span> <button type="button" id="order_delete_btn" class="btn btn-danger">
                        DELETE
                    </button></span>
                       
                      
                    </div>
                </div>
                
            </div>
        </div>`;
        });

        $("#products_productlist").append(newItem);
    });
});
$('body').on('click', '#order_delete_btn', function (event) {
    var proId = $(event.target).parent().parent().parent().parent().find('.proId').html();


    $.ajax(`http://localhost:8082/sellnbye/api/order/${proId}`, {

        contentType: 'application/json',
        type: 'DELETE'
    }).done(function (response) {
        location.reload();
        if (response) {
            alert("Successfully Deleted");
        } else {
            alert("Delete Failed");
        }
    });
});