$(document).ready(function () {
    $("#reset").click(function (e) {

    });

    $("#submit").click(function (e) {

        $.ajax({

            url: 'http://api.exchangeratesapi.io/v1/latest?access_key=15a37a3d8b9b19013ffd89e4ba5f54a8',
            dataType: 'jsonp',
            success: function (json) {

                // exchange rata data is stored in json.rates

                let amount = 135;
                let GBP = amount * (json.rates.GBP);
                let USD = amount * (json.rates.USD);
                let RUB = amount * (json.rates.RUB);
                let JPY = amount * (json.rates.JPY);
                let AUD = amount*(json.rates.AUD);
                console.log(amount);
                console.log(USD);
                console.log(RUB);
                console.log(GBP);
                console.log(JPY);
                console.log(AUD);
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
