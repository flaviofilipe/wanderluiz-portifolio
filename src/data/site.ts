/**
 * ============================================================
 *  CONTEÚDO DO SITE — edite aqui sem mexer no layout.
 *  Itens marcados com TODO são provisórios.
 * ============================================================
 */

export const site = {
  name: 'Wander Luiz',
  url: 'https://wanderluiz.com.br',
  role: 'Cantor para eventos',
  region: 'Sudoeste da Bahia',
  baseCity: 'Vitória da Conquista',
  title: 'Wander Luiz | Cantor para Eventos em Vitória da Conquista e Sudoeste da Bahia',
  description:
    'Wander Luiz, cantor para casamentos, aniversários, formaturas, festas e eventos públicos em Vitória da Conquista, Brumado, Guanambi, Caetité e todo o Sudoeste da Bahia. Sertanejo, MPB, forró, axé, arrocha, pagode baiano, pop e pop rock. Do voz e violão à banda completa.',
  tagline: 'A trilha sonora do seu evento, do voz e violão à banda completa.',
  // TODO: substituir pela bio real
  bio: [
    'Wander Luiz é um cantor do Sudoeste da Bahia que transforma qualquer evento em uma grande celebração. Com voz marcante e presença de palco, transita com naturalidade entre o sertanejo, a MPB, o forró, o axé, o arrocha, o pagode baiano, o pop e o pop rock.',
    'Cada show é montado a partir do público e do momento: a emoção de uma cerimônia de casamento, a descontração de um barzinho ou a energia de uma festa de cidade. O repertório e a formação se adaptam ao que o seu evento pede.',
  ],
};

export const whatsapp = {
  number: '5577999449112',
  display: '(77) 99944-9112',
  defaultMessage: 'Olá, Wander! Vim pelo site e gostaria de saber mais sobre os shows.',
};

export function whatsappLink(message: string = whatsapp.defaultMessage) {
  return `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(message)}`;
}

// TODO: substituir pelos links reais
export const socials = [
  { name: 'Instagram', handle: '@wanderluiz', url: 'https://www.instagram.com/wanderluiz', icon: 'instagram' },
  { name: 'YouTube', handle: 'Wander Luiz', url: 'https://www.youtube.com/@wanderluiz', icon: 'youtube' },
  { name: 'Spotify', handle: 'Wander Luiz', url: 'https://open.spotify.com/', icon: 'spotify' },
] as const;

export const genres = [
  'Sertanejo',
  'MPB',
  'Forró',
  'Axé',
  'Arrocha',
  'Pagode baiano',
  'Pop',
  'Pop rock',
];

export const eventTypes = [
  'Casamentos',
  'Aniversários',
  'Formaturas',
  'Eventos corporativos',
  'Festas de cidade',
  'São João',
  'Barzinhos e restaurantes',
  'Confraternizações',
];

/**
 * VÍDEOS — use apenas o ID do YouTube.
 * Ex.: https://www.youtube.com/watch?v=ABC123xyz → id: 'ABC123xyz'
 * O primeiro é o vídeo em destaque.
 * TODO: os IDs abaixo são exemplos; troque pelos vídeos do Wander.
 */
export const videos = [
  { id: 'M7lc1UVf-VE', title: 'Wander Luiz ao vivo: show completo' },
  { id: 'M7lc1UVf-VE', title: 'Voz e violão: momentos acústicos' },
  { id: 'M7lc1UVf-VE', title: 'Pot-pourri sertanejo ao vivo' },
  { id: 'M7lc1UVf-VE', title: 'Forró e arrocha: ao vivo' },
];

/**
 * FORMATOS DE SHOW. Os `detalhes` são provisórios.
 * TODO: substituir os detalhes pelos dados reais de cada formato.
 */
