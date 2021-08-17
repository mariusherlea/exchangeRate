$(document).ready(function () {
    $("#reset").click(function (e) {

    });

    $("#submit").click(function (e) {

        $.ajax({

            // url: 'http://api.exchangeratesapi.io/v1/convert?access_key=15a37a3d8b9b19013ffd89e4ba5f54a8 &from=GBP &to=USD &amount=10',


            url: 'http://api.exchangeratesapi.io/v1/latest?access_key=15a37a3d8b9b19013ffd89e4ba5f54a8' ,
            dataType: 'jsonp',
            success: function(json) {

                // exchange rata data is stored in json.rates
                console.log(json.rates.GBP);

                // base currency is stored in json.base
                console.log(json.rates.USD);

                // timestamp can be accessed in json.timestamp
                console.log(json.timestamp);

                // console.log(json.result);

            }
        });



    });

    $(document).ajaxStart(function () {
        $("img").show();
    });

    $(document).ajaxStop(function () {
        $("img").hide();
    });


});
