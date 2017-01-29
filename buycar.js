var car =
    {
     name:"Ford",
     models:[ "Fiesta", "Focus", "Mustang" ]
    }

var car2 =
{
  name:"BMW",
  models:[ "320", "X3", "X5" ],
}
var car3 =
{
  name:"Fiat",
  models:[ "500", "Panda" ],
}


var Tanya = function (nama, job, tempat){
         this.nama = nama;
         this.job = job;
         this.tempat = tempat;
         this.open = function (nama1, nama2){
           console.log ('Hallo, saya '+ nama1 + ' Betul ini mr '+ nama2 )
         }
         this.answer = function (nama1, nama2){
           console.log ('ya betul saya '+ nama1 +' ada yang bisa saya bantu mr '+ nama2 )
        }
         this.nanya = function (){
          console.log('mobil yang mr jual ada berapa brand ?')
        }
         this.answer2 = function(){
           console.log('ada, '+ sumModels +' Brand')
         }
         this.nanya2 = function (){
           console.log('Ok saya mau beli mobil dengan brand ' + car2.name +' dan model '+ car2.models[2])
         }
         this.answer3 = function(nama1){
           console.log ('Ok! silahkan datang ke toko saya untuk cek fisik mr '+ nama1 )
         }
}

var array = [car, car2, car3]
var sumModels = 0;

 for (var x = 0; x < array.length; x++) {
    if (array[x].hasOwnProperty('name')) {
        sumModels++;
    }
}

var namaPenjual = new Tanya ('marsh', 'marketing', 'Jakarta');
var namaPembeli = new Tanya ('mellow', 'karyawan swasta', 'jakarta');
var random = new Tanya

namaPembeli.open(namaPembeli.nama, namaPenjual.nama);
namaPenjual.answer(namaPenjual.nama, namaPembeli.nama)
random.nanya();
random.answer2();
random.nanya2();
namaPenjual.answer3(namaPembeli.nama);
