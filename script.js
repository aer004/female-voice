var songButton;
var songGrid;
let songs = [{
    "title": "landslide",
    "name": "Landslide",
    "artist": [
      "The Chicks"
    ],
    "album_art": "Chicks_Home.jpeg"
  },
  {
    "title": "georgia",
    "name": "Georgia on My Mind",
    "artist": [
      "Chloe x Halle"
    ],
    "album_art": "cxh.jpeg"
  },
  {
    "title": "right",
    "name": "Right on Time",
    "artist": [
      "Brandi Carlile"
    ],
    "album_art": "righttime.jpeg"
  },
  {
    "title": "life",
    "name": "This Is A Life",
    "artist": [
      "Son Lux",
      "Mitski",
      "David Byran"
    ],
    "album_art": "thisisalife.jpeg"
  },
  {
    "title": "fast",
    "name": "Fast Car",
    "artist": [
      "Tracy Chapman"
    ],
    "album_art": "tracychapman.jpeg"
  },
  {
    "title": "babyhold",
    "name": "Baby Can I Hold You",
    "artist": [
      "Tracy Chapman"
    ],
    "album_art": "tracychapman.jpeg"
  },
  {
    "title": "jolene",
    "name": "Jolene",
    "artist": [
      "Dolly Parton"
    ],
    "album_art": "jolene.jpeg"
  },
  {
    "title": "witch",
    "name": "Which Witch",
    "artist": [
      "Florence + The Machine"
    ],
    "album_art": "whichwitch.jpeg"
  },
  {
    "title": "vain",
    "name": "You're so Vain",
    "artist": [
      "Carly Simon"
    ],
    "album_art": "sovain.jpeg"
  },
  {
    "title": "cowboy",
    "name": "cowboy like me",
    "artist": [
      "Taylor Swift"
    ],
    "album_art": "evermore.jpeg"
  },
  {
    "title": "issoai",
    "name": "É Isso Aí (The Blower's Daughter)",
    "artist": [
      "Ana Carolina",
      "Seu Jorge"
    ],
    "album_art": "anaejorge.jpeg"
  },
  {
    "title": "amoeba",
    "name": "Amoeba",
    "artist": [
      "Clairo"
    ],
    "album_art": "clairo.jpeg"
  },
  {
    "title": "gimme",
    "name": "Gimme All Your Love",
    "artist": [
      "Alabama Shakes"
    ],
    "album_art": "alabamashakes.jpeg"
  },
  {
    "title": "loque",
    "name": "Lo Que Construimos",
    "artist": [
      "Natalia Lafourcade"
    ],
    "album_art": "natalia.jpeg"
  },
  {
    "title": "dream",
    "name": "Dream a Little Dream of Me",
    "artist": [
      "Ella Fitzgerald",
      "Louis Armstrong"
    ],
    "album_art": "ella.jpeg"
  },
  {
    "title": "moi",
    "name": "Moi c'est",
    "artist": [
      "Camélia Jordana"
    ],
    "album_art": "moicest.jpeg"
  },
  {
    "title": "alliask",
    "name": "All I Ask",
    "artist": [
      "Adele"
    ],
    "album_art": "alliask.jpeg"
  },
  {
    "title": "troca",
    "name": "Troca de Calçada",
    "artist": [
      "Marília Mendonça"
    ],
    "album_art": "trocadecalcado.jpeg"
  },
  {
    "title": "hasta",
    "name": "Hasta la Raíz",
    "artist": [
      "Natalia Lafourcade"
    ],
    "album_art": "natalia.jpeg"
  },
  {
    "title": "segundo",
    "name": "O Segundo Sol - Ao Vivo",
    "artist": [
      "Cássia Eller"
    ],
    "album_art": "segundosol.jpeg"
  },
  {
    "title": "pretty",
    "name": "I Feel Pretty / Unpretty",
    "artist": [
      "Glee Cast"
    ],
    "album_art": "glee.jpeg"
  },
  {
    "title": "songbird",
    "name": "Songbird",
    "artist": [
      "Glee Cast"
    ],
    "album_art": "glee.jpeg"
  },
  {
    "title": "lonely",
    "name": "Lonely",
    "artist": [
      "Chloe x Halle"
    ],
    "album_art": "lonely.jpeg"
  },
  {
    "title": "ela",
    "name": "Ela Diz Que Me Ama",
    "artist": [
      "Roberta Sá",
      "Gilberto Gil",
      "Jorge Ben Jor"
    ],
    "album_art": "eladizquemeama.jpeg"
  },
  {
    "title": "beija",
    "name": "Beija Eu",
    "artist": [
      "Marisa Monte"
    ],
    "album_art": "beijaeu.jpeg"
  },
  {
    "title": "carinho",
    "name": "Carinhoso",
    "artist": [
      "Paulinho Da Viola",
      "Marisa Monte"
    ],
    "album_art": "carinhoso.jpeg"
  },
  {
    "title": "rosyln",
    "name": "Rosyln",
    "artist": [
      "Bon Iver",
      "St. Vincent"
    ],
    "album_art": "roslyn.jpeg"
  },
  {
    "title": "dancer",
    "name": "Tiny Dancer",
    "artist": [
      "Florence + The Machine"
    ],
    "album_art": "tinydancer.jpeg"
  },
  {
    "title": "cello",
    "name": "cellophane",
    "artist": [
      "FKA twigs"
    ],
    "album_art": "fkatwigs.jpeg"
  },
  {
    "title": "icu",
    "name": "ICU",
    "artist": [
      "Phoebe Bridgers"
    ],
    "album_art": "bridgers.jpeg"
  },
  {
    "title": "end",
    "name": "I Know The End",
    "artist": [
      "Phoebe Bridgers"
    ],
    "album_art": "bridgers.jpeg"
  },
  {
    "title": "savior",
    "name": "Savior Complex",
    "artist": [
      "Phoebe Bridgers"
    ],
    "album_art": "bridgers.jpeg"
  },
  {
    "title": "somebody",
    "name": "Somebody Like You - Orchestral Version",
    "artist": [
      "Bree Runway"
    ],
    "album_art": "bree.jpeg"
  },
  {
    "title": "chuva",
    "name": "Quando A Chuva Passar",
    "artist": [
      "Ivete Sangalo"
    ],
    "album_art": "ivete.jpeg"
  },
  {
    "title": "care",
    "name": "I Care - Homecoming Live",
    "artist": [
      "Beyoncé"
    ],
    "album_art": "icare.jpeg"
  },
  {
    "title": "francis",
    "name": "Francis Forver",
    "artist": [
      "Mitski"
    ],
    "album_art": "francisforever.jpeg"
  }
  // }
];

