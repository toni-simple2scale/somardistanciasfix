import { Building2, Wrench, Hammer, HardHat, Construction, PaintBucket, Zap, Droplets } from 'lucide-react';

export const mockData = {
  navigation: [
    { id: 'inicio', label: 'Início' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'portfolio', label: 'Portfólio' },
    { id: 'testemunhos', label: 'Testemunhos' },
    { id: 'faq', label: 'FAQ' },
    { id: 'sobre', label: 'Sobre Nós' },
    { id: 'contactos', label: 'Contactos' },
  ],

  services: [
    {
      icon: Building2,
      title: 'Gestão e Construção de Edifícios',
      description: 'Gestão completa de projetos de construção, desde o planeamento até à conclusão, garantindo qualidade e cumprimento de prazos.'
    },
    {
      icon: Construction,
      title: 'Infraestruturas Paisagísticas',
      description: 'Construção e reparação de infraestruturas paisagísticas, incluindo jardins, caminhos e áreas de lazer.'
    },
    {
      icon: Hammer,
      title: 'Demolição e Preparação',
      description: 'Serviços de demolição segura e preparação de locais de construção, com equipamento especializado.'
    },
    {
      icon: HardHat,
      title: 'Fundações e Estruturas',
      description: 'Perfurações, construção de fundações e preparação de armações de ferro com precisão técnica.'
    },
    {
      icon: Zap,
      title: 'Instalações Elétricas',
      description: 'Instalações elétricas completas, seguindo todas as normas de segurança e qualidade.'
    },
    {
      icon: Droplets,
      title: 'Canalizações',
      description: 'Sistemas de canalização para água, esgotos e gás, com materiais de primeira qualidade.'
    },
    {
      icon: PaintBucket,
      title: 'Acabamentos',
      description: 'Acabamentos finais de excelência, incluindo pintura, revestimentos e detalhes decorativos.'
    },
    {
      icon: Wrench,
      title: 'Aluguer de Equipamentos',
      description: 'Aluguer de máquinas e equipamentos para construção com condutor incluído: escavadoras, gruas, andaimes e plataformas.'
    },
  ],

  portfolio: [
    {
      title: 'Edifício Residencial',
      location: 'Almargem do Bispo, Sintra',
      description: 'Construção completa de edifício residencial com acabamentos premium.',
      client: 'Particular',
      status: 'Concluído',
      images: [
        'https://customer-assets.emergentagent.com/job_somarconst/artifacts/cjr74efg_Moradia.jpg',
        'https://customer-assets.emergentagent.com/job_somarconst/artifacts/8sj13hq4_Moradia-2.jpg',
        'https://customer-assets.emergentagent.com/job_somarconst/artifacts/mp6xoco8_Moradia-3.jpg',
        'https://customer-assets.emergentagent.com/job_somarconst/artifacts/oicktmfk_Moradia-4.jpg',
        'https://customer-assets.emergentagent.com/job_somarconst/artifacts/8wl0rmta_Moradia-5.jpg',
        'https://customer-assets.emergentagent.com/job_somarconst/artifacts/6u5iu3yu_Moradia-6.jpg',
        'https://customer-assets.emergentagent.com/job_somarconst/artifacts/5em51wck_Moradia-7.jpg',
        'https://customer-assets.emergentagent.com/job_somarconst/artifacts/9z0qk9h5_Moradia-8.jpg',
        'https://customer-assets.emergentagent.com/job_somarconst/artifacts/fxfzb2of_Moradia-9.jpg',
        'https://customer-assets.emergentagent.com/job_somarconst/artifacts/45ahst9x_Moradia-10.jpg',
        'https://customer-assets.emergentagent.com/job_somarconst/artifacts/fk7q9fi3_Moradia-11.jpg',
        'https://customer-assets.emergentagent.com/job_somarconst/artifacts/lcpf0ovp_Moradia-12.jpg',
        'https://customer-assets.emergentagent.com/job_somarconst/artifacts/cmro41gz_Moradia-13.jpg',
        'https://customer-assets.emergentagent.com/job_somarconst/artifacts/dvt7x31r_Moradia-14.jpg',
        'https://customer-assets.emergentagent.com/job_somarconst/artifacts/pfeve7fl_Moradia-15.jpg',
        'https://customer-assets.emergentagent.com/job_somarconst/artifacts/x82q0jvf_Moradia-16.jpg',
        'https://customer-assets.emergentagent.com/job_somarconst/artifacts/xaqhdi1b_Moradia-17.jpg'
      ],
      image: 'https://customer-assets.emergentagent.com/job_somarconst/artifacts/cjr74efg_Moradia.jpg'
    },
    {
      title: 'Complexo Industrial',
      location: 'Montelavar, Sintra',
      description: 'Projeto de construção de infraestrutura industrial para Modelstone, Lda.',
      client: 'Modelstone, Lda.',
      status: 'Concluído',
      images: [
        'https://customer-assets.emergentagent.com/job_somarconst/artifacts/b3w23fn8_WhatsApp%20Image%202025-10-25%20at%2012.27.01.jpeg',
        'https://customer-assets.emergentagent.com/job_somarconst/artifacts/peyml51c_WhatsApp%20Image%202025-10-25%20at%2012.44.45.jpeg',
        'https://customer-assets.emergentagent.com/job_somarconst/artifacts/96xpdb5y_WhatsApp%20Image%202025-10-25%20at%2012.44.48.jpeg',
        'https://customer-assets.emergentagent.com/job_somarconst/artifacts/w89s8aef_WhatsApp%20Image%202025-10-25%20at%2012.44.53.jpeg',
        'https://customer-assets.emergentagent.com/job_somarconst/artifacts/omfvmlh0_WhatsApp%20Image%202025-10-25%20at%2012.44.54.jpeg',
        'https://customer-assets.emergentagent.com/job_somarconst/artifacts/4l5gtac9_WhatsApp%20Image%202025-10-25%20at%2012.46.37.jpeg',
        'https://customer-assets.emergentagent.com/job_somarconst/artifacts/g6ut9tmj_WhatsApp%20Image%202025-10-25%20at%2012.47.34.jpeg',
        'https://customer-assets.emergentagent.com/job_somarconst/artifacts/gysm37x4_WhatsApp%20Image%202025-10-25%20at%2012.47.34%20%281%29.jpeg',
        'https://customer-assets.emergentagent.com/job_somarconst/artifacts/fbwev2oj_WhatsApp%20Image%202025-10-25%20at%2012.48.37.jpeg',
        'https://customer-assets.emergentagent.com/job_somarconst/artifacts/qa1ltvn6_WhatsApp%20Image%202025-10-25%20at%2012.49.39.jpeg'
      ],
      image: 'https://customer-assets.emergentagent.com/job_somarconst/artifacts/peyml51c_WhatsApp%20Image%202025-10-25%20at%2012.44.45.jpeg'
    },
    {
      title: 'Embelezamento Exterior',
      location: 'Pêro Pinheiro, Sintra',
      description: 'Projeto de embelezamento exterior com deck em madeira e acabamentos de alta qualidade.',
      client: 'Construal, Lda.',
      status: 'Concluído',
      images: [
        'https://customer-assets.emergentagent.com/job_somarconst/artifacts/q0txvlad_WhatsApp%20Image%202025-10-25%20at%2012.46.08.jpeg',
        'https://customer-assets.emergentagent.com/job_somarconst/artifacts/mbec3ikq_WhatsApp%20Image%202025-10-25%20at%2012.46.04.jpeg',
        'https://customer-assets.emergentagent.com/job_somarconst/artifacts/j7y5m45c_WhatsApp%20Image%202025-10-25%20at%2012.30.40.jpeg',
        'https://customer-assets.emergentagent.com/job_somarconst/artifacts/ur82rdui_WhatsApp%20Image%202025-10-25%20at%2012.41.00.jpeg',
        'https://customer-assets.emergentagent.com/job_somarconst/artifacts/es97lz3r_WhatsApp%20Image%202025-10-25%20at%2012.41.21.jpeg',
        'https://customer-assets.emergentagent.com/job_somarconst/artifacts/aangyio3_WhatsApp%20Image%202025-10-25%20at%2012.41.21%20%281%29.jpeg'
      ],
      image: 'https://customer-assets.emergentagent.com/job_somarconst/artifacts/q0txvlad_WhatsApp%20Image%202025-10-25%20at%2012.46.08.jpeg'
    },
    {
      title: 'Pavilhão Industrial com Estrutura Metálica',
      location: 'Lisboa, Portugal',
      description: 'Construção de pavilhão industrial moderno com estrutura metálica robusta e acabamentos industriais.',
      client: 'A definir',
      status: 'Em andamento',
      images: ['https://images.unsplash.com/photo-1572061971745-063e9cc83afc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb258ZW58MHx8fHwxNzYxMjI4MDUxfDA&ixlib=rb-4.1.0&q=85'],
      image: 'https://images.unsplash.com/photo-1572061971745-063e9cc83afc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb258ZW58MHx8fHwxNzYxMjI4MDUxfDA&ixlib=rb-4.1.0&q=85'
    },
    {
      title: 'Edifício Residencial',
      location: 'Lisboa, Portugal',
      description: 'Projeto de construção de edifício residencial de luxo com múltiplos pisos e acabamentos premium.',
      client: 'A definir',
      status: 'Em andamento',
      images: [
        'https://customer-assets.emergentagent.com/job_somarconst/artifacts/bla5rznx_WhatsApp%20Image%202025-10-25%20at%2012.35.25.jpeg',
        'https://customer-assets.emergentagent.com/job_somarconst/artifacts/qh8uhb3a_WhatsApp%20Image%202025-10-25%20at%2012.35.25%20%281%29.jpeg'
      ],
      image: 'https://customer-assets.emergentagent.com/job_somarconst/artifacts/bla5rznx_WhatsApp%20Image%202025-10-25%20at%2012.35.25.jpeg'
    },
  ],

  testimonials: [
    {
      name: 'João Silva',
      role: 'Proprietário de Empresa',
      text: 'Excelente trabalho! A Somar Distâncias construiu as nossas novas instalações com grande profissionalismo. Cumpriram todos os prazos e o resultado superou as expectativas. Recomendo vivamente!'
    },
    {
      name: 'Maria Santos',
      role: 'Proprietária de Moradia',
      text: 'Contratei a Somar Distâncias para remodelação da minha casa. A equipa foi pontual, profissional e muito atenciosa. O acabamento ficou impecável. Muito satisfeita com o serviço!'
    },
    {
      name: 'Carlos Pereira',
      role: 'Gestor de Projeto',
      text: 'Trabalhamos com a Somar Distâncias em vários projetos e a experiência tem sido sempre positiva. São fiáveis, competentes e oferecem um excelente serviço pós-venda. Parceiros de confiança!'
    },
  ],

  faqs: [
    {
      question: 'Que tipo de projetos realizam?',
      answer: 'Realizamos todo o tipo de projetos de construção, desde habitações particulares a edifícios comerciais e industriais. Os nossos serviços incluem gestão e construção de edifícios, infraestruturas paisagísticas, demolições, fundações, instalações elétricas, canalizações, acabamentos e aluguer de equipamentos com operador.'
    },
    {
      question: 'Fornecem orçamentos gratuitos?',
      answer: 'Sim, fornecemos orçamentos gratuitos e sem compromisso. Entre em contacto connosco através do formulário, telefone ou email e agendaremos uma visita ao local para avaliar o projeto e apresentar um orçamento detalhado.'
    },
    {
      question: 'Quanto tempo demora um projeto típico?',
      answer: 'O tempo de execução varia consoante a complexidade e dimensão do projeto. Projetos pequenos podem ser concluídos em poucas semanas, enquanto projetos maiores podem levar vários meses. Fornecemos sempre um cronograma detalhado no início do projeto.'
    },
    {
      question: 'Trabalham com que tipo de clientes?',
      answer: 'Trabalhamos tanto com empresas como com particulares. A nossa experiência abrange projetos residenciais, comerciais e industriais. Cada cliente recebe atenção personalizada e soluções adaptadas às suas necessidades específicas.'
    },
    {
      question: 'Oferecem garantia nos trabalhos realizados?',
      answer: 'Sim, todos os nossos trabalhos têm garantia. A duração da garantia varia consoante o tipo de serviço prestado. Utilizamos sempre materiais de qualidade e seguimos as melhores práticas de construção para assegurar a durabilidade dos nossos projetos.'
    },
    {
      question: 'Os equipamentos alugados incluem operador?',
      answer: 'Sim, todo o aluguer de máquinas e equipamentos para construção (escavadoras, gruas, andaimes e plataformas) inclui operador qualificado. Garantimos profissionais experientes para operar os equipamentos com segurança. Entre em contacto para conhecer as condições e disponibilidade.'
    },
  ],
};