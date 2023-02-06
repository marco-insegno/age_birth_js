let body = document.querySelector('#particles-js');

let btnOpener = document.querySelector('.opener');

let faces = document.querySelectorAll('.face');

let cardWrapper = document.querySelector('.card-wrapper');

let confirm = true;

let persons = [
    { name: 'Ester', lastname: 'Insegno', age: 3, birthDay: 03, birthMonth: 06, birthYear: 2019, url: './img/ester.png' },
    { name: 'Agata', lastname: 'Insegno', age: 5, birthDay: 30, birthMonth: 06, birthYear: 2016, url: './img/agata.png' },
    { name: 'Papà', lastname: 'Marco', age: 37, birthDay: 23, birthMonth: 02, birthYear: 1985, url: './img/marco.png' },
    { name: 'Santa', lastname: 'Klaus', age: 99, birthDay: 01, birthMonth: 01, birthYear: 1924, url: './img/babbo-natale.png' }
];


btnOpener.addEventListener('click', () => {

    if (confirm == true) {

        confirm = false;

        btnOpener.style.transform = `rotate(360deg)`;
        btnOpener.style.transition = `1s`;

        faces.forEach((face, i) => {

            let angle = (360 * i) / faces.length;

            face.setAttribute('data-angle', angle);

            face.style.transform = `rotate(${angle}deg) translate(150px) scale(1.5) rotate(-${angle}deg)`;

            face.style.backgroundImage = `url(${persons[i].url})`;

            face.addEventListener('click', () => {

                // set complementary angle selected element
                let faceAngle = face.dataset.angle;

                let expAngle = 360 - faceAngle;

                faces.forEach((face, i) => {
                    let angle = (360 * i) / faces.length;

                    face.style.transform = `rotate(${angle + expAngle}deg) translate(150px) scale(1.5) rotate(-${angle + expAngle}deg)`;

                });

                let day = persons[i].birthDay;
                let month = persons[i].birthMonth;
                let year = persons[i].birthYear;
                let min = run(day, month, year)[0];
                let sec = run(day, month, year)[1];

                // card creation selected item
                cardWrapper.innerHTML = `

                                        <div class="card mx-auto mt-4 mt-md-0 pt-0 pt-md-3" style="width: 70%">
                                                <img src="${persons[i].url}" class="card-img-top img-fluid img-card my-0" alt="${persons[i].name} ${persons[i].lastname}">
                                                <div class="card-body">
                                                    <h4 class="card-title my-0 fw-bolder">${persons[i].name} ${persons[i].lastname}</h4>
                                                    <p class="card-text mb-2">${day}/${month}/${year}</p>
                                                    <div class="text-center">
                                                        <p class="card-text">Nato/a da:</p>
                                                        <p class="card-text fw-bolder">${age} anni</p>
                                                        <p class="card-text fw-bolder">${months} mesi</p>
                                                        <p class="card-text fw-bolder">${weeks} settimane</p>
                                                        <p class="card-text fw-bolder">${totdays} giorni</p>
                                                        <p class="card-text fw-bolder">${hour} ore</p>
                                                        <p class="card-text fw-bolder">${min} minuti</p>
                                                        <p class="card-text fw-bolder mb-2">${sec} secondi</p>
                                                    </div>
                                                    <div class="text-center">
                                                        <p class="card-text mb-2">Quanto manca al tuo prossimo compleanno?</p>
                                                        <button type="button" class="btn btn-card" data-bs-toggle="modal" data-bs-target="#exampleModal">Next birthday</button>
                                                    </div>
                                                </div>
                                            </div>`;

                let modale = document.querySelector('.modal-section');

                modale.innerHTML = `
                                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered">
                                            <div class="modal-content">
                                                <div class="modal-header">

                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body fs-3 text-uppercase text-center">
                                                    <p>Il tuo prossimo compleanno sarà tra...</p>
                                                    <p class="mt-3"> 🥁 🥁 🥁 🥁 🥁 🥁</p>
                                                    <div class="mt-3 mb-2 fs-1">
                                                        <span class="text-darktext-dark">...${bday} giorni</span> e <span>${nhour} ore!!!</span>
                                                    </div>
                                                    <p>🥳 🎂 🎉 🍭 🎊 🍰 🎁 🥳 🎂 🎉 🍭 🎊 🍰 🎁 🥳 🎂 🎉 🍭</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>`;

                body.appendChild(modale);
            })

        })

    } else {

        confirm = true;

        btnOpener.style.transform = `rotate(0deg)`;

        faces.forEach((face, i) => {

            face.style.transform = `rotate(0deg) translate(0px)`;

        });

        cardWrapper.innerHTML = ``;

    }

})

// Function that calculates life time
let ap;

function run(dd, mm, yy) {

    main = "válida"

    if (main == "válida") {

        function leapyear(a) {
            if (((a % 4 == 0) && (a % 100 != 0)) || (a % 400 == 0)) return true
            else return false
        }

        days = new Date()
        gdate = days.getDate()
        gmonth = days.getMonth()
        gyear = days.getFullYear()

        age = gyear - yy;

        if ((mm == (gmonth + 1)) && (dd <= parseInt(gdate))) {
            age = age
        } else {
            if (mm <= (gmonth)) {
                age = age
            } else {
                age = age - 1
            }
        }

        if (age == 0) age = age

        if (mm <= (gmonth + 1)) age = age - 1
        if ((mm == (gmonth + 1)) && (dd > parseInt(gdate))) age = age + 1

        var m = 0;
        var n = 0;

        if (mm == 12) { n = 31 - dd; }
        if (mm == 11) { n = 61 - dd; }
        if (mm == 10) { n = 92 - dd; }
        if (mm == 9) { n = 122 - dd; }


        if (mm == 8) { n = 153 - dd; }
        if (mm == 7) { n = 184 - dd; }
        if (mm == 6) { n = 214 - dd; }
        if (mm == 5) { n = 245 - dd; }
        if (mm == 4) { n = 275 - dd; }
        if (mm == 3) { n = 306 - dd; }
        if (mm == 2) { n = 334 - dd; if (leapyear(yy)) n = n + 1 }
        if (mm == 1) { n = 365 - dd; if (leapyear(yy)) n = n + 1 }

        if (gmonth == 1) m = 31
        if (gmonth == 2) {
            m = 59
            if (leapyear(gyear)) m = m + 1;
        }

        if (gmonth == 3) { m = 90; if (leapyear(gyear)) m = m + 1; }
        if (gmonth == 4) { m = 120; if (leapyear(gyear)) m = m + 1; }
        if (gmonth == 5) { m = 151; if (leapyear(gyear)) m = m + 1; }
        if (gmonth == 6) { m = 181; if (leapyear(gyear)) m = m + 1; }
        if (gmonth == 7) { m = 212; if (leapyear(gyear)) m = m + 1; }
        if (gmonth == 8) { m = 243; if (leapyear(gyear)) m = m + 1; }
        if (gmonth == 9) { m = 273; if (leapyear(gyear)) m = m + 1; }
        if (gmonth == 10) { m = 304; if (leapyear(gyear)) m = m + 1; }
        if (gmonth == 11) { m = 334; if (leapyear(gyear)) m = m + 1; }
        if (gmonth == 12) { m = 365; if (leapyear(gyear)) m = m + 1; }

        totdays = (parseInt(age) * 365)
        totdays += age / 4
        totdays = parseInt(totdays) + gdate + m + n;


        // month

        months = age * 12
        months += 12 - parseInt(mm)
        months += gmonth


        // console.log(` Hai ${age} anni , ${totdays} giorni, ${months} mesi`);

        var p = 0;
        //weeks
        if (gmonth == 1) p = 31 + gdate

        if (gmonth == 2) {
            p = 59 + gdate
            if (leapyear(gyear)) m = m + 1;
        }

        if (gmonth == 3) { p = 90 + gdate; if (leapyear(gyear)) p = p + 1; }
        if (gmonth == 4) { p = 120 + gdate; if (leapyear(gyear)) p = p + 1; }
        if (gmonth == 5) { p = 151 + gdate; if (leapyear(gyear)) p = p + 1; }
        if (gmonth == 6) { p = 181 + gdate; if (leapyear(gyear)) p = p + 1; }
        if (gmonth == 7) { p = 212 + gdate; if (leapyear(gyear)) p = p + 1; }
        if (gmonth == 8) { p = 243 + gdate; if (leapyear(gyear)) p = p + 1; }
        if (gmonth == 9) { p = 273 + gdate; if (leapyear(gyear)) p = p + 1; }
        if (gmonth == 10) { p = 304 + gdate; if (leapyear(gyear)) p = p + 1; }
        if (gmonth == 11) { p = 334 + gdate; if (leapyear(gyear)) p = p + 1; }
        if (gmonth == 12) { p = 365 + gdate; if (leapyear(gyear)) p = p + 1; }

        weeks = totdays / 7
        weeks += " settimane"
        weeks = parseInt(weeks);
        // console.log(weeks + " settimane");

        // hours
        var time = new Date()
        ghour = time.getHours()
        gmin = time.getMinutes()
        gsec = time.getSeconds()

        hour = ((age * 365) + n + p) * 24
        hour += (parseInt(age / 4) * 24)

        if (ap == 0) {
            hour = hour - hr
        } else {
            if (ap == 1) {
                hour = hour - (11 + hr)
            }
        }

        // console.log(hour + " ore");

        var min
        //minutes
        min = (hour * 60) + gmin
        // console.log(min + " minuti")
        sec = (min * 60) + gsec
        // console.log(sec + " secondi")

        mm = mm - 1
        var r

        if (mm == 0) r = 1
        if (mm == 1) r = 31
        if (mm == 2) {
            r = 59
            if (leapyear(gyear)) m = m + 1;
        }

        if (mm == 3) { r = 90; if (leapyear(gyear)) r = r + 1; }
        if (mm == 4) { r = 120; if (leapyear(gyear)) r = r + 1; }
        if (mm == 5) { r = 151; if (leapyear(gyear)) r = r + 1; }
        if (mm == 6) { r = 181; if (leapyear(gyear)) r = r + 1; }
        if (mm == 7) { r = 212; if (leapyear(gyear)) r = r + 1; }
        if (mm == 8) { r = 243; if (leapyear(gyear)) r = r + 1; }
        if (mm == 9) { r = 273; if (leapyear(gyear)) r = r + 1; }
        if (mm == 10) { r = 304; if (leapyear(gyear)) r = r + 1; }
        if (mm == 11) { r = 334; if (leapyear(gyear)) r = r + 1; }
        if (mm == 12) { r = 365; if (leapyear(gyear)) r = r + 1; }

        mm = mm + 1;
        r = parseInt(r) + parseInt(dd);

        if (mm > (gmonth + 1)) {
            bday = r - m - gdate
        } else {
            if (mm == (gmonth + 1) && (gdate < dd)) {
                bday = (r - m - gdate)
            } else {
                if ((leapyear(gyear)) && ((mm > 2) && (dd < 29))) {
                    a = 366
                } else {
                    a = 365
                }
                bday = a + (r - m - gdate)
            }
        }

        nhour = 24 - parseInt(ghour)
        nmin = 60 - parseInt(gmin)
        nsec = 60 - parseInt(gsec)

        function lyear(a) {
            if (((a % 4 == 0) && (a % 100 != 0)) || (a % 400 == 0)) return true;
            else return false;
        }

        mm = parseInt(mm)
        dd = parseInt(dd)
        yy = parseInt(yy)

        if ((mm < 1) || (mm > 12) || (dd < 1) || (dd > 31) || (yy < 1) || (mm == " ") || (dd == " ") || (yy == " "))
            main = "inválida"
        else
            if (((mm == 4) || (mm == 6) || (mm == 9) || (mm == 11)) && (dd > 30)) main = "inválida"
            else if (mm == 2) {
                if (dd > 29) main = "inválida"
                else if ((dd > 28) && (!lyear(yy))) main = "inválida"
            }
            else main = main

        if (main == "válida") {
            var m
            if (mm == 1) n = 31 + 1
            if (mm == 2) n = 59 + 1
            if (mm == 3) n = 90 + 1
            if (mm == 4) n = 120 + 1
            if (mm == 5) n = 151 + 1
            if (mm == 6) n = 181 + 1
            if (mm == 7) n = 212 + 1
            if (mm == 8) n = 243 + 1
            if (mm == 9) n = 273 + 1
            if (mm == 10) n = 304 + 1
            if (mm == 11) n = 334 + 1
            if (mm == 12) n = 365 + 1

            if ((mm == 1) || (mm == 3) || (mm == 5) || (mm == 7) || (mm == 8) || (mm == 10) || (mm == 12))
                n += 31 + dd
            else if ((mm == 4) || (mm == 6) || (mm == 9) || (mm == 11))
                n += 31 + dd + 1
            else if (mm == 2) {
                if (lyear(yy)) n += 29 + dd - 3
                else if (!lyear(yy)) n += 28 + dd - 1
            }

            fours = yy / 4
            hunds = yy / 100
            fhunds = yy / 400
            var iDay

            iDay = (yy + n + fours - hunds + fhunds) % 7;
            iDay = parseInt(iDay)

            // switch (iDay) {
            //     case 1: console.log(" sei nato/a di Domenica"); break
            //     case 2: console.log(" sei nato/a di lunedi"); break
            //     case 3: console.log(" sei nato/a di martedi"); break
            //     case 4: console.log(" sei nato/a di mercoledi"); break
            //     case 5: console.log(" sei nato/a di giovedi"); break
            //     case 6: console.log(" sei nato/a di venerdi"); break
            //     case 7: console.log(" sei nato/a di sabato"); break
            //     case 0: console.log(" sei nato/a di sabato"); break
            // }

        } else {

            console.log("Data " + main);
        }

        if (((bday == 366) && (leapyear(yy))) || ((bday == 365) && (!leapyear(yy)))) {
            // console.log("Oggi è il tuo Compleanno!");
            alert("Buon Compleanno")
        } else {
            // console.log("Il tuo prossimo compleanno sarà tra: " + bday + " giorni " + nhour + " ore ");
        }

    }

    // console.log(`${age} anni - ${months} mesi - ${weeks} settimane - ${totdays} giorni - ${hour} ore -  ${min} minuti - ${sec} secondi`);

    return [min, sec];

}

// ParticlesJS
particlesJS("particles-js", {
    particles: {
        number: {
            value: 232,
            density: { enable: true, value_area: 1024.832479306268 },
        },
        color: { value: "#ff00a6" },
        shape: {
            type: "star",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 },
        },
        opacity: {
            value: 1,
            random: true,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
        },
        size: {
            value: 11.824990145841554,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
        },
        line_linked: {
            enable: true,
            distance: 141.89988175009864,
            color: "#ff00a6",
            opacity: 0.748916042569965,
            width: 1,
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "bounce",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true,
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
        },
    },
    retina_detect: true,
});




