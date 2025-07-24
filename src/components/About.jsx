import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, Clock, Phone, Mail, Zap, Star, Users, Package } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-16 alien-bg">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <img 
              src="/src/assets/logo.jpg" 
              alt="Ponto de Abdução" 
              className="w-24 h-24 rounded-full object-cover neon-border floating-ufo"
            />
          </div>
          <h2 className="alien-font text-4xl font-bold mb-4 neon-glow">
            SOBRE O PONTO DE ABDUÇÃO
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sua nova distribuidora, conveniência e tabacaria em Vila dos Cabanos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div className="space-y-6">
            <Card className="alien-card neon-border">
              <CardHeader>
                <CardTitle className="alien-font text-2xl text-primary flex items-center gap-2">
                  <Zap className="w-6 h-6" />
                  NOSSA HISTÓRIA
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  O <strong className="text-primary">Ponto de Abdução</strong> nasceu da ideia de criar um espaço único 
                  em Vila dos Cabanos, onde os clientes pudessem encontrar os melhores produtos de bebidas e tabacaria 
                  com um atendimento diferenciado e preços justos.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Nosso nome faz referência ao conceito de "abduzir" nossos clientes com a qualidade dos produtos, 
                  variedade do estoque e excelência no atendimento. Queremos que cada visita seja uma experiência 
                  memorável e que nossos clientes sempre voltem.
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  <Badge className="bg-primary text-primary-foreground">
                    Inauguração: 12 de Janeiro
                  </Badge>
                  <Badge variant="outline" className="neon-border">
                    Melhores Preços da Cidade
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="alien-card">
              <CardHeader>
                <CardTitle className="alien-font text-xl text-primary flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  NOSSA MISSÃO
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Oferecer produtos de qualidade com os melhores preços da região, 
                  proporcionando uma experiência de compra única e atendimento personalizado 
                  para cada cliente que nos visita.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            {/* Location */}
            <Card className="alien-card hover-glow">
              <CardHeader>
                <CardTitle className="alien-font text-xl flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  LOCALIZAÇÃO
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  <strong>Endereço:</strong> Avenida Cônego Batista Campos
                </p>
                <p className="text-muted-foreground mb-2">
                  <strong>Bairro:</strong> Vila dos Cabanos
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>Referência:</strong> Passando o Supermercado Líder, sentido à praia
                </p>
                <Badge className="bg-primary text-primary-foreground">
                  📍 Localização Estratégica
                </Badge>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="alien-card hover-glow">
              <CardHeader>
                <CardTitle className="alien-font text-xl flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  CONTATO
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>(91) 99999-9999</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>contato@pontodeabducao.com</span>
                </div>
                <div className="pt-2">
                  <Badge variant="outline" className="neon-border">
                    WhatsApp Disponível
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="alien-card hover-glow">
              <CardHeader>
                <CardTitle className="alien-font text-xl flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  FUNCIONAMENTO
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span>Segunda a Sexta:</span>
                  <span className="text-primary">08:00 - 22:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado:</span>
                  <span className="text-primary">08:00 - 23:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo:</span>
                  <span className="text-primary">10:00 - 20:00</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16">
          <h3 className="alien-font text-2xl font-bold text-center mb-8 neon-glow">
            POR QUE ESCOLHER O PONTO DE ABDUÇÃO?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="alien-card hover-glow text-center">
              <CardContent className="pt-6">
                <Package className="w-12 h-12 text-primary mx-auto mb-4 floating-ufo" />
                <h4 className="alien-font text-lg font-semibold mb-2">
                  VARIEDADE COMPLETA
                </h4>
                <p className="text-sm text-muted-foreground">
                  Amplo catálogo de bebidas, cigarros e acessórios das melhores marcas
                </p>
              </CardContent>
            </Card>

            <Card className="alien-card hover-glow text-center">
              <CardContent className="pt-6">
                <Star className="w-12 h-12 text-primary mx-auto mb-4 pulse-green" />
                <h4 className="alien-font text-lg font-semibold mb-2">
                  MELHORES PREÇOS
                </h4>
                <p className="text-sm text-muted-foreground">
                  Preços competitivos e promoções especiais para nossos clientes
                </p>
              </CardContent>
            </Card>

            <Card className="alien-card hover-glow text-center">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-primary mx-auto mb-4 floating-ufo" />
                <h4 className="alien-font text-lg font-semibold mb-2">
                  ATENDIMENTO ESPECIAL
                </h4>
                <p className="text-sm text-muted-foreground">
                  Equipe treinada para oferecer a melhor experiência de compra
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Card className="alien-card neon-border max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <h3 className="alien-font text-xl font-bold mb-4 neon-glow">
                VENHA NOS CONHECER!
              </h3>
              <p className="text-muted-foreground mb-6">
                Estamos ansiosos para recebê-lo em nossa nova loja. 
                Venha conferir nossos produtos e se deixe abduzir pela qualidade!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge className="bg-primary text-primary-foreground text-lg px-4 py-2">
                  🛸 Inauguração: 12 de Janeiro
                </Badge>
                <Badge variant="outline" className="neon-border text-lg px-4 py-2">
                  📍 Vila dos Cabanos
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;

