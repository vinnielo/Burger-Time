$(function() {
    $(".change-devour").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("newdevour");
  console.log(newDevour)

  if(newDevour === true){
    alert("What! I'm Not good enough for you?")
  }else{
    alert("NOM...NOM...NOM")
  }
     var newDevourState = {
        devoured: newDevour
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed devoured to", newDevour);
          
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      alert("Yummy! Thanks for the add!")
  
      var newBurger = {
        burger_name: $("#bu").val().trim(),
        devoured: $("[name=eat]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".delKitty").on("click", function(event) {
      console.log("here")
      alert("Sorry you don't like me")
      var id = $(this).data("id"); 
  
        // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("Deleted Burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    })
  
  });