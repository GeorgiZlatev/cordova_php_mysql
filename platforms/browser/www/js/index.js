(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        
        $("#saveNote").click(function () {
            var note = $("#note").val();
            var dataString = "note=" + note;
            if ($.trim(note).length > 0) {
                $.ajax({
                    type: "POST",
                    url: "https://192.168.0.100/cordova/NoteApp/www/insert.php",
                    data: dataString,
                    crossDomain: true,
                    cache: false,
                    beforeSend: function () {
                        $("#saveNote").val("Connecting ...");
                    },
                    success: function (data) {
                        var result = data.toString().trim();
                        if (result === "success") {
                            alert("Note Saved");
                            $("saveNote").val("Save Note");

                        } else {
                            alert("Unknown error Occurred ?");
                        }
                    }
          
                });
            }
        });
         $("#getNote").click(function () {
            var url = "https://192.168.0.100/cordova/NoteApp/www/read.php";
            $.getJSON(url, function (result) {
                console.log(result);
                $.each(result, function (i, field) {
                    var id = field.id;
                    var note = field.note;
                    var time = field.time;
                    //  alert("ID = " + id + "\nNote = " + note + "\nTime = " + time)
                    $('#dataTable').append("<tr><td>" + id + " </td></br><td>" + note + "</td></br><td>" + time + "</td></br><td><button id='DeleteRow' onClick='deleteRowFn(" + id + ")'>Delete " + id + "</button></td></ br></tr>");
                });
            });
        });
    
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();