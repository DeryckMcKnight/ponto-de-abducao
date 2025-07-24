import React, { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  ShoppingCart, 
  User, 
  Menu, 
  X, 
  Search,
  Zap,
  MapPin,
  Phone
} from 'lucide-react';
import { Input } from './ui/input';

const Header = ({ cartItems = [], onCartClick, onLoginClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const menuItems = [
    { name: 'Início', href: '#home' },
    { name: 'Bebidas', href: '#bebidas' },
    { name: 'Tabacaria', href: '#tabacaria' },
    { name: 'Snacks', href: '#snacks' },
    { name: 'Acessórios', href: '#acessorios' },
    { name: 'Sobre', href: '#sobre' },
  ];

  return (
    <header className="alien-bg border-b border-border sticky top-0 z-40">
      {/* Top bar com informações de contato */}
      <div className="border-b border-border/50">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>Vila dos Cabanos - Av. Cônego Batista Campos</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                <span>(91) 99999-9999</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span className="neon-glow text-primary">🛸 Entrega Alienígena Rápida! 🛸</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header principal */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <img 
                src="/src/assets/logo.jpg" 
                alt="Ponto de Abdução" 
                className="w-12 h-12 rounded-full object-cover neon-border"
              />
            </div>
            <div>
              <h1 className="alien-font text-2xl font-bold neon-glow">
                PONTO DE ABDUÇÃO
              </h1>
              <p className="text-xs text-muted-foreground">
                Distribuidora • Conveniência • Tabacaria
              </p>
            </div>
          </div>

          {/* Barra de pesquisa - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar produtos alienígenas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 alien-card border-border"
              />
            </div>
          </div>

          {/* Ações do usuário */}
          <div className="flex items-center gap-4">
            {/* Login */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onLoginClick}
              className="hidden md:flex items-center gap-2 hover-glow"
            >
              <User className="w-4 h-4" />
              <span className="alien-font">LOGIN</span>
            </Button>

            {/* Carrinho */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onCartClick}
              className="relative hover-glow"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground pulse-green">
                  {cartItemCount}
                </Badge>
              )}
            </Button>

            {/* Menu mobile */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Navegação - Desktop */}
        <nav className="hidden md:flex items-center gap-6 mt-4 pt-4 border-t border-border/50">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="alien-font text-sm hover:text-primary transition-colors hover-glow px-3 py-2 rounded"
            >
              {item.name}
            </a>
          ))}
          <div className="ml-auto">
            <Badge variant="outline" className="neon-border text-primary">
              🎯 Kit Abdução em Promoção!
            </Badge>
          </div>
        </nav>

        {/* Barra de pesquisa - Mobile */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar produtos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 alien-card border-border"
            />
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border alien-card">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block alien-font text-sm hover:text-primary transition-colors hover-glow px-3 py-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2 border-t border-border/50">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  onLoginClick();
                  setIsMenuOpen(false);
                }}
                className="w-full justify-start alien-font"
              >
                <User className="w-4 h-4 mr-2" />
                LOGIN
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

