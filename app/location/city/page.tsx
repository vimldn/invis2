'use client';

import React, { useState } from 'react';
import { Users, Sparkles, Shield, Medal, Globe, User, ArrowUpRight, ChevronUp, MapPin, CheckCircle, Clock, Award } from '@/components/Icons';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import LeadFormModal from '@/components/LeadFormModal';
import { SERVICES, LOCATIONS, FAQS_SERVICES } from '@/lib/data';
import Link from 'next/link';
import { notFound } from 'next/navigation';
function InlineLeadForm({ cityName }: { cityName: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const ENDPOINT = 'https://script.google.com/macros/s/AKfycbz-B9H0JTI7a9Cgyn9z-pZXKnuiNm6acAn8Zb13N21qGRcpxy7EtVvlPAjpl6f7Hj3-RQ/exec';
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); setIsSubmitting(true);
    try {
      const f = e.currentTarget;
      const payload = { fullName: (f.elements.namedItem('fullName') as HTMLInputElement).value, phone: (f.elements.namedItem('phone') as HTMLInputElement).value, email: (f.elements.namedItem('email') as HTMLInputElement).value, treatment: (f.elements.namedItem('treatment') as HTMLSelectElement).value, location: cityName, page: window.location.href, source: 'City Page' };
      const res = await fetch(ENDPOINT, { method: 'POST', body: JSON.stringify(payload) });
      const text = await res.text(); let data: Record<string,unknown> = {}; try { data=JSON.parse(text); } catch {}
      if (data?.ok === false) throw new Error('failed');
      setIsSuccess(true);
    } catch(err) { console.error(err); alert('Something went wrong.'); } finally { setIsSubmitting(false); }
  };
  if (isSuccess) return (
    <div className="flex flex-col items-center text-center py-10 space-y-4">
      <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-full flex items-center justify-center"><CheckCircle className="w-9 h-9" /></div>
      <div><h3 className="text-xl font-display font-bold text-gray-900 mb-1">Request Received!</h3>
      <p className="text-gray-500 text-sm">Matched with a specialist in {cityName}. Expect a callback within 2 hours.</p></div>
    </div>);
  return (<>
    <div className="mb-5">
      <div className="inline-block px-3 py-1 bg-brand-50 text-brand-600 text-[10px] font-bold uppercase tracking-widest rounded-full mb-2">Free Matching Service</div>
      <h3 className="text-xl font-display font-bold text-gray-900">Get Matched in {cityName}</h3>
      <p className="text-gray-500 text-sm mt-1">Top local clinics contact you within 2 hours</p>
    </div>
    <form onSubmit={handleSubmit} className="space-y-3">
      <input required name="fullName" type="text" placeholder="Full Name *" className="w-full px-4 py-3.5 bg-gray-50 rounded-xl border border-gray-200 text-gray-700 text-sm focus:border-brand-400 focus:bg-white outline-none transition-all placeholder:text-gray-300" />
      <div className="grid grid-cols-2 gap-3">
        <input required name="phone" type="tel" placeholder="Phone *" className="w-full px-4 py-3.5 bg-gray-50 rounded-xl border border-gray-200 text-gray-700 text-sm focus:border-brand-400 focus:bg-white outline-none transition-all placeholder:text-gray-300" />
        <input required name="email" type="email" placeholder="Email *" className="w-full px-4 py-3.5 bg-gray-50 rounded-xl border border-gray-200 text-gray-700 text-sm focus:border-brand-400 focus:bg-white outline-none transition-all placeholder:text-gray-300" />
      </div>
      <select required name="treatment" defaultValue="" className="w-full px-4 py-3.5 bg-gray-50 rounded-xl border border-gray-200 text-gray-700 text-sm focus:border-brand-400 outline-none transition-all appearance-none">
        <option value="" disabled>Select Treatment *</option>
        {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
        <option value="Not Sure Yet">Not Sure Yet</option>
      </select>
      <button disabled={isSubmitting} type="submit" className="w-full py-4 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2">
        {isSubmitting ? <div className="w-5 h-5 border-4 border-white/30 border-t-white rounded-full animate-spin" /> : <>Get 3 Free Quotes <ArrowUpRight className="w-4 h-4" /></>}
      </button>
      <div className="flex justify-center gap-4 pt-1">{['100% Free','No Spam','2hr Response'].map(l=><span key={l} className="flex items-center gap-1 text-[11px] text-gray-400"><span className="w-1.5 h-1.5 rounded-full bg-brand-500 inline-block"/>{l}</span>)}</div>
    </form>
  </>);
}
export default function CityServicesPage({ params }: { params: { city: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const allCities = Object.values(LOCATIONS).flat();
  const cityName = allCities.find(city => city.toLowerCase().replace(/\s+/g,'-') === params.city);
  if (!cityName) notFound();
  React.useEffect(() => {
    const h = () => { const s=window.scrollY; const t=document.documentElement.scrollHeight-window.innerHeight; setShowScrollTop(s/t>0.3); };
    window.addEventListener('scroll',h); return ()=>window.removeEventListener('scroll',h);
  }, []);
  const servicesWithIcons = SERVICES.map(service => ({
    ...service,
    icon: service.id==="single-tooth" ? <Shield className="w-7 h-7"/> : service.id==="multiple-teeth" ? <Users className="w-7 h-7"/> : service.id==="full-arch" ? <Medal className="w-7 h-7"/> : service.id==="bone-grafting" ? <Globe className="w-7 h-7"/> : service.id==="immediate-implants" ? <Sparkles className="w-7 h-7"/> : <User className="w-7 h-7"/>
  }));
  return (
    <div className="min-h-screen bg-white">
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Navigation onOpenModal={() => setIsModalOpen(true)} />
      <button onClick={() => window.scrollTo({top:0,behavior:'smooth'})} className={}><ChevronUp className="w-5 h-5"/></button>

      <section className="section-padding bg-white border-b border-gray-100">
        <div className="container-width">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-500 mb-6">
            <Link href="/location" className="hover:text-brand-600">All Locations</Link>
            <span>/</span><span className="text-gray-900 font-medium">{cityName}</span>
          </div>
          <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-start">
            <div>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4 leading-tight">Dental Implants in <span className="text-brand-600">{cityName}</span></h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-xl">Find independently vetted dental implant specialists in {cityName}. Our network covers every implant treatment type — from single tooth replacements to full arch restorations — with transparent pricing, 0% finance, and same-week consultations.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[{icon:<Shield className="w-5 h-5 text-brand-600"/>,title:"GDC-Verified",desc:"Every specialist holds active GDC registration."},{icon:<Clock className="w-5 h-5 text-brand-600"/>,title:"Fast Appointments",desc:"Consultations available within 3-5 working days."},{icon:<Award className="w-5 h-5 text-brand-600"/>,title:"0% Finance",desc:"Spread costs over 12-60 months."},{icon:<CheckCircle className="w-5 h-5 text-brand-600"/>,title:"Free Service",desc:"No cost to you. No hidden fees."}].map((item,i)=>(
                  <div key={i} className="flex gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100"><div className="flex-shrink-0 mt-0.5">{item.icon}</div><div><p className="font-semibold text-gray-900 text-sm">{item.title}</p><p className="text-gray-500 text-xs mt-0.5">{item.desc}</p></div></div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-8 sticky top-28"><InlineLeadForm cityName={cityName}/></div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-3">Available Treatments in {cityName}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">All six implant treatment types are available through our {cityName} network. Select a treatment to see local availability and indicative pricing for {cityName} clinics.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesWithIcons.map((service) => (
              <Link key={service.id} href={"\/services\/"+service.id+"\/"+params.city} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-200 transition-all p-7 flex flex-col">
                <div className="mb-4 w-11 h-11 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600">{service.icon}</div>
                <h3 className="text-lg font-display font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">{service.title} in {cityName}</h3>
                <p className="text-gray-500 text-sm mb-5 flex-1 leading-relaxed">{service.desc}</p>
                <div className="flex items-center gap-1.5 text-brand-600 font-semibold text-sm">View {cityName} specialists <ArrowUpRight className="w-4 h-4"/></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-5">What to Expect from Dental Implant Treatment in {cityName}</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-[15px]">
                <p>Dental implant treatment in {cityName} follows the same evidence-based protocol used by leading specialists worldwide. Every provider in our {cityName} network operates with in-house CBCT 3D scanning — a non-negotiable vetting requirement — since accurate pre-surgical imaging directly reduces complications and improves long-term implant success rates.</p>
                <p>A standard single implant course in {cityName} typically spans three to six months from first consultation to final crown fitting. This timeline can be shorter if no preparatory treatment is needed, or longer if bone grafting is required. Patients who qualify for immediate load protocols can leave their surgical appointment with a temporary restoration already in place.</p>
                <p>Costs in {cityName} align with the national average for private implant dentistry. Single tooth implants range from £1,800 to £3,200 inclusive of post, abutment, and ceramic crown. Full arch restorations are generally priced between £9,000 and £18,000 per arch. Every practice in our network provides a written, itemised treatment plan before any procedure begins.</p>
                <p>Long-term survival rates exceed 97% at ten years when patients maintain good oral hygiene and attend annual monitoring. Our {cityName} specialists include a structured aftercare schedule — 3-month integration review, 12-month check, and annual hygiene visits — as standard in every treatment plan.</p>
              </div>
            </div>
            <div className="sticky top-28 space-y-5">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-8"><InlineLeadForm cityName={cityName}/></div>
              <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
                <h3 className="font-display font-bold text-gray-900 text-base mb-4">Indicative Costs in {cityName}</h3>
                <div className="space-y-2.5">{[["Single Tooth Implant","£1,800–£3,200"],["Multiple Teeth (per implant)","£1,600–£2,800"],["Full Arch All-on-4","£9,000–£15,000"],["Implant-Retained Denture","£3,500–£7,000"],["Bone Graft (if required)","£500–£2,500"]].map(([t,r])=>(
                  <div key={t} className="flex justify-between items-center pb-2.5 border-b border-gray-100 last:border-0"><p className="text-gray-700 text-sm font-medium">{t}</p><p className="text-brand-600 font-bold text-sm">{r}</p></div>
                ))}</div>
                <p className="text-gray-400 text-xs mt-3">Indicative only. Written quote before treatment begins.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-3">How the Matching Process Works</h2>
            <p className="text-gray-600 max-w-xl mx-auto">From your first enquiry to your consultation in {cityName} — here is exactly what happens next.</p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {[["01","Submit Details","Complete our 90-second form with your location, treatment interest, and contact details."],["02","Case Review","Our team identifies the best-matched specialists for your specific situation in "+cityName+"."],["03","Receive Quotes","Up to 3 itemised quotes from verified "+cityName+" providers within 2 hours."],["04","Book Consultation","Choose your preferred specialist and book a free, no-obligation initial appointment."],["05","Begin Treatment","Your specialist builds a personalised plan. You proceed entirely at your own pace."]].map(([n,title,desc])=>(
              <div key={n} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
                <span className="text-3xl font-display font-bold text-gray-100 block mb-3">{n}</span>
                <h3 className="font-display font-bold text-gray-900 text-sm mb-2">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8"><button onClick={() => setIsModalOpen(true)} className="btn-primary !px-10 !py-4">Start Now — Takes 90 Seconds</button></div>
        </div>
      </section>
      <FAQSection faqs={FAQS_SERVICES}/>
      <Footer/>
    </div>
  );
}
