var songButton;
var songGrid;
let songs{
  "landslide": {
    "name": "Landslide",
    "artist": ["The Chicks"],
    "album_art": "Chicks_Home.jpeg"
  },
  "georgia": {
    "name": "Georgia on My Mind",
    "artist": ["Chloe x Halle"],
    "album_art": "cxh.jpeg"
  },
  "right": {
    "name": "Right on Time",
    "artist": ["Brandi Carlile"],
    "album_art": "righttime.jpeg"
  },
  "life": {
    "name": "This Is A Life",
    "artist": ["Son Lux", "Mitski", "David Byran"],
    "album_art": "thisisalife.jpeg"
  },
  "fast": {
    "name": "Fast Car",
    "artist": ["Tracy Chapman"],
    "album_art": "tracychapman.jpeg"
  },
  "babyhold": {
    "name": "Baby Can I Hold You",
    "artist": ["Tracy Chapman"],
    "album_art": "tracychapman.jpeg"
  },
  "jolene": {
    "name": "Jolene",
    "artist": ["Dolly Parton"],
    "album_art": "jolene.jpeg"
  },
  "witch": {
    "name": "Which Witch",
    "artist": ["Florence + The Machine"],
    "album_art": "whichwitch.jpeg"
  },
  "vain": {
    "name": "You're so Vain",
    "artist": ["Carly Simon"],
    "album_art": "sovain.jpeg"
  },
  "cowboy": {
    "name": "cowboy like me",
    "artist": ["Taylor Swift"],
    "album_art": "evermore.jpeg"
  },
  "issoai": {
    "name": "É Isso Aí (The Blower's Daughter)",
    "artist": ["Ana Carolina", "Seu Jorge"],
    "album_art": "anaejorge.jpeg"
  },
  "amoeba": {
    "name": "Amoeba",
    "artist": ["Clairo"],
    "album_art": "clairo.jpeg"
  },
  "gimme": {
    "name": "Gimme All Your Love",
    "artist": ["Alabama Shakes"],
    "album_art": "alabamashakes.jpeg"
  },
  "loque": {
    "name": "Lo Que Construimos",
    "artist": ["Natalia Lafourcade"],
    "album_art": "natalia.jpeg"
  },
  "dream": {
    "name": "Dream a Little Dream of Me",
    "artist": ["Ella Fitzgerald", "Louis Armstrong"],
    "album_art": "ella.jpeg"
  },
  "moi": {
    "name": "Moi c'est",
    "artist": ["Camélia Jordana"],
    "album_art": "moicest.jpeg"
  },
  "alliask": {
    "name": "All I Ask",
    "artist": ["Adele"],
    "album_art": "alliask.jpeg"
  },
  "troca": {
    "name": "Troca de Calçada",
    "artist": ["Marília Mendonça"],
    "album_art": "trocadecalcado.jpeg"
  },
  "hasta": {
    "name": "Hasta la Raíz",
    "artist": ["Natalia Lafourcade"],
    "album_art": "natalia.jpeg"
  },
  "segundo": {
    "name": "O Segundo Sol - Ao Vivo",
    "artist": ["Cássia Eller"],
    "album_art": "segundosol.jpeg"
  },
  "pretty": {
    "name": "I Feel Pretty / Unpretty",
    "artist": ["Glee Cast"],
    "album_art": "glee.jpeg"
  },
  "songbird": {
    "name": "Songbird",
    "artist": ["Glee Cast"],
    "album_art": "glee.jpeg"
  },
  "lonely": {
    "name": "Lonely",
    "artist": ["Chloe x Halle"],
    "album_art": "lonely.jpeg"
  },
  "ela": {
    "name": "Ela Diz Que Me Ama",
    "artist": ["Roberta Sá", "Gilberto Gil", "Jorge Ben Jor"],
    "album_art": "eladizquemeama.jpeg"
  },
  "beija": {
    "name": "Beija Eu",
    "artist": ["Marisa Monte"],
    "album_art": "beijaeu.jpeg"
  },
  "carinho": {
    "name": "Carinhoso",
    "artist": ["Paulinho Da Viola", "Marisa Monte"],
    "album_art": "carinhoso.jpeg"
  },
  "rosyln": {
    "name": "Rosyln",
    "artist": ["Bon Iver", "St. Vincent"],
    "album_art": "roslyn.jpeg"
  },
  "dancer": {
    "name": "Tiny Dancer",
    "artist": ["Florence + The Machine"],
    "album_art": "tinydancer.jpeg"
  },
  "cello": {
    "name": "cellophane",
    "artist": ["FKA twigs"],
    "album_art": "fkatwigs.jpeg"
  },
  "icu": {
    "name": "ICU",
    "artist": ["Phoebe Bridgers"],
    "album_art": "bridgers.jpeg"
  },
  "end": {
    "name": "I Know The End",
    "artist": ["Phoebe Bridgers"],
    "album_art": "bridgers.jpeg"
  },
  "savior": {
    "name": "Savior Complex",
    "artist": ["Phoebe Bridgers"],
    "album_art": "bridgers.jpeg"
  },
  "somebody": {
    "name": "Somebody Like You - Orchestral Version",
    "artist": ["Bree Runway"],
    "album_art": "bree.jpeg"
  },
  "chuva": {
    "name": "Quando A Chuva Passar",
    "artist": ["Ivete Sangalo"],
    "album_art": "ivete.jpeg"
  },
  "care": {
    "name": "I Care - Homecoming Live",
    "artist": ["Beyoncé"],
    "album_art": "icare.jpeg"
  },
  "francis": {
    "name": "Francis Forver",
    "artist": ["Mitski"],
    "album_art": "francisforever.jpeg"
  }
}

document.addEventListener("DOMContentLoaded", function(){
  songButton = document.getElementById("generate_songs");
  songGrid = document.getElementById("songs_container");

  songButton.addEventListener("click", function(){
    addSongs(songs);
  });
});

function addSongs(songs){
  for (var key in songs){
    let newContentElement = document.createElement("DIV");
    newContentElement.style.backgroundColor = "#EDEDED";
    newContentElement.classList.add('contentItem');

    let newImage = document.createElement("IMG");
    newImage.classList.add("footerImage");
    newImage.src = var['album_art'];
    newContentElement.appendChild(newImage);

    let newContentHeading = document.createElement("H3");
   newContentHeading.classList.add('contentTitle');
   newContentHeading.innerText = "Title" + var['name'];
   newContentElement.appendChild(newContentHeading);

   let newContentSubhead = document.createElement("H4");
   newContentSubhead.innerText = "Artist:";
   newContentElement.appendChild(newContentSubhead);

   let newContentArtistList = document.createElement("UL");
   newContentElement.appendChild(newContentArtistList);

   for (var i = 0; i < songs['artist'].length; i++) {
     var currentArtist = var['artist'][i];
     var newArtist = document.createElement("LI");
     newArtist.innerText = currentArtist;
     newContentArtistList.appendChild(newArtist);
   }

   contentGridElement.appendChild(newContentElement);
  }
}
