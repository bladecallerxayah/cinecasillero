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
    video: "https://drive.google.com/file/d/1LwEKcREKAbWPWQeq6kLnjTio_O9DuQMl/preview"
  },
  {
    nome: "Resident Evil: Apocalypse",
    capa: "img/resident-evil-apocalypse.png",
    video: "https://drive.google.com/file/d/1h2lTBjMT1b5L4dq5lz_8rOYUDiAAsfr7/preview"
  },
  {
    nome: "Resident Evil: Extinction",
    capa: "img/resident-evil-extinction.png",
    video: "https://drive.google.com/file/d/1jBc0FwQkxbqdfqMe2KlPyEUupv20CbVz/preview"
  },
  {
    nome: "Resident Evil: Afterlife",
    capa: "img/resident-evil-afterlife.png",
    video: "https://drive.google.com/file/d/1PN05VYRrsPY0mGriGU5UUdeMkJjVK2OQ/preview"
  },
  {
    nome: "Resident Evil: Retribution",
    capa: "img/resident-evil-retribution.png",
    video: "https://drive.google.com/file/d/12IWVpgTs3Qv_24aIz4rRBdxGfChoMqDu/preview"
  },
  {
    nome: "Resident Evil: The Final Chapter",
    capa: "img/resident-evil-the-final-chapter.png",
    video: "https://drive.google.com/file/d/13V0Qx5WZBqMR-1d-lRILBLqeuB5xAIqb/preview"
  }
];

const animacoes = [
  {
    nome: "Resident Evil: Degeneration",
    capa: "img/resident-evil-degeneration.png",
    versoes: {
      dublado: "https://drive.google.com/file/d/1x76C6HvuO1r9n8k-_-ZcgsZfyrZEBCQy/preview",
    }
  },
  {
    nome: "Resident Evil: Damnation",
    capa: "img/resident-evil-damnation.png",
    versoes: {
      dublado: "https://drive.google.com/file/d/1ToiDhCTn6SHd2RPcDZO_LX1EQaKapB8a/preview",
    }
  },
  {
    nome: "Resident Evil: Vendetta",
    capa: "img/resident-evil-vendetta.png",
    versoes: {
      dublado: "https://drive.google.com/file/d/1sdVSxjAmeS3gKtdloUitehvNEVI41zNV/preview",
      legendado: "https://drive.google.com/file/d/1rOQZP33S-5JNUQ74unHoaLFIwzrG8vqM/preview"
    }
  },
  {
    nome: "Resident Evil: Death Island",
    capa: "img/resident-evil-death-island.png",
    versoes: {
      dublado: "https://drive.google.com/file/d/1mdm0xuQxa6DtTvVowQfR_LsAWK9_ps-a/preview",
      legendado: "https://drive.google.com/file/d/1_tLSS0U1Kc1qaPr6jXLv-l70QSrnBLgY/preview"
    }
  },
  {
    nome: "K-Pop Demon Hunters",
    capa: "img/kpop-demon-hunters.png",
    versoes: {
      dublado: "https://drive.google.com/file/d/1sLNV3CdHxmaJFxHuCQ9rk6U7V3_sROp7/preview",
      legendado: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  },
  {
    nome: "Zootopia 2",
    capa: "img/zootopia.png",
    versoes: {
      dublado: "https://drive.google.com/file/d/1F53jy-J6B0h7O-cXJLzK3PBIk5UYIOHc/preview",
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
      <div class="player-box">
        <iframe src="${filme.video}" allowfullscreen></iframe>
        <button class="rave-btn" onclick="window.open('https://rave.io/watch?url=${encodeURIComponent(filme.video)}', '_blank')">
          Assistir no Rave
        </button>
      </div>
    `;
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

  document.getElementById("player-box").innerHTML = `
    <iframe src="${ep.video}" allowfullscreen></iframe>
    <button class="rave-btn" onclick="window.open('https://rave.io/watch?url=${encodeURIComponent(ep.video)}', '_blank')">
      Assistir no Rave
    </button>
  `;
}

function abrirPlayerAnimacao(nomeAnimacao, idioma) {
  const animacao = animacoes.find(a => a.nome === nomeAnimacao);
  const link = animacao.versoes[idioma];

  document.getElementById("player-box").innerHTML = `
    <iframe src="${link}" allowfullscreen></iframe>
    <button class="rave-btn" onclick="window.open('https://rave.io/watch?url=${encodeURIComponent(link)}', '_blank')">
      Assistir no Rave
    </button>
  `;
}

function abrirPlayerDireto(link) {
  document.getElementById("player-box").innerHTML = `
    <iframe src="${link}" allowfullscreen></iframe>
    <button class="rave-btn" onclick="window.open('https://rave.io/watch?url=${encodeURIComponent(link)}', '_blank')">
      Assistir no Rave
    </button>
  `;
}

function fecharModal() {
  modal.style.display = "none";
}

window.fecharModal = fecharModal;
window.abrirPlayerSerie = abrirPlayerSerie;
window.abrirPlayerAnimacao = abrirPlayerAnimacao;
window.abrirPlayerDireto = abrirPlayerDireto;

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    fecharModal();
  }
});