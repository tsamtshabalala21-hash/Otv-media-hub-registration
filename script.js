// OTV Media Hub WhatsApp Registration

const WHATSAPP_NUMBER = "27723041244";

document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const form = event.target;

    if (!form.reportValidity()) {
        return;
    }

    const data = new FormData(form);

    const message = `
OTV MEDIA HUB REGISTRATION

Full Name: ${data.get("name")}

Age: ${data.get("age")}

Area: ${data.get("area")}

WhatsApp Number: ${data.get("phone")}

Programme: ${data.get("programme")}

Parent/Guardian: ${data.get("guardian") || "Not provided"}

I would like to register for the Ouchaks Arts & Cultural Development Centre programme.
    `;

    const whatsappURL =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

});
