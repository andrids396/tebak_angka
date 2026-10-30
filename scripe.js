// --- mengambil elemen ---
const inputAngka = document.querySelector("#inputAngka");
const tombolTebak = document.querySelector("#tombolTebak");
const keteranganTebakan = document.querySelector("#keteranganTebakan");
const intruksi = document.querySelector(".intruksi");
const formTebakan = document.querySelector("#formTebakan");
const tombolAngka = document.querySelectorAll(".tombolAngka");

// --- membuat angka acak antara 1 sampai 100
function membuatAngkaAcak(){
    return Math.floor(Math.random() * 100) + 1;
}

// --- inisiasi ---
inputAngka.value = "";
let mainGame = "main";
let angkaAcak = membuatAngkaAcak();
console.log("angka acak: " + angkaAcak);

// --- listener ---
// tombol tebak dan main ulang
formTebakan.addEventListener("submit", function(event){
    // mencegah halaman tidak reload
    event.preventDefault();

    if (mainGame == "main"){
        // manipulasi inputAngka
        let angkaTebakan = Number(inputAngka.value);

        inputAngka.placeholder = angkaTebakan;
        inputAngka.value = "";

        // membandingkan angkaTebakan dengan angkaAcak
        if (angkaTebakan == angkaAcak){
            keteranganTebakan.innerHTML = "Tebakan benar...";
            keteranganTebakan.style.color = "green";
            mainGame = "selesai"
            tombolTebak.textContent = "Muali lagi..."
        }
        else if(angkaTebakan < angkaAcak){
            keteranganTebakan.innerHTML = "Terlalu KECIL! Coba angka lebih besar";
            keteranganTebakan.style.color = "red";
        }
        else if (angkaTebakan > angkaAcak){
            keteranganTebakan.innerHTML = "Terlalu BESAR! Coba angka lebih kecil";
            keteranganTebakan.style.color = "blue";
        }
    }else{
        // membuat angka acak
        angkaAcak = membuatAngkaAcak();
        console.log("angka acak: " + angkaAcak);
        tombolTebak.textContent = "Tebak";
        inputAngka.value = "";
        inputAngka.placeholder = "Masukan angka..."

        keteranganTebakan.innerHTML = "Belum menebak!!!";
        keteranganTebakan.style.color = "rgb(170, 170, 170)";

        intruksi.innerHTML = '<p class="intruksi">Komputer sedang mimilih angka <strong>1 sampai 100 <br><span class="loadingMencariAngka">. . .</span></strong></p>'
        inputAngka.disabled = true;
        tombolTebak.disabled = true;

        mainGame = "main";

        // loading awal mencari angka 1 sampai 100
        setTimeout(()=>{
            intruksi.innerHTML = '<p class="intruksi">Komputer telah memilih angka <strong>antara 1-100</strong> <br>Coba tebak!!!</p>'
            inputAngka.disabled = false;
            tombolTebak.disabled = false;
            document.getElementById("inputAngka").focus();
        }, 1200);
        }
});

// memantau input
inputAngka.addEventListener("input", function(){
    this.value = this.value.replace(/[^0-9]/g, "");

    keteranganTebakan.innerHTML = "Belum menebak!!!";
    keteranganTebakan.style.color = "rgb(170, 170, 170)";
});

inputAngka.disabled = true;
tombolTebak.disabled = true;

// loading awal mencari angka 1 sampai 100
setTimeout(()=>{
    intruksi.innerHTML = '<p class="intruksi">Komputer telah memilih angka <strong>antara 1-100</strong> <br>Coba tebak!!!</p>'
    inputAngka.disabled = false;
    tombolTebak.disabled = false;
    document.getElementById("inputAngka").focus();
}, 1200);

// listener tombol angka
tombolAngka.forEach(function(tombol){
    tombol.addEventListener("click", function(){
        // ambil angka
        const angka = this.getAttribute("angka");

        inputAngka.value = inputAngka.value + angka;
        inputAngka.focus();

        keteranganTebakan.innerHTML = "Belum menebak!!!";
        keteranganTebakan.style.color = "rgb(170, 170, 170)";
    });
})