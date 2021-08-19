$(document).ready(function () {
    $("#reset").click(function (e) {

    });

    $("#submit").click(function (e) {

        $.ajax({

            url: 'http://api.exchangeratesapi.io/v1/latest?access_key=15a37a3d8b9b19013ffd89e4ba5f54a8',
            dataType: 'jsonp',
            success: function (json) {
                let amount = document.getElementById("box1").value;
                // exchange rata data is stored in json.rates


                document.getElementById("USD").value = (amount * (json.rates.USD));

                document.getElementById("RUB").value = (amount * (json.rates.RUB));

                document.getElementById("GBP").value = (amount * (json.rates.GBP));

                document.getElementById("JPY").value = (amount * (json.rates.JPY));

                document.getElementById("AUD").value = (amount * (json.rates.AUD));
                // timestamp can be accessed in json.timestamp
                document.getElementById("time").value = json.timestamp;

                // console.log(json.result);

            }
        });


    });

    $(document).ajaxStart(function () {

    });

    $(document).ajaxStop(function () {

    });


});
