// checkbox validation from snippets

$(document).ready(function () {

  $("#feedback").on("submit", function() {
    // assume the form is valid by default
    var formValid = true;

    if( $("#datetime").prop("validity").valid ) {
      $("#datetimeError").addClass("hidden");
    } else {
      $("#datetimeError").removeClass("hidden");
      formValid = false;
    };

    if ( $("#positive").prop("validity").valid ) {
      $("#positiveError").addClass("hidden");
    } else {
      $("#positiveError").removeClass("hidden");
      formValid = false;
    };

    if ( $("#improvement").prop("validity").valid ) {
      $("#improvementError").addClass("hidden");
    } else {
      $("#improvementError").removeClass("hidden");
      formValid = false;
    };

    if ( $("#students").is(':checked') || $("#cornell").is(':checked') || $("#cornell").is(':checked')/* TODO: append: || $(...).is(':checked') as necessary*/) {
      $("#checkboxError").addClass("hidden");
    } else {
      $("#checkboxError").removeClass("hidden");
      formValid = false;
    }

    if ( $("#yes").is(':checked') || $("#no").is(':checked')/* TODO: append: || $(...).is(':checked') as necessary*/) {
      $("#yes-noError").addClass("hidden");
    } else {
      $("#yes-noError").removeClass("hidden");
      formValid = false;
    }



    // Tell the browser whether the form is valid (sent form data to server).
    return formValid;
  });

});
