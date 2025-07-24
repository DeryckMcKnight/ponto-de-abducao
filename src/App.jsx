import React, { useState, useEffect } from 'react';
import './App.css';

// Components
import AgeVerification from './components/AgeVerification';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import About from './components/About';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

// UI Components
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';

function App() {
  const [isAgeVerified, setIsAgeVerified] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home'); // 'home', 'checkout', 'success'
  const [currentOrder, setCurrentOrder] = useState(null);

  // Check age verification on mount
  useEffect(() => {
    const verified = localStorage.getItem('ageVerified');
    if (verified === 'true') {
      setIsAgeVerified(true);
    }
  }, []);

  // Cart functions
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });

    // Simple alert instead of toast
    console.log(`${product.name} foi adicionado ao carrinho.`);
  };

  const updateCartQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    console.log("Item removido do carrinho.");
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setCurrentView('checkout');
  };

  const handleOrderComplete = (order) => {
    setCurrentOrder(order);
    setCartItems([]);
    setCurrentView('success');
    console.log(`Pedido #${order.id} confirmado.`);
  };

  const handleViewDetails = (product) => {
    console.log(`${product.name}: ${product.description}`);
  };

  const handleLogin = () => {
    console.log("Funcionalidade de login em desenvolvimento.");
  };

  // Success page component
  const OrderSuccess = () => (
    <div className="min-h-screen alien-bg flex items-center justify-center py-8">
      <div className="container mx-auto px-4">
        <Card className="alien-card neon-border max-w-2xl mx-auto text-center">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center neon-glow">
                <span className="text-2xl">🛸</span>
              </div>
            </div>
            <CardTitle className="alien-font text-3xl neon-glow">
              PEDIDO CONFIRMADO!
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <p className="text-lg">
                Seu pedido foi abduzido com sucesso!
              </p>
              <Badge className="bg-primary text-primary-foreground text-lg px-4 py-2">
                Pedido #{currentOrder?.id}
              </Badge>
            </div>
            
            <div className="text-left space-y-2 bg-muted/20 p-4 rounded-lg">
              <h4 className="alien-font font-semibold">Detalhes do Pedido:</h4>
              <p><strong>Total:</strong> R$ {currentOrder?.total.toFixed(2)}</p>
              <p><strong>Pagamento:</strong> {currentOrder?.paymentMethod === 'pix' ? 'PIX' : 'Cartão'}</p>
              <p><strong>Status:</strong> Confirmado</p>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground">
                Entraremos em contato em breve para confirmar a entrega.
              </p>
              <div className="flex gap-4 justify-center">
                <Button
                  onClick={() => setCurrentView('home')}
                  className="alien-font hover-glow bg-primary text-primary-foreground"
                >
                  VOLTAR À LOJA
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.print()}
                  className="alien-font"
                >
                  IMPRIMIR PEDIDO
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  // Main home page component
  const HomePage = () => (
    <div className="min-h-screen alien-bg">
      <Header 
        cartItems={cartItems}
        onCartClick={() => setIsCartOpen(true)}
        onLoginClick={handleLogin}
      />
      <main>
        <Hero />
        <ProductCatalog 
          onAddToCart={addToCart}
          onViewDetails={handleViewDetails}
        />
        <About />
      </main>
      <Footer />
    </div>
  );

  // Render based on current view
  const renderCurrentView = () => {
    switch (currentView) {
      case 'checkout':
        return (
          <Checkout
            cartItems={cartItems}
            onOrderComplete={handleOrderComplete}
            onBack={() => setCurrentView('home')}
          />
        );
      case 'success':
        return <OrderSuccess />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="App">
      {/* Age Verification Modal */}
      {!isAgeVerified && (
        <AgeVerification onVerified={setIsAgeVerified} />
      )}

      {/* Main Content */}
      {isAgeVerified && renderCurrentView()}

      {/* Shopping Cart */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeFromCart}
        onCheckout={handleCheckout}
      />
    </div>
  );
}

export default App;

