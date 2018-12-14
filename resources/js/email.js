function sendVerificationEmail() {
    
    var SUBJECT_CONSTANT="Verify your email at https://timothy-shee.000webhostapp.com/";
    var MESSAGE_CONSTANT="Welcome to the Timothy Shee newsletter!";
    var email = $('#email').val();
    var mailString = '?subject=' + SUBJECT_CONSTANT + '&body=' + MESSAGE_CONSTANT;
    $('#mail-link').attr('href',  'mailto:person@email.com' + mailString);
}

/*
//Set
$('#txt_name').val(bla);
<p><input id="subject" type="text" placeholder="type your subject here" 
        class="form-control"></p>
      <p><input id="message" type="text" placeholder="type your message here" 
          class="form-control"></p>
      <p><a id="mail-link" class="btn btn-primary">Create email</a></p>
      
      <script type="text/javascript">
        function loadEvents() {
            var mailString;
            function updateMailString() {
                mailString = '?subject=' + encodeURIComponent($('#subject').val())
                    + '&body=' + encodeURIComponent($('#message').val());
                $('#mail-link').attr('href',  'mailto:person@email.com' + mailString);
            }
            $( "#subject" ).focusout(function() { updateMailString(); });
            $( "#message" ).focusout(function() { updateMailString(); });
            updateMailString();
        }
      </script>
*/