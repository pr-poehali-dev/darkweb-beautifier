import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import { Shield, Lock, ArrowRight, Eye, Terminal, Fingerprint, BarChart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  return (
    <div className="min-h-screen bg-darkcat-bg text-darkcat-text">
      <Navbar />
      
      <main>
        <HeroSection />
        
        <ServicesSection />
        
        {/* Stats Section */}
        <section className="py-16 px-4 bg-darkcat-subtle/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyQTRCNjgiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-5"></div>
          <div className="container mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 rounded-lg bg-darkcat-subtle/20 text-center hover:bg-darkcat-subtle/40 transition-all duration-300 border border-darkcat-border">
                <div className="h-16 w-16 rounded-full bg-darkcat-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-darkcat-accent" />
                </div>
                <h3 className="text-3xl font-bold mb-2">2048+</h3>
                <p className="text-darkcat-muted">Bits шифрования</p>
              </div>
              
              <div className="p-6 rounded-lg bg-darkcat-subtle/20 text-center hover:bg-darkcat-subtle/40 transition-all duration-300 border border-darkcat-border">
                <div className="h-16 w-16 rounded-full bg-darkcat-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Terminal className="h-8 w-8 text-darkcat-accent" />
                </div>
                <h3 className="text-3xl font-bold mb-2">100+</h3>
                <p className="text-darkcat-muted">Серверов по миру</p>
              </div>
              
              <div className="p-6 rounded-lg bg-darkcat-subtle/20 text-center hover:bg-darkcat-subtle/40 transition-all duration-300 border border-darkcat-border">
                <div className="h-16 w-16 rounded-full bg-darkcat-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Fingerprint className="h-8 w-8 text-darkcat-accent" />
                </div>
                <h3 className="text-3xl font-bold mb-2">0</h3>
                <p className="text-darkcat-muted">Следов активности</p>
              </div>
              
              <div className="p-6 rounded-lg bg-darkcat-subtle/20 text-center hover:bg-darkcat-subtle/40 transition-all duration-300 border border-darkcat-border">
                <div className="h-16 w-16 rounded-full bg-darkcat-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-darkcat-accent" />
                </div>
                <h3 className="text-3xl font-bold mb-2">99.9%</h3>
                <p className="text-darkcat-muted">Анонимность</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Code Demonstration Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-darkcat-accent/10 border border-darkcat-accent/20 text-darkcat-accent mb-4">
                  <Lock className="h-4 w-4 mr-2" />
                  <span className="text-sm">Продвинутая защита</span>
                </div>
                <h2 className="text-3xl font-bold mb-4 glow-text">
                  Военное шифрование данных
                </h2>
                <p className="text-darkcat-muted mb-6">
                  Используем многоуровневое шифрование с несколькими алгоритмами для создания непроницаемой защиты ваших данных и соединений.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="mr-3 h-6 w-6 rounded-full bg-darkcat-accent/10 flex items-center justify-center mt-0.5">
                      <span className="text-darkcat-accent text-sm">✓</span>
                    </div>
                    <span className="text-darkcat-muted">Гибридная криптография RSA + AES-256-GCM</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 h-6 w-6 rounded-full bg-darkcat-accent/10 flex items-center justify-center mt-0.5">
                      <span className="text-darkcat-accent text-sm">✓</span>
                    </div>
                    <span className="text-darkcat-muted">Шифрование от диска до облачного хранилища</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 h-6 w-6 rounded-full bg-darkcat-accent/10 flex items-center justify-center mt-0.5">
                      <span className="text-darkcat-accent text-sm">✓</span>
                    </div>
                    <span className="text-darkcat-muted">Протоколы perfect forward secrecy</span>
                  </li>
                </ul>
                <Button className="bg-darkcat-accent hover:bg-darkcat-accent2">
                  Узнать больше <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative code-animation">
                <div className="absolute -inset-4 bg-gradient-to-r from-darkcat-accent/20 to-purple-600/20 rounded-lg blur-lg opacity-30"></div>
                <div className="relative rounded-lg overflow-hidden bg-darkcat-code border border-darkcat-border">
                  <div className="flex items-center px-4 py-2 bg-black border-b border-darkcat-border">
                    <div className="flex space-x-2 mr-4">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-darkcat-muted flex-1 text-center font-mono">
                      crypto_module.rs
                    </div>
                  </div>
                  <div className="p-4 font-mono text-sm overflow-x-auto max-h-[400px] scrollbar-hide">
                    <pre className="text-darkcat-text/90">
<span className="text-blue-400">use</span> <span className="text-green-400">aes_gcm</span>::{Aes256Gcm, KeyInit, Nonce};
<span className="text-blue-400">use</span> <span className="text-green-400">aes_gcm</span>::aead::{Aead, Payload};
<span className="text-blue-400">use</span> <span className="text-green-400">rand</span>::{rngs::OsRng, RngCore};
<span className="text-blue-400">use</span> <span className="text-green-400">rsa</span>::{PublicKey, RsaPrivateKey, RsaPublicKey};

<span className="text-purple-400">struct</span> <span className="text-yellow-400">DarkCatCrypto</span> {'{'}
    rsa_key: RsaPrivateKey,
    aes_key: [u8; 32],
    secure_channel: <span className="text-purple-400">bool</span>,
{'}'}

<span className="text-blue-400">impl</span> <span className="text-yellow-400">DarkCatCrypto</span> {'{'}
    <span className="text-blue-400">pub fn</span> <span className="text-yellow-400">new</span>() -> <span className="text-purple-400">Self</span> {'{'}
        <span className="text-green-400">// Generate RSA key pair (4096 bits)</span>
        <span className="text-blue-400">let</span> rng = &<span className="text-blue-400">mut</span> OsRng;
        <span className="text-blue-400">let</span> rsa_key = RsaPrivateKey::new(rng, 4096)
            .expect(<span className="text-orange-400">"failed to generate RSA key"</span>);
        
        <span className="text-green-400">// Generate random AES-256 key</span>
        <span className="text-blue-400">let</span> <span className="text-blue-400">mut</span> aes_key = [0u8; 32];
        rng.fill_bytes(&<span className="text-blue-400">mut</span> aes_key);
        
        <span className="text-yellow-400">Self</span> {'{'} 
            rsa_key, 
            aes_key,
            secure_channel: <span className="text-purple-400">false</span>
        {'}'}
    {'}'}
    
    <span className="text-blue-400">pub fn</span> <span className="text-yellow-400">encrypt_data</span>(&<span className="text-purple-400">self</span>, data: &[u8], 
                             associated_data: &[u8]) -> <span className="text-purple-400">Vec</span>&lt;u8&gt; {'{'}
        <span className="text-green-400">// Create cipher instance with key</span>
        <span className="text-blue-400">let</span> cipher = Aes256Gcm::new(&<span className="text-purple-400">self</span>.aes_key.into());
        
        <span className="text-green-400">// Random 12-byte nonce</span>
        <span className="text-blue-400">let</span> <span className="text-blue-400">mut</span> nonce_bytes = [0u8; 12];
        OsRng.fill_bytes(&<span className="text-blue-400">mut</span> nonce_bytes);
        <span className="text-blue-400">let</span> nonce = Nonce::from_slice(&nonce_bytes);
        
        <span className="text-green-400">// Encrypt with associated data for authentication</span>
        <span className="text-blue-400">let</span> payload = Payload {'{'}
            msg: data,
            aad: associated_data,
        {'}'};
        
        <span className="text-blue-400">let</span> <span className="text-blue-400">mut</span> encrypted = cipher.encrypt(nonce, payload)
            .expect(<span className="text-orange-400">"encryption failed"</span>);
            
        <span className="text-green-400">// Prepend nonce to ciphertext</span>
        <span className="text-blue-400">let</span> <span className="text-blue-400">mut</span> result = <span className="text-purple-400">Vec</span>::with_capacity(nonce_bytes.len() + encrypted.len());
        result.extend_from_slice(&nonce_bytes);
        result.append(&<span className="text-blue-400">mut</span> encrypted);
        
        result
    {'}'}
    
    <span className="text-blue-400">pub fn</span> <span className="text-yellow-400">establish_secure_channel</span>(&<span className="text-blue-400">mut</span> <span className="text-purple-400">self</span>) -> <span className="text-purple-400">bool</span> {'{'}
        <span className="text-green-400">// Secure channel establishment code...</span>
        <span className="text-purple-400">self</span>.secure_channel = <span className="text-purple-400">true</span>;
        <span className="text-purple-400">true</span>
    {'}'}
{'}'}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-darkcat-bg to-darkcat-subtle/30">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-darkcat-accent/10 border border-darkcat-accent/20 text-darkcat-accent mb-4">
                <BarChart className="h-4 w-4 mr-2" />
                <span className="text-sm">Часто задаваемые вопросы</span>
              </div>
              <h2 className="text-3xl font-bold mb-4 glow-text">
                Всё, что вы хотели знать
              </h2>
              <p className="text-darkcat-muted max-w-xl mx-auto">
                Ответы на самые популярные вопросы о наших сервисах и технологиях анонимности
              </p>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-darkcat-border">
                <AccordionTrigger className="text-left text-darkcat-text hover:text-darkcat-accent">
                  Что такое DarkCat и как это работает?
                </AccordionTrigger>
                <AccordionContent className="text-darkcat-muted">
                  DarkCat — это набор сервисов для анонимного и защищенного доступа к интернету. 
                  Технология работает через многослойную маршрутизацию трафика с шифрованием 
                  на каждом этапе, что делает невозможным отслеживание вашей активности и идентификацию личности.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-darkcat-border">
                <AccordionTrigger className="text-left text-darkcat-text hover:text-darkcat-accent">
                  Насколько надежно шифрование данных?
                </AccordionTrigger>
                <AccordionContent className="text-darkcat-muted">
                  Мы используем многоуровневое шифрование военного класса, включая AES-256-GCM и RSA-4096. 
                  Такая комбинация алгоритмов создает практически непреодолимую защиту для ваших данных, 
                  и даже при использовании квантовых компьютеров потребуются миллионы лет для взлома.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border-darkcat-border">
                <AccordionTrigger className="text-left text-darkcat-text hover:text-darkcat-accent">
                  Существуют ли ограничения на использование сервиса?
                </AccordionTrigger>
                <AccordionContent className="text-darkcat-muted">
                  DarkCat разработан для законного использования и защиты приватности. Хотя мы не отслеживаем вашу активность, 
                  мы не поддерживаем противозаконную деятельность. Сервис имеет технические ограничения по пропускной способности 
                  в зависимости от выбранного тарифного плана.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border-darkcat-border">
                <AccordionTrigger className="text-left text-darkcat-text hover:text-darkcat-accent">
                  Как получить доступ к DarkCat?
                </AccordionTrigger>
                <AccordionContent className="text-darkcat-muted">
                  Доступ возможен через специальный клиент, который можно загрузить с нашего сайта после регистрации. 
                  Клиент доступен для всех основных платформ: Windows, macOS, Linux, iOS и Android. 
                  Для максимальной безопасности рекомендуется использовать отдельную ОС Tails.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="border-darkcat-border">
                <AccordionTrigger className="text-left text-darkcat-text hover:text-darkcat-accent">
                  Храните ли вы какие-либо данные о пользователях?
                </AccordionTrigger>
                <AccordionContent className="text-darkcat-muted">
                  Мы придерживаемся строгой политики отсутствия логов. Не сохраняем IP-адреса, историю посещений или метаданные. 
                  Для регистрации требуется только псевдоним и пароль. Оплата принимается через криптовалюты для дополнительной анонимности.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 px-4 bg-darkcat-bg relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-radial from-darkcat-accent/20 to-transparent"></div>
          </div>
          <div className="container mx-auto text-center max-w-3xl relative z-10">
            <div className="flex justify-center mb-6">
              <div className="h-16 w-16 rounded-full bg-darkcat-bg border-2 border-darkcat-accent flex items-center justify-center animate-pulse-subtle">
                <Zap className="h-8 w-8 text-darkcat-accent" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 glow-text">
              Готовы к полной цифровой свободе?
            </h2>
            <p className="text-xl text-darkcat-muted mb-8">
              Присоединяйтесь к тысячам пользователей, которые уже освободились от слежки и наслаждаются безопасным интернетом
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-darkcat-accent hover:bg-darkcat-accent2 text-white">
                Создать аккаунт
              </Button>
              <Button size="lg" variant="outline" className="border-darkcat-accent text-darkcat-text hover:bg-darkcat-accent/10">
                Узнать больше
              </Button>
            </div>
            <div className="mt-8 text-darkcat-muted text-sm">
              * Начните с бесплатного плана. Кредитная карта не требуется.
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