export const packages = [
  {
    slug: 'voz-e-violao',
    name: 'Voz e Violão',
    kicker: 'Intimista e elegante',
    musicians: 1,
    description:
      'O formato mais versátil: voz marcante e violão para cerimônias de casamento, jantares, aniversários e eventos corporativos. Do sertanejo à MPB, a trilha certa para cada momento, ocupando pouco espaço.',
    idealFor: ['Cerimônias', 'Jantares', 'Barzinhos', 'Luaus'],
    details: [
      'Formação: voz e violão',
      'Repertório personalizado para o seu evento',
      'Duração e estrutura de som: a combinar',
    ],
  },
  {
    slug: 'voz-violao-e-bateria',
    name: 'Voz, Violão e Bateria',
    kicker: 'Mais ritmo, mesma leveza',
    musicians: 2,
    description:
      'A bateria traz ritmo e energia sem perder a proximidade do acústico. Ideal para barzinhos, confraternizações e festas que começam tranquilas e terminam com todo mundo dançando forró e pagode.',
    idealFor: ['Barzinhos', 'Confraternizações', 'Aniversários'],
    details: [
      'Formação: voz, violão e bateria',
      'Repertório personalizado para o seu evento',
      'Duração e estrutura de som: a combinar',
    ],
  },
  {
    slug: 'voz-violao-bateria-e-baixo',
    name: 'Voz, Violão, Bateria e Baixo',
    kicker: 'Som de banda, formato compacto',
    musicians: 3,
    description:
      'O peso do baixo completa a base e entrega som de banda em um formato enxuto. Feito para aniversários, formaturas e festas de médio porte que pedem arrocha, axé e pop rock com presença.',
    idealFor: ['Aniversários', 'Formaturas', 'Festas'],
    details: [
      'Formação: voz, violão, bateria e baixo',
      'Repertório personalizado para o seu evento',
      'Duração e estrutura de som: a combinar',
    ],
  },
  {
    slug: 'teclado-e-voz',
    name: 'Teclado e Voz',
    kicker: 'Sofisticação em cada nota',
    musicians: 2,
    description:
      'A harmonia do teclado com uma interpretação marcante. A escolha certa para casamentos, recepções e eventos sociais que pedem clássicos românticos, MPB e pop com elegância.',
    idealFor: ['Casamentos', 'Recepções', 'Eventos sociais'],
    details: [
      'Formação: teclado e voz',
      'Repertório personalizado para o seu evento',
      'Duração e estrutura de som: a combinar',
    ],
  },
  {
    slug: 'banda-reduzida',
    name: 'Banda Reduzida',
    kicker: 'Energia de show, estrutura enxuta',
    musicians: 4,
    description:
      'Repertório de festa com formação enxuta: sertanejo, forró, axé e pagode baiano para animar casamentos, festas de empresa e casas de show sem exigir grande estrutura.',
    idealFor: ['Festas de casamento', 'Eventos corporativos', 'Casas de show'],
    details: [
      'Formação: banda reduzida',
      'Repertório personalizado para o seu evento',
      'Duração e estrutura de som: a combinar',
    ],
  },
  {
    slug: 'banda-completa',
    name: 'Banda Completa',
    kicker: 'O show completo',
    musicians: 6,
    description:
      'Palco cheio, som potente e repertório para todos os públicos. O formato para festas de cidade, São João, micaretas, formaturas, grandes casamentos e eventos públicos em todo o Sudoeste da Bahia.',
    idealFor: ['Festas de cidade', 'São João', 'Grandes eventos'],
    details: [
      'Formação: banda completa',
      'Repertório personalizado para o seu evento',
      'Duração e estrutura de som: a combinar',
    ],
  },
];

/**
 * DEPOIMENTOS. TODO: substituir pelos depoimentos reais.
 * (Enquanto forem exemplos, não entram nos dados estruturados do Google.)
 */
