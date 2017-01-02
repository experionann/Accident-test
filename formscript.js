var ids = new Array();

$(function () {


    $("#datepicker").datepicker({
        format: 'dd/mm/yyyy',
        maxDate: new Date(),
        todayHighlight: true,
        autoclose: true
    });

    // $("#tbUser").on('click', '.btnDelete', function () {
    //     $(this).parents('tr').first().remove();
    //     });


    $('#submit').click(function (e) {
        e.preventDefault();

        // }

        // else {
        var rno = $('#refno').val();

        // c=0;n=0;
        var regexVal = new RegExp("^(?=.*[A-Z])(?=.*[0-9])");
        var result = regexVal.test(rno);

        if (!result) {
            alert("An uppercase letter and a digit is a must for a Reference Number");
            
        }


        //     for(i=0;i<rno.length;i++)
        //     {
        //         if('A'>= rno[i] && rno[i]<='Z' )
        //         {
        //             c++;
        //         console.log("Char works",c);
        //         }
        //         if('0'>=rno[i] && rno[i]<='9' )
        //         {
        //             n++;
        //                console.log("No works",n);

        //     }}

        //          if(c===0||n===0 )
        //         {
        //             alert("An uppercase letter is must for a Reference Number");
        //         }

        //          if(n===0 )
        //         {
        //             alert("A digit is must for a Reference Number");
        //         }

              if ($('#refno').val() == "") {
        alert('Please fill the ref no field');
                    }




        else if ($('#datepicker').val() == "") {
            alert('Please fill the date field');
        }
        else if ($('#time').val() == "") {
            alert('Please enter the accident time');
        }
        else if ($('#acdttype').val() == "--Select--") {
            alert('Please select the acdttype');
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
            alert("Number cannot be a negative value");
        }

        else if ($('#casuality').val() == "") {
            alert('Please fill the casuality field');
        }
        else if ($('#name').val() == "") {
            alert('Please fill the name field');
        }
        else {
            var i;
            var flag = 0;

            var new_refno = $('#refno').val();
            var new_dob = $('#datepicker').val();
            var new_time = $('#time').val();
            var new_acdttype = $('#acdttype').val();
            var new_city = $('#city').val();
            var new_district = $('#district').val();
            var new_vehicles = $('#vehicles').val();
            var new_casuality = $('#casuality').val();
            var new_name = $('#name').val();
            for (i = 0; i < ids.length; i++) {
                if (new_refno === ids[i]) {
                    flag = 1;
                }
            }
            if (flag === 0) {
                console.log("working");
                var newRow = jQuery('<tr><td>' + new_refno + '</td><td>' + new_dob + '</td><td>' + new_time + '</td><td>' + new_acdttype + '</td><td>' + new_city + '</td><td>' + new_district + '</td><td>' + new_vehicles + '</td><td>' + new_casuality + '</td><td>' + new_name + '</td></tr>');
                jQuery('#t1').append(newRow);

                ids.push(new_refno);
            }

        }


    });

    $("#close").click(function () {
        //   window.open();
        // window.close();
        var url = $(this).data('target');
        location.replace(url);

    });

    $('#edit').click(function () {

        $("#editable").hide();
        $("#clear").hide();
        $("#edit").hide();

    });

    //     function readFile() {
    //   if (this.files && this.files[0]) {
    //     var FR= new FileReader();
    //     FR.onload = function(e) {
    //       document.getElementById("img").src       = e.target.result;
    //       document.getElementById("b64").innerHTML = e.target.result;
    //     };       
    //     FR.readAsDataURL( this.files[0] );
    //   }
    // }

    // document.getElementById("inp").addEventListener("change", readFile, false);

    $('#confirm').click(function () {
        $(".form-horizontal").hide("slow", function () {
            alert("The details are stored in the system.Thanks for registering :)");
            $("#close").show();
            $("#edit").hide();
        });

    });

});



