document.getElementById("cupcake-form").onsubmit = validate;

function validate() {


    clearErrors();

    //Flag variable to track if the form is valid
    let valid = true;

    //Validate First Name
    let first = document.getElementById("name").value;

    if (first == "") {
        document.getElementById("err-name").style.display = "block";
        valid = false;
    }

    let flavor = document.getElementsByName("flavor[]");
    let countFlavors = 0;
    for (let i = 0; i < flavor.length; i++) {
        if (flavor[i].checked) {
            countFlavors++
        }
    }
    if (countFlavors < 1) {
        document.getElementById("err-flavor").style.display = "block";
        valid = true;
    }
}

function clearErrors()
{
    let errors = document.getElementsByClassName("err");
    for (let i = 0; i < errors.length; i++)
    {
        errors[i].style.display = "none";
    }
}