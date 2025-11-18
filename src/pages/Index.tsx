import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [area, setArea] = useState(20);
  const [ceilingType, setCeilingType] = useState('glossy');
  const [activeSection, setActiveSection] = useState('home');

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
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-heading font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Эклипс
            </h1>
            <div className="hidden md:flex gap-6">
              {['Главная', 'Каталог', 'Портфолио', 'Услуги', 'Цены', 'Калькулятор', 'Контакты'].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Заказать звонок
            </Button>
          </div>
        </div>
      </nav>

      <section
        id="главная"
        className="pt-32 pb-20 px-4 min-h-screen flex items-center animate-fade-in"
      >
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <h2 className="text-5xl md:text-6xl font-heading font-bold leading-tight">
                Натяжные потолки{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  нового поколения
                </span>
              </h2>
              <p className="text-lg text-foreground/70">
                Создаём идеальные потолки для вашего дома и офиса. Гарантия 10 лет, монтаж за 1 день
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  onClick={() => scrollToSection('калькулятор')}
                >
                  <Icon name="Calculator" className="mr-2" size={20} />
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('портфолио')}>
                  <Icon name="Image" className="mr-2" size={20} />
                  Посмотреть работы
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-primary">10+</p>
                  <p className="text-sm text-foreground/60">лет на рынке</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-secondary">5000+</p>
                  <p className="text-sm text-foreground/60">проектов</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent">100%</p>
                  <p className="text-sm text-foreground/60">гарантия</p>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <img
                src="https://cdn.poehali.dev/projects/1e086c7f-6855-4cb3-b95a-7ce7fa5d6394/files/d0f86288-85a7-4388-b81c-b4c7d51383f1.jpg"
                alt="Натяжной потолок"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="каталог" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Каталог потолков
          </h2>
          <Tabs defaultValue="glossy" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="glossy">Глянцевые</TabsTrigger>
              <TabsTrigger value="matte">Матовые</TabsTrigger>
              <TabsTrigger value="satin">Сатиновые</TabsTrigger>
            </TabsList>
            <TabsContent value="glossy" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: 'Белый глянцевый', price: '450 ₽/м²', color: 'bg-white' },
                  { name: 'Черный глянцевый', price: '480 ₽/м²', color: 'bg-black' },
                  { name: 'Бежевый глянцевый', price: '450 ₽/м²', color: 'bg-amber-100' },
                ].map((item, idx) => (
                  <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className={`h-32 ${item.color}`}></div>
                    <CardHeader>
                      <CardTitle>{item.name}</CardTitle>
                      <CardDescription className="text-xl font-bold text-primary">
                        {item.price}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full">Выбрать</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="matte" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: 'Белый матовый', price: '400 ₽/м²', color: 'bg-gray-100' },
                  { name: 'Серый матовый', price: '420 ₽/м²', color: 'bg-gray-300' },
                  { name: 'Кремовый матовый', price: '400 ₽/м²', color: 'bg-stone-200' },
                ].map((item, idx) => (
                  <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className={`h-32 ${item.color}`}></div>
                    <CardHeader>
                      <CardTitle>{item.name}</CardTitle>
                      <CardDescription className="text-xl font-bold text-primary">
                        {item.price}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full">Выбрать</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="satin" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: 'Белый сатиновый', price: '420 ₽/м²', color: 'bg-slate-50' },
                  { name: 'Голубой сатиновый', price: '450 ₽/м²', color: 'bg-blue-100' },
                  { name: 'Персиковый сатиновый', price: '420 ₽/м²', color: 'bg-orange-50' },
                ].map((item, idx) => (
                  <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className={`h-32 ${item.color}`}></div>
                    <CardHeader>
                      <CardTitle>{item.name}</CardTitle>
                      <CardDescription className="text-xl font-bold text-primary">
                        {item.price}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full">Выбрать</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="портфолио" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Наши работы
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                img: 'https://cdn.poehali.dev/projects/1e086c7f-6855-4cb3-b95a-7ce7fa5d6394/files/d0f86288-85a7-4388-b81c-b4c7d51383f1.jpg',
                title: 'Гостиная с подсветкой',
              },
              {
                img: 'https://cdn.poehali.dev/projects/1e086c7f-6855-4cb3-b95a-7ce7fa5d6394/files/c2d77843-10c9-4153-8908-9f6038596b30.jpg',
                title: 'Спальня в стиле Лофт',
              },
              {
                img: 'https://cdn.poehali.dev/projects/1e086c7f-6855-4cb3-b95a-7ce7fa5d6394/files/0a9d1da7-bd7c-4a5d-a4a6-e1b3c9b18786.jpg',
                title: 'Современная кухня-гостиная',
              },
              {
                img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
                title: 'Детская комната',
              },
              {
                img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
                title: 'Квартира-студия',
              },
              {
                img: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&q=80',
                title: 'Спальня в скандинавском стиле',
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="overflow-hidden hover:shadow-xl transition-all hover:scale-105"
              >
                <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Наши услуги
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: 'Home', title: 'Замер', desc: 'Бесплатный выезд и замер' },
              { icon: 'Paintbrush', title: 'Дизайн', desc: '3D визуализация проекта' },
              { icon: 'Wrench', title: 'Монтаж', desc: 'Установка за 1 день' },
              { icon: 'Shield', title: 'Гарантия', desc: '10 лет на материалы' },
            ].map((item, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="цены" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Цены
          </h2>
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
                  'Любой цвет',
                  'Светильники до 5 шт',
                  'Гарантия 10 лет',
                ],
                popular: true,
              },
              {
                name: 'Премиум',
                price: '550',
                features: [
                  'Дизайнерский потолок',
                  'Многоуровневый',
                  'LED подсветка',
                  'Гарантия 15 лет',
                ],
              },
            ].map((plan, idx) => (
              <Card
                key={idx}
                className={`relative ${
                  plan.popular
                    ? 'border-2 border-primary shadow-xl scale-105'
                    : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-bold">
                    Популярный
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-4xl font-bold text-primary pt-4">
                    {plan.price} ₽<span className="text-lg text-foreground/60">/м²</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Icon name="Check" size={20} className="text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  <Button className="w-full mt-4">Заказать</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="калькулятор" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Калькулятор стоимости
          </h2>
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle>Рассчитайте стоимость вашего потолка</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Площадь помещения: {area} м²</Label>
                <Slider
                  value={[area]}
                  onValueChange={(val) => setArea(val[0])}
                  min={10}
                  max={100}
                  step={1}
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label>Тип потолка</Label>
                <div className="grid grid-cols-3 gap-2">
                  {ceilingTypes.map((type) => (
                    <Button
                      key={type.id}
                      variant={ceilingType === type.id ? 'default' : 'outline'}
                      onClick={() => setCeilingType(type.id)}
                      className="w-full"
                    >
                      {type.name}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg">
                <p className="text-center text-sm text-foreground/60 mb-2">
                  Примерная стоимость
                </p>
                <p className="text-center text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {calculatePrice().toLocaleString('ru-RU')} ₽
                </p>
              </div>
              <Button className="w-full bg-gradient-to-r from-primary to-secondary" size="lg">
                <Icon name="Phone" className="mr-2" size={20} />
                Получить точный расчёт
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Контакты
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Свяжитесь с нами</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">+7 (999) 123-45-67</p>
                    <p className="text-sm text-foreground/60">Звоните с 9:00 до 21:00</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Icon name="Mail" size={20} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">info@eclipse-potolki.ru</p>
                    <p className="text-sm text-foreground/60">Ответим в течение часа</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon name="MapPin" size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Москва, ул. Примерная, д. 1</p>
                    <p className="text-sm text-foreground/60">Офис и шоу-рум</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Заказать звонок</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="+7 (___) ___-__-__" />
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-heading font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Эклипс
          </h3>
          <p className="text-white/60 mb-6">Натяжные потолки премиум-класса</p>
          <p className="text-sm text-white/40">© 2024 Эклипс. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}