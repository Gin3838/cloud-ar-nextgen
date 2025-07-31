import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroOption1 from "@/assets/hero-option-1.jpg";
import heroOption2 from "@/assets/hero-option-2.jpg";
import heroOption3 from "@/assets/hero-option-3.jpg";
import heroOption4 from "@/assets/hero-option-4.jpg";
import heroOption5 from "@/assets/hero-option-5.jpg";
import heroOption6 from "@/assets/hero-option-6.jpg";

interface ImageOption {
  id: number;
  src: string;
  title: string;
  description: string;
}

const imageOptions: ImageOption[] = [
  {
    id: 1,
    src: heroOption1,
    title: "Профессиональная работа",
    description: "Человек с MacBook Pro - современные технологии в работе"
  },
  {
    id: 2,
    src: heroOption2,
    title: "Деловая женщина",
    description: "Профессионал за работой - продуктивность и фокус"
  },
  {
    id: 3,
    src: heroOption3,
    title: "Минималистичный офис",
    description: "Чистое рабочее место с ноутбуком - порядок и эффективность"
  },
  {
    id: 4,
    src: heroOption4,
    title: "Современное рабочее место",
    description: "iMac в офисе - профессиональная рабочая среда"
  },
  {
    id: 5,
    src: heroOption5,
    title: "Архитектурная стабильность",
    description: "Современное здание - надежность и стабильность"
  },
  {
    id: 6,
    src: heroOption6,
    title: "Облачная метафора",
    description: "Здание и небо - связь с облачными технологиями"
  }
];

interface ImageSelectorProps {
  onImageSelect: (imageSrc: string) => void;
  currentImage: string;
}

const ImageSelector = ({ onImageSelect, currentImage }: ImageSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button 
          onClick={() => setIsOpen(true)}
          variant="outline"
          size="sm"
          className="bg-background/80 backdrop-blur-sm"
        >
          Выбрать изображение
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl max-h-[80vh] overflow-y-auto p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Выберите главное изображение</h3>
          <Button variant="ghost" onClick={() => setIsOpen(false)}>
            ✕
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {imageOptions.map((option) => (
            <Card 
              key={option.id}
              className={`cursor-pointer transition-all hover:shadow-medium ${
                currentImage === option.src ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => {
                onImageSelect(option.src);
                setIsOpen(false);
              }}
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src={option.src} 
                  alt={option.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-3">
                <h4 className="font-medium text-sm mb-1">{option.title}</h4>
                <p className="text-xs text-muted-foreground">{option.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ImageSelector;