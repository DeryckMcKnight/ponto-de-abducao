import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { AlertTriangle, Zap } from 'lucide-react';

const AgeVerification = ({ onVerified }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleVerification = (isAdult) => {
    if (isAdult) {
      setIsVisible(false);
      onVerified(true);
      localStorage.setItem('ageVerified', 'true');
    } else {
      alert('Você deve ter 18 anos ou mais para acessar este site.');
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 age-verification-overlay flex items-center justify-center p-4">
      <Card className="alien-card neon-border max-w-md w-full">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Zap className="w-16 h-16 text-primary neon-glow floating-ufo" />
              <AlertTriangle className="w-8 h-8 text-yellow-400 absolute -top-2 -right-2" />
            </div>
          </div>
          <CardTitle className="alien-font text-2xl neon-glow">
            VERIFICAÇÃO DE IDADE
          </CardTitle>
          <p className="text-muted-foreground mt-2">
            Este site contém produtos para maiores de 18 anos
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              Você tem 18 anos ou mais?
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                onClick={() => handleVerification(true)}
                className="alien-font hover-glow bg-primary text-primary-foreground"
              >
                SIM, SOU MAIOR DE 18
              </Button>
              <Button
                onClick={() => handleVerification(false)}
                variant="outline"
                className="alien-font border-destructive text-destructive hover:bg-destructive hover:text-white"
              >
                NÃO
              </Button>
            </div>
          </div>
          <div className="text-xs text-muted-foreground text-center mt-4">
            <p>🛸 Bem-vindo ao Ponto de Abdução 🛸</p>
            <p>Sua loja alienígena de conveniência</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AgeVerification;

