var ids = new Array();

$(function () {


    $("#datepicker").datepicker({                                           //Styling Datepicker
        format: 'dd/mm/yyyy',
        maxDate: new Date(),
        todayHighlight: true,
        autoclose: true
    });


    $('#submit').click(function (e) {                                        //The save method
        e.preventDefault();
        var rno = $('#refno').val();
        var regexVal = new RegExp("^(?=.*[A-Z])(?=.*[0-9])");
        var result = regexVal.test(rno);                                     //search for a match between RE and string(rno)

        if ($('#refno').val() == "") {                                       //if a field is empty alert is generated
            alert('Please fill the Reference Number field');
        }
        else if (!result) {                                                  //If result is false
            alert("Reference Number should contain atleast one uppercase letter and digits");
        }
        else if ($('#datepicker').val() == "") {
            alert('Please fill the accident date field');
        }
        else if ($('#time').val() == "") {
            alert('Please enter the accident time');
        }
        else if ($('#acdttype').val() == "--Select--") {
            alert('Please select the accident type');
        }
        else if ($('#city').val() == "") {
            alert('Please fill the city field');
        }
        else if ($('#district').val() == "--Select--") {
            alert('Please fill the district field');
        }
        else if ($('#vehicles').val() == "") {
            alert('Please fill the vehicles field');
        }
        else if ($('#vehicles').val() < 0) {
            alert("Number cannot be a negative");
        }

        else if ($('#casuality').val() == "") {
            alert('Please fill the casualty field');
        }
        else if ($('#name').val() == "") {
            alert('Please fill the name field');
        }
        else {
            var i;
            var flag = 0;
            var new_refno = $('#refno').val();                                  //All the field values are stored to new variables
            var new_dob = $('#datepicker').val();
            var new_time = $('#time').val();
            var new_acdttype = $('#acdttype').val();
            var new_city = $('#city').val();
            var new_district = $('#district').val();
            var new_vehicles = $('#vehicles').val();
            var new_casuality = $('#casuality').val();
            var new_name = $('#name').val();

            for (i = 0; i < ids.length; i++) {
                if (new_refno === ids[i]) {                                    //Refno should be unique else flag is set
                    flag = 1;
                }
            }
            if (flag === 0) {                                                   //Appends new row to the table
                console.log("working");
                var newRow = jQuery('<tr><td>' + new_refno + '</td><td>' + new_dob + '</td><td>' + new_time + '</td><td>' + new_acdttype + '</td><td>' + new_city + '</td><td>' + new_district + '</td><td>' + new_vehicles + '</td><td>' + new_casuality + '</td><td>' + new_name + '</td></tr>');
                jQuery('#t1').append(newRow);

                ids.push(new_refno);
            }

        }


    });

    $("#close").click(function () {                                          // close button exits the current window
        window.open();
        window.close();
        // var url = $(this).data('target');
        // location.replace(url);

    });

    $('#edit').click(function () {                                           // To edit the last entered user         
        $("#editable").hide();
        $("#clear").hide();
        $("#edit").hide();

    });

    $('#confirm').click(function () {
        $(".form-horizontal").hide("slow", function () {
            alert("The details are stored in the system.Thanks for registering :)");
            $("#close").show();
            $("#edit").hide();
        });

    });


});


