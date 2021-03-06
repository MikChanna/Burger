// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".createBurger").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("creating burger");

    var newBurger = {
      burger_name: $(".newBurger").val().trim(),
      devoured: "false",
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".eatburger").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    var newDevoured = $(this).data("devoured");

    var newDevouredState = {
      devoured: newDevoured,
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState,
    }).then(function () {
      console.log(newDevouredState);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  // send the DELETE request
  $(".deleteburger").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
      data: { id: id },
    }).then(function () {
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