document.addEventListener("DOMContentLoaded", function(){
  songButton = document.getElementById("generate_songs");
  songGrid = document.getElementById("songs_container");

  songButton.addEventListener("click", function(){
    addSongs(songs);
  });
});

function addSongs(songs){

  for (var key of songs){

    let newContentElement = document.createElement("DIV");
    newContentElement.style.backgroundColor = "#EDEDED";
    newContentElement.classList.add('contentItem');
    newContentElement.style.textAlign = "center";

    let newImage = document.createElement("IMG");
    newImage.classList.add("footerImage");
    newImage.src = key['album_art'];
    newContentElement.appendChild(newImage);

    let newContentHeading = document.createElement("H3");
   newContentHeading.classList.add('contentTitle');
   newContentHeading.innerText = key['name'];
   newContentElement.appendChild(newContentHeading);

   let newContentSubhead = document.createElement("H4");
   //newContentSubhead.innerText = "Artist:";
   newContentElement.appendChild(newContentSubhead);

   let newContentArtistList = document.createElement("UL");
   newContentElement.appendChild(newContentArtistList);

   for (var i = 0; i < key['artist'].length; i++) {
     //var currentArtist = var['artist'][i];
     var currentArtist = key['artist'][i];
     var newArtist = document.createElement("LI");
     newArtist.innerText = currentArtist;
     newContentArtistList.appendChild(newArtist);
   }

   //contentGridElement.appendChild(newContentElement);
   songGrid.appendChild(newContentElement);
  }
}
