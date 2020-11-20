//page1 Delete Animal
$(document).ready(function (){
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        url: 'http://nzwetland.herokuapp.com/api/Animal/',
        success: function (data) {
            // location.reload();

            i = 0;
            while (i < data.length){
                animal = data[i];
                $("#animal_id_input").append("<option value='"+animal.id+"'>" +
                    "ID:" +animal.id+
                    "|Common Name: "+animal.commonname+
                    "|Type: " +animal.type+
                    "\</option>");
                i = i + 1;
            }
            $("#animal_id_input").change(function (){
                animal = getSingleanimal($("#animal_id_input").val());
            })
        },
        error: function (err) {
            console.log(err);
        }
    });
    function getSingleanimal(id){
        //return case object
        $.ajax({
            type: 'Get',
            dataType: 'JSON',
            async:false,
            url: 'http://nzwetland.herokuapp.com/api/Animal/'+id,
            success: function (data) {
                // location.reload();
                $("#animal_ID").text(data.id);
                $("#animal_commonname").text(data.commonname);
                $("#animal_animaltype").text(data.type);
                $("#animal_speciesname").text(data.speciesname);
                $("#animal_genusname").text(data.genusname);
                console.log(data)
            },
            error: function (err) {
                console.log(err);
            }

        });
    }
    $("#delete_but").click(function () {
        deleteanimal     = $("#animal_id_input").val();
        $.ajax({
            type: 'DELETE',
            dataType: 'JSON',
            url: 'http://nzwetland.herokuapp.com/api/Animal/'+deleteanimal,
            success: function (data) {
                alert('Animal  deleted successfully');
                if (confirm(' Delete another Animal?')) {
                    location.reload();}
                else{
                    console.log("");
                    window.location.href = "mainMenu.html";
                }

            },
            error: function (err) {
                console.log(err);
                errors = JSON.parse(err.responseText);
                console.log(errors);
                $("#animal_id_input_err").text(errors.name);
            }
        });
    });
});
// Delete Sponsor
$(document).ready(function (){
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        url: 'http://nzwetland.herokuapp.com/api/Sponsor/',
        success: function (data) {
            // location.reload();

            i = 0;
            while (i < data.length){
                sponsor = data[i];
                $("#sponsor_id_input").append("<option value='"+sponsor.id+"'>" +
                    "ID:" +sponsor.id+
                    "Name: "+sponsor.sponsorname+
                    "\</option>");
                i = i + 1;
            }
            $("#sponsor_id_input").change(function (){
                sponsor = getSinglesponsor($("#sponsor_id_input").val());
            })
        },
        error: function (err) {
            console.log(err);
        }
    });
    function getSinglesponsor(id) {
        $.ajax({
            type: 'Get',
            dataType: 'JSON',
            async: false,
            url: 'http://nzwetland.herokuapp.com/api/Sponsor/' + id,
            success: function (data) {
                // location.reload();
                $("#sponsor_ID").text(data.id);
                $("#sponsor_sponsorname").text(data.sponsorname);
                $("#sponsor_streetaddress").text(data.streetaddress);
                $("#sponsor_suburb").text(data.suburb);
                $("#sponsor_city").text(data.city);
                console.log(data)
            },
            error: function (err) {
                console.log(err);
            }

        });
    }
    $("#delete_but").click(function () {
        deletesponsor     = $("#sponsor_id_input").val();
        $.ajax({
            type: 'DELETE',
            dataType: 'JSON',
            url: 'http://nzwetland.herokuapp.com/api/Sponsor/'+deletesponsor,
            success: function (data) {
                alert('Sponsor  deleted successfully');
                if (confirm(' Delete another Sponsor?')) {
                    location.reload();}
                else{
                    console.log("");
                    window.location.href = "mainMenu.html";
                }

            },
            error: function (err) {
                console.log(err);
                errors = JSON.parse(err.responseText);
                console.log(errors);
                $("#sponsor_id_input_err").text(errors.name);
            }
        });
    });
});
//--------------------------------------------------------------------------------------------------------------------------------------------