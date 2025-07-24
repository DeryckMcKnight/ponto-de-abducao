import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Separator } from './ui/separator';
import { Badge } from './ui/badge';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Checkbox } from './ui/checkbox';
import { 
  CreditCard, 
  MapPin, 
  User, 
  Mail, 
  Phone, 
  Zap,
  Shield,
  Truck,
  QrCode
} from 'lucide-react';

const Checkout = ({ cartItems, onOrderComplete, onBack }) => {
  const [step, setStep] = useState(1);
  const [customerType, setCustomerType] = useState('varejo');
  const [paymentMethod, setPaymentMethod] = useState('pix');
  const [formData, setFormData] = useState({
    // Customer info
    name: '',
    email: '',
    phone: '',
    cpf: '',
    
    // Address
    cep: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
    
    // Payment
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvv: '',
    
    // Options
    agreeTerms: false,
    newsletter: false
  });

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 8.99;
  const discount = customerType === 'atacado' ? subtotal * 0.1 : 0;
  const total = subtotal + shipping - discount;

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Process order
      const order = {
        id: Date.now(),
        items: cartItems,
        customer: formData,
        customerType,
        paymentMethod,
        subtotal,
        shipping,
        discount,
        total,
        status: 'confirmed',
        date: new Date().toISOString()
      };
      onOrderComplete(order);
    }
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <Card className="alien-card">
        <CardHeader>
          <CardTitle className="alien-font flex items-center gap-2">
            <User className="w-5 h-5" />
            TIPO DE CLIENTE
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={customerType} onValueChange={setCustomerType}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="varejo" id="varejo" />
              <Label htmlFor="varejo" className="alien-font">
                VAREJO - Pessoa Física
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="atacado" id="atacado" />
              <Label htmlFor="atacado" className="alien-font">
                ATACADO - Pessoa Jurídica (10% desconto)
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card className="alien-card">
        <CardHeader>
          <CardTitle className="alien-font">DADOS PESSOAIS</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Nome Completo *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="alien-card border-border"
                required
              />
            </div>
            <div>
              <Label htmlFor="email">E-mail *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="alien-card border-border"
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Telefone *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="alien-card border-border"
                placeholder="(11) 99999-9999"
                required
              />
            </div>
            <div>
              <Label htmlFor="cpf">CPF/CNPJ *</Label>
              <Input
                id="cpf"
                value={formData.cpf}
                onChange={(e) => handleInputChange('cpf', e.target.value)}
                className="alien-card border-border"
                placeholder="000.000.000-00"
                required
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <Card className="alien-card">
        <CardHeader>
          <CardTitle className="alien-font flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            ENDEREÇO DE ENTREGA
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="cep">CEP *</Label>
              <Input
                id="cep"
                value={formData.cep}
                onChange={(e) => handleInputChange('cep', e.target.value)}
                className="alien-card border-border"
                placeholder="00000-000"
                required
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="street">Rua *</Label>
              <Input
                id="street"
                value={formData.street}
                onChange={(e) => handleInputChange('street', e.target.value)}
                className="alien-card border-border"
                required
              />
            </div>
            <div>
              <Label htmlFor="number">Número *</Label>
              <Input
                id="number"
                value={formData.number}
                onChange={(e) => handleInputChange('number', e.target.value)}
                className="alien-card border-border"
                required
              />
            </div>
            <div>
              <Label htmlFor="complement">Complemento</Label>
              <Input
                id="complement"
                value={formData.complement}
                onChange={(e) => handleInputChange('complement', e.target.value)}
                className="alien-card border-border"
              />
            </div>
            <div>
              <Label htmlFor="neighborhood">Bairro *</Label>
              <Input
                id="neighborhood"
                value={formData.neighborhood}
                onChange={(e) => handleInputChange('neighborhood', e.target.value)}
                className="alien-card border-border"
                required
              />
            </div>
            <div>
              <Label htmlFor="city">Cidade *</Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                className="alien-card border-border"
                required
              />
            </div>
            <div>
              <Label htmlFor="state">Estado *</Label>
              <Select value={formData.state} onValueChange={(value) => handleInputChange('state', value)}>
                <SelectTrigger className="alien-card border-border">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent className="alien-card border-border">
                  <SelectItem value="PA">Pará</SelectItem>
                  <SelectItem value="SP">São Paulo</SelectItem>
                  <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                  <SelectItem value="MG">Minas Gerais</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <Card className="alien-card">
        <CardHeader>
          <CardTitle className="alien-font flex items-center gap-2">
            <CreditCard className="w-5 h-5" />
            FORMA DE PAGAMENTO
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
            <div className="space-y-4">
              <div className="flex items-center space-x-2 p-4 border border-border rounded-lg alien-card">
                <RadioGroupItem value="pix" id="pix" />
                <Label htmlFor="pix" className="flex-1 alien-font flex items-center gap-2">
                  <QrCode className="w-5 h-5 text-primary" />
                  PIX - Desconto de 5%
                  <Badge className="bg-primary text-primary-foreground">RECOMENDADO</Badge>
                </Label>
              </div>
              
              <div className="flex items-center space-x-2 p-4 border border-border rounded-lg alien-card">
                <RadioGroupItem value="credit" id="credit" />
                <Label htmlFor="credit" className="flex-1 alien-font flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Cartão de Crédito
                </Label>
              </div>
              
              <div className="flex items-center space-x-2 p-4 border border-border rounded-lg alien-card">
                <RadioGroupItem value="debit" id="debit" />
                <Label htmlFor="debit" className="flex-1 alien-font flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Cartão de Débito
                </Label>
              </div>
            </div>
          </RadioGroup>

          {(paymentMethod === 'credit' || paymentMethod === 'debit') && (
            <div className="mt-6 space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label htmlFor="cardNumber">Número do Cartão *</Label>
                  <Input
                    id="cardNumber"
                    value={formData.cardNumber}
                    onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                    className="alien-card border-border"
                    placeholder="0000 0000 0000 0000"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="cardName">Nome no Cartão *</Label>
                  <Input
                    id="cardName"
                    value={formData.cardName}
                    onChange={(e) => handleInputChange('cardName', e.target.value)}
                    className="alien-card border-border"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cardExpiry">Validade *</Label>
                    <Input
                      id="cardExpiry"
                      value={formData.cardExpiry}
                      onChange={(e) => handleInputChange('cardExpiry', e.target.value)}
                      className="alien-card border-border"
                      placeholder="MM/AA"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="cardCvv">CVV *</Label>
                    <Input
                      id="cardCvv"
                      value={formData.cardCvv}
                      onChange={(e) => handleInputChange('cardCvv', e.target.value)}
                      className="alien-card border-border"
                      placeholder="000"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="alien-card">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={formData.agreeTerms}
                onCheckedChange={(checked) => handleInputChange('agreeTerms', checked)}
              />
              <Label htmlFor="terms" className="text-sm">
                Concordo com os <a href="#" className="text-primary underline">termos de uso</a> e 
                <a href="#" className="text-primary underline"> política de privacidade</a> *
              </Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="newsletter"
                checked={formData.newsletter}
                onCheckedChange={(checked) => handleInputChange('newsletter', checked)}
              />
              <Label htmlFor="newsletter" className="text-sm">
                Quero receber ofertas e novidades por e-mail
              </Label>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen alien-bg py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="alien-font text-3xl font-bold mb-4 neon-glow">
              FINALIZAR COMPRA
            </h1>
            <div className="flex justify-center items-center gap-4">
              {[1, 2, 3].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center alien-font text-sm ${
                    step >= stepNumber 
                      ? 'bg-primary text-primary-foreground neon-glow' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {stepNumber}
                  </div>
                  {stepNumber < 3 && (
                    <div className={`w-12 h-0.5 mx-2 ${
                      step > stepNumber ? 'bg-primary' : 'bg-muted'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-8 mt-2 text-sm text-muted-foreground">
              <span className={step >= 1 ? 'text-primary' : ''}>Dados</span>
              <span className={step >= 2 ? 'text-primary' : ''}>Endereço</span>
              <span className={step >= 3 ? 'text-primary' : ''}>Pagamento</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit}>
                {step === 1 && renderStep1()}
                {step === 2 && renderStep2()}
                {step === 3 && renderStep3()}

                {/* Navigation buttons */}
                <div className="flex gap-4 mt-8">
                  {step > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(step - 1)}
                      className="alien-font"
                    >
                      VOLTAR
                    </Button>
                  )}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onBack}
                    className="alien-font"
                  >
                    VOLTAR AO CARRINHO
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 alien-font hover-glow bg-primary text-primary-foreground"
                    disabled={step === 3 && !formData.agreeTerms}
                  >
                    {step < 3 ? 'CONTINUAR' : 'FINALIZAR PEDIDO'}
                  </Button>
                </div>
              </form>
            </div>

            {/* Order summary */}
            <div className="lg:col-span-1">
              <Card className="alien-card neon-border sticky top-4">
                <CardHeader>
                  <CardTitle className="alien-font flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    RESUMO DO PEDIDO
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Items */}
                  <div className="space-y-3">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between items-center">
                        <div className="flex-1">
                          <p className="text-sm font-medium truncate">{item.name}</p>
                          <p className="text-xs text-muted-foreground">
                            Qtd: {item.quantity}
                          </p>
                        </div>
                        <span className="alien-font text-sm font-semibold">
                          R$ {(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  {/* Totals */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Subtotal:</span>
                      <span className="alien-font">R$ {subtotal.toFixed(2)}</span>
                    </div>
                    
                    {discount > 0 && (
                      <div className="flex justify-between text-primary">
                        <span className="text-sm">Desconto Atacado:</span>
                        <span className="alien-font">-R$ {discount.toFixed(2)}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between">
                      <span className="text-sm">Entrega:</span>
                      <span className="alien-font">
                        {shipping === 0 ? 'GRÁTIS' : `R$ ${shipping.toFixed(2)}`}
                      </span>
                    </div>
                    
                    {paymentMethod === 'pix' && (
                      <div className="flex justify-between text-primary">
                        <span className="text-sm">Desconto PIX:</span>
                        <span className="alien-font">-R$ {(total * 0.05).toFixed(2)}</span>
                      </div>
                    )}
                  </div>

                  <Separator />

                  <div className="flex justify-between items-center">
                    <span className="alien-font font-bold text-lg">Total:</span>
                    <span className="alien-font font-bold text-xl text-primary neon-glow">
                      R$ {(paymentMethod === 'pix' ? total * 0.95 : total).toFixed(2)}
                    </span>
                  </div>

                  {/* Security badges */}
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Shield className="w-4 h-4" />
                      <span>Compra 100% segura</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                      <Truck className="w-4 h-4" />
                      <span>Entrega alienígena rápida</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

