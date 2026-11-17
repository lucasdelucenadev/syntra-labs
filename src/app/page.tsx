'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Code2,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Database,
  Globe2,
  Terminal,
  Smartphone,
  BarChart3,
  QrCode,
  Sparkles,
  ChevronRight,
  ExternalLink,
  Building2,
  Mail,
  MapPin,
  Lock,
} from 'lucide-react';
import { SyntraLogo } from '@/components/ui/syntra-logo';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'saas' | 'pos' | 'finance' | 'security'>('saas');

  const whatsappNumber = '5562999999999'; // Lucas Silva de Lucena / Syntra Labs
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Olá, Lucas! Conheci a Syntra Labs e gostaria de conversar sobre o desenvolvimento de um projeto de software.',
  )}`;
  const varejoFlowUrl = 'https://saas-web-gestion.onrender.com';

  return (
    <div className="min-h-screen bg-[#080B11] text-slate-100 font-sans selection:bg-emerald-500 selection:text-white">
      {/* GLOW DE FUNDO / AURAS TECNOLÓGICAS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-[35%] right-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[160px]" />
      </div>

      {/* HEADER / BARRA DE NAVEGAÇÃO */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#080B11]/80 border-b border-slate-800/80 px-4 sm:px-8 py-4 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="group">
            <SyntraLogo size="md" />
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-xs font-bold text-slate-400">
            <a href="#solucoes" className="hover:text-emerald-400 transition-colors">
              Soluções
            </a>
            <a href="#case-varejoflow" className="hover:text-emerald-400 transition-colors">
              Case VarejoFlow
            </a>
            <a href="#branding" className="hover:text-emerald-400 transition-colors">
              Identidade Visual
            </a>
            <a href="#arquitetura" className="hover:text-emerald-400 transition-colors">
              Stack & Arquitetura
            </a>
            <a href="#metodologia" className="hover:text-emerald-400 transition-colors">
              Metodologia
            </a>
            <a href="#contato" className="hover:text-emerald-400 transition-colors">
              Contato
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={varejoFlowUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white px-3.5 py-2 rounded-xl transition-colors"
            >
              VarejoFlow PRO <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs transition-all shadow-lg shadow-emerald-500/20"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar com Especialista</span>
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative z-10 pt-20 pb-24 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Studio de Engenharia de Software & SaaS sob Medida</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
            Transformamos regras complexas em{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              software escalável e lucrativo.
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A <strong>Syntra Labs</strong> é uma software house focada em sistemas de alta criticidade:
            plataformas SaaS multi-tenant, gateways de pagamento PIX EMVCo, PDVs offline-first, DRE em tempo real
            e infraestruturas blindadas com PostgreSQL Row-Level Security.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm transition-all shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 group"
            >
              <span>Iniciar um Projeto de Software</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#case-varejoflow"
              className="w-full sm:w-auto px-6 py-4 rounded-2xl border border-slate-800 hover:bg-slate-900/60 text-slate-300 hover:text-white font-bold text-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Ver Nosso Produto Flagship</span>
              <ChevronRight className="w-4 h-4 text-emerald-400" />
            </a>
          </div>

          {/* Métricas e Credenciais Técnicas */}
          <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            <div className="p-4 bg-slate-900/40 rounded-2xl border border-slate-800/50">
              <span className="text-2xl sm:text-3xl font-black text-emerald-400">100%</span>
              <p className="text-xs text-slate-400 mt-1">Type-Safe (TS & Prisma)</p>
            </div>
            <div className="p-4 bg-slate-900/40 rounded-2xl border border-slate-800/50">
              <span className="text-2xl sm:text-3xl font-black text-cyan-400">&lt; 150ms</span>
              <p className="text-xs text-slate-400 mt-1">Tempo Médio de Resposta</p>
            </div>
            <div className="p-4 bg-slate-900/40 rounded-2xl border border-slate-800/50">
              <span className="text-2xl sm:text-3xl font-black text-emerald-400">RLS</span>
              <p className="text-xs text-slate-400 mt-1">Isolamento Multi-tenant</p>
            </div>
            <div className="p-4 bg-slate-900/40 rounded-2xl border border-slate-800/50">
              <span className="text-2xl sm:text-3xl font-black text-indigo-400">Zero</span>
              <p className="text-xs text-slate-400 mt-1">Lock-in Arquitetural</p>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE DO CASE PRINCIPAL: VAREJOFLOW PRO */}
      <section id="case-varejoflow" className="relative z-10 py-20 px-4 sm:px-8 bg-slate-950/60 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-emerald-400">
                PRODUTO FLAGSHIP CONSTRUÍDO PELA SYNTRA LABS
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                VarejoFlow PRO — SaaS de Varejo de Moda & Comércio
              </h2>
              <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
                Um ecossistema completo para operações comerciais de alta complexidade: frente de caixa rápida,
                matriz cartesiana de variação (tamanho × cor), consignações (malinhas), DRE em tempo real e emissão fiscal NFC-e.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={varejoFlowUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors"
              >
                <span>Acessar Demonstração do VarejoFlow</span>
                <ExternalLink className="w-4 h-4 text-emerald-400" />
              </a>
            </div>
          </div>

          {/* Grid de Recursos Flagship */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0D121F] p-6 rounded-3xl border border-slate-800 hover:border-emerald-500/40 transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                <QrCode className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-white">PDV com Pix Dinâmico & EMVCo</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Geração em tempo real de QR Code e Pix Copia e Cola no padrão oficial do Banco Central,
                suporte a leitor óptico de código de barras e envio imediato do cupom digital via WhatsApp.
              </p>
              <div className="pt-2 text-[11px] font-bold text-emerald-400 flex items-center gap-1">
                <span>Testado em caixas de alta frequência</span>
              </div>
            </div>

            <div className="bg-[#0D121F] p-6 rounded-3xl border border-slate-800 hover:border-emerald-500/40 transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-white">DRE Gerencial & Lucro Real</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Cálculo automático de Lucro Líquido Real com abatimento de CMV (Custo das Mercadorias),
                comissões de vendedoras, despesas fixas e Curva ABC dos produtos mais rentáveis da loja.
              </p>
              <div className="pt-2 text-[11px] font-bold text-indigo-400 flex items-center gap-1">
                <span>Visão Executiva de Dono de Negócio</span>
              </div>
            </div>

            <div className="bg-[#0D121F] p-6 rounded-3xl border border-slate-800 hover:border-emerald-500/40 transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-white">Governança & Trilha de Auditoria</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Rastreamento imutável de alçadas de desconto autorizadas, sangrias de gaveta, cancelamentos
                e permissões de equipe, com isolamento estrito via PostgreSQL Row-Level Security.
              </p>
              <div className="pt-2 text-[11px] font-bold text-cyan-400 flex items-center gap-1">
                <span>Compliance e Segurança Bancária</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOSSAS SOLUÇÕES & SERVIÇOS */}
      <section id="solucoes" className="relative z-10 py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-400">O QUE FAZEMOS</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Engenharia de Software de Ponta a Ponta
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Desenvolvemos desde plataformas multi-tenant globais até ferramentas corporativas personalizadas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-slate-900/40 rounded-3xl border border-slate-800/80 hover:border-slate-700 transition-all space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="font-black text-base text-white">Plataformas SaaS</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Arquitetura multi-tenant, billing recorrente, onboarding automatizado e painéis com permissões granulares (RBAC).
              </p>
            </div>

            <div className="p-6 bg-slate-900/40 rounded-3xl border border-slate-800/80 hover:border-slate-700 transition-all space-y-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-black text-base text-white">Engenharia de Pagamento</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Integrações nativas de PIX Dinâmico, Gateways (Asaas, Mercado Pago, Stripe), split de pagamento e conciliação.
              </p>
            </div>

            <div className="p-6 bg-slate-900/40 rounded-3xl border border-slate-800/80 hover:border-slate-700 transition-all space-y-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="font-black text-base text-white">Frentes de Caixa (PDV)</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Aplicações offline-first (PWA), comunicação com impressoras térmicas (ZPL/ESC-POS) e leitura óptica ultra-rápida.
              </p>
            </div>

            <div className="p-6 bg-slate-900/40 rounded-3xl border border-slate-800/80 hover:border-slate-700 transition-all space-y-4">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="font-black text-base text-white">Cloud & Bancos de Dados</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Modelagem relacional sofisticada em PostgreSQL, isolamento estrito com RLS, Docker, pipelines de CI/CD e monitoramento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IDENTIDADE VISUAL & LOGOMARCA */}
      <section id="branding" className="relative z-10 py-24 px-4 sm:px-8 bg-slate-950/70 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-400">IDENTIDADE VISUAL OFICIAL</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">O Conceito Syntra Labs</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Fusão entre o prisma contínuo de dados (&apos;S&apos;) e a precisão do desenvolvimento de software de alta performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0D121F] p-4 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl group">
              <div className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950">
                <img
                  src="/syntra/syntra_labs_flat_presentation_1794948975532.jpg"
                  alt="Apresentação Primária Syntra Labs"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm">Lockup Horizontal & Grid Construtivo</h4>
                  <p className="text-[11px] text-slate-500">Apresentação primária com tipografia corporativa e proporções de grid.</p>
                </div>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  Principal
                </span>
              </div>
            </div>

            <div className="bg-[#0D121F] p-4 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl group">
              <div className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950">
                <img
                  src="/syntra/syntra_labs_brand_presentation_1794948905664.jpg"
                  alt="Símbolo Isométrico Syntra Labs"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm">Prisma Isométrico de Síntese</h4>
                  <p className="text-[11px] text-slate-500">Símbolo em perspectiva com reflexos esmeralda e ciano elétrico.</p>
                </div>
                <span className="text-[10px] font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
                  3D / Isométrico
                </span>
              </div>
            </div>

            <div className="bg-[#0D121F] p-4 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl group">
              <div className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950">
                <img
                  src="/syntra/syntra_labs_icon_mark_v2_1794948946865.jpg"
                  alt="Ícone Flat Vector Syntra Labs"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm">Emblema Ribbon 1:1 Flat</h4>
                  <p className="text-[11px] text-slate-500">Versão minimalista otimizada para favicon, app icon e mídias sociais.</p>
                </div>
                <span className="text-[10px] font-bold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
                  App Icon 1:1
                </span>
              </div>
            </div>

            <div className="bg-[#0D121F] p-4 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl group">
              <div className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950">
                <img
                  src="/syntra/syntra_labs_logo_mockup_1794948925204.jpg"
                  alt="Mockup do Emblema de Obsidiana"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm">Wireframe Prism & Badge Obsidian</h4>
                  <p className="text-[11px] text-slate-500">Estética industrial com acabamento em vidro escuro e linhas de vetor.</p>
                </div>
                <span className="text-[10px] font-bold text-teal-400 bg-teal-500/10 px-2.5 py-1 rounded-full border border-teal-500/20">
                  Mockup Dark
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK & ARQUITETURA */}
      <section id="arquitetura" className="relative z-10 py-20 px-4 sm:px-8 bg-slate-950/40 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-400">PILHA TECNOLÓGICA</span>
            <h2 className="text-3xl font-black text-white tracking-tight">Construído com as Ferramentas Mais Sólidas</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {[
              { name: 'TypeScript', desc: 'Tipagem Estrita' },
              { name: 'Node.js / NestJS', desc: 'Monólito Modular' },
              { name: 'Next.js 15 & React 19', desc: 'SSR & Server Components' },
              { name: 'PostgreSQL 17', desc: 'Row-Level Security' },
              { name: 'Prisma ORM', desc: 'Modelagem Type-Safe' },
              { name: 'Docker & Linux', desc: 'Contêineres de Escala' },
            ].map((tech) => (
              <div
                key={tech.name}
                className="p-5 bg-slate-900/60 rounded-2xl border border-slate-800/60 hover:border-slate-700 transition-all"
              >
                <div className="text-sm font-black text-white">{tech.name}</div>
                <div className="text-[11px] text-slate-500 mt-1">{tech.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METODOLOGIA DE ENTREGA */}
      <section id="metodologia" className="relative z-10 py-24 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-400">PROCESSO DE ENGENHARIA</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">Do Diagnóstico ao Deploy Contínuo</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-slate-900/40 rounded-3xl border border-slate-800/80 relative space-y-3">
              <span className="text-3xl font-black text-slate-700">01</span>
              <h3 className="font-bold text-white text-base">Modelagem de Domínio</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Mapeamos as regras de negócio, jornadas de usuários e fluxo financeiro antes de escrever a primeira linha de código.
              </p>
            </div>

            <div className="p-6 bg-slate-900/40 rounded-3xl border border-slate-800/80 relative space-y-3">
              <span className="text-3xl font-black text-slate-700">02</span>
              <h3 className="font-bold text-white text-base">Arquitetura Blindada</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Isolamento estrito entre clientes com RLS, validação rigorosa de payloads e definição de bancos e serviços.
              </p>
            </div>

            <div className="p-6 bg-slate-900/40 rounded-3xl border border-slate-800/80 relative space-y-3">
              <span className="text-3xl font-black text-slate-700">03</span>
              <h3 className="font-bold text-white text-base">Desenvolvimento & Testes</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Sprints com entregas parciais funcionais, suíte automatizada de testes unitários e ponta a ponta (E2E).
              </p>
            </div>

            <div className="p-6 bg-slate-900/40 rounded-3xl border border-slate-800/80 relative space-y-3">
              <span className="text-3xl font-black text-emerald-500">04</span>
              <h3 className="font-bold text-white text-base">Deploy em Nuvem & Escala</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Pipeline de CI/CD automatizado, monitoramento proativo de erros em produção e suporte dedicado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUEM ESTÁ POR TRÁS */}
      <section className="relative z-10 py-16 px-4 sm:px-8 bg-slate-950/60 border-t border-slate-800/80">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-8 bg-[#0D121F] p-8 sm:p-10 rounded-3xl border border-slate-800">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-indigo-600 p-1 shrink-0">
            <div className="w-full h-full bg-slate-950 rounded-[22px] flex items-center justify-center text-white font-black text-2xl">
              LL
            </div>
          </div>

          <div className="space-y-2 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <h3 className="text-xl font-black text-white">Lucas Silva de Lucena</h3>
              <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2.5 py-0.5 rounded-full font-bold border border-emerald-500/20">
                Fundador & Tech Lead
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Especialista em arquiteturas modernas de software, sistemas distribuídos e engenharia de dados.
              Fundador da <strong>Syntra Labs</strong>, focada em entregar sistemas que reduzem custos operacionais
              e aceleram o crescimento de negócios por meio de tecnologia de alta precisão.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL & CONTATO */}
      <section id="contato" className="relative z-10 py-24 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-b from-slate-900/90 to-[#0B0F19] p-8 sm:p-14 rounded-3xl border border-slate-800 space-y-6 shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
            <Terminal className="w-8 h-8" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Pronto para tirar seu projeto do papel ou modernizar sua operação?
          </h2>

          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Agende uma conversa técnica diretamente com a nossa liderança. Analisamos seu desafio e apresentamos a melhor arquitetura.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm transition-all shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chamar no WhatsApp</span>
            </a>

            <a
              href="mailto:lucasdelucena2@gmail.com"
              className="w-full sm:w-auto px-6 py-4 rounded-2xl border border-slate-700 hover:bg-slate-800 text-white font-bold text-sm transition-all flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-slate-400" />
              <span>lucasdelucena2@gmail.com</span>
            </a>
          </div>

          <div className="pt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
            <MapPin className="w-3.5 h-3.5" />
            <span>Pires do Rio - GO • Atendimento em Todo o Brasil</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-slate-800/80 py-8 px-4 sm:px-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <SyntraLogo size="sm" showSubtitle={false} />
          <div>
            © {new Date().getFullYear()} Syntra Labs Software Studio. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <a href={varejoFlowUrl} target="_blank" rel="noreferrer" className="hover:text-slate-300">
              VarejoFlow PRO
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-slate-300">
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
