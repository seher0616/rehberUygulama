const ad = document.getElementById(`ad`);
const soyad = document.getElementById(`soyad`);
const mail = document.getElementById(`mail`);
const form = document.getElementById(`form-rehber`);
form.addEventListener(`submit`,kaydet);

function kaydet(e){
    e.prevenDefault();
    const eklenecekKisi = {
        ad: ad.value,
        soyad: soyad.value,
        mail: mail.value,
    }
    const sonuc = verileriKontrolEt(eklenecekKisi);
    if(sonuc.durum){
        console.log("sıkıntı yok");
    } else{
        bilgiOlustur(sonuc.mesaj,sonuc.durum);
        console.log(sonuc.mesaj);
    }
    // console.log(eklenecekKisi);

   
}

function verileriKontrolEt(kisi) {
    for(const deger in kisi){
        if(kisi[deger]){
              console.log(kisi[deger]);
        }
        else{
            const sonuc = {
                durum:false,
                mesaj:"Boş alan bırakmayınız"
            }
            return sonuc;
        }
      
    }
   return{
    durum: true,
    mesaj:``
   } 
}
function bilgiOlustur(mesaj,durum) {
    const olusturulanBlgi =document.createElement(`div`);
    olusturulanBlgi.textContent = mesaj;
    olusturulanBlgi.className = `bilgi`;
    if(durum){
        olusturulanBlgi.classList.add(`bilgi--success`);
    } else {
        olusturulanBlgi.classList.add(`bilgi--error`);
    }
    document.querySelector(`.container`).insertBefore(olusturulanBlgi,form)

    
}
