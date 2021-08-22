$(document).ready(function () {


    $("#hideus").click(function (e) {

            $("#us").hide();

    });

    $("#hideru").click(function (e) {

        $("#ru").hide();

    });

    $("#submit").click(function (e) {

        $.ajax({

            url: 'http://api.exchangeratesapi.io/v1/latest?access_key=15a37a3d8b9b19013ffd89e4ba5f54a8',
            dataType: 'jsonp',
            success: function (json) {
                let amount = document.getElementById("box1").value;

                // timestamp can be accessed in json.timestamp
                let today = new Date();
                document.getElementById("time").value = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

                // console.log(json.result);
                $("#usd").val(amount * (json.rates.USD));
                $("#usdrate").val(json.rates.USD);

                $("#rub").val(amount * (json.rates.RUB));
                $("#rubrate").val(json.rates.RUB);

            }


        });


    });



    $(document).ajaxStart(function () {

    });

    $(document).ajaxStop(function () {

    });


});
