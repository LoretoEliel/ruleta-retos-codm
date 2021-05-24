const API_KEY_YOUTUBE = "AIzaSyCGVgBYlyesdVjHHJBRPsqgPRQpJERoGBA";
const ID_CHANNEL_PUBLIC = "UCb9ZS5SioGNAwWOEqA9_Ymw";
let URL_GOOGLE_APIS = `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY_YOUTUBE}&part=snippet`;
let URL_COMMET_VIDEO = `https://www.googleapis.com/youtube/v3/commentThreads?key=${API_KEY_YOUTUBE}&textFormat=plainText&part=snippet`;

const EY_INICIO = document.querySelector("#ey-inicio");
const EY_RETOS = document.querySelector("#ey-retos");
const EY_SORTEOS = document.querySelector("#ey-sorteos");
const EY_NAME_VIDEO = document.querySelector("#ey-name-video");
const EY_IMG_VIDEO = document.querySelector("#ey-img-video");
const EY_CANT_COMMIT_VIDEO = document.querySelector("#ey-cant-commit");
const EY_CANT_USER_VIDEO = document.querySelector("#ey-cant-users");
const EY_WINNER_VIDEO = document.querySelector("#ey-ganador");
const EY_BR = document.querySelector("#ey-br");
const EY_MJ = document.querySelector("#ey-mj");
const EY_A1_BR = document.querySelector("#ey-a1-br");
const EY_A2_BR = document.querySelector("#ey-a2-br");
const EY_CLASE = document.querySelector("#ey-clase");
const EY_A1_MJ = document.querySelector("#ey-a1-mj");
const EY_A2_MJ = document.querySelector("#ey-a2-mj");
const EY_ACTITUD_MJ = document.querySelector("#ey-actitud-mj");
const EY_G1_MJ = document.querySelector("#ey-g1-mj");
const EY_G2_MJ = document.querySelector("#ey-g2-mj");
const EY_V1_MJ = document.querySelector("#ey-v1-mj");
const EY_V2_MJ = document.querySelector("#ey-v2-mj");
const EY_V3_MJ = document.querySelector("#ey-v3-mj");
const EY_LOAD = document.querySelector("#load");
const EY_CELEBRATION = document.querySelector("#celebracion");
const EY_VIDEO = document.querySelector("#ey-video");
const EY_INPUT_ID = document.querySelector("#ey-id-video");
const EY_INPUT_ERROR = document.querySelector("#ey-error-input");

let VIDEO_ID = "";
let CHANNEL = "";
let NAME_COMMIT_VIDEO_FILTER = [];
let NAME_COMMIT_VIDEO = [];

const FUSIL = [
  "M4",
  "Type 25",
  "M16",
  "AK117",
  "AK-47",
  "ASM10",
  "BK57",
  "LK24",
  "ICR-1",
  "Man-O-War",
  "KN-44",
  "HBRa3",
  "HVK-30",
  "DR-H",
  "Peacekeeper MK2",
  "FR .556",
  "AS VAL"
];

const FRANCOTIRADOR = [
  "XPR-50",
  "Arctic .50",
  "M21 EBR",
  "DL Q33",
  "Locus",
  "NA-45",
  "Outlaw"
];

const AMETRALLADORA_LIGERA = [
  "S36",
  "UL736",
  "RPD",
  "M4LMG",
  "Chopper"
];

const SUBFUSIL = [
  "RUS-79U",
  "Chicom",
  "PDW-57",
  "Razorback",
  "MSMC",
  "HG 40",
  "Pharo",
  "GKS",
  "Cordite",
  "QQ9",
  "Fennec",
  "AGR 556",
  "QXR",
  "PP19 Bizon"
];

const ESCOPETA = [
  "HS2126",
  "BY15",
  "HS0405",
  "Striker",
  "KRM-262",
  "Echo"
];

const PISTOLA = [
  "J358",
  "MW11",
  ".50 GS",
  "Renetti"
];

const LANZADOR = [
  "FHJ-18",
  "SMRS"
];

const TIRADOR = [
  "Kilo-MC",
  "SKS",
  "SP-R 208"
];

const CUERPO_CUERPO = [
  "Cuchillo",
  "Cuerpo a cuerpo base",
  "Hacha",
  "Pala",
  "Bate de beisbol"
];

