$(document).ready(function() {

$("#form-group").submit(function(event) {
      
        function flav() {
          var pizzaFlavour = document.getElementById("flav").value;
          return parseInt(pizzaFlavour);
        }

        function topp() {
          var pizzaTopping = document.getElementById("topp").value;
          return parseInt(pizzaTopping);
        }
        function size() {
          var pizzaSize = document.getElementById("size").value;
          return parseInt(pizzaSize);
        }
        function crust() {
          var pizzaCrust = document.getElementById("crust").value;
          return parseInt(pizzaCrust);
        }
        
        function amount() {
          var pizzaAmount = document.getElementById("quantity").value;
          return parseInt(pizzaAmount);
        }
    
       
        function buy(topp, flav, crust, quantity, size) {
          this.newTopp = topp;
          this.newFlav = flav;
          this.newCrust = crust;
         
          this.newQuantity = quantity;
          this.newSize = size;
        }
    
      
        var userInput = new buy(flav(), size(), crust(), topp(), amount());  
     var totalCost =
          (userInput.newSize + userInput.newCrust + userInput.newTopp + userInput.newFlav) *userInput.newQuantity;
  
        alert("Your charges for Pizza" + totalCost);
        prompt("enter your names");
        prompt("enter your telephone number");
        prompt("enter your address");
        alert("Thank you dear client Your pizza will be delivered soon with total amount of " + totalCost + "for the pizza you bought");
        $("#form-group").reset();
    
        event.preventDefault();
      });
    });
    
 