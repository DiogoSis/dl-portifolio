# Sistema de Temas - Dual Mode (Claro/Escuro)

## Visão Geral

O portfólio agora possui um sistema de temas dual completo com modo claro e escuro, mantendo o estilo Neubrutalism em ambos os modos.

## Características do Sistema

### Modo Escuro (Padrão)
- **Cores Principais**: Preto (#1B1B1B) e Verde Gamer (#00FF00)
- **Estilo**: Tom mais gamer e agressivo
- **Sombras**: Mais intensas e contrastantes

### Modo Claro
- **Cores Principais**: Tons suaves inspirados na paleta fornecida
- **Estilo**: Mais ameno e clean
- **Sombras**: Suaves mas mantendo o brutal

## Estrutura Técnica

### 1. Gerenciamento de Estado
- **Context API**: `src/contexts/ThemeContext.tsx`
- **Hook**: `useTheme()` para acessar e modificar o tema
- **Persistência**: LocalStorage mantém preferência do usuário

### 2. Configuração de Temas
- **Arquivo**: `src/styles/theme.ts`
- **Estrutura**: Objetos `lightTheme` e `darkTheme`
- **Variáveis CSS**: Aplicadas dinamicamente no `:root`

### 3. Componentes
- **ThemeToggle**: Botão para alternar entre temas
- **Localização**: Header principal (canto superior direito)
- **Ícones**: Sol (modo claro) e Lua (modo escuro)

## Variáveis CSS Disponíveis

### Cores
```css
--primary: Cor primária do tema
--secondary: Cor secundária 
--accent: Cor de destaque
--accent-alt: Cor de destaque alternativa
--background: Fundo principal
--background-card: Fundo de cards
--text: Cor do texto principal
--text-secondary: Cor do texto secundário
--shadow: Cor das sombras
```

### Espaçamentos
```css
--spacing-xs: 4px
--spacing-sm: 8px
--spacing-md: 16px
--spacing-lg: 24px
--spacing-xl: 32px
--spacing-xxl: 48px
--spacing-xxxl: 64px
```

### Bordas
```css
--border-thin: 2px solid var(--text)
--border-medium: 3px solid var(--text)
--border-thick: 4px solid var(--text)
--border-extra-thick: 6px solid var(--text)
```

### Sombras Brutais
```css
--shadow-brutal-sm: 2px 2px 0px var(--shadow)
--shadow-brutal-md: 4px 4px 0px var(--shadow)
--shadow-brutal-lg: 6px 6px 0px var(--shadow)
--shadow-brutal-xl: 8px 8px 0px var(--shadow)
```

## Responsividade

### Breakpoints
- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: > 768px

### Estratégia
- Mobile-first approach
- Componentes se adaptam automaticamente
- Fonte e espaçamentos ajustáveis
- Grid e Flexbox responsivos

## Como Usar

### 1. Em Componentes React
```tsx
import { useTheme } from '../contexts/ThemeContext';

const MyComponent = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div>
      <p>Tema atual: {theme}</p>
      <button onClick={toggleTheme}>Alternar Tema</button>
    </div>
  );
};
```

### 2. Em CSS/SCSS
```css
.myComponent {
  background: var(--background-card);
  color: var(--text);
  border: var(--border-medium);
  box-shadow: var(--shadow-brutal-lg);
  padding: var(--spacing-lg);
}
```

## Boas Práticas

### 1. Sempre use variáveis CSS
- ✅ `color: var(--text)`
- ❌ `color: #000000`

### 2. Mantenha consistência
- Use o sistema de espaçamento
- Siga as bordas e sombras definidas
- Mantenha o estilo brutal

### 3. Teste em ambos os temas
- Verifique contraste
- Teste responsividade
- Valide acessibilidade

## Estrutura de Arquivos

```
src/
├── contexts/
│   └── ThemeContext.tsx      # Context do tema
├── components/
│   └── ThemeToggle/          # Botão de alternância
├── styles/
│   ├── theme.ts              # Configuração dos temas
│   ├── GlobalStyles.css      # Estilos globais
│   └── index.css             # Variáveis CSS
└── pages/                    # Todas as páginas usam o sistema
```

## Cores dos Temas

### Modo Escuro (Gamer)
- Primário: #00FF00 (Verde neon)
- Fundo: #1B1B1B (Preto)
- Acentos: #FF0080, #00FFFF
- Texto: #FFFFFF

### Modo Claro (Suave)
- Primário: #6B73FF (Azul suave)
- Fundo: #FFFFFF (Branco)
- Acentos: #FF6B9D, #4ECDC4
- Texto: #2C3E50

## Manutenção

### Adicionando Nova Cor
1. Adicione nos objetos `lightTheme` e `darkTheme`
2. Defina a variável CSS no sistema
3. Use em seus componentes

### Novo Componente
1. Use as variáveis CSS existentes
2. Teste em ambos os temas
3. Garanta responsividade

---

**Desenvolvido com**: React, TypeScript, Material-UI, CSS Modules
**Padrão**: Neubrutalism Design
**Responsividade**: Mobile-first
**Acessibilidade**: WCAG 2.1 AA