const CLASE = [
  "Explorador",
  "Payaso",
  "Medico",
  "Ninja",
  "Defensor",
  "Mecanico",
  "Estafador",
  "Maestro en trampas",
  "Aerotransportado",
  "Poltergeist",
  "Bombardero de humo",
  "Hacker",
  "Reanimaciones",
  "Ataque de racimos"
];

const ACTITUD = [
  "Purificador",
  "Maquina de guerra",
  "Maquina de muerte",
  "Escudo transformable",
  "Tempestad",
  "Pico de gravedad",
  "Aniquiladora",
  "Cañon vortice",
  "Carga de toro",
  "Halcon",
  "C.O.L.M.E.N.A",
  "Hoja sombria",
  "Nivelador",
  "Escudo balistico"
];

const LETAL = [
  "Granada de fragmentacion",
  "Granada adhesiva",
  "Mina trampa",
  "Hacha de combate",
  "Coctel molotov",
  "Termita"
];

const TACTICO = [
  "Granada cegadora",
  "Granada de humo",
  "Granada de conmocion",
  "PEM",
  "Sistema Trophy",
  "Bomba criogenica"
];

const VENTAJA_1 = [
  "Recuperacion rapida",
  "Persistencia",
  "Traje antibombas",
  "Acechador",
  "Agil",
  "Estratega",
  "Peso ligero",
  "Hipercarga",
  "Reabastecerse"
];

const VENTAJA_2 = [
  "Buitre",
  "Dureza",
  "Rastreador",
  "Fantasma",
  "Sangre fria",
  "Habilidad innata",
  "Reconocimiento",
  "Solucion rapida",
  "Lleno de energia"
];

const VENTAJA_3 = [
  "Alerta roja",
  "Linea dura",
  "Experto en demoliciones",
  "Mascara tactica",
  "Alerta",
  "Ingeniero",
  "Silencio mortal",
  "Metralla",
  "Lanzador extra"
];

document.addEventListener("DOMContentLoaded", () => {
  if (EY_INICIO) {
    if (!EY_INICIO.classList.contains("show")) EY_INICIO.classList.add("show");
  }
});

const SHOW_SORTEO = () => {
  if (EY_INPUT_ID && EY_INPUT_ERROR) {
    if (EY_INPUT_ID.value === "") {
      EY_INPUT_ERROR.classList.add("input-app--error");
      return false;
    }
    
    EY_INPUT_ERROR.classList.remove("input-app--error");
    VIDEO_ID = EY_INPUT_ID.value;

    fetch(URL_GOOGLE_APIS + `&id=${VIDEO_ID}`).then(res => {
      res.json().then(data => {
        console.log(data);
        if (EY_SORTEOS) {
          if (!EY_SORTEOS.classList.contains("show")) {
            EY_SORTEOS.classList.add("show");
            EY_INICIO.classList.remove("show");
            
            if (data.items.length) {
              if (EY_NAME_VIDEO && EY_IMG_VIDEO) {
                const LAST_VIDEO = data.items[0];
                EY_NAME_VIDEO.innerHTML = LAST_VIDEO.snippet.title;
                EY_IMG_VIDEO.src = LAST_VIDEO.snippet.thumbnails.medium.url;
                CHANNEL = LAST_VIDEO.snippet.channelTitle;
                LOAD_COMMIT_VIDEO(LAST_VIDEO.snippet.channelTitle);
              }
            }
          }
        }
      }).catch(err => {
        console.error(err);
      });
    }).catch(err => {
      console.error(err);
    });
  }
}

const LOAD_COMMIT = () => {
  LOAD_COMMIT_VIDEO(CHANNEL);
}

