$(document).ready(function () {
    var checkslog = 0;
    // on click Sign In Button checks that username =='admin' and password == 'password'
    $("#login").click(function () {
        $.ajax({

            //CP1. Complete Ajax Code to GET ALL pin data 
            type: "GET",
            url: "https://servicecustomer20180508102534.azurewebsites.net/Api/Customers",

        }).then(function (data) {

            addNewRow(data);
            // console.log(data);
        });

        function addNewRow(data) {

            for (var i = 0; i < data.length; i++) {
                if ($("#loginusername").val() == data[i].Username && $("#loginpassword").val() == data[i].Password) {


                    $("#first").hide();


                    window.location.href = 'user.html?id=' + data[i].Customer_id;


                    //    $("#second").append("<p>Hello, admin</p> <br/><input type='button' id='logout' value='Log Out' />");
                    // Console.log('sucess');
                    checkslog = 1;
                }
                else {

                }

            }
            if (checkslog == 0) {
                alert("Faill!");
            }
            $("#logout").click(function () {
                $("form")[0].reset();
                $("#first").show();
                $("#second").hide();
            });


        }


        // 
    });

});
