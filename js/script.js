$(document).ready(function() {

    $("#form-group").submit(function(event) {
          
            function flav() {
              var pipiFlov = document.getElementById("flav").value;
              return parseInt(pipiFlov);
            }
    
            function topp() {
              var pipiTop = document.getElementById("topp").value;
              return parseInt(pipiTop);
            }
            function size() {
              var pipiSize = document.getElementById("size").value;
              return parseInt(pipiSize);
            }
            function crus() {
              var pipiCrus = document.getElementById("crus").value;
              return parseInt(pipiCrus);
            }
            
            function amount() {
              var pipiAmount = document.getElementById("quota").value;
              return parseInt(pipiAmount);
            }
        /*business logic*/
           
            function buy(topp, flav, crus, quota, size) {
              this.newTopp = topp;
              this.newFlav = flav;
              this.newCrus = crus;
             this.newQuota = quota;
              this.newSize = size;
            }
        
          
            var userInput = new buy(flav(), size(), crus(), topp(), amount());  
         var fullCost = (userInput.newSize + userInput.newCrus + userInput.newTopp + userInput.newFlav) *userInput.newQuota;
      /* business logic*/
           window.alert("price of your pizza is " + fullCost);window. prompt("enter your names");window.prompt("enter your telephone number");window.prompt("enter your address");
          window.alert("Thank you dear client Your pizza will be delivered soon with total amount of " + fullCost + "for the pizza you bought");
            $("#form-group").reset();
            event.preventDefault();
    
            /*summaryfunction size(){
              var pizzaSize = document.getElementById("size").value;
              return parseInt(pizzaSize); 
    
            }function crust(){
              var pizzaCrust=document.getElementById("crust").value; return parseInt(pizzaCrust);
            } */
    
          });
        });
        
        
     