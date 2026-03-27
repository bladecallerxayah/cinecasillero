const series = [
  {
    nome: "American Horror Story",
    capa: "img/american-horror-story.png",
    dataRef: americanHorrorStoryData
  },
  {
    nome: "Agents of S.H.I.E.L.D.",
    capa: "img/agents-of-shield.png",
    dataRef: agentsOfShieldData
  },
  {
    nome: "One Piece",
    capa: "img/one-piece.png",
    dataRef: onePieceData
  },
  {
    nome: "56 Dias",
    capa: "img/56-dias.png",
    dataRef: dias56Data
  },
  {
    nome: "Percy Jackson e os Olimpianos",
    capa: "img/percy-jackson.png",
    dataRef: percyJacksonData
  },
  {
    nome: "The Chosen",
    capa: "img/the-chosen.png",
    dataRef: theChosenData
  }
];

const filmes = [
  {
    nome: "Resident Evil (2002)",
    capa: "img/resident-evil-2002.png",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    nome: "Resident Evil: Apocalypse",
    capa: "img/resident-evil-apocalypse.png",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    nome: "Resident Evil: Extinction",
    capa: "img/resident-evil-extinction.png",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    nome: "Resident Evil: Afterlife",
    capa: "img/resident-evil-afterlife.png",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    nome: "Resident Evil: Retribution",
    capa: "img/resident-evil-retribution.png",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    nome: "Resident Evil: The Final Chapter",
    capa: "img/resident-evil-the-final-chapter.png",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    nome: "Zootopia 1 e 2",
    capa: "img/zootopia.png",
    versoes: {
      z1_dublado: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      z1_legendado: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      z2_dublado: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      z2_legendado: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  }
];

const animacoes = [
  {
    nome: "Resident Evil: Degeneration",
    capa: "img/resident-evil-degeneration.png",
    versoes: {
      dublado: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      legendado: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  },
  {
    nome: "Resident Evil: Damnation",
    capa: "img/resident-evil-damnation.png",
    versoes: {
      dublado: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      legendado: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  },
  {
    nome: "Resident Evil: Vendetta",
    capa: "img/resident-evil-vendetta.png",
    versoes: {
      dublado: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      legendado: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  },
  {
    nome: "Resident Evil: Death Island",
    capa: "img/resident-evil-death-island.png",
    versoes: {
      dublado: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      legendado: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  },
  {
    nome: "K-Pop Demon Hunters",
    capa: "img/kpop-demon-hunters.png",
    versoes: {
      dublado: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      legendado: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  }
];

const catalogoSeries = document.getElementById("catalogo-series");
const catalogoFilmes = document.getElementById("catalogo-filmes");
const catalogoAnimacoes = document.getElementById("catalogo-animacoes");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");

function criarCard(item, onClick) {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <img src="${item.capa}" alt="${item.nome}">
    <p>${item.nome}</p>
  `;
  div.onclick = onClick;
  return div;
}

series.forEach((serie) => {
  catalogoSeries.appendChild(
    criarCard(serie, () => abrirSerie(serie))
  );
});

filmes.forEach((filme) => {
  catalogoFilmes.appendChild(
    criarCard(filme, () => abrirFilme(filme))
  );
});

animacoes.forEach((animacao) => {
  catalogoAnimacoes.appendChild(
    criarCard(animacao, () => abrirAnimacao(animacao))
  );
});

function converterParaFonteOriginal(link) {
  if (!link) return "";

  const driveMatch = link.match(/https:\/\/drive\.google\.com\/file\/d\/([^/]+)\//);
  if (driveMatch) {
    return `https://drive.google.com/file/d/${driveMatch[1]}/view`;
  }

  const ytEmbedMatch = link.match(/https:\/\/www\.youtube\.com\/embed\/([^?&]+)/);
  if (ytEmbedMatch) {
    return `https://www.youtube.com/watch?v=${ytEmbedMatch[1]}`;
  }

  return link;
}

function abrirFonteParaRave(link) {
  const fonte = converterParaFonteOriginal(link);
  window.open(fonte, "_blank");
}

async function copiarFonte(link) {
  const fonte = converterParaFonteOriginal(link);

  try {
    await navigator.clipboard.writeText(fonte);
    alert("Link copiado.");
  } catch {
    prompt("Copie este link:", fonte);
  }
}

function renderizarPlayer(link) {
  document.getElementById("player-box").innerHTML = `
    <div class="player-layout">
      <div class="player-main">
        <iframe src="${link}" allowfullscreen></iframe>
      </div>

      <div class="player-sidecard">
        <div class="sidecard-titulo">Assistir com amigos</div>
        <div class="sidecard-texto">
          O Rave funciona melhor abrindo a fonte original do vídeo. Use um dos botões abaixo.
        </div>

        <button class="rave-btn" onclick="abrirFonteParaRave('${link}')">
          Abrir fonte para usar no Rave
        </button>

        <button class="link-btn" onclick="copiarFonte('${link}')">
          Copiar link da fonte
        </button>
      </div>
    </div>
  `;
}

function abrirSerie(serie) {
  const dados = serie.dataRef;

  let html = `
    <button class="modal-fechar" onclick="fecharModal()">Fechar</button>
    <h2>${dados.nome}</h2>
  `;

  dados.temporadas.forEach((temporada, tIndex) => {
    html += `<div class="temporada">`;
    html += `<h3>${temporada.nome}</h3>`;

    temporada.episodios.forEach((ep, eIndex) => {
      html += `
        <button class="ep-btn" onclick="abrirPlayerSerie('${serie.nome.replace(/'/g, "\\'")}', ${tIndex}, ${eIndex})">
          ${ep.nome}
        </button>
      `;
    });

    html += `</div>`;
  });

  html += `<div class="player-box" id="player-box"></div>`;

  modalContent.innerHTML = html;
  modal.style.display = "block";
}

function abrirFilme(filme) {
  if (filme.versoes) {
    modalContent.innerHTML = `
      <button class="modal-fechar" onclick="fecharModal()">Fechar</button>
      <h2>${filme.nome}</h2>

      <div class="versoes-box">
        <h3>Zootopia 1</h3>
        <button class="opcao-btn" onclick="abrirPlayerDireto('${filme.versoes.z1_dublado}')">
          Dublado
        </button>
        <button class="opcao-btn" onclick="abrirPlayerDireto('${filme.versoes.z1_legendado}')">
          Legendado
        </button>

        <h3 style="margin-top:16px;">Zootopia 2</h3>
        <button class="opcao-btn" onclick="abrirPlayerDireto('${filme.versoes.z2_dublado}')">
          Dublado
        </button>
        <button class="opcao-btn" onclick="abrirPlayerDireto('${filme.versoes.z2_legendado}')">
          Legendado
        </button>
      </div>

      <div class="player-box" id="player-box"></div>
    `;
  } else {
    modalContent.innerHTML = `
      <button class="modal-fechar" onclick="fecharModal()">Fechar</button>
      <h2>${filme.nome}</h2>
      <div class="player-box" id="player-box"></div>
    `;
    renderizarPlayer(filme.video);
  }

  modal.style.display = "block";
}

function abrirAnimacao(animacao) {
  modalContent.innerHTML = `
    <button class="modal-fechar" onclick="fecharModal()">Fechar</button>
    <h2>${animacao.nome}</h2>
    <div class="versoes-box">
      <button class="opcao-btn" onclick="abrirPlayerAnimacao('${animacao.nome.replace(/'/g, "\\'")}', 'dublado')">
        Assistir dublado
      </button>
      <button class="opcao-btn" onclick="abrirPlayerAnimacao('${animacao.nome.replace(/'/g, "\\'")}', 'legendado')">
        Assistir legendado
      </button>
    </div>
    <div class="player-box" id="player-box"></div>
  `;
  modal.style.display = "block";
}

function abrirPlayerSerie(nomeSerie, tIndex, eIndex) {
  const serie = series.find(s => s.nome === nomeSerie);
  const ep = serie.dataRef.temporadas[tIndex].episodios[eIndex];
  renderizarPlayer(ep.video);
}

function abrirPlayerAnimacao(nomeAnimacao, idioma) {
  const animacao = animacoes.find(a => a.nome === nomeAnimacao);
  const link = animacao.versoes[idioma];
  renderizarPlayer(link);
}

function abrirPlayerDireto(link) {
  renderizarPlayer(link);
}

function fecharModal() {
  modal.style.display = "none";
}

window.fecharModal = fecharModal;
window.abrirPlayerSerie = abrirPlayerSerie;
window.abrirPlayerAnimacao = abrirPlayerAnimacao;
window.abrirPlayerDireto = abrirPlayerDireto;
window.abrirFonteParaRave = abrirFonteParaRave;
window.copiarFonte = copiarFonte;

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    fecharModal();
  }
});