import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Instagram,
  MessageCircle,
  Zap,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="alien-bg border-t border-border">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/src/assets/logo.jpg" 
                alt="Ponto de Abdução" 
                className="w-12 h-12 rounded-full object-cover neon-border"
              />
              <div>
                <h3 className="alien-font text-xl font-bold neon-glow">
                  PONTO DE ABDUÇÃO
                </h3>
                <p className="text-xs text-muted-foreground">
                  Distribuidora • Conveniência • Tabacaria
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Sua nova experiência de compras em Vila dos Cabanos. 
              Os melhores produtos com os melhores preços da cidade.
            </p>
            <div className="flex gap-2">
              <Badge className="bg-primary text-primary-foreground">
                🛸 Inauguração 12/01
              </Badge>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h4 className="alien-font text-lg font-semibold text-primary">
              CONTATO
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>Avenida Cônego Batista Campos</p>
                  <p>Vila dos Cabanos</p>
                  <p className="text-xs">Passando o Supermercado Líder, sentido à praia</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">(91) 99999-9999</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">contato@pontodeabducao.com</span>
              </div>
            </div>
          </div>

          {/* Opening hours */}
          <div className="space-y-4">
            <h4 className="alien-font text-lg font-semibold text-primary flex items-center gap-2">
              <Clock className="w-5 h-5" />
              FUNCIONAMENTO
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Segunda - Sexta:</span>
                <span className="text-primary">08:00 - 22:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sábado:</span>
                <span className="text-primary">08:00 - 23:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Domingo:</span>
                <span className="text-primary">10:00 - 20:00</span>
              </div>
            </div>
          </div>

          {/* Social media and quick links */}
          <div className="space-y-4">
            <h4 className="alien-font text-lg font-semibold text-primary">
              REDES SOCIAIS
            </h4>
            <div className="space-y-3">
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full justify-start hover-glow border-border"
                asChild
              >
                <a href="https://wa.me/5591999999999" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2 text-green-500" />
                  WhatsApp
                  <ExternalLink className="w-3 h-3 ml-auto" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full justify-start hover-glow border-border"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4 mr-2 text-pink-500" />
                  Instagram
                  <ExternalLink className="w-3 h-3 ml-auto" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full justify-start hover-glow border-border"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-4 h-4 mr-2 text-blue-500" />
                  Facebook
                  <ExternalLink className="w-3 h-3 ml-auto" />
                </a>
              </Button>
            </div>

            {/* Quick links */}
            <div className="pt-4">
              <h5 className="alien-font text-sm font-semibold mb-2">LINKS RÁPIDOS</h5>
              <div className="space-y-1 text-sm">
                <a href="#home" className="block text-muted-foreground hover:text-primary transition-colors">
                  Início
                </a>
                <a href="#catalogo" className="block text-muted-foreground hover:text-primary transition-colors">
                  Catálogo
                </a>
                <a href="#sobre" className="block text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="border-border" />

      {/* Bottom footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Zap className="w-4 h-4 text-primary" />
            <span>© {currentYear} Ponto de Abdução. Todos os direitos reservados.</span>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">
              Termos de Uso
            </a>
            <span>•</span>
            <Badge variant="outline" className="neon-border text-xs">
              🛸 Desenvolvido com tecnologia alienígena
            </Badge>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-4 left-4 hidden lg:block">
        <div className="floating-ufo opacity-20">
          <Zap className="w-6 h-6 text-primary" />
        </div>
      </div>
      
      <div className="absolute bottom-8 right-8 hidden lg:block">
        <div className="floating-ufo opacity-15" style={{ animationDelay: '1s' }}>
          <Zap className="w-4 h-4 text-primary" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

