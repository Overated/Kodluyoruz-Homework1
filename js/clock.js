let myName = prompt("Lütfen İsminizi Giriniz: ")
document.getElementById("myName").innerHTML = myName

myName = (myName === "") ? prompt("Lütfen isminizi giriniz") : 
         (myName === null) ? prompt("Lütfen isminizi giriniz!") :   
         (myName < 9999) ? prompt("Sayı girdiniz, Lütfen isminizi giriniz!") : "";

setInterval(() => {

    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');
    
    let hr_dot = document.querySelector('.hr_dot');
    let min_dot = document.querySelector('.min_dot');
    let sec_dot = document.querySelector('.sec_dot');

    var time=new Date()
    document.getElementById('date').innerHTML=time.toLocaleString('tr-TR', {weekday: 'long'})

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let date = new Date()
    let am = h >= 12 ? "PM" : "AM";
    
    if (h > 12){
        h = h - 12;
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    hours.innerHTML = h + "<br><span>Saat</span>";
    minutes.innerHTML = m + "<br><span>Dakika</span>";
    seconds.innerHTML = s + "<br><span>Saniye</span>";
    ampm.innerHTML = am;

    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    // 12 saat 
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    // 60 dakika
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;
    // 60 saniye

    hr_dot.style.transform = `rotate(${h * 30}deg)`
    // 360 / 12 = 30
    min_dot.style.transform = `rotate(${m * 6}deg)`
    // 360 / 60 = 6
    sec_dot.style.transform = `rotate(${s * 6}deg)`
    // 360 / 60 = 6
})