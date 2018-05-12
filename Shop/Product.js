$(function () {
    $.ajax({

        //CP1. Complete Ajax Code to GET ALL pin data 
        type: "GET",
        url: "https://soaproductapi.herokuapp.com/products/",

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
var zxx = 0;
          for ( i = 0; i < data.length; i++) {
if(zxx == 0){
    var row = '<div class="rowX"<div class="columnX" >><a style="color: white" href="ShowProduct.html?id=' + 
    data[i].id + '" style="text-decoration:none;"><br><img src=" ' + 
    data[i].photo + '" alt="" style="width:104px;height:142px;"><br> Description:__' + 
    data[i].description + '<br> Price:__' + 
    data[i].price + '<br> Weight:__' +
    data[i].weight +  '</a><br><div><div>';
    zxx = 1;
}if(zxx==1){
    var row = '<div class="columnX"><a style="color: white" href="ShowProduct.html?id=' + 
    data[i].id + '" style="text-decoration:none;"><br><img src=" ' + 
    data[i].photo + '" alt="" style="width:104px;height:142px;"><br> Description:__' + 
    data[i].description + '<br> Price:__' + 
    data[i].price + '<br> Weight:__' +
    data[i].weight +  '</a><br><div>';
    zxx = 0;
}

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
        }
    }

});