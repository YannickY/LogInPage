$(function() {
    let $char = $("#rchars");
    let $form1 = $("#form1");
    let $Ent = $("#Ent");
    let $once = $("#once");
    let $rpass = $("#rpass");
    $("#Ent").on("click", function() {
      if ($("#uput").val().length < 5) {
        $char.text("Username must be 5 characters or more");
      } else if ($("#pass").val().length === 0) {
        $rpass.text("Must create password");

      } else {
        $char.text("");
        $rpass.text("");
        $char.html("");
        $form1.hide();
        $Ent.hide();
        $once.prepend("Thank you for creating your profile");
  }

 
});

  $("#tArea").on("focus", function() {
    $(this).text("");
});

$("#Ent2").on("click", function() {
    if ($("textarea").val().length > 1) {
        let text = $("textarea").val();
        let current = new Date();
        let cDate = `${current.getFullYear()}-${(current.getMonth() + 1)}-${(current.getDate())}`;
        let cTime = current.getHours();
        let AMorPM = cTime >= 12 ? "PM" : "AM";
        cTime = (cTime % 12) || 12;
        let minutes = current.getMinutes();
        let clicked = `Date: ${cDate}</br>Time: ${cTime}:${minutes} ${AMorPM}`;
        
        $("#com").prepend(`<li>${clicked}<br/> User comment: ${text}</li>`);
    }
})




    


})