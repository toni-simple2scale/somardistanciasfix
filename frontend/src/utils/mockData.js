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
      description: 'Aluguer de máquinas e equipamentos para construção: escavadoras, gruas, andaimes e plataformas.'
    },
  ],

  portfolio: [
    {
      title: 'Edifício Residencial',
      location: 'Lisboa, Portugal',
      description: 'Construção completa de edifício residencial com acabamentos premium.',
      images: [
        'https://customer-assets.emergentagent.com/job_somarconst/artifacts/cjr74efg_Moradia.jpg',
        'https://customer-assets.emergentagent.com/job_somarconst/artifacts/8sj13hq4_Moradia-2.jpg',
        'https://customer-assets.emergentagent.com/job_somarconst/artifacts/mp6xoco8_Moradia-3.jpg',
        'https://customer-assets.emergentagent.com/job_somarconst/artifacts/oicktmfk_Moradia-4.jpg',
        'https://customer-assets.emergentagent.com/job_somarconst/artifacts/8wl0rmta_Moradia-5.jpg'
      ],
      image: 'https://customer-assets.emergentagent.com/job_somarconst/artifacts/cjr74efg_Moradia.jpg'
    },
    {
      title: 'Complexo Comercial Contemporâneo',
      location: 'Lisboa, Portugal',
      description: 'Projeto de construção de espaço comercial com design moderno.',
      images: ['https://images.unsplash.com/photo-1572061971745-063e9cc83afc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb258ZW58MHx8fHwxNzYxMjI4MDUxfDA&ixlib=rb-4.1.0&q=85'],
      image: 'https://images.unsplash.com/photo-1572061971745-063e9cc83afc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb258ZW58MHx8fHwxNzYxMjI4MDUxfDA&ixlib=rb-4.1.0&q=85'
    },
    {
      title: 'Infraestrutura Industrial',
      location: 'Sintra, Portugal',
      description: 'Desenvolvimento de infraestrutura para zona industrial com equipamentos especializados.',
      images: ['https://images.unsplash.com/photo-1517089152318-42ec560349c0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxidWlsZGluZyUyMHNpdGV8ZW58MHx8fHwxNzYxMjI4MDYxfDA&ixlib=rb-4.1.0&q=85'],
      image: 'https://images.unsplash.com/photo-1517089152318-42ec560349c0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxidWlsZGluZyUyMHNpdGV8ZW58MHx8fHwxNzYxMjI4MDYxfDA&ixlib=rb-4.1.0&q=85'
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
      answer: 'Realizamos todo o tipo de projetos de construção, desde habitações particulares a edifícios comerciais e industriais. Os nossos serviços incluem gestão e construção de edifícios, infraestruturas paisagísticas, demolições, fundações, instalações elétricas, canalizações, acabamentos e aluguer de equipamentos.'
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
      question: 'É possível alugar equipamentos sem operador?',
      answer: 'Sim, oferecemos serviço de aluguer de máquinas e equipamentos para construção (escavadoras, gruas, andaimes e plataformas) sem operador. Entre em contacto para conhecer as condições e disponibilidade.'
    },
  ],
};