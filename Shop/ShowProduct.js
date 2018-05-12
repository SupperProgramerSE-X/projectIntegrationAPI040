var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

$(function () {
    $('#alert').hide();
    
        var pinid = getUrlParameter('id');
pinid = pinid-1; //·ต้องมี-1 เพราะมันนับน้อย
    $.ajax({
      
            
        //CP1. Complete Ajax Code to GET ALL pin data 
    
        type: "GET",
        url: "https://soaproductapi.herokuapp.com/products",

    }).then(function (data) {

        addNewRow(data);
        console.log(data);
    });

    function addNewRow(data) {

        // for (var i = 0; i < data.length; i++) {
        //     var row = '<tr><td><a href="edit.html?id=' + data[i].id + '">' + data[i].photo + '</a></td><td>' + data[i].description + '</td><td>' + data[i].photo + '</td><td>' + data[i].price + '</td><td>' + data[i].weight +  '</td> </tr>';
        //     $('#pinlist').append(row);
        // }
var i =0;
var xrow =0;
var calprice =   data[pinid].price;
var calweight =        data[pinid].weight ;
    var row = '<tr><th><a style="color: white"  href="ShowProductDetail.html?id=' + 
    data[pinid].id + '" style="text-decoration:none;"><br><img src=" ' + 
    data[pinid].photo + '" alt="" style="width:104px;height:142px;"><br> Description:__' + 
    data[pinid].description + '<br> Price:__' + 
    data[pinid].price + '<br> Weight:__' +
    data[pinid].weight +  '<br> </a><br><input  class="button button3" type="button" id="buy" value="Buy Product" /></th></tr>';

        
            //  if( i == 2+xrow ){
            //     var row = '<tr><th><a href="edit.html?id=' + 
            //     data[i].id + '" style="text-decoration:none;"><br><img src=" ' + 
            //     data[i].photo + '" alt="" style="width:104px;height:142px;"><br>' + 
            //     data[i].description + '<br>' + 
            //     data[i].price + '<br>' +
            //     data[i].weight +  '</a></th>';
            
            // xrow += 2;
            // console.log(xrow);
            //  }else{
            //     var row = '<th><a href="edit.html?id=' + 
            //     data[i].id + '" style="text-decoration:none;"><br><img src=" ' + 
            //     data[i].photo + '" alt="" style="width:104px;height:142px;"><br>Description:' + 
            //     data[i].description + '<br>' + 
            //     data[i].price + '<br>' +
            //     data[i].weight +  '</a></th>';

            //  }
            $('#pinlist').append(row);

            $("#buy").click(function() {
                 window.location.href="ShowProductDetail.html?amount="+$('#quantitiy').val();
                window.location.href = 'ShowProductDetail.html?id='+data[pinid].id;
            });
       
        
    }

});

$(function () {
    $('#alert').hide();
    
        var pinid = getUrlParameter('id');
pinid = pinid; 
       var urlProduct = 'https://pacific-peak-27279.herokuapp.com/api/ProductReview/?format=json';    
          $.ajax({
      
              //Logistic
              type: "GET",
              url:  urlProduct,
      
          }).then(function (data) {
      
              addNewRow(data);
              console.log(data);
              
           
              
          });
      
          function addNewRow(data) {
   
           
            for (var i = 0; i < data.length; i++) {
                

                if(data[i].productID == pinid){

                    var row = '<tr><td>' + 
                    data[i].id + '</td><td>' + 
                    data[i].productID + '</td><td>' + 
                    data[i].rating + '</a></td><td>' + 
                    data[i].comment + '</td><td>' + 
                    data[i].date + '</td><td>'+ 
                    data[i].reviewer+ '</td> </tr>';

                    $('#importProduct').append(row);
                }
    
                
            }
              
          
          }
      
          
      
      
      });