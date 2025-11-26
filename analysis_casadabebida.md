# Análise de Estrutura - Casa da Bebida

O site Casa da Bebida apresenta uma estrutura de e-commerce bem definida, que pode ser adaptada para o Ponto de Abdução, mantendo o foco em vitrine e integração com WhatsApp.

## Estrutura da Página Inicial (Home)

1.  **Header Fixo/Sticky:**
    *   Logo.
    *   Barra de busca (não aplicável para vitrine, mas pode ser um campo de busca simples no catálogo).
    *   Botões de Ação (Rastreio, Carrinho, Conta) - Adaptar para **WhatsApp** e **Contato**.
    *   Menu de Navegação Principal (Categorias) - Adaptar para **Home | Catálogo | Contato**.
2.  **Banner Principal (Hero):**
    *   Grande destaque visual (carrossel de imagens).
    *   Chamadas para ação (CTAs).
3.  **Destaques e Promoções:**
    *   Seções de produtos em carrossel ou grid (Mais Visitados, Mais Vendidos, Nacionais, Grandes Marcas).
    *   Cada produto com imagem, nome, preço e um botão de ação.
4.  **Rodapé (Footer):**
    *   Informações de contato, localização e links institucionais.

## Estrutura do Catálogo (Página de Produtos)

O site de referência é um e-commerce completo, mas a ideia de exibir produtos em um grid com informações claras é o ponto chave.

*   **Filtros/Categorias:** O site de referência usa abas na Home e um menu de categorias no Header. Para o Catálogo do Ponto de Abdução, a estrutura de filtros por categoria já implementada pode ser mantida, mas com um layout mais proeminente.
*   **Card de Produto:** Imagem grande, nome, preço em destaque. O botão de compra será substituído pelo botão **"Pedir pelo WhatsApp"**.

## Ações a Serem Tomadas (Redesign)

1.  **Header:** Manter o Header atual, mas garantir que o botão **WhatsApp** esteja sempre visível e em destaque.
2.  **Home:**
    *   Manter o Hero atual, mas simplificar o código, removendo a lógica de `typing-text` e `beam-light` do componente principal e focando no layout.
    *   Reorganizar as seções de Destaques e Promoções em um formato de grid mais limpo, similar ao que o site de referência faz.
3.  **Catálogo:**
    *   Manter a estrutura de dados de produtos.
    *   Melhorar o layout da página de Catálogo, tornando os filtros de categoria mais visuais e o grid de produtos mais espaçado e limpo.
4.  **Componentes:** O `ProductCard` já está bem estruturado, mas pode ter o estilo ajustado para se assemelhar mais a um card de e-commerce moderno.

Vou começar pelo redesign da página Home.
