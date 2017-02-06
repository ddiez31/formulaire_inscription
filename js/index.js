$(document).ready(function() {

    // $.ajax({
    //     url: "/json",
    //     type: "GET",
    //     dataType: "json",
    //     success: crm,
    //     error: function() {
    //         // alert("404 Not Found - Oops something went wrong !");
    //     }
    // });

    // function crm(data) {
    //     for (var i = 0; i < data.customers.length; i++) {
    //         var id = data.customers[i].id;
    //         var fname = data.customers[i].first_name;
    //         var lname = data.customers[i].last_name;
    //         var company = data.customers[i].company;
    //         var role = data.customers[i].role;
    //         var phone = data.customers[i].phone;
    //         var email = data.customers[i].email;
    //         var desc = data.customers[i].description;

    //         $("#crm").append('<div><br>' + id + '<br>' + fname + '<br>' + lname + '<br>' + company + '<br>' + role + '<br>' + phone + '<br>' + email + '<br>' + desc + '<br></div>');
    //     };
    // };


    $('button').click(function() {
        var customer, last_name, first_name, login, pass, born, ville, mail, phone, url, hobbies, color, homme, femme;
        customer = {
            last_name: $('#last_name').val(),
            first_name: $('#first_name').val(),
            login: $('#login').val(),
            pass: $('#pass').val(),
            born: $('#born').val(),
            ville: $('#ville').val(),
            mail: $('#mail').val(),
            phone: $('#phone').val(),
            url: $('#url').val(),
            hobbies: $('#hobbies').val(),
            color: $('#color').val(),
        };
        if ($("#femme").is(':checked')) {
            console.log("femme")
        } else if ($("#homme").is(':checked')) {
            console.log("homme")
        }
        console.log(customer);
        return false;

        // $(".result").append($('<div>' + customers + '</div>'));

        // $.ajax({
        //     url: customer,
        //     type: "GET",
        //     dataType: "html",
        //     success: read,
        //     error: function() {
        //         alert("404 Not Found - Oops something went wrong !");
        //     }
        // });

        // function read(form) {
        //     console.log("ok");
        //     return false;
        //     // $('#post').html(customers);
        //     // $("#crm").append('<div>' + data + '</div>');
        // }



    });


});