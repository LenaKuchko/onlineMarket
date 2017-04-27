var customer = {};
function strBuilder(customer) {

}
$(function () {

  $("#customer-info").submit(function (event) {
    customer = {
      name: $("#name").val(),
      address: $("#address").val(),
      phone: $("#phone").val(),
      product: $("input:radio[name=product]:checked").val()
    }
    event.preventDefault();
    $("#receipt").text("Dear "+customer.name+"! Thank you for your order! You will receve your purchase ("+customer.product+") tomorrow on this address: "+ customer.address);
  });

});