export const testimonials = [
  {
    quote:
      'O Wander fez a cerimônia e a festa do nosso casamento. Na entrada todo mundo se emocionou, e depois ninguém saiu da pista. Recomendo de olhos fechados!',
    author: 'Nome do contratante',
    event: 'Casamento · Vitória da Conquista',
  },
  {
    quote:
      'Profissional do início ao fim: pontual, educado e com um repertório que agradou do mais novo ao mais velho.',
    author: 'Nome do contratante',
    event: 'Aniversário de 15 anos · Brumado',
  },
  {
    quote:
      'Contratamos a banda completa para a festa da cidade e foi um sucesso. Energia lá em cima a noite toda.',
    author: 'Nome do contratante',
    event: 'Festa municipal · Guanambi',
  },
  {
    quote:
      'Voz e violão perfeito para o nosso jantar da empresa. Elegante, no volume certo e com muito carisma.',
    author: 'Nome do contratante',
    event: 'Evento corporativo · Caetité',
  },
];

/** CIDADES ATENDIDAS: usadas no SEO e na seção "Onde atende". */
export const regions = [
  {
    name: 'Vitória da Conquista e região',
    cities: [
      'Vitória da Conquista', 'Barra do Choça', 'Planalto', 'Poções', 'Anagé', 'Belo Campo',
      'Cândido Sales', 'Encruzilhada', 'Itambé', 'Caatiba', 'Ribeirão do Largo',
      'Bom Jesus da Serra', 'Caetanos', 'Mirante', 'Boa Nova', 'Nova Canaã', 'Iguaí', 'Ibicuí',
      'Manoel Vitorino', 'Tremedal', 'Caraíbas', 'Piripá', 'Cordeiros', 'Condeúba', 'Maetinga',
      'Presidente Jânio Quadros',
    ],
  },
  {
    name: 'Brumado, Livramento e Chapada Sul',
    cities: [
      'Brumado', 'Livramento de Nossa Senhora', 'Aracatu', 'Malhada de Pedras', 'Dom Basílio',
      'Rio de Contas', 'Tanhaçu', 'Ituaçu', 'Rio do Antônio', 'Ibiassucê', 'Érico Cardoso',
      'Paramirim', 'Jussiape', 'Abaíra', 'Contendas do Sincorá', 'Barra da Estiva',
    ],
  },
  {
    name: 'Guanambi, Caetité e Serra Geral',
    cities: [
      'Guanambi', 'Caetité', 'Caculé', 'Lagoa Real', 'Igaporã', 'Riacho de Santana', 'Matina',
      'Pindaí', 'Candiba', 'Urandi', 'Sebastião Laranjeiras', 'Palmas de Monte Alto', 'Iuiú',
      'Malhada', 'Carinhanha', 'Jacaraci', 'Licínio de Almeida', 'Mortugaba', 'Guajeru',
      'Tanque Novo', 'Botuporã', 'Macaúbas',
    ],
  },
  {
    name: 'Itapetinga, Jequié e arredores',
    cities: [
      'Itapetinga', 'Itarantim', 'Macarani', 'Maiquinique', 'Potiraguá', 'Itororó',
      'Firmino Alves', 'Jequié',
    ],
  },
];

export const allCities = regions.flatMap((r) => r.cities);

export const highlightCities = [
  'Vitória da Conquista', 'Brumado', 'Livramento de Nossa Senhora', 'Caetité', 'Caculé',
  'Guanambi', 'Aracatu', 'Malhada de Pedras',
];

export const faq = [
  {
    q: 'Em quais cidades o Wander Luiz se apresenta?',
    a: `Em Vitória da Conquista, Brumado, Livramento de Nossa Senhora, Caetité, Caculé, Guanambi e em mais de ${allCities.length - 6} cidades do Sudoeste da Bahia. Outras cidades da Bahia podem ser atendidas sob consulta.`,
  },
  {
    q: 'Quais estilos musicais estão no repertório?',
    a: 'Sertanejo, MPB, forró, axé, arrocha, pagode baiano, pop e pop rock. O repertório é montado de acordo com o perfil do público e o desejo do contratante.',
  },
  {
    q: 'Para quais tipos de evento?',
    a: 'Eventos particulares e públicos: casamentos, aniversários, formaturas, confraternizações, eventos corporativos, barzinhos, festas de cidade e São João.',
  },
  {
    q: 'Como faço um orçamento?',
    a: `É só chamar no WhatsApp ${whatsapp.display} informando a data, a cidade, o tipo de evento e o formato de show desejado.`,
  },
];