const LOAD_COMMIT_VIDEO = (channel) => {
  fetch(URL_COMMET_VIDEO + `&videoId=${VIDEO_ID}&maxResults=` + 900).then(res => res.json()).then(data => {
    if (EY_CANT_COMMIT_VIDEO && EY_CANT_USER_VIDEO && EY_WINNER_VIDEO) {
      if (data.items.length) {
        NAME_COMMIT_VIDEO_FILTER = [];
        NAME_COMMIT_VIDEO = [];
        EY_WINNER_VIDEO.innerHTML = ``;
        EY_CANT_COMMIT_VIDEO.innerHTML = "0";
        EY_CANT_USER_VIDEO.innerHTML = "0";
        data.items.forEach(item => {
          let repite = false;

          if (item.snippet.topLevelComment.snippet.authorDisplayName.toLowerCase() != channel.toLowerCase()) {
            NAME_COMMIT_VIDEO_FILTER.forEach(u => {
              if (u.name.toLowerCase() === item.snippet.topLevelComment.snippet.authorDisplayName.toLowerCase()) {
                repite = true;
              }
            });

            if (repite === false) {
              NAME_COMMIT_VIDEO_FILTER.push({
                name: item.snippet.topLevelComment.snippet.authorDisplayName.toLowerCase(),
                photo: item.snippet.topLevelComment.snippet.authorProfileImageUrl
              });
            }

            NAME_COMMIT_VIDEO.push({
              name: item.snippet.topLevelComment.snippet.authorDisplayName.toLowerCase(),
              photo: item.snippet.topLevelComment.snippet.authorProfileImageUrl
            });
          }
        });

        console.log({
          data: data,
          all_commit: NAME_COMMIT_VIDEO,
          all_users: NAME_COMMIT_VIDEO_FILTER
        });

        EY_CANT_COMMIT_VIDEO.innerHTML = NAME_COMMIT_VIDEO.length;
        EY_CANT_USER_VIDEO.innerHTML = NAME_COMMIT_VIDEO_FILTER.length;

        if (data.nextPageToken) {
          LOAD_COMMIT_VIDEO_NEXT(channel, data.nextPageToken);
        }
      }
    }
  }).catch(err => {
    console.error(err);
  });
}

const LOAD_COMMIT_VIDEO_NEXT = (channel, NEXT_PAGE) => {
  fetch(URL_COMMET_VIDEO + `&videoId=${VIDEO_ID}&maxResults=100&pageToken=${NEXT_PAGE}`).then(res => res.json()).then(data => {
    if (EY_CANT_COMMIT_VIDEO && EY_CANT_USER_VIDEO && EY_WINNER_VIDEO) {
      if (data.items.length) {
        data.items.forEach(item => {
          let repite = false;

          if (item.snippet.topLevelComment.snippet.authorDisplayName.toLowerCase() != channel.toLowerCase()) {
            NAME_COMMIT_VIDEO_FILTER.forEach(u => {
              if (u.name.toLowerCase() === item.snippet.topLevelComment.snippet.authorDisplayName.toLowerCase()) {
                repite = true;
              }
            });

            if (repite === false) {
              NAME_COMMIT_VIDEO_FILTER.push({
                name: item.snippet.topLevelComment.snippet.authorDisplayName.toLowerCase(),
                photo: item.snippet.topLevelComment.snippet.authorProfileImageUrl
              });
            }

            NAME_COMMIT_VIDEO.push({
              name: item.snippet.topLevelComment.snippet.authorDisplayName.toLowerCase(),
              photo: item.snippet.topLevelComment.snippet.authorProfileImageUrl
            });
          }
        });

        console.log({
          data: data,
          all_commit: NAME_COMMIT_VIDEO,
          all_users: NAME_COMMIT_VIDEO_FILTER
        });

        EY_CANT_COMMIT_VIDEO.innerHTML = NAME_COMMIT_VIDEO.length;
        EY_CANT_USER_VIDEO.innerHTML = NAME_COMMIT_VIDEO_FILTER.length;
        
        if (data.nextPageToken) {
          LOAD_COMMIT_VIDEO_NEXT(channel, data.nextPageToken);
        }
      }
    }
  }).catch(err => {
    console.error(err);
  });
}

const GET_WINNER_USER = () => {
  let array = [];
  NAME_COMMIT_VIDEO.forEach(item => {
    array.push(item);
  });

  if (EY_LOAD) {
    let count = 0;
    let r = 0;
    
    let id = setInterval(() => {
      r = Math.floor(Math.random()*array.length);
      r = r === 0 ? array.length : r;
      EY_WINNER_VIDEO.innerHTML = ``;
      EY_WINNER_VIDEO.innerHTML = `<img class="photo" src="${array[r - 1].photo}"> ${array[r - 1].name}`;
      count++;
      if (count === 100) {
        clearInterval(id);
        next = true;
        WINNER(array);
      }
    }, 100);
  }
}

