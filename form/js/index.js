var required = document.querySelectorAll(".required");
var registr = document.querySelector("#registr");
var simvol = document.querySelectorAll(".simvol");



for (var index = 0; index < required.length; index++) {

    required[index].addEventListener("keyup", function () {
        if (this.value != "") {

            if (this.nextElementSibling != null) {

                this.nextElementSibling.remove();
            }

        } else {

            if (this.nextElementSibling == null) {
                var msg = this.getAttribute("data-msg");

                var p = dangertext(msg);

                this.parentNode.appendChild(p);

            }


        }
    })

}



for (var index = 0; index < required.length; index++) {

    required[index].addEventListener("blur", function () {
        if (this.value == "") {

            if (this.nextElementSibling == null) {
                var msg = this.getAttribute("data-msg");

                var p = dangertext(msg);

                this.parentNode.appendChild(p);

            }


        } else {

            if (this.nextElementSibling != null) {

                this.nextElementSibling.remove();
            }

        }
    })

}




function dangertext(str) {
    var p = document.createElement("p");
    p.classList.add("text-danger");
    p.innerText = str;

    return p;
}


registr.addEventListener("submit", function (e) {
    e.preventDefault();
    var pass = document.querySelector("#pass");
    var confirm = document.querySelector("#confirm");

    for (var index = 0; index < required.length; index++) {

        if (required[index].value == "") {

            if (required[index].nextElementSibling == null) {
                var msg = required[index].getAttribute("data-msg");

                var p = dangertext(msg);

                required[index].parentNode.appendChild(p);
            }

        }
    }

    if (pass.value != confirm.value) {
        var p = document.createElement("p");

        p.innerText = "Sifre tesdiqi yanlisdir";

        p.classList.add("text-danger");

        pass.parentElement.nextElementSibling.appendChild(p)


    }


})



function alertsimvol(str) {
    var p = document.createElement("p");
    p.classList.add("text-danger");
    p.innerText = str;

    return p;
}


for (var index = 0; index < simvol.length; index++) {
    simvol[index].addEventListener("blur", function () {



        var msg = this.getAttribute("data-simvol");

        if (this.value.length < 6) {

            if (this.nextElementSibling == null) {

                var p = alertsimvol(msg);

                this.parentNode.appendChild(p);
            }

        } else {

            if (this.nextElementSibling != null) {

                this.nextElementSibling.remove();

            }
        }

    })
}