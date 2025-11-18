import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [area, setArea] = useState(20);
  const [ceilingType, setCeilingType] = useState('glossy');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ceilingTypes = [
    { id: 'glossy', name: 'Глянцевый', price: 450 },
    { id: 'matte', name: 'Матовый', price: 400 },
    { id: 'satin', name: 'Сатиновый', price: 420 },
  ];

  const calculatePrice = () => {
    const selectedType = ceilingTypes.find((t) => t.id === ceilingType);
    return selectedType ? area * selectedType.price : 0;
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">Э</span>
              </div>
              <h1 className="text-xl font-heading font-bold">Эклипс</h1>
            </div>
            <div className="hidden md:flex gap-8">
              {['Услуги', 'Портфолио', 'Цены', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Icon name="Phone" className="mr-2" size={18} />
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 min-h-screen flex items-center">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Премиум качество
            </Badge>
            <h2 className="text-6xl md:text-7xl font-heading font-bold leading-tight">
              Натяжные потолки
              <br />
              <span className="text-primary">Эклипс</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Превращаем обычные потолки в произведения искусства. Европейское качество, 
              быстрый монтаж и 10 лет гарантии.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => scrollToSection('калькулятор')}
              >
                <Icon name="Calculator" className="mr-2" size={20} />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('портфолио')}>
                <Icon name="Eye" className="mr-2" size={20} />
                Наши работы
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-8 pt-12">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">12+</div>
                <div className="text-sm text-muted-foreground">лет опыта</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">8000+</div>
                <div className="text-sm text-muted-foreground">довольных клиентов</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">24ч</div>
                <div className="text-sm text-muted-foreground">время монтажа</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Что мы предлагаем
            </Badge>
            <h2 className="text-4xl font-heading font-bold">Полный цикл услуг</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: 'Ruler',
                title: 'Бесплатный замер',
                desc: 'Выезд специалиста в удобное время. Точные замеры и консультация.',
              },
              {
                icon: 'Hammer',
                title: 'Быстрый монтаж',
                desc: 'Установка за 1 день без пыли и грязи. Чистая технология.',
              },
              {
                icon: 'Shield',
                title: 'Гарантия 10 лет',
                desc: 'Уверенность в качестве. Гарантия на материалы и работу.',
              },
            ].map((item, idx) => (
              <Card key={idx} className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="портфолио" className="py-20 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Портфолио
            </Badge>
            <h2 className="text-4xl font-heading font-bold">Наши проекты</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                img: 'https://cdn.poehali.dev/projects/1e086c7f-6855-4cb3-b95a-7ce7fa5d6394/files/d0f86288-85a7-4388-b81c-b4c7d51383f1.jpg',
                title: 'Гостиная с подсветкой',
                area: '45 м²',
              },
              {
                img: 'https://cdn.poehali.dev/projects/1e086c7f-6855-4cb3-b95a-7ce7fa5d6394/files/c2d77843-10c9-4153-8908-9f6038596b30.jpg',
                title: 'Спальня в стиле Лофт',
                area: '28 м²',
              },
              {
                img: 'https://cdn.poehali.dev/projects/1e086c7f-6855-4cb3-b95a-7ce7fa5d6394/files/0a9d1da7-bd7c-4a5d-a4a6-e1b3c9b18786.jpg',
                title: 'Современная кухня-гостиная',
                area: '52 м²',
              },
              {
                img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
                title: 'Детская комната',
                area: '20 м²',
              },
              {
                img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
                title: 'Квартира-студия',
                area: '35 м²',
              },
              {
                img: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&q=80',
                title: 'Спальня в скандинавском стиле',
                area: '22 м²',
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Icon name="Home" size={16} />
                    {item.area}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="цены" className="py-20 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Тарифы
            </Badge>
            <h2 className="text-4xl font-heading font-bold">Прозрачное ценообразование</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Базовый',
                price: '400',
                features: ['Матовый потолок', 'Белый цвет', 'Стандартный монтаж', 'Гарантия 5 лет'],
              },
              {
                name: 'Стандарт',
                price: '450',
                features: [
                  'Глянцевый/Сатиновый',
                  'Любой цвет из каталога',
                  'Светильники (до 5 шт)',
                  'Гарантия 10 лет',
                ],
                popular: true,
              },
              {
                name: 'Премиум',
                price: '550',
                features: [
                  'Дизайнерские решения',
                  'Многоуровневые системы',
                  'LED подсветка',
                  'Гарантия 15 лет',
                ],
              },
            ].map((plan, idx) => (
              <Card
                key={idx}
                className={`relative bg-card border-border ${
                  plan.popular ? 'border-primary shadow-lg shadow-primary/20' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Популярный</Badge>
                  </div>
                )}
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="space-y-1">
                    <div className="text-5xl font-bold text-primary">{plan.price} ₽</div>
                    <div className="text-sm text-muted-foreground">за м²</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Icon name="Check" size={14} className="text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  <Button className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90">
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="калькулятор" className="py-20 px-4 border-t border-border">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Калькулятор
            </Badge>
            <h2 className="text-4xl font-heading font-bold">Рассчитайте стоимость</h2>
          </div>
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Онлайн расчёт стоимости потолка</CardTitle>
              <CardDescription>Получите примерную стоимость за 30 секунд</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label className="text-base">Площадь помещения</Label>
                  <Badge variant="outline" className="text-lg font-bold">
                    {area} м²
                  </Badge>
                </div>
                <Slider
                  value={[area]}
                  onValueChange={(val) => setArea(val[0])}
                  min={10}
                  max={100}
                  step={1}
                  className="w-full"
                />
              </div>
              <div className="space-y-3">
                <Label className="text-base">Тип потолка</Label>
                <div className="grid grid-cols-3 gap-3">
                  {ceilingTypes.map((type) => (
                    <Button
                      key={type.id}
                      variant={ceilingType === type.id ? 'default' : 'outline'}
                      onClick={() => setCeilingType(type.id)}
                      className={
                        ceilingType === type.id
                          ? 'bg-primary text-primary-foreground'
                          : 'border-border'
                      }
                    >
                      {type.name}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="bg-primary/5 border border-primary/20 p-8 rounded-lg text-center">
                <p className="text-sm text-muted-foreground mb-2">Итоговая стоимость</p>
                <p className="text-5xl font-bold text-primary">
                  {calculatePrice().toLocaleString('ru-RU')} ₽
                </p>
              </div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                <Icon name="Phone" className="mr-2" size={20} />
                Получить точный расчёт
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Контакты
            </Badge>
            <h2 className="text-4xl font-heading font-bold">Свяжитесь с нами</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Телефон</p>
                    <p className="text-xl text-primary">+7 (999) 123-45-67</p>
                    <p className="text-sm text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-primary">info@eclipse-potolki.ru</p>
                    <p className="text-sm text-muted-foreground">Ответим в течение часа</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Адрес</p>
                    <p className="text-muted-foreground">Москва, ул. Примерная, д. 1</p>
                    <p className="text-sm text-muted-foreground">Офис и шоу-рум</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Заказать обратный звонок</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Иван Иванов" className="bg-background border-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="+7 (___) ___-__-__" className="bg-background border-border" />
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Отправить заявку
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">Э</span>
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold">Эклипс</h3>
                <p className="text-xs text-muted-foreground">Натяжные потолки премиум-класса</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 Эклипс. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
