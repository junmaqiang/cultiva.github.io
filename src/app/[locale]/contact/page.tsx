'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useApp } from '@/context/AppContext';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle, MessageSquare, Globe, ShoppingBag, Heart } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactPage() {
  const { t } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 模拟提交
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    toast.success(t.contact.messageSent + '!');
    
    // 重置表单
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitSuccess(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      key: 'companyAddress',
      content: '36 Purvis Street, #02-06 Singapore 188613'
    },
    {
      icon: Mail,
      key: 'emailAddress',
      content: 'e@cultiva100.net'
    },
    {
      icon: Phone,
      key: 'phoneNumber',
      content: '+65 69798752'
    },
    {
      icon: Clock,
      key: 'workingHours',
      contentKey: 'workingHoursDesc'
    }
  ];

  const faqKeys = ['howToOrder', 'shippingTime', 'returns', 'howToBecomeMember'];

  const quickContactKeys = ['orderInquiry', 'productInquiry', 'afterSales'];

  const quickContactIcons = [ShoppingBag, MessageSquare, Heart];

  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Header />
      </div>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden text-white py-20 lg:py-28">
          <div className="absolute inset-0">
            <Image
              src="/images/contact-bg.jpg"
              alt="Contact Background"
              fill
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/95 via-emerald-800/90 to-teal-900/95" />
          </div>
          <div className="page-container relative">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">
                {t.contact.title}
              </h1>
              <p className="text-xl text-emerald-100/90">
                {t.contact.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* 快速联系 */}
        <section className="py-16 bg-background">
          <div className="page-container">
            <div className="grid md:grid-cols-3 gap-8">
              {quickContactKeys.map((key, index) => {
                const Icon = quickContactIcons[index];
                return (
                  <div key={key} className="p-8 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{t.contact[key as keyof typeof t.contact]}</h3>
                    <p className="text-muted-foreground">{t.contact[`${key}Desc` as keyof typeof t.contact]}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="page-container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* 联系表单 */}
              <div>
                <h2 className="text-3xl font-bold mb-8 font-serif">{t.contact.sendMessage}</h2>
                
                {submitSuccess ? (
                  <div className="p-8 rounded-2xl border bg-emerald-50 dark:bg-emerald-900/20 text-center">
                    <CheckCircle className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{t.contact.messageSent}</h3>
                    <p className="text-muted-foreground">{t.contact.messageSentDesc}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          {t.contact.yourName}
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder={t.contact.yourNamePlaceholder}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          {t.contact.yourEmail}
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder={t.contact.yourEmailPlaceholder}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        {t.contact.subject}
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder={t.contact.subjectPlaceholder}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        {t.contact.message}
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={t.contact.messagePlaceholder}
                        rows={6}
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600"
                    >
                      <Send className="h-4 w-4" />
                      {isSubmitting ? t.contact.sending : t.contact.sendMessageBtn}
                    </Button>
                  </form>
                )}
              </div>

              {/* 联系信息 */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-8 font-serif">{t.contact.contactInfo}</h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={info.key} className="flex items-start gap-4 p-4 rounded-xl border bg-card">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{t.contact[info.key as keyof typeof t.contact]}</h3>
                          <p className="text-muted-foreground">
                            {info.contentKey ? t.contact[info.contentKey as keyof typeof t.contact] : info.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 常见问题 */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 font-serif">{t.contact.faq}</h3>
                  <div className="space-y-4">
                    {faqKeys.map((key) => (
                      <div key={key} className="p-4 rounded-xl border bg-card">
                        <h4 className="font-semibold mb-2 text-emerald-700 dark:text-emerald-400">
                          {t.contact[key as keyof typeof t.contact]}
                        </h4>
                        <p className="text-muted-foreground text-sm">{t.contact[`${key}Answer` as keyof typeof t.contact]}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 社交媒体 */}
                <div className="p-6 rounded-2xl border bg-card">
                  <h3 className="font-semibold mb-4">{t.contact.followUs}</h3>
                  <div className="flex gap-4">
                    {['Instagram', 'Facebook', 'Twitter', 'LinkedIn'].map((social, index) => (
                      <a
                        key={index}
                        href="#"
                        className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-all"
                      >
                        <span className="text-sm font-medium">{social.charAt(0)}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 地图占位 */}
        <section className="py-16 bg-background">
          <div className="page-container">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 font-serif">{t.contact.findUs}</h2>
              <p className="text-muted-foreground">36 Purvis Street, #02-06 Singapore 188613</p>
            </div>
            <div className="aspect-[16/9] rounded-3xl overflow-hidden bg-muted flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
                <p className="text-muted-foreground">{t.contact.mapLocation}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div>
        <Footer />
      </div>
    </div>
  );
}
