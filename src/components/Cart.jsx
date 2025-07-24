import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Separator } from './ui/separator';
import { ShoppingCart, Plus, Minus, Trash2, Zap, CreditCard } from 'lucide-react';

const Cart = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) => {
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 8.99;
  const total = subtotal + shipping;

  const CartContent = () => (
    <div className="flex flex-col h-full">
      <SheetHeader className="pb-4">
        <SheetTitle className="alien-font text-xl neon-glow flex items-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          CARRINHO ALIENÍGENA
        </SheetTitle>
        {cartItems.length > 0 && (
          <Badge className="w-fit bg-primary text-primary-foreground">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'itens'}
          </Badge>
        )}
      </SheetHeader>

      <div className="flex-1 overflow-y-auto">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center py-8">
            <Zap className="w-16 h-16 text-muted-foreground mb-4 floating-ufo" />
            <h3 className="alien-font text-lg font-semibold mb-2">
              Carrinho Vazio
            </h3>
            <p className="text-muted-foreground mb-4">
              Adicione produtos alienígenas ao seu carrinho
            </p>
            <Button onClick={onClose} className="alien-font">
              CONTINUAR COMPRANDO
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="alien-card">
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    {/* Product image */}
                    <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                      <img
                        src={item.image || '/api/placeholder/64/64'}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product details */}
                    <div className="flex-1 min-w-0">
                      <h4 className="alien-font font-semibold text-sm mb-1 truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        {item.category}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="alien-font text-primary font-bold">
                          R$ {item.price.toFixed(2)}
                        </span>
                        
                        {/* Quantity controls */}
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className="w-8 h-8 p-0"
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="alien-font text-sm font-semibold w-8 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 p-0"
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Remove button */}
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => onRemoveItem(item.id)}
                      className="text-destructive hover:text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Item total */}
                  <div className="mt-3 pt-3 border-t border-border">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Subtotal do item:
                      </span>
                      <span className="alien-font font-bold text-primary">
                        R$ {(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Cart summary */}
      {cartItems.length > 0 && (
        <div className="border-t border-border pt-4 mt-4">
          <div className="space-y-3">
            {/* Subtotal */}
            <div className="flex justify-between">
              <span className="text-sm">Subtotal:</span>
              <span className="alien-font font-semibold">
                R$ {subtotal.toFixed(2)}
              </span>
            </div>

            {/* Shipping */}
            <div className="flex justify-between">
              <span className="text-sm">Entrega:</span>
              <span className="alien-font font-semibold">
                {shipping === 0 ? (
                  <Badge className="bg-primary text-primary-foreground">
                    GRÁTIS
                  </Badge>
                ) : (
                  `R$ ${shipping.toFixed(2)}`
                )}
              </span>
            </div>

            {/* Free shipping notice */}
            {shipping > 0 && (
              <div className="text-xs text-muted-foreground">
                Frete grátis em compras acima de R$ 50,00
              </div>
            )}

            <Separator />

            {/* Total */}
            <div className="flex justify-between items-center">
              <span className="alien-font font-bold text-lg">Total:</span>
              <span className="alien-font font-bold text-xl text-primary neon-glow">
                R$ {total.toFixed(2)}
              </span>
            </div>

            {/* Checkout button */}
            <Button
              onClick={onCheckout}
              className="w-full alien-font text-lg py-6 hover-glow bg-primary text-primary-foreground"
              size="lg"
            >
              <CreditCard className="w-5 h-5 mr-2" />
              FINALIZAR COMPRA
            </Button>

            {/* Continue shopping */}
            <Button
              onClick={onClose}
              variant="outline"
              className="w-full alien-font"
            >
              CONTINUAR COMPRANDO
            </Button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="alien-bg border-border w-full sm:max-w-lg">
        <CartContent />
      </SheetContent>
    </Sheet>
  );
};

export default Cart;

