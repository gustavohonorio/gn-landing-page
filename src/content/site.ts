/**
 * Conteúdo editável do site.
 *
 * Todos os textos, preços e contatos ficam aqui. Para alterar o site,
 * normalmente basta editar este arquivo e rodar `npm run build`.
 *
 * Itens marcados com "PENDENTE" aguardam confirmação da marca.
 */

export const site = {
  name: "GN",
  /** PENDENTE: domínio definitivo (usado em SEO, sitemap e compartilhamento). */
  url: "https://www.gn-exemplo.com.br",
  title: "GN — Tônico Capilar e Microagulhamento Capilar",
  description:
    "GN: Tônico Capilar e Microagulhamento Capilar em São Carlos - SP. Cuidado que vai além da estética, com atenção individualizada. Fale conosco pelo WhatsApp.",
  tagline: "Cuidado • Ciência • Resultados",
  signature: "GN — Um propósito que vai além dos cabelos.",

  contact: {
    /** Número com DDI + DDD, só dígitos. Ex.: 5511999999999 */
    whatsapp: "5516997514107",
    /** PENDENTE: usuário do Instagram sem "@". Deixe vazio para ocultar os links. */
    instagram: "",
    /** Cidade/endereço de atendimento. Deixe vazio para ocultar. */
    location: "São Carlos - SP",
  },

  messages: {
    general: "Olá! Vim pelo site da GN e gostaria de mais informações.",
    product: "Olá! Vim pelo site da GN e tenho interesse no Tônico Capilar.",
    service:
      "Olá! Vim pelo site da GN e gostaria de agendar o Microagulhamento Capilar.",
  },

  hero: {
    title: "Cuidado que vai",
    titleEmphasis: "além da estética",
    text: "Mais do que uma marca, a GN é um propósito: promover o autocuidado, valorizar a autoestima e oferecer uma nova perspectiva sobre os cuidados capilares.",
  },

  about: {
    eyebrow: "Quem somos",
    title: "Uma história de dedicação e propósito",
    paragraphs: [
      "A GN nasceu de um sonho construído com esforço, perseverança e muito estudo, com o desejo de fazer a diferença na vida das pessoas.",
      "Acreditamos que o cuidado capilar vai além da aparência: envolve confiança, identidade e autoestima.",
      "Cada detalhe da GN representa o compromisso de evoluir, buscar conhecimento e oferecer uma experiência pautada na responsabilidade, no acolhimento e na valorização de cada pessoa.",
    ],
    pillars: [
      { icon: "flask", title: "Conhecimento e inovação", text: "Estudo constante para oferecer cosméticos e cuidados alinhados ao que há de mais atual." },
      { icon: "leaf", title: "Cuidado individualizado", text: "Atenção às necessidades de cada pessoa, do primeiro contato ao acompanhamento." },
      { icon: "target", title: "Responsabilidade e acolhimento", text: "Uma experiência segura, próxima e respeitosa, que valoriza cada pessoa." },
    ],
  },

  product: {
    name: "Tônico Capilar GN",
    subtitle: "Tecnologia cosmética e cuidado em cada gota.",
    /** PENDENTE: confirmar volume (foto mostra 50 ml, catálogo mostra 30 ml). */
    volume: "30 ml",
    price: 119.9,
    description:
      "Desenvolvido com uma combinação de ativos cosméticos selecionados, o Tônico Capilar GN foi pensado para integrar sua rotina de cuidados com o couro cabeludo e os fios.",
    benefits: [
      "Ativos cosméticos selecionados",
      "Cuidado diário para o couro cabeludo e os fios",
      "Ação antioxidante",
    ],
    /** PENDENTE: confirmar modo de uso com a marca. */
    howToUse:
      "Aplique diretamente no couro cabeludo limpo, massageando suavemente. Uso tópico/externo. Siga as orientações recebidas no atendimento.",
  },

  service: {
    name: "Microagulhamento Capilar",
    subtitle: "Uma abordagem de estímulo cutâneo.",
    paragraphs: [
      "O microagulhamento é uma técnica que utiliza microagulhas para produzir microperfurações controladas na pele, desencadeando respostas naturais de reparação tecidual.",
      "No contexto capilar, é estudado como abordagem complementar em determinadas condições, sempre a partir de avaliação individual e indicação profissional.",
    ],
    steps: [
      { title: "Avaliação", text: "Análise individual do couro cabeludo, do seu histórico e de possíveis contraindicações." },
      { title: "Sessão", text: "Procedimento realizado com técnica adequada, materiais esterilizados e rigorosos cuidados de higiene." },
      { title: "Acompanhamento", text: "Orientações pós-sessão e indicação do número de sessões adequado ao seu caso." },
    ],
    prices: [
      { label: "1 sessão", price: 69.9 },
      { label: "Pacote com 4 sessões", price: 249.9, highlight: true },
    ],
  },

  combined: {
    title: "Um cuidado que se complementa",
    text: "O Tônico Capilar GN pode fazer parte da sua rotina em casa, complementando o acompanhamento profissional. Na avaliação, você recebe orientações sobre como associar os dois cuidados.",
  },

  contactSection: {
    eyebrow: "Fale com a GN",
    title: "Seu cabelo merece cuidado e atenção",
    question:
      "Está percebendo uma queda capilar acentuada, notando falhas ou sentindo que seus cabelos estão perdendo densidade?",
    text: "Entre em contato com a GN e saiba mais sobre o nosso tônico capilar e a nossa proposta de cuidados.",
  },

  /** PENDENTE: revisar perguntas e respostas com a marca. */
  faq: [
    {
      q: "Como compro o Tônico Capilar?",
      a: "Pelo WhatsApp. Basta clicar em qualquer botão do site, e combinamos forma de pagamento e entrega ou retirada.",
    },
    {
      q: "O microagulhamento capilar dói?",
      a: "A sensação costuma ser leve e bem tolerada. Cada pessoa tem uma sensibilidade, e o procedimento é ajustado ao seu conforto.",
    },
    {
      q: "Quantas sessões são indicadas?",
      a: "Depende de cada caso. A indicação é feita após a avaliação individual, e também oferecemos um pacote com 4 sessões.",
    },
    {
      q: "Posso usar o tônico junto com o microagulhamento?",
      a: "Sim. Os dois cuidados podem ser associados, e você recebe orientações de como e quando aplicar o tônico entre as sessões.",
    },
    {
      q: "Existe alguma contraindicação?",
      a: "Sim, algumas condições exigem cuidado especial, e por isso toda sessão começa com uma avaliação. Conte seu histórico no atendimento e, em caso de dúvida, consulte um médico dermatologista.",
    },
  ],

  disclaimer:
    "Os resultados podem variar de pessoa para pessoa. As informações deste site não substituem a avaliação de um profissional de saúde.",
} as const;

export function whatsappLink(message: string = site.messages.general) {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function instagramLink() {
  return site.contact.instagram
    ? `https://www.instagram.com/${site.contact.instagram}/`
    : "";
}

const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

export function formatPrice(value: number) {
  return brl.format(value);
}
