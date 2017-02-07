$(document).ready(function() {
    // contrôle password
    $('#pass, #passOk').on('keyup', function(e) {
        // comparaison confirmation
        if ($('#pass').val() != '' && $('#passOk').val() != '' && $('#pass').val() != $('#passOk').val()) {
            $('#passStrenght').removeClass().addClass('alert alert-error').html('Erreur de confirmation');
            return false;
        }
        // majuscule, minuscule, chiffre
        var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
        // autres majuscule, minuscule, chiffre
        var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        // mini 8 caractères
        var okRegex = new RegExp("(?=.{8,}).*", "g");
        if (okRegex.test($(this).val()) === false) {
            $('#passStrenght').html('Veuillez indiquer 8 caractères minimum.');
        } else if (strongRegex.test($(this).val())) {
            $('#passStrenght').html('Votre mot de passe est validé!');
        } else if (mediumRegex.test($(this).val())) {
            $('#passStrenght').html('Utiliser des chiffres, des lettres majuscules et des caractères spéciaux.');
        } else {
            $('#passStrenght').html('Utiliser des chiffres et lettres majuscules.');
        }
        return true;
    });

    // afficher password
    $('.showpass').on('mousedown', function() {
        $(this).prev('input').prop('type', 'text');
    });
    $('.showpass').on('mouseup', function() {
        $(this).prev('input').prop('type', 'password');
    });

    // contrôle mail
    $('#mail').focusout(function() {
        var email = $("#mail").val();
        if (email.match(/[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]+/i)) {
            $('#mailOk').html('Votre mail est validé!');
        } else {
            $('#mailOk').html('Veuillez renseigner un mail valide.');
        }
    });

    // contrôle url
    $('#url').focusout(function() {
        var urlRegex = new RegExp(/^(HTTP|HTTP|http(s)?:\/\/|(www\.))?[A-Za-z0-9]+([\-\.]{1}[A-Za-z0-9]+)*\.[A-Za-z]{2,40}(:[0-9]{1,40})?(\/.*)?$/);
        var urlOk = $("#url").val();
        if (urlRegex.test(urlOk) === true) {
            $('#urlOk').html('Votre url est validée!');
        } else {
            $('#urlOk').html('Veuillez renseigner une url valide.');
        }
    });

    // ville autocompletion
    $(function() {
        $("#ville").autocomplete({
            source: function(request, response) {
                $.getJSON(
                    "http://gd.geobytes.com/AutoCompleteCity?callback=?&q=" + request.term,
                    function(data) {
                        response(data);
                    }
                );
            },
            minLength: 3,
            select: function(event, ui) {
                var selectedObj = ui.item;
                $("#ville").val(selectedObj.value);
                return false;
            },
        });
        $("#ville").autocomplete("option", "delay", 100);
    });


    // formulaire inscription
    $('button').click(function() {
        // var input = $('input').val();
        // var textarea = $('textarea').val();
        // if (input == "" || textarea == "") {
        //     alert("Veuillez renseigner tous les champs");
        // };
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
            color: $('#color').val()
        };
        if ($("#femme").is(':checked')) {
            console.log("femme")
        } else if ($("#homme").is(':checked')) {
            console.log("homme")
        }
        console.log(customer);
        return false;
    });










    function btn() {
        submit("button").prop(disable, true);
    };


});