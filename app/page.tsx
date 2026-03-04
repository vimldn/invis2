'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, MapPin, Shield, Sparkles, Calendar, Globe, Users } from 'lucide-react';
import { services } from '@/data/services';
import { LOCATIONS, toSlug } from '@/data/locations';
import { FAQS_HOME } from '@/data/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { TrustBadges } from '@/components/TrustBadges';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { LeadFormModal } from '@/components/LeadFormModal';

const topCities = ['London', 'Manchester', 'Birmingham', 'Leeds', 'Liverpool', 'Bristol', 'Edinburgh', 'Glasgow', 'Cardiff'];

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">

        <Hero
          title="The Network for Elite Invisalign Results"
          subtitle="Connecting discerning patients with the top 1% of Platinum Invisalign providers for verified orthodontic results across the UK."
          image="https://images.unsplash.com/photo-1694675236489-d73651370688?q=80&w=880&auto=format&fit=crop"
          onOpenModal={() => setIsModalOpen(true)}
        />

        <TrustBadges />

        {/* Why Choose Invisalign - Service Cards (Garden Rooms Services Grid pattern) */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Why Choose Invisalign Clear Aligners?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The modern alternative to traditional braces. Nearly invisible, removable, and designed for your lifestyle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <CheckCircle className="w-7 h-7 text-brand-500" />, title: 'Nearly Invisible', desc: 'Clear aligners are virtually undetectable. Perfect for professionals and adults who want discreet treatment.' },
                { icon: <Users className="w-7 h-7 text-brand-500" />, title: 'Removable Convenience', desc: 'Eat, brush, and floss normally. Remove for important meetings, photos, or special occasions.' },
                { icon: <Shield className="w-7 h-7 text-brand-500" />, title: 'Comfortable Design', desc: 'Smooth plastic aligners with no sharp metal edges. Custom-fitted for maximum comfort throughout treatment.' },
                { icon: <Sparkles className="w-7 h-7 text-brand-500" />, title: 'Predictable Results', desc: 'Advanced 3D ClinCheck technology shows your complete treatment plan and final result before you begin.' },
                { icon: <Calendar className="w-7 h-7 text-brand-500" />, title: 'Faster Treatment', desc: 'Most cases complete in 6-18 months. Express and Lite options available for minor corrections in 3-6 months.' },
                { icon: <Globe className="w-7 h-7 text-brand-500" />, title: 'Proven Technology', desc: 'Over 14 million patients treated worldwide. Backed by decades of research and innovation.' },
              ].map((item, i) => (
                <div key={i} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col p-6">
                  <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm flex-grow">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatments Grid (Garden Rooms Services pattern) */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Our Treatments</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Customised clear aligner solutions for every clinical challenge.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map(service => (
                <article key={service.id} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
                  <Link href={`/services/${service.slug}/`} className="block h-48 overflow-hidden relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </Link>
                  <div className="p-6 flex flex-col flex-grow">
                    <Link href={`/services/${service.slug}/`}>
                      <h3 className="text-xl font-display font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">{service.title}</h3>
                    </Link>
                    <p className="text-gray-600 text-sm mb-6 line-clamp-2 flex-grow">{service.description}</p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                      <Link href={`/services/${service.slug}/`} className="text-brand-600 font-medium text-sm flex items-center hover:underline">
                        Learn more <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                      <button onClick={() => setIsModalOpen(true)} className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-bold py-2 px-4 rounded-lg transition-colors">
                        Get Matched
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works (Garden Rooms pattern) */}
        <section className="section-padding bg-gray-50 border-y border-gray-100">
          <div className="container-width">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">How We Advocate For You</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We ensure you are matched with the provider best suited for your specific clinical profile.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { step: 1, title: "Analysis", desc: "We evaluate your smile goals to determine the ideal provider tier and treatment type." },
                { step: 2, title: "Matching", desc: "We filter our database of Platinum and Diamond providers to find the perfect specialist fit." },
                { step: 3, title: "Referral", desc: "Receive a direct referral for a free 3D digital scan and consultation." },
              ].map(item => (
                <div key={item.step} className="text-center">
                  <div className="w-20 h-20 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                    <span className="text-3xl font-display font-bold text-brand-600">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <button onClick={() => setIsModalOpen(true)} className="btn-primary text-lg !px-8 !py-4">Find My Specialist</button>
            </div>
          </div>
        </section>

        {/* Testimonials (Garden Rooms pattern) */}
        <section className="section-padding bg-brand-50">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">What Patients Say</h2>
            </div>
            <Testimonials limit={3} />
          </div>
        </section>

        {/* Areas We Serve (Garden Rooms city grid pattern) */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Find Providers Near You</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Platinum and Diamond Invisalign providers across the UK.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {topCities.map(city => (
                <Link
                  key={city}
                  href={`/location/${toSlug(city)}/`}
                  className="group block bg-gray-50 hover:bg-brand-50 border border-gray-100 hover:border-brand-200 rounded-xl p-5 transition-all"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <MapPin className="w-5 h-5 text-brand-500" />
                    </div>
                    <span className="font-display font-bold text-gray-900 group-hover:text-brand-700">Invisalign {city}</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/location/" className="text-brand-600 font-semibold hover:underline">View all locations →</Link>
            </div>
          </div>
        </section>

        {/* FAQ (Garden Rooms pattern) */}
        <section className="section-padding bg-gray-50">
          <div className="container-width max-w-3xl">
            <FAQ faqs={FAQS_HOME} />
          </div>
        </section>

        {/* Final CTA Banner (Garden Rooms pattern) */}
        <section className="py-24 bg-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop" alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="container-width text-center relative z-10">
            <h2 className="text-4xl font-display font-bold text-white mb-6">Ready to Transform Your Smile?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Connect with a Platinum Invisalign provider in your area. Free consultation, expert care, and results you&apos;ll love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => setIsModalOpen(true)} className="btn-primary text-xl !px-10 !py-5">Get Matched with a Specialist</button>
              <Link href="/services/" className="btn-secondary !bg-white/10 !border-white/30 !text-white hover:!bg-white/20 text-xl !px-10 !py-5">
                Browse Treatments
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-400">
              {['No cost to use', 'Vetted specialists only', 'Free consultation matching'].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-400" /> {item}
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
