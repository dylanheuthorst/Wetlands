<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Add Case</title>
    <style type="text/css">
        button {
            width: 20%;
            height: 10%;
        }
    </style>
    <script
            src="https://code.jquery.com/jquery-3.5.1.min.js"
            integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
            crossorigin="anonymous">
    </script>
    <script>
        $(document).ready(function () {
            $.ajax({
                type: 'Get',
                dataType: 'JSON',
                url: 'https://bigeyeapp1.herokuapp.com/api/clients/',
                success: function (data) {
                    // location.reload();

                    i = 0;
                    while (i < data.length){
                        clients = data[i];
                        $("#clients_input").append("<option value='"+clients.ClientID+"'>"+clients.ClientID+" "+clients.FirstName+" "+clients.LastName+"</option>");
                        i = i + 1;
                    }
                },
                error: function (err) {
                    console.log(err);
                }
            });

            $("#add_case_but").click(function () {
                casedescription1 = $("#case_description_input").val();
                casedate1 = $("#case_date_input").val();
                fee1 = $("#fee_input").val();
                casetype1 = $("#case_type_input").val();
                notes1 = $("#notes_input").val();
                client1= $("#clients_input").val();
                status1 = $("#status_input").val();


                $.ajax({
                    type: 'POST',
                    dataType: 'JSON',
                    url: 'https://bigeyeapp1.herokuapp.com/api/cases/',
                    data: {
                        Description: casedescription1,
                        CaseDate: casedate1,
                        Fee: fee1,
                        CaseType: casetype1,
                        Client: client1,
                        Status: status1,
                        Notes: notes1
                    },
                    success: function (data) {
                        alert('Case added successfully');
                        location.reload();
                    },
                    error: function (err) {
                        console.log(err);
                        errors = JSON.parse(err.responseText);
                        console.log(errors);
                        $("#case_description_input_err").text(errors.Description);
                        $("#case_date_input_err").text(errors.CaseDate);
                        $("#fee_input_err").text(errors.Fee);
                        $("#case_type_input_err").text(errors.CaseType);
                        $("#clients_input_err").text(errors.Client);
                        $("#status_input_err").text(errors.Status);
                    }
                });
            });
        });
    </script>
</head>
<header>
    <h1>Add Case</h1>
</header>
<body>
<form onsubmit="return false">
    <p><label> Clients: </label>
        <select id="clients_input">
            <option value = "">Select one</option>
        </select>
    </p>
    <p id = "clients_input_err"></p>
    <p><label> Case ID: </label><input id="ID_input" type="text" size="5"READONLY></p>
    <p id = "ID_input_err"></p>
    <p><label> Case Description: </label><input id="case_description_input" type="text" maxlength="40" size="25"></p>
    <p id = "case_description_input_err"></p>
    <p><label> Status: </label><input id="status_input" type="text" maxlength="8" size="10"></p>
    <p id = "status_input_err"></p>
    <p><label> Case Date: </label><input id="case_date_input" type="text" size="8"></p>
    <p id = "case_date_input_err"></p>
    <p><label> Fee: </label><input id="fee_input" type="text" size="7"></p>
    <p id = "fee_input_err"></p>
    <p><label> Case Type: </label><input id="case_type_input" type="text" maxlength="30" size="15"></p>
    <p id = "case_type_input_err"></p>
    <p><label> Notes: </label><input id="notes_input" type="text" maxlength="100" size="40"></p>
    <p id = "notes_input_err"></p>
    <button type="button" id="add_case_but">Add Case</button>
    <p></p>
    <a href="MainMenu.html">Main Menu</a>
</form>
</body>
</html>
