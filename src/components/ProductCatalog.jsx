import React, { useState, useMemo } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import ProductCard from './ProductCard';
import { Search, Filter, Grid, List, Zap } from 'lucide-react';

const ProductCatalog = ({ onAddToCart, onViewDetails }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid');

  // Produtos reais da distribuidora
  const products = [
    // Bebidas - Destilados
    {
      id: 1,
      name: "Jack Daniel's Old No.7",
      price: 89.90,
      originalPrice: 99.90,
      category: "Bebidas",
      image: "/api/placeholder/300/300",
      description: "Whiskey Tennessee tradicional 1L",
      isPromo: true,
      rating: 5,
      stock: 15
    },
    {
      id: 2,
      name: "Absolut Vodka",
      price: 65.90,
      category: "Bebidas",
      image: "/api/placeholder/300/300",
      description: "Vodka Premium Sueca 1L",
      isNew: true,
      rating: 5,
      stock: 12
    },
    {
      id: 3,
      name: "Johnnie Walker Red Label",
      price: 75.90,
      category: "Bebidas",
      image: "/api/placeholder/300/300",
      description: "Whisky Escocês 1L",
      rating: 5,
      stock: 20
    },
    {
      id: 4,
      name: "Smirnoff Ice",
      price: 4.50,
      category: "Bebidas",
      image: "/api/placeholder/300/300",
      description: "Bebida mista sabor limão 275ml",
      rating: 4,
      stock: 50
    },
    
    // Bebidas - Cervejas
    {
      id: 5,
      name: "Heineken Lata 350ml",
      price: 3.99,
      originalPrice: 4.50,
      category: "Bebidas",
      image: "/api/placeholder/300/300",
      description: "Cerveja Premium Holandesa",
      isPromo: true,
      rating: 5,
      stock: 100
    },
    {
      id: 6,
      name: "Skol Lata 350ml",
      price: 2.50,
      category: "Bebidas",
      image: "/api/placeholder/300/300",
      description: "Cerveja Pilsen Nacional",
      rating: 4,
      stock: 200
    },
    {
      id: 7,
      name: "Corona Extra Long Neck",
      price: 5.90,
      category: "Bebidas",
      image: "/api/placeholder/300/300",
      description: "Cerveja Mexicana 355ml",
      rating: 5,
      stock: 80
    },
    
    // Bebidas - Refrigerantes
    {
      id: 8,
      name: "Coca-Cola 2L",
      price: 7.99,
      category: "Bebidas",
      image: "/api/placeholder/300/300",
      description: "Refrigerante de Cola 2 Litros",
      rating: 5,
      stock: 60
    },
    {
      id: 9,
      name: "Red Bull Energy Drink",
      price: 8.50,
      originalPrice: 9.90,
      category: "Bebidas",
      image: "/api/placeholder/300/300",
      description: "Energético 250ml",
      isPromo: true,
      rating: 5,
      stock: 40
    },

    // Tabacaria - Cigarros
    {
      id: 10,
      name: "Marlboro Red",
      price: 12.00,
      category: "Tabacaria",
      image: "/api/placeholder/300/300",
      description: "Cigarro tradicional maço",
      rating: 4,
      stock: 50
    },
    {
      id: 11,
      name: "Lucky Strike",
      price: 11.50,
      category: "Tabacaria",
      image: "/api/placeholder/300/300",
      description: "Cigarro americano maço",
      rating: 4,
      stock: 45
    },
    {
      id: 12,
      name: "Parliament",
      price: 13.50,
      category: "Tabacaria",
      image: "/api/placeholder/300/300",
      description: "Cigarro com filtro recesso",
      rating: 4,
      stock: 30
    },

    // Tabacaria - Acessórios
    {
      id: 13,
      name: "Isqueiro BIC",
      price: 3.50,
      category: "Tabacaria",
      image: "/api/placeholder/300/300",
      description: "Isqueiro descartável",
      rating: 4,
      stock: 100
    },
    {
      id: 14,
      name: "Papel de Seda OCB",
      price: 2.50,
      category: "Tabacaria",
      image: "/api/placeholder/300/300",
      description: "Papel para enrolar",
      rating: 5,
      stock: 80
    },
    {
      id: 15,
      name: "Piteira de Vidro",
      price: 8.90,
      category: "Tabacaria",
      image: "/api/placeholder/300/300",
      description: "Piteira reutilizável",
      isNew: true,
      rating: 5,
      stock: 25
    },

    // Conveniência - Snacks
    {
      id: 16,
      name: "Doritos Nacho",
      price: 6.50,
      category: "Snacks",
      image: "/api/placeholder/300/300",
      description: "Salgadinho sabor queijo nacho",
      rating: 5,
      stock: 40
    },
    {
      id: 17,
      name: "Pringles Original",
      price: 8.90,
      originalPrice: 10.50,
      category: "Snacks",
      image: "/api/placeholder/300/300",
      description: "Batata chips tubo 120g",
      isPromo: true,
      rating: 5,
      stock: 30
    },
    {
      id: 18,
      name: "Kit Kat",
      price: 3.50,
      category: "Snacks",
      image: "/api/placeholder/300/300",
      description: "Chocolate wafer 41.5g",
      rating: 5,
      stock: 60
    },
    {
      id: 19,
      name: "Amendoim Japonês",
      price: 4.90,
      category: "Snacks",
      image: "/api/placeholder/300/300",
      description: "Amendoim crocante 150g",
      rating: 4,
      stock: 35
    },

    // Acessórios
    {
      id: 20,
      name: "Copo Ponto de Abdução",
      price: 15.90,
      category: "Acessórios",
      image: "/api/placeholder/300/300",
      description: "Copo personalizado da loja",
      isNew: true,
      rating: 5,
      stock: 20
    },
    {
      id: 21,
      name: "Abridor de Garrafa UFO",
      price: 12.90,
      category: "Acessórios",
      image: "/api/placeholder/300/300",
      description: "Abridor temático alienígena",
      rating: 5,
      stock: 15
    }
  ];

  const categories = [
    { value: 'all', label: 'Todas as Categorias' },
    { value: 'Bebidas', label: '🍺 Bebidas' },
    { value: 'Tabacaria', label: '🚬 Tabacaria' },
    { value: 'Snacks', label: '🍿 Snacks' },
    { value: 'Acessórios', label: '👕 Acessórios' }
  ];

  const sortOptions = [
    { value: 'name', label: 'Nome A-Z' },
    { value: 'price-low', label: 'Menor Preço' },
    { value: 'price-high', label: 'Maior Preço' },
    { value: 'rating', label: 'Melhor Avaliado' },
    { value: 'newest', label: 'Mais Novos' }
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [products, searchTerm, selectedCategory, sortBy]);

  const promoProducts = products.filter(p => p.isPromo);
  const newProducts = products.filter(p => p.isNew);

  return (
    <section id="catalogo" className="py-16 alien-bg">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Zap className="w-12 h-12 text-primary neon-glow floating-ufo" />
          </div>
          <h2 className="alien-font text-4xl font-bold mb-4 neon-glow">
            CATÁLOGO ALIENÍGENA
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore nossa seleção intergaláctica de produtos para abduzidos
          </p>
        </div>

        {/* Promotional banners */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="alien-card neon-border">
            <CardHeader>
              <CardTitle className="alien-font text-primary">🎯 PRODUTOS EM PROMOÇÃO</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {promoProducts.slice(0, 3).map(product => (
                  <Badge key={product.id} variant="outline" className="text-xs">
                    {product.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="alien-card neon-border">
            <CardHeader>
              <CardTitle className="alien-font text-primary">🆕 NOVIDADES</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {newProducts.slice(0, 3).map(product => (
                  <Badge key={product.id} variant="outline" className="text-xs">
                    {product.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and search */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 alien-card border-border"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-4 items-center">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48 alien-card border-border">
                  <SelectValue placeholder="Categoria" />
                </SelectTrigger>
                <SelectContent className="alien-card border-border">
                  {categories.map(category => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48 alien-card border-border">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent className="alien-card border-border">
                  {sortOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* View mode toggle */}
              <div className="flex border border-border rounded-md alien-card">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Mostrando {filteredAndSortedProducts.length} produtos
            </p>
            {(searchTerm || selectedCategory !== 'all') && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="text-primary"
              >
                Limpar filtros
              </Button>
            )}
          </div>
        </div>

        {/* Products grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {filteredAndSortedProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>

        {/* No results */}
        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-12">
            <Zap className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="alien-font text-xl font-semibold mb-2">
              Nenhum produto encontrado
            </h3>
            <p className="text-muted-foreground">
              Tente ajustar os filtros ou buscar por outros termos
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCatalog;