const WINNER = (array) => {
  EY_LOAD.classList.remove("no-display");
  if (EY_VIDEO) {
    EY_VIDEO.play();
  }
  
  let r = Math.floor(Math.random()*array.length);
  r = r === 0 ? array.length : r;
  EY_WINNER_VIDEO.innerHTML = ``;
  EY_WINNER_VIDEO.innerHTML = `<img class="photo" src="${array[r - 1].photo}"> ${array[r - 1].name}`;

  setTimeout(() => {
    EY_LOAD.classList.add("no-display");

    if (EY_CELEBRATION) {
      EY_CELEBRATION.classList.remove("no-display");
      
      setTimeout(() => {
        EY_CELEBRATION.classList.add("no-display");
      }, 5000);
    }
  }, 2000);
}

const SHOW_RETOS = () => {
  if (EY_RETOS) {
    if (!EY_RETOS.classList.contains("show")) {
      EY_RETOS.classList.add("show");
      EY_INICIO.classList.remove("show");
    }
  }
}

const GIRAR_RETOS = () => {
  let img = document.querySelector("#ey-modo");

  if (img) {
    let i = 1;
    let x = setInterval(() => {
      let r = Math.floor(Math.random()*2);
      r = r === 0 ? 2 : r;
      console.log("Ready...");
      img.src = `./assets/img/modo/${r}.png`;

      i++;
      if (i === 50) {
        clearInterval(x);

        setTimeout(() => {
          if (EY_BR && r === 2) {
            if (!EY_BR.classList.contains("show")) {
              EY_RETOS.classList.remove("show");
              EY_BR.classList.add("show");
            }
          }

          if (EY_MJ && r === 1) {
            if (!EY_MJ.classList.contains("show")) {
              EY_RETOS.classList.remove("show");
              EY_MJ.classList.add("show");
            }
          }
        }, 500);
      }
    }, 100);
  }
}

const GET_ARMA_BR_1 = () => {
  if (EY_A1_BR) {
    let array = [];

    FUSIL.forEach(item => {
      array.push(item);
    });
    FRANCOTIRADOR.forEach(item => {
      array.push(item);
    });
    AMETRALLADORA_LIGERA.forEach(item => {
      array.push(item);
    });
    TIRADOR.forEach(item => {
      array.push(item);
    });
    
    let r = Math.floor(Math.random()*array.length);
    r = r === 0 ? array.length : r;
    EY_A1_BR.innerHTML = "";
    EY_A1_BR.innerHTML = array[r - 1];
  }
}

const GET_ARMA_BR_2 = () => {
  if (EY_A2_BR) {
    let array = [];

    SUBFUSIL.forEach(item => {
      array.push(item);
    });
    ESCOPETA.forEach(item => {
      array.push(item);
    });
    PISTOLA.forEach(item => {
      array.push(item);
    });
    LANZADOR.forEach(item => {
      array.push(item);
    });
    
    let r = Math.floor(Math.random()*array.length);
    r = r === 0 ? array.length : r;
    EY_A2_BR.innerHTML = "";
    EY_A2_BR.innerHTML = array[r - 1];
  }
}

const GET_CLASE = () => {
  if (EY_CLASE) {
    let r = Math.floor(Math.random()*CLASE.length);
    r = r === 0 ? CLASE.length : r;
    EY_CLASE.innerHTML = "";
    EY_CLASE.innerHTML = CLASE[r - 1];
  }
}

const GET_ARMA_MJ_1 = () => {
  if (EY_A1_MJ) {
    let array = [];

    FUSIL.forEach(item => {
      array.push(item);
    });
    FRANCOTIRADOR.forEach(item => {
      array.push(item);
    });
    AMETRALLADORA_LIGERA.forEach(item => {
      array.push(item);
    });
    SUBFUSIL.forEach(item => {
      array.push(item);
    });
    ESCOPETA.forEach(item => {
      array.push(item);
    });
    TIRADOR.forEach(item => {
      array.push(item);
    });
    
    let r = Math.floor(Math.random()*array.length);
    r = r === 0 ? array.length : r;
    EY_A1_MJ.innerHTML = "";
    EY_A1_MJ.innerHTML = array[r - 1];
  }
}

