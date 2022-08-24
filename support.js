let enteredKeys = []

let wordsList = [
    'algoz',
    'exito',
    'sagaz',
    'amago',
    'mexer',
    'senso',
    'afeto',
    'sutil',
    'inato',
    'cerne',
    'mutuo',
    'audaz',
    'porem',
    'termo',
    'nobre',
    'aquem',
    'impio',
    'fazer',
    'secao',
    'vigor',
    'lapso',
    'negro',
    'ideia',
    'genro',
    'desde',
    'posse',
    'futil',
    'atroz',
    'razao',
    'torpe',
    'expor',
    'animo',
    'honra',
    'detem',
    'ardil',
    'gleba',
    'ansia',
    'etica',
    'poder',
    'avido',
    'sanar',
    'atras',
    'pifio',
    'muito',
    'dizer',
    'gesto',
    'digno',
    'corja',
    'justo',
    'tenaz',
    'ceder',
    'anexo',
    'fugaz',
    'vivaz',
    'porra',
    'obice',
    'cozer',
    'reves',
    'assim',
    'habil',
    'moral',
    'dever',
    'ebrio',
    'comum',
    'afago',
    'fluir',
    'vicio',
    'causa',
    'ontem',
    'censo',
    'serio',
    'citar',
    'impor',
    'seara',
    'enfim',
    'prole',
    'cisma',
    'pudor',
    'brado',
    'alibi',
    'regra',
    'gerar',
    'egide',
    'obter',
    'louco',
    'crise',
    'pesar',
    'tenue',
    'saber',
    'probo',
    'tenro',
    'pleno',
    'entao',
    'viril',
    'obvio',
    'apice',
    'parvo',
    'bruma',
    'favor',
    'visar',
    'temor',
    'sinto',
    'sabio',
    'denso',
    'tange',
    'desse',
    'reter',
    'jeito',
    'haver',
    'sobre',
    'apraz',
    'sonho',
    'seria',
    'labor',
    'fusao',
    'obito',
    'criar',
    'culto',
    'temer',
    'rogar',
    'manso',
    'ameno',
    'exodo',
    'adiar',
    'juizo',
    'presa',
    'revel',
    'forma',
    'clava',
    'birra',
    'pedir',
    'prosa',
    'vacuo',
    'mundo',
    'dogma',
    'estar',
    'fator',
    'tempo',
    'servo',
    'arduo',
    'falar',
    'varao',
    'farsa',
    'mutua',
    'acaso',
    'pulha',
    'forte',
    'falta',
    'cunho',
    'ainda',
    'exato',
    'grato',
    'etnia',
    'fluxo',
    'amplo',
    'saude',
    'achar',
    'feixe',
    'guisa',
    'assaz',
    'magoa',
    'parco',
    'cacar',
    'doido',
    'prumo',
    'laico',
    'atuar',
    'feliz',
    'tomar',
    'reles',
    'ritmo',
    'heroi',
    'lavra',
    'praxe',
    'haste',
    'nocao',
    'vital',
    'cruel',
    'debil',
    'deter',
    'levar',
    'amigo',
    'casal',
    'gozar',
    'graca',
    'matiz',
    'visao',
    'anuir',
    'crivo',
    'finjo',
    'algum',
    'devir',
    'dubio',
    'beata',
    'ordem',
    'certo',
    'rigor',
    'saida',
    'sesta',
    'epico',
    'leito',
    'bravo',
    'capaz',
    'vulto',
    'salvo',
    'sulco',
    'acima',
    'relva',
    'venia',
    'mesmo',
    'dorso',
    'possa',
    'valha',
    'unico',
    'peste',
    'valor',
    'fugir',
    'vasto',
    'coisa',
    'valia',
    'tecer',
    'garbo',
    'banal',
    'puxar',
    'sendo',
    'docil',
    'reger',
    'arido',
    'igual',
    'maior',
    'breve',
    'ativo',
    'ouvir',
    'senao',
    'falso',
    'selar',
    'velar',
    'anelo',
    'horda',
    'aureo',
    'fitar',
    'viver',
    'olhar',
    'bocal',
    'toada',
    'pompa',
    'morar',
    'gerir',
    'sumir',
    'copia',
    'voraz',
    'facil',
    'cabal',
    'leigo',
    'morte',
    'tedio',
    'noite',
    'remir',
    'mocao',
    'homem',
    'coeso',
    'uniao',
    'segue',
    'prece',
    'aviao',
    'vimos',
    'cocar',
    'vendo',
    'terno',
    'cesta',
    'tende',
    'venal',
    'aceso',
    'peixe',
    'vazio',
    'claro',
    'sonso',
    'pardo',
    'mesma',
    'facam',
    'motim',
    'hiato',
    'serie',
    'pauta',
    'passo',
    'bando',
    'virao',
    'senda',
    'velho',
    'grave',
    'opcao',
    'otica',
    'ancia',
    'rever',
    'sarue',
    'imune',
    'houve',
    'arcar',
    'havia',
    'cauda',
    'botar',
    'fixar',
    'posso',
    'liame',
    'avaro',
    'flora',
    'covil',
    'forca',
    'fenda',
    'fardo',
    'pouco',
    'gente',
    'ponto',
    'jovem',
    'jazia',
    'quota',
    'nodoa',
    'caixa',
    'saiba',
    'vetor',
    'exame',
    'fosse',
    'fauna',
    'lugar',
    'fonte',
    'cioso',
    'advem',
    'prazo',
    'vemos',
    'verba',
    'ardor',
    'ciume',
    'nicho',
    'preso',
    'feudo',
    'otimo',
    'epoca',
    'junto',
    'opaco',
    'apoio',
    'solto',
    'doido',
    'soldo',
    'pegar',
    'tendo',
    'astro',
    'serao',
    'calma',
    'cheio',
    'glosa',
    'orfao',
    'ficar',
    'apego',
    'apelo',
    'canso',
    'lasso',
    'feito',
    'estao',
    'fatal',
    'folga',
    'outro',
    'asilo',
    'deram',
    'bater',
    'crime',
    'supor',
    'signo',
    'finda',
    'plano',
    'fraco',
    'tirar',
    'carro',
    'pajem',
    'sucia',
    'ficha',
    'reses',
    'igneo',
    'forem',
    'navio',
    'burro',
    'ambas',
    'parte',
    'ruina',
    'mudar',
    'ocaso',
    'massa',
    'credo',
    'brisa',
    'atrio',
    'aonde',
    'nacao',
    'legal',
    'xeque',
    'cacho',
    'cover',
    'campo',
    'nivel',
    'setor',
    'ideal',
    'rezar',
    'plato',
    'paira',
    'lesse',
    'optar',
    'praga',
    'golpe',
    'bicho',
    'plebe',
    'torso',
    'indio',
    'tanto',
    'praia',
    'sinal',
    'pasmo',
    'abrir',
    'fruir',
    'venho',
    'genio',
    'icone',
    'messe',
    'perda',
    'troca',
    'agudo',
    'exijo',
    'aroma',
    'rubro',
    'lindo',
    'puder',
    'prado',
    'reino',
    'malta',
    'turvo',
    'afora',
    'autor',
    'round',
    'irmao',
    'zelar',
    'corpo',
    'supra',
    'traga',
    'vulgo',
    'orgia',
    'certa',
    'impar',
    'pisar',
    'lidar',
    'logro',
    'turva',
    'rival',
    'sabia',
    'terra',
    'rouca',
    'ligar',
    'sarau',
    'rapaz',
    'farao',
    'oasis',
    'raiva',
    'quase',
    'papel',
    'recem',
    'alcar',
    'facto',
    'calda',
    'limbo',
    'ereto',
    'elite',
    'paria',
    'fatuo',
    'anais',
    'tenso',
    'estro',
    'cousa',
    'meiga',
    'lider',
    'antro',
    'livro',
    'retem',
    'firme',
    'verso',
    'sitio',
    'trama',
    'prova',
    'ciclo',
    'traco',
    'pagem',
    'Crush',
    'Orgia',
    'Redir',
    'Sarue',
    'Laico',
    'Quica',
    'Sonso',
    'Praxe',
    'epico',
    'Chara',
    'apice',
    'Tenue',
    'Chato',
    'Nigga',
    'Treta',
    'Blase',
    'etica',
    'Dogma',
    'Foder',
    'Chuca',
    'Pifio',
    'Migue',
    'Vulgo',
    'Carma',
    'Sanar',
    'Porre',
    'obice',
    'Visse',
    'Atras',
    'Honra',
    'Habil',
    'Prego',
    'Placa',
    'Tosco',
    'Merce',
    'Parca',
    'Revel',
    'Cevas',
    'Aquem',
    'Etnia',
    'Juizo',
    'Legal',
    'Causo',
    'Emana',
    'Ambos',
    'Crivo',
    'Pitel',
    'Fosse',
    'Caiba',
    'Foyer',
    'Viado',
    'Pagao',
    'agape',
    'Puder',
    'Sigla',
    'Coito',
    'Banzo',
    'Casal',
    'egide',
    'Lauda',
    'Glosa',
    'Ranco',
    'Bunda',
    'Meiga',
    'Bocal',
    'Pifia',
    'Moral',
    'Paria',
    'Dengo',
    'Giria',
    'Presa',
    'Prole',
    'Arigo',
    'Massa',
    'Racha',
    'Coeso',
    'Venia',
    'Besta',
    'Vetar',
    'Calao',
    'Midia',
    'Cerne',
    'Foram',
    'Tange',
    'Miche',
    'Mocao',
    'Trupe',
    'Nicho',
    'Perua',
    'Chula',
    'Mutua',
    'Hiato',
    'aurea',
    'Paira',
    'impio',
    'Pondo',
    'Posso',
    'Vacuo',
    'Chola',
    'Preze',
    'Sagaz',
    'Dando',
    'Marra',
    'Amiga',
    'Torco',
    'Afeta',
    'Culto',
    'Pauta',
    'Exita',
    'Curro',
    'Leiga',
    'Ninfa',
    'Cutis',
    'Jirau',
    'Pudor',
    'Conta',
    'Plena',
    'exito',
    'Limbo',
    'Prezo',
    'Harem',
    'Vicar',
    'Coxas',
    'Burro',
    'Futil',
    'Coube',
    'Expus',
    'Sutil',
    'Tendo',
    'Bedel',
    'Sendo',
    'Morga',
    'Tocar',
    'Lapso',
    'Horda',
    'Caido',
    'Tenra',
    'Sarro',
    'Corja',
    'Covil',
    'Advem',
    'Preso',
    'Coque',
    'Torar',
    'Preza',
    'Tende',
    'Feudo',
    'Parte',
    'Carai',
    'amago',
    'Pirou',
    'Soube',
    'Naipe',
    'Lider',
    'Termo',
    'Posto',
    'Valha',
    'Graca',
    'Lugar',
    'Antro',
    'Saude',
    'Palas',
    'Pareo',
    'Obsta',
    'Odara',
    'Chata',
    'Coesa',
    'Babou',
    'Regra',
    'Magoa',
    'Dubia',
    'Bioma',
    'indio',
    'Meigo',
    'Adere',
    'Fugaz',
    'Poder',
    'Coisa',
    'Bonde',
    'Retro',
    'Bodas',
    'exodo',
    'Assaz',
    'Neura',
    'Banal',
    'Algoz',
    'Atada',
    'Digna',
    'Norma',
    'Baixa',
    'Razao',
    'Surta',
    'Erige',
    'Dobre',
    'Acude',
    'Sabei',
    'Polir',
    'Trave',
    'Adido',
    'Macro',
    'Ponho',
    'Heroi',
    'Fucar',
    'Falar',
    'Pairo',
    'Vosso',
    'Finda',
    'Vigor',
    'Grado',
    'Talha',
    'Uncao',
    'Lindo',
    'Cunho',
    'Fodeu',
    'Supra',
    'Voraz',
    'Parco',
    'Causa',
    'Gambe',
    'Certo',
    'Ateia',
    'Manar',
    'Guria',
    'Fomos',
    'Surto',
    'Faina',
    'Pariu',
    'Malho',
    'Troco',
    'Entao',
    'Guapo',
    'Privo',
    'Zumba',
    'Sarou',
    'Demos',
    'Alias',
    'Andar',
    'Bolou',
    'Brega',
    'Acesa',
    'Mutuo',
    'Porem',
    'Dotes',
    'Tenda',
    'Pares',
    'Haole',
    'Cesse',
    'Senso',
    'avido',
    'ardua',
    'Biota',
    'Ficha',
    'Irmos',
    'Fardo',
    'Serao',
    'Paris',
    'Inves',
    'Bodou',
    'Jeova',
    'Locus',
    'Puxou',
    'Quase',
    'Devam',
    'Houve',
    'Salve',
    'Citar',
    'Cesso',
    'Fluxo',
    'Verbo',
    'Anelo',
    'Cabal',
    'Capaz',
    'Sumam',
    'Bague',
    'Terao',
    'Havia',
    'Insta',
    'Deste',
    'idolo',
    'iamos',
    'Temos',
    'Turba',
    'Bugar',
    'Saido',
    'Suave',
    'Prosa',
    'Pampa',
    'avida',
    'Cisao',
    'Garbo',
    'Denso',
    'Leigo',
    'Posse',
    'Pajem',
    'Autos',
    'Ideal',
    'Peita',
    'Truta',
    'Desse',
    'Lidar',
    'Manas',
    'Vezes',
    'Vilao',
    'Ornar',
    'Atado',
    'Grupo',
    'Corno',
    'Jeito',
    'Ganja',
    'Ameno',
    'Cioso',
    'Uniao',
    'Sussa',
    'Estar',
    'Rosca',
    'Tenro',
    'Torou',
    'Fucei',
    'Oxala',
    'Irada',
    'Labia',
    'Pazes',
    'Gerir',
    'Judeu',
    'Pecha',
    'Atido',
    'Grosa',
    'Amuou',
    'Riste',
    'Alado',
    'Linda',
    'Clava',
    'Pugna',
    'Inato',
    'Mouro',
    'unico',
    'Topei',
    'Detem',
    'Reset',
    'Senda',
    'Lorde',
    'Mosto',
    'Picar',
    'Cenho',
    'Ladra',
    'Tiver',
    'Culta',
    'Torpe',
    'Laudo',
    'Cedeu',
    'Valia',
    'Texto',
    'Grude',
    'Pacto',
    'Nobre',
    'Santo',
    'Rusga',
    'Paura',
    'Tenaz',
    'Zumbi',
    'Torso',
    'Passe',
    'Justo',
    'Tiete',
    'Caida',
    'Ponha',
    'Saite',
    'Manha',
    'Trama',
    'Tedio',
    'Grife',
    'Tribo',
    'Advir',
    'Alude',
    'icone',
    'Feito',
    'Aluno',
    'Golfo',
    'Douto',
    'Igual',
    'Findo',
    'Irmao',
    'Legue',
    'Algia',
    'Fruir',
    'Fundo',
    'Facho',
    'Versa',
    'Exime',
    'Forum',
    'Reves',
    'Detem',
    'Bossa',
    'Tonus',
    'Remir',
    'Cunha',
    'Amigo',
    'Afeto',
    'Turbe',
    'Ouvem',
    'Urubu',
    'Comum',
    'Falsa',
    'Mesmo',
    'Frase',
    'Brisa',
    'Andes',
    'Tecer',
    'Possa',
    'Fumar',
    'Galam',
    'Sabao',
    'alibi',
    'Sonsa',
    'Guisa',
    'Venal',
    'Cousa',
    'Istmo',
    'Cumim',
    'Enfim',
    'Praza',
    'Marco',
    'Serem',
    'Assim',
    'Males',
    'Queda',
    'Axial',
    'Docil',
    'Quota',
    'Legou',
    'Lavra',
    'Sabia',
    'Deusa',
    'Gabar'
]

//função que retorna um array com base no array original
const getWord = (wordsList)=> {
    let random = Math.round(Math.random() * (wordsList.length - 0) + 0)
    let newString = wordsList[random]
    let newArray = newString.split('')
    const lower = newArray.map(element => {
        return element.toLowerCase();
    });
    // const lower = ['a', 'r', 'r', 'o', 'z']

    return lower
}

//checkbox do dark-mode
let checkbox = document.querySelector('input[type="checkbox"]')
let root = document.querySelector(":root")
let letterGrid = document.querySelectorAll('.button-inactive')
let keyboard = document.querySelectorAll('.key-item')
checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        root.style.setProperty('color-scheme', 'dark')
        for (let item of letterGrid) {
            item.style.setProperty('background-color', 'black')

        }

        for (let key of keyboard) {
            key.style.setProperty('background-color', 'black')
            key.style.setProperty('border', '2px solid whitesmoke')

        }

    } else {
        root.style.setProperty('color-scheme', 'light')
        for (let item of letterGrid) {
            item.style.setProperty('background-color', 'white')

        }

        for (let key of keyboard) {
            key.style.setProperty('background-color', '#D2D5DA')
            key.style.setProperty('border-color', 'none')

        }
    }
})