var disUserID ;
var disUsername;
var testVar;
document.addEventListener('init', function (event) {
    
   $(function () {
    $.ajax({

        //CP1. Complete Ajax Code to GET ALL pin data 
        type: "GET",
        url: "https://soaproductapi.herokuapp.com/products/",

    }).then(function (data) {

        addNewRowProduct(data);
        console.log(data);
    });

    function addNewRowProduct(data) {

        // for (var i = 0; i < data.length; i++) {
        //     var row = '<tr><td><a href="edit.html?id=' + data[i].id + '">' + data[i].photo + '</a></td><td>' + data[i].description + '</td><td>' + data[i].photo + '</td><td>' + data[i].price + '</td><td>' + data[i].weight +  '</td> </tr>';
        //     $('#pinlist').append(row);
        // }
var i =0;
var xrow =0;
          for ( i = 0; i < data.length; i++) {

            var row = '<form><center><center id="rcorners2">    <input type="hidden" name="price" id="price"value="'+data[i].price+'"> <input type="hidden" name="orderID" id="orderID" value="'+data[i].id+'"><a ' + 
            data[i].id + '" style="text-decoration:none;"><br><img src=" ' + 
            data[i].photo + '" alt="" style="width:104px;height:142px;"><br> Description:__' + 
            data[i].description + '<br> Price:__' + 
            data[i].price + '<br> Weight:__' +
            data[i].weight +  '</a></p><br>Amount:<input type="number" name="amount" id="amount" value="1" max="100" min="1"><br><ons-button id="addPayment">Buy</ons-button> </center></center></form><br>';


            $('#prolist').append(row);
        }
    }

});

// FootMenu
    document.addEventListener('prechange', function(event) {
        document.querySelector('ons-toolbar .center')
          .innerHTML = event.tabItem.getAttribute('label');
      });
//load page
$("#opRegister").load("register.html");

    var page = event.target;
    console.log(page.id);

    testVar = "hello";
    if (page.id == "login") {

        console.log(testVar);
        alert(testVar);

    } if (page.id == "home") {
        console.log(urlid);
        alert(urlid);
    }
 

    $("#disLogis").hide();
    $(".login").click(function () {
        //add api 
        $.ajax({
    
            //CP1. Complete Ajax Code to GET ALL pin data 
            type: "GET",
            url: "https://servicecustomer20180508102534.azurewebsites.net/Api/Customers",
    
        }).then(function (data) {
    
            addNewData(data);
            // console.log(data);
        });
        //end add api
    
        function addNewData(data) {
    
    
    
            var i = 0;
            var checklog = 0;
            var pinUser = 0;
            //   for (var i = 0; i < data.length; ) {
            while (i   < data.length || checklog == 1) {
    
                if ($("#loginusername").val() == data[i].Username && $("#loginpassword").val() == data[i].Password) {
                    disUserID = data[i].Customer_id;
                    disUsername = data[i].Username;
                    pinUser = i;
                    console.log(data[i].Customer_id);
                    console.log(data[i].Username);
                    //   ons.notification.alert('Congratulations!');  
                    localStorage.setItem("showUsernameID", data[i].Customer_id);
                    localStorage.setItem("showUsername", data[i].Username);
                    localStorage.setItem("setAddress", data[i].Address);
                    localStorage.setItem("setEmail", data[i].Email);
                    localStorage.setItem("setTel", data[i].Tel);
                    localStorage.setItem("setFirstname", data[i].Fristname);
                    localStorage.setItem("setLastname", data[i].Lastname);
                    localStorage.setItem("setPass", data[i].Password);
                    // Access some stored data
                    //   alert( "username = " + localStorage.getItem("showUsername"));    
                    $("#disLogis").show();
                    $("#sysLogin").hide();
                    $("#btsysLogout").show();
                    $("#sysLogout").show();
                    $("#addInformation").append("<p>Hello, " + localStorage.getItem("showUsername") +
                    "</p> <br/><input type='text' id='infoUsernameID' placeholder='Username' value='" +
                    localStorage.getItem("showUsernameID") +
                    "'/> " + "<input type='text' id='infoUsername' placeholder='Username' value='" +
                    localStorage.getItem("showUsername") +
                    "'/> " + "<input type='text' id='infoFirstname' placeholder='Username' value='" +
                    localStorage.getItem("setFirstname") +
                    "'/> " + "<input type='text' id='infoLastname' placeholder='Username' value='" +
                    localStorage.getItem("setLastname") +
                    "'/> " + "<input type='text' id='infoAddress' placeholder='Username' value='" +
                    localStorage.getItem("setAddress") +
                    "'/> " + "<input type='text' id='infoEmail' placeholder='Username' value='" +
                    localStorage.getItem("setEmail") +
                    "'/> " + "<input type='text'  id='infoTel' placeholder='Username' value='" +
                    localStorage.getItem("setTel") +
                    "'/> " + "<input type='text' id='infoPass' placeholder='Username' value='" +
                    localStorage.getItem("setPass") +
                    "'/> "
                  
                );
                   
                    checklog = 1;
                 return;
    
                } else {
    
                }
    
                i++;
            }
            if (checklog == 0) {
                alert("Please try again");
            } else {
   

            }
    

    
        }
        $(".logout").click(function () {
            $("form")[0].reset();
            $("#disLogis").hide();
            $("#sysLogout").children('p, input').remove();
            $("#sysLogin").show();
            $("#btsysLogout").hide();
            $("#sysLogout").hide();
            $("#addInformation").hide();
        });
    });
//---------js lo
    $(function () {
        $.ajax({
    
            url: 'http://servicelogistics20180505020236.azurewebsites.net/Api/Logistics',
            method: 'GET'
    
        }).then(function (data) {
    
            addNewlo(data);
    
        });
    
        function addNewlo(data) {
    
            for (var i = 0; i < data.length; i++) {
                if(data[i].User_id ==disUserID){
                    var row = '<tr><td><a href="edit.html?id=' + data[i].Logistic_id + '">' + data[i].Delivery_status + '</a></td><td>' + data[i].Address + '</td><td>' + data[i].Amount + '</td><td>' + data[i].Delivery_Date + '</td><td>' + data[i].Delivery_type + '</td><td>'+ 
                    data[i].Expected_date+'</td><td>'  + data[i].Order_id + '</td><td>' + data[i].Payment_id + '</td><td>' + data[i].Price + '</td><td>' + data[i].User_id + '</td> </tr>';
                    $('#logisticlist').append(row);
                }
                
            }
            
        }
    
    });




});  

//  $(function () {
//     // Initialization code
//     $('ons-button').on('click', function (e) {
//         ons.notification.alert('Button is tapped!');
//     })
// });
// https://servicecustomer20180508102534.azurewebsites.net/Api/Customers
$(function(){

    $('#alert').hide();

    $('#addUser').click(function(){
        
        var formdata = {
            Username: $('#username').val(),
            Password: $('#password').val(),   
            Fristname: $('#fristname').val(), //Firstname
            Lastname: $('#lastname').val(), 
            Address: $('#address').val(),        
            Email: $('#email').val(),
            Tel: $('#tel').val() 
        }

        console.log(formdata);
        
        $.ajax({

            url: 'https://servicecustomer20180508102534.azurewebsites.net/Api/Customers',
            method: 'POST',
            data: formdata
            
        }).then(function(data) {
    
            $('#alert').show();   
            $('#username').val('');
            $('#password').val('');         
            $('#name').val('');
            $('#lastname').val('');
            $('#address').val('');      
            $('#email').val('');
            $('#telephone').val('');
            console.log('Added');
            ons.notification.alert("Create User Success !!");
        });
    });
});


$(function(){

    $('#alert').hide();

    $('#addPayment').click(function(){
        
        var formdata = {
            userId: disUserID,
            orderId: $('#orderID').val(),   
            webName: "040",
            price: $('#price').val()*$('#amount').val(), 

        }

        console.log(formdata);
        
        $.ajax({

            url: 'https://api-payment.herokuapp.com/api/payment/new',
            method: 'POST',
            data: formdata
            
        }).then(function(data) {
    
            $('#alert').show();   
            $('#userId').val('');
            $('#orderId').val('');         
            $('#webName').val('');
            $('#price').val('');
            console.log('Added');
            ons.notification.alert("Paymwnt Success !!");
        });
    });
});

