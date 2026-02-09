<html lang="pt-BR">
</head>
<body>

  <header>
    <h1>Auth Platform</h1>
    <p>
      Plataforma de autenticação e autorização multi-tenant inspirada em Firebase Auth e Auth0.
      Serviço centralizado de identidade para múltiplas aplicações.
    </p>
  </header>
  <main>
    <section>
      <h2>Visão Geral</h2>
      <p>
        O Auth Platform atua como um <strong>Identity Provider (IdP)</strong>, sendo responsável exclusivamente por:
      </p>
      <ul>
        <li>Gerenciar usuários</li>
        <li>Autenticar credenciais</li>
        <li>Emitir tokens de acesso</li>
        <li>Controlar permissões</li>
        <li>Isolar dados por projeto (multi-tenancy)</li>
      </ul>
    </section>
    <section>
      <h2>Arquitetura</h2>
      <pre>
Frontend (React)
Backend (NestJS - Auth API)
PostgreSQL (Usuários, Projetos, Sessões)
      </pre>
    </section>
    <section>
      <h2>Estrutura do Repositório</h2>
      <pre>
/frontend   -> Painel administrativo (React)
/backend    -> API de autenticação (NestJS)
      </pre>
    </section>
    <section>
      <h2>Conceitos Principais</h2>
      <h3>Projects (Tenants)</h3>
      <p>
        Cada sistema que utiliza a plataforma é um <strong>project</strong> independente.
      </p>
      <ul>
        <li>client_id</li>
        <li>client_secret</li>
        <li>usuários isolados</li>
        <li>roles próprias</li>
      </ul>
    </section>
    <section>
      <h2>Funcionalidades</h2>
      <h3>Autenticação</h3>
      <ul>
        <li>Registro</li>
        <li>Login</li>
        <li>Hash de senha</li>
        <li>Verificação de e-mail</li>
      </ul>
      <h3>Tokens</h3>
      <ul>
        <li>JWT Access Token</li>
        <li>Refresh Token</li>
        <li>Logout</li>
      </ul>
      <h3>Segurança</h3>
      <ul>
        <li>Rate limit</li>
        <li>Auditoria</li>
        <li>Proteção contra brute force</li>
      </ul>
    </section>
    <section>
      <h2>Fluxo de Autenticação</h2>
      <pre>
POST /auth/login
X-Project-ID: project_abc
      </pre>
      <pre>
{
  "access_token": "jwt...",
  "refresh_token": "jwt..."
}
      </pre>
    </section>
    <section>
      <h2>Exemplo de Uso</h2>
      <pre><code>
const user = await authService.verify(token)

if (!user.roles.includes("ADMIN")) {
  throw new ForbiddenException()
}
      </code></pre>
    </section>
    <section>
      <h2>Objetivo</h2>
      <p>
        Este projeto simula um produto real de infraestrutura, focado em:
      </p>
      <ul>
        <li>Arquitetura de sistemas</li>
        <li>Design de APIs</li>
        <li>Segurança</li>
        <li>Escalabilidade</li>
      </ul>
    </section>
    <section>
      <h2>Roadmap</h2>
      <ul>
        <li>Fase 1: Projects, Users, JWT</li>
        <li>Fase 2: Refresh token, Sessões</li>
        <li>Fase 3: RBAC, Painel admin</li>
        <li>Fase 4: MFA, OAuth, SSO</li>
      </ul>
    </section>
  </main>
  <footer>
    <p>🚧 Em desenvolvimento — Auth Platform</p>
  </footer>

</body>
</html>
