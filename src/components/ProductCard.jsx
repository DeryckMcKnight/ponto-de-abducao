import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { ShoppingCart, Star, Zap } from 'lucide-react';

const ProductCard = ({ product, onAddToCart, onViewDetails }) => {
  const {
    id,
    name,
    price,
    originalPrice,
    image,
    category,
    rating = 5,
    isPromo = false,
    isNew = false,
    stock = 10,
    description
  } = product;

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Card className="alien-card hover-glow transition-all duration-300 group overflow-hidden">
      {/* Image container */}
      <CardHeader className="p-0 relative">
        <div className="aspect-square overflow-hidden">
          <img
            src={image || '/api/placeholder/300/300'}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {isNew && (
            <Badge className="bg-primary text-primary-foreground pulse-green">
              <Zap className="w-3 h-3 mr-1" />
              NOVO
            </Badge>
          )}
          {isPromo && discount > 0 && (
            <Badge className="bg-destructive text-white">
              -{discount}%
            </Badge>
          )}
        </div>

        {/* Category */}
        <div className="absolute top-2 right-2">
          <Badge variant="outline" className="neon-border text-xs">
            {category}
          </Badge>
        </div>

        {/* Stock indicator */}
        {stock < 5 && (
          <div className="absolute bottom-2 left-2">
            <Badge variant="outline" className="text-yellow-400 border-yellow-400">
              Últimas {stock} unidades
            </Badge>
          </div>
        )}
      </CardHeader>

      <CardContent className="p-4">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? 'text-yellow-400 fill-current' : 'text-muted-foreground'
              }`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-1">({rating}.0)</span>
        </div>

        {/* Product name */}
        <h3 className="alien-font font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {name}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {description}
        </p>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="alien-font text-xl font-bold text-primary">
            R$ {price.toFixed(2)}
          </span>
          {originalPrice && originalPrice > price && (
            <span className="text-sm text-muted-foreground line-through">
              R$ {originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button
          onClick={() => onViewDetails(product)}
          variant="outline"
          size="sm"
          className="flex-1 alien-font border-border hover:border-primary"
        >
          DETALHES
        </Button>
        <Button
          onClick={() => onAddToCart(product)}
          size="sm"
          className="flex-1 alien-font hover-glow bg-primary text-primary-foreground"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          ADICIONAR
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

