const movies = [
  {
    title: "Avengers Endgame",
    category: "film",
    image:"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
    description:"Superheroji se okupljaju za zadnju borbu protiv Thanosa."
  },
  {
    title:"Fight club",
    category:"film",
    image:"https://s3.amazonaws.com/nightjarprod/content/uploads/sites/344/2024/08/21164326/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK-scaled.jpg",
    description:"Tajni klub borbi koji prerasta u kaos."
  },
  {
    title:"Kum",
    category:"film",
    image:"https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description:"Mafijaška obitelj i borba za moć."
  },
  {
    title:"The dark knight",
    category:"film",
    image:"https://upload.wikimedia.org/wikipedia/hr/8/8a/Dark_Knight.jpg",
    description:"Batman protiv Jokera koji širi kaos."
  },
  {
    title:"Lord of the rings: return of the king",
    category:"film",
    image:"https://m.media-amazon.com/images/M/MV5BMTZkMjBjNWMtZGI5OC00MGU0LTk4ZTItODg2NWM3NTVmNWQ4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description:"Završna borba za sudbinu Međuzemlja."
  },
  {
    title:"Clockwork orange",
    category:"film",
    image:"https://upload.wikimedia.org/wikipedia/en/7/73/A_Clockwork_Orange_%281971%29.png",
    description:"Mračna priča o nasilju i kontroli uma."
  },
  {
    title:"Matrix",
    category:"film",
    image:"https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description:"Čovjek otkriva da svijet nije stvaran."
  },
  {
    title:"Joker",
    category:"film",
    image:"https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Joker_%282019_film%29_poster.jpg/250px-Joker_%282019_film%29_poster.jpg",
    description:"Priča o nastanku poznatog negativca."
  },
  {
    title:"Inglorious bastards",
    category:"film",
    image:"https://m.media-amazon.com/images/M/MV5BODZhMWJlNjYtNDExNC00MTIzLTllM2ItOGQ2NGVjNDQ3MzkzXkEyXkFqcGc@._V1_.jpg",
    description:"Alternativna priča o Drugom svjetskom ratu."
  },
  {
    title:"Star Wars episode III: Revenge of the sith",
    category:"film",
    image:"https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_FMjpg_UX1000_.jpg",
    description:"Pad Anakina na tamnu stranu."
  },
  {
    title:"Django unchained",
    category:"film",
    image:"https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg",
    description:"Oslobođeni rob kreće u osvetu."
  },
  {
    title:"Oppenheimer",
    category:"film",
    image:"https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg",
    description:"Priča o stvaranju atomske bombe."
  },
  {
    title:"Taxi driver",
    category:"film",
    image:"https://m.media-amazon.com/images/M/MV5BZDNhMGYwM2UtMTdlZS00MGQ1LWI2YzAtODY5YWI1MjYyNzRmXkEyXkFqcGc@._V1_.jpg",
    description:"Usamljeni vozač tone u ludilo."
  },
  {
    title:"Terminator",
    category:"film",
    image:"https://m.media-amazon.com/images/M/MV5BZmE0YzIxM2QtMGNlMi00MjRmLWE3MWMtOWQzMGVjMmU0YTFmXkEyXkFqcGc@._V1_.jpg",
    description:"Robot iz budućnosti dolazi ubiti metu."
  },
  {
    title:"Terminator 2",
    category:"film",
    image:"https://m.media-amazon.com/images/M/MV5BNGMyMGNkMDUtMjc2Ni00NWFlLTgyODEtZTY2MzBiZTg0OWZiXkEyXkFqcGc@._V1_.jpg",
    description:"Napredniji robot štiti dječaka."
  },
  {
    title:"Scream 1",
    category:"film",
    image:"https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p18852_p_v10_al.jpg",
    description:"Ubojica terorizira tinejdžere."
  },
  {
    title:"Star Wars: Episode I - The Phantom Menace",
    category:"film",
    image:"https://m.media-amazon.com/images/M/MV5BODVhNGIxOGItYWNlMi00YTA0LWI3NTctZmQxZGUwZDEyZWI4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description:"Početak priče o Skywalkerima."
  },
  {
    title:"Star Wars: Episode II - Attack of the Clones",
    category:"film",
    image:"https://m.media-amazon.com/images/M/MV5BNTgxMjY2YzUtZmVmNC00YjAwLWJlODMtNDBhNzllNzIzMjgxXkEyXkFqcGc@._V1_.jpg",
    description:"Počinje rat klonova."
  },
  {
    title:"Maze runner",
    category:"film",
    image:"https://upload.wikimedia.org/wikipedia/en/thumb/b/be/The_Maze_Runner_poster.jpg/250px-The_Maze_Runner_poster.jpg",
    description:"Mladi pokušavaju pobjeći iz labirinta."
  },
  {
    title:"Fifty shades of grey",
    category:"film",
    image:"https://upload.wikimedia.org/wikipedia/en/7/73/Fifty_Shades_of_Grey_poster.jpg",
    description:"Romantična priča s mračnim elementima."
  },

  // SERIJE
  {
    title:"Breaking bad",
    category:"serija",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNXBCFvo6jQiQCfNQ488UzIXMCg5AvbGnU4P6urSPmJzT_LT2-ymTxGNvU36Du-AUuJ4_pI0JehA84fUVfj94jzl5qNFqFeMZceG6dq6A&s=10",
    description:"Profesor kemije ulazi u svijet droge."
  },
  {
    title:"Steel ball run",
    category:"serija",
    image:"https://www.animationmagazine.net/wordpress/wp-content/uploads/STEEL-BALL-RUN-JoJos-Bizarre-Adventure-1_ImageVisual_EN-logo.jpg",
    description:"Avantura kroz utrku puna borbi."
  },
  {
    title:"Better call Saul",
    category:"serija",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRimEHbz4Blzqgcu0-qbS9jHLEKoeuxb7VwXg&s",
    description:"Odvjetnik u kriminalnom svijetu."
  },
  {
    title:"The Sopranos",
    category:"serija",
    image:"https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7894124_b_v8_ab.jpg",
    description:"Život mafijaškog šefa."
  },
  {
    title:"The Last Dance",
    category:"serija",
    image:"https://m.media-amazon.com/images/M/MV5BOTQyYmQ1N2UtYjFkNS00NzgyLTk5YTUtYjExMDdjOTA3MGU2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description:"Priča o Michaelu Jordanu."
  },
  {
    title:"Rick and Morty",
    category:"serija",
    image:"https://m.media-amazon.com/images/M/MV5BZGQyZjk2MzMtMTcyNC00NGU3LTlmNjItNDExMWM4ZDFhYmQ2XkEyXkFqcGc@._V1_.jpg",
    description:"Lude avanture kroz svemir."
  },
  {
    title:"Dexter",
    category:"serija",
    image:"https://m.media-amazon.com/images/M/MV5BMTQ3YmQ4YzMtOTkyZC00YmM5LThhZjEtM2E0MjFkNTc0OGJhXkEyXkFqcGc@._V1_.jpg",
    description:"Ubojica koji ubija zločince."
  },
  {
    title:"Seinfeld",
    category:"serija",
    image:"https://m.media-amazon.com/images/M/MV5BMmRjNjZjN2ItN2FkYi00ZDg0LWExN2EtMTU2ODUwNWU1M2NhXkEyXkFqcGc@._V1_.jpg",
    description:"Humor iz svakodnevnog života."
  },
  {
    title:"Friends",
    category:"serija",
    image:"https://m.media-amazon.com/images/M/MV5BOTU2YmM5ZjctOGVlMC00YTczLTljM2MtYjhlNGI5YWMyZjFkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description:"Grupa prijatelja i njihov život."
  },
  {
    title:"Two and a half men",
    category:"serija",
    image:"https://m.media-amazon.com/images/M/MV5BMzI2ZDMyNGEtNmIwOS00NTI1LThlZDctYzYzYmE3NDNlNTJlXkEyXkFqcGc@._V1_.jpg",
    description:"Komedija o dvojici braće."
  },
  {
    title:"Dragon Ball Z",
    category:"serija",
    image:"https://m.media-amazon.com/images/M/MV5BN2VlNTdlMzQtYzE5OC00YmYwLTgyZTItYjEzMWY0ZDNjMTJhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description:"Borbe i avanture Saiyana."
  },
  {
    title:"Narcos",
    category:"serija",
    image:"https://m.media-amazon.com/images/M/MV5BNzQwOTcwMzIwN15BMl5BanBnXkFtZTgwMjYxMTA0NjE@._V1_.jpg",
    description:"Priča o narkokartelima."
  },
  {
    title:"South Park",
    category:"serija",
    image:"https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p184338_b_v12_au.jpg",
    description:"Crni humor i satira."
  },
  {
    title:"Monster",
    category:"serija",
    image:"https://m.media-amazon.com/images/M/MV5BYzU2MWQ5NGQtYmNlMC00ZjJkLWJmODItZDM5MDM3YmUyMWJkXkEyXkFqcGc@._V1_.jpg",
    description:"Mračna psihološka priča."
  },
  {
    title:"Berserk",
    category:"serija",
    image:"https://preview.redd.it/why-did-berserk-1997-end-so-abruptly-v0-do545xyqxe3e1.jpeg?auto=webp&s=4eefd107c46ada5fb01142d91df1e00b40eadf53",
    description:"Tamna fantasy priča."
  },
  {
    title:"The Simpsons",
    category:"serija",
    image:"https://m.media-amazon.com/images/M/MV5BNTU2OWE0YWYtMjRlMS00NTUwLWJmZWUtODFhNzJiMGJlMzI3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description:"Obiteljska animirana komedija."
  },
  {
    title:"The Boys",
    category:"serija",
    image:"https://m.media-amazon.com/images/M/MV5BZjU4OWNiYzQtMzc1NS00NjZlLTgyYTctZWY4ZmEzMTkxYjA4XkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg",
    description:"Heroji nisu ono što se čine."
  },
  {
    title:"The Mandalorian",
    category:"serija",
    image:"https://m.media-amazon.com/images/M/MV5BNjgxZGM0OWUtZGY1MS00MWRmLTk2N2ItYjQyZTI1OThlZDliXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description:"Lovac na glave u Star Wars svijetu."
  },
  {
    title:"Stranger Things",
    category:"serija",
    image:"https://substackcdn.com/image/fetch/$s_!QNsE!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1876d157-4a02-4794-8cd0-89d510a7d6f6_740x925.jpeg",
    description:"Djeca i nadnaravne sile."
  },
  {
    title:"Chernobyl",
    category:"serija",
    image:"https://upload.wikimedia.org/wikipedia/en/a/a7/Chernobyl_2019_Miniseries.jpg",
    description:"Katastrofa i posljedice nuklearne nesreće."
  },

  // IGRICE (isti linkovi ostavljeni)
  {
    title:"Dark Souls Remastered",
    category:"igrice",
    image:"https://gaming-cdn.com/images/products/2364/orig/dark-souls-remastered-pc-game-steam-cover.jpg?v=1704206354",
    description:"Teška igra puna bossova."
  },
  {
    title:"Dark Souls II",
    category:"igrice",
    image:"https://upload.wikimedia.org/wikipedia/en/e/ed/Dark_Souls_II_cover.jpg",
    description:"Još brutalniji nastavak."
  },
  {
    title:"Dark Souls III",
    category:"igrice",
    image:"https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Dark_souls_3_cover_art.jpg/250px-Dark_souls_3_cover_art.jpg",
    description:"Brza i teška borba."
  },
  {
    title:"Bloodborne",
    category:"igrice",
    image:"https://image.api.playstation.com/vulcan/img/rnd/202010/2614/Sy5e8DmeKIJVjlAGraPAJYkT.png",
    description:"Mračna akcija protiv čudovišta."
  },
  {
    title:"Elden Ring",
    category:"igrice",
    image:"https://assets-prd.ignimgs.com/2021/06/12/elden-ring-button-03-1623460560664.jpg",
    description:"Ogroman open world."
  },
  {
    title:"Terraria",
    category:"igrice",
    image:"https://upload.wikimedia.org/wikipedia/en/1/1a/Terraria_Steam_artwork.jpg",
    description:"2D avantura i gradnja."
  },
  {
    title:"Minecraft",
    category:"igrice",
    image:"https://store-images.s-microsoft.com/image/apps.17382.13510798885735219.9735d495-578c-4a4c-b892-3eb3a780b3a0.d3792486-cf98-40c0-a2c1-d6443f0e2b70",
    description:"Gradnja i preživljavanje."
  },
  {
    title:"Hollow Knight",
    category:"igrice",
    image:"https://upload.wikimedia.org/wikipedia/en/d/de/Hollow_Knight_2026_cover_art.jpg",
    description:"Platformer s borbama."
  },
  {
    title:"Sekiro: Shadows Die Twice ",
    category:"igrice",
    image:"https://upload.wikimedia.org/wikipedia/en/6/6e/Sekiro_art.jpg",
    description:"Samurajska borba i stealth."
  },
  {
    title:"Middle Earth: Shadow of War",
    category:"igrice",
    image:"https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA04402_00/4/i_104ac8e1b4e4e700ac38bff7103b9a3625959a28797b01db7d9935cbebc51160/i/icon0.png",
    description:"Borba protiv orkova."
  },
  {
    title:"Ark Survival Evolved",
    category:"igrice",
    image:"https://upload.wikimedia.org/wikipedia/en/2/2b/ArkSurvivalEvolved.png",
    description:"Preživljavanje s dinosaurima."
  },
  {
    title:"God of War Ragnarok",
    category:"igrice",
    image:"https://upload.wikimedia.org/wikipedia/en/e/ee/God_of_War_Ragnar%C3%B6k_cover.jpg",
    description:"Kratos i nordijska mitologija."
  },
  {
    title:"Spyro",
    category:"igrice",
    image:"https://image.api.playstation.com/cdn/UP0002/CUSA12125_00/wQimEr4XlJnBh9zJL6h8vwIoB919zvRy.png",
    description:"Zmaj u avanturi."
  },
  {
    title:"Dragon Ball Z Kakarot",
    category:"igrice",
    image:"https://upload.wikimedia.org/wikipedia/en/e/e4/Dragon_Ball_Z_Kakarot_logo.png",
    description:"Priča o Gokuu."
  },
  {
    title:"Mortal Kombat 11",
    category:"igrice",
    image:"https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Mortal_Kombat_11_cover_art.png/250px-Mortal_Kombat_11_cover_art.png",
    description:"Brutalne borbe."
  },
  {
    title:"NBA 2K21",
    category:"igrice",
    image:"https://media.gamestop.com/i/gamestop/11103262/NBA-2K21",
    description:"Košarkaška simulacija."
  },
  {
    title:"CSGO 2",
    category:"igrice",
    image:"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/capsule_616x353.jpg?t=1749053861",
    description:"5v5 pucačina."
  },
  {
    title:"Cry of Fear",
    category:"igrice",
    image:"https://m.media-amazon.com/images/M/MV5BMTMwMmRmMTAtYTJhZC00OTIxLTg4NDItMzRkZGM1ODNmZjhkXkEyXkFqcGc@._V1_.jpg",
    description:"Horor igra."
  },
  {
    title:"Doom Eternal",
    category:"igrice",
    image:"https://upload.wikimedia.org/wikipedia/en/9/9d/Cover_Art_of_Doom_Eternal.png",
    description:"Borba protiv demona."
  },
  {
    title:"Witcher 3",
    category:"igrice",
    image:"https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Witcher_3_cover_art.jpg/250px-Witcher_3_cover_art.jpg",
    description:"RPG s jakom pričom."
  }
];

const movieList = document.getElementById("movieList");

function displayMovies(list) {
  movieList.innerHTML = "";

  list.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}">
      <h3>${movie.title}</h3>
    `;

    card.onclick = () => {
  document.getElementById("popupTitle").innerText = movie.title;
  document.getElementById("popupDesc").innerText = movie.description;
  document.getElementById("popup").style.display = "block";
};

    movieList.appendChild(card);
  });
}

function filterCategory(category) {
  if (category === "all") {
    displayMovies(movies);
  } else {
    const filtered = movies.filter(m => m.category === category);
    displayMovies(filtered);
  }
}

document.getElementById("popup").onclick = () => {
  document.getElementById("popup").style.display = "none";
};

displayMovies(movies);