const GET_ARMA_MJ_2 = () => {
  if (EY_A2_MJ) {
    let array = [];

    PISTOLA.forEach(item => {
      array.push(item);
    });
    LANZADOR.forEach(item => {
      array.push(item);
    });
    CUERPO_CUERPO.forEach(item => {
      array.push(item);
    });
    
    let r = Math.floor(Math.random()*array.length);
    r = r === 0 ? array.length : r;
    EY_A2_MJ.innerHTML = "";
    EY_A2_MJ.innerHTML = array[r - 1];
  }
}

const GET_ACTITUD = () => {
  if (EY_ACTITUD_MJ) {
    let r = Math.floor(Math.random()*ACTITUD.length);
    r = r === 0 ? ACTITUD.length : r;
    EY_ACTITUD_MJ.innerHTML = "";
    EY_ACTITUD_MJ.innerHTML = ACTITUD[r - 1];
  }
}

const GET_LETAL = () => {
  if (EY_G1_MJ) {
    let r = Math.floor(Math.random()*LETAL.length);
    r = r === 0 ? LETAL.length : r;
    EY_G1_MJ.innerHTML = "";
    EY_G1_MJ.innerHTML = LETAL[r - 1];
  }
}

const GET_TACTICO = () => {
  if (EY_G2_MJ) {
    let r = Math.floor(Math.random()*TACTICO.length);
    r = r === 0 ? TACTICO.length : r;
    EY_G2_MJ.innerHTML = "";
    EY_G2_MJ.innerHTML = TACTICO[r - 1];
  }
}

const GET_VENTAJA_1 = () => {
  if (EY_V1_MJ) {
    let r = Math.floor(Math.random()*VENTAJA_1.length);
    r = r === 0 ? VENTAJA_1.length : r;
    EY_V1_MJ.innerHTML = "";
    EY_V1_MJ.innerHTML = VENTAJA_1[r - 1];
  }
}

const GET_VENTAJA_2 = () => {
  if (EY_V2_MJ) {
    let r = Math.floor(Math.random()*VENTAJA_2.length);
    r = r === 0 ? VENTAJA_2.length : r;
    EY_V2_MJ.innerHTML = "";
    EY_V2_MJ.innerHTML = VENTAJA_2[r - 1];
  }
}

const GET_VENTAJA_3 = () => {
  if (EY_V3_MJ) {
    let r = Math.floor(Math.random()*VENTAJA_3.length);
    r = r === 0 ? VENTAJA_3.length : r;
    EY_V3_MJ.innerHTML = "";
    EY_V3_MJ.innerHTML = VENTAJA_3[r - 1];
  }
}

const RELOAD = () => {
  const ALL_EY_BOX = document.querySelectorAll(".ey-box");

  ALL_EY_BOX.forEach(el => {
    el.classList.remove("show");
  });

  if (EY_INPUT_ID) EY_INPUT_ID.value = "";
  EY_INICIO.classList.add("show");
}

const GIRAR_MJ = () => {
  if (EY_LOAD) {
    EY_LOAD.classList.remove("no-display");
    if (EY_VIDEO) {
      EY_VIDEO.play();
    }

    setTimeout(() => {
      GET_ARMA_MJ_1();
      GET_ARMA_MJ_2();
      GET_ACTITUD();
      GET_LETAL();
      GET_TACTICO();
      GET_VENTAJA_1();
      GET_VENTAJA_2();
      GET_VENTAJA_3();
    }, 1000);

    setTimeout(() => {
      EY_LOAD.classList.add("no-display");
    }, 2000);
  }
}

const GIRAR_BR = () => {
  if (EY_LOAD) {
    EY_LOAD.classList.remove("no-display");
    if (EY_VIDEO) {
      EY_VIDEO.play();
    }

    setTimeout(() => {
      GET_ARMA_BR_1();
      GET_ARMA_BR_2();
      GET_CLASE();
    }, 1000);

    setTimeout(() => {
      EY_LOAD.classList.add("no-display");
    }, 2000);
  }
}