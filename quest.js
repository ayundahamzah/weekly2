//buat FUNGSI untuk memproses atau menghitung hasil survey
//  gunakan FUNGSI yang akan membatalkan default action pada sebuah event (form)
//  SIMPAN VARIABLE score dari setiap pilihan jawaban
//  SIMPAN VARIABLE list dari input pilihan jawaban
//    buat LOOPING UNTUK SELAMA list pilihan jawaban lebih kecil dari total list, index dimulai dari 0 
//        JIKA suatu jawaban dipilih MAKA lakukan penambahan 1 kepada score jawaban yang terpilih.
//
//SIMPAN score tertinggi dari setiap pilihan jawaban
//TULISKAN hasil berdasarkan nilai score pilihan yang paling tinggi 




// fungsi untuk memproses atau menghitung hasil survey
function tabulateAnswers(event){
//menghindari sifat default form dalam hal ini 'auto reload'
  event.preventDefault();
  // inisialisasi variable score dari setiap pilihan
  var c1score = 0;
  var c2score = 0;
  var c3score = 0;
 
  
  // buat list dari input pilihan jawaban
 var choices = document.getElementsByTagName('input');

  // buat loop dari semua pilihan jawaban
  for (i=0; i<choices.length; i++) {
    // jika suatu jawaban yang di pilih maka...
    if (choices[i].checked) {
      // lakukan penambahan 1 kepada score jawaban yang dipilih tersebut
      if (choices[i].value == 'c1') {
        c1score = c1score + 1;
      }
      else{
        if (choices[i].value == 'c2') {
        c2score = c2score + 1;
        }
        if (choices[i].value == 'c3') {
        c3score = c3score + 1;
        }
      }
    }

  
    // Temukan pilihan mana yang mempunyai score paling tinggi
    var maxscore = Math.max(c1score,c2score,c3score);
  
    // tuliskan hasil berdasarkan nilai score pilihan yang paling tinggi
    var answerbox = document.getElementById('answer');
    if (c1score == maxscore) { // jika user paling banyak memilih jawaban pertama, maka hasil ini yang akan di tuliskan
    answerbox.innerHTML = "You should go to the BEACH";
    }
    else {
      if (c2score == maxscore) { // jika user paling banyak memilih jawaban kedua, maka hasil ini yang akan di tuliskan
      answerbox.innerHTML = "You should go to the MOUNTAIN";
      }
      if (c3score == maxscore) { // jika user paling banyak memilih jawaban ketiga, maka hasil ini yang akan di tuliskan
      answerbox.innerHTML = "You should stay in the CITY, or go to another urban environtment";
      }
    }
  }
}

var form = document.getElementById('quiz');

form.addEventListener('submit', tabulateAnswers);


