import { Injectable, signal, computed, effect } from '@angular/core';
import { LocalizedText } from '../models/project';

export type Language = 'en' | 'ar';

const COPY: Record<string, LocalizedText> = {
  home: { en: 'Home', ar: 'الرئيسية' },
  about: { en: 'About', ar: 'نبذة' },
  experience: { en: 'Experience', ar: 'الخبرة' },
  skills: { en: 'Skills', ar: 'المهارات' },
  projects: { en: 'Projects', ar: 'المشاريع' },
  contact: { en: 'Contact', ar: 'تواصل' },
  explore: { en: 'Explore Projects', ar: 'استكشف المشاريع' },
  getInTouch: { en: 'Get in Touch', ar: 'تواصل معي' },
  featured: { en: 'Selected Work', ar: 'أعمال مختارة' },
  featuredSub: {
    en: 'Domain services, the legal system, complaints, visitors, and a machine-learning graduate project.',
    ar: 'خدمات النطاقات، والنظام القانوني، والشكاوى، والزوار، ومشروع تخرج بالتعلم الآلي.'
  },
  viewCase: { en: 'View Case Study', ar: 'عرض تفاصيل المشروع' },
  visitSite: { en: 'Visit website', ar: 'زيارة الموقع' },
  allProjects: { en: 'All Projects', ar: 'كل المشاريع' },
  name: { en: 'Shaimaa Al Maqbali', ar: 'شيماء المقبالية' },
  role: { en: 'Information Security', ar: 'أمن المعلومات' },
  introLead: { en: 'Java Developer · Telecommunications Regulatory Authority', ar: 'مطوّرة جافا · هيئة تنظيم الاتصالات' },
  introBody: {
    en: 'Bachelor of Information Security from the Modern College of Business and Science. I work as a freelance Java developer with the Telecommunications Regulatory Authority in Oman, using Spring Boot and Angular.',
    ar: 'حاصلة على بكالوريوس أمن المعلومات من الكلية الحديثة للتجارة والعلوم. أعمل مطوّرة جافا مستقلة لدى هيئة تنظيم الاتصالات في سلطنة عُمان، باستخدام Spring Boot وAngular.'
  },
  aboutTitle: { en: 'Security training, applied in software.', ar: 'خلفية أمنية تُطبَّق في البرمجيات.' },
  aboutBody: {
    en: 'I studied information security in Bowsher, Muscat. At TRA I have analyzed requirements, shaped database structure, and prepared frontend pages for domain name services.',
    ar: 'درست أمن المعلومات في بوشر بمسقط. وفي الهيئة حلّلت المتطلبات، وصغت هيكل قاعدة البيانات، وأعددت صفحات الواجهة لخدمات أسماء النطاقات.'
  },
  skillTitle: { en: 'Tools & Technologies', ar: 'الأدوات والتقنيات' },
  contactTitle: { en: "Let's build something meaningful.", ar: 'لنبنِ شيئًا ذا قيمة.' },
  contactBody: {
    en: 'For a role, a project, or a question, reach me by email or phone. I am based in Sohar.',
    ar: 'لوظيفة أو مشروع أو استفسار، تواصل معي بالبريد أو الهاتف. أقيم في صحار.'
  },
  back: { en: 'Back to Projects', ar: 'العودة إلى المشاريع' },
  overview: { en: 'Overview', ar: 'نظرة عامة' },
  challenge: { en: 'The Challenge', ar: 'التحدي' },
  solution: { en: 'Approach', ar: 'النهج' },
  contribution: { en: 'My Contribution', ar: 'مساهمتي' },
  features: { en: 'Key Areas', ar: 'المجالات الرئيسية' },
  tech: { en: 'Technology Stack', ar: 'التقنيات المستخدمة' },
  note: {
    en: 'Project details are summarized for portfolio purposes. Confidential information and internal screenshots are intentionally excluded.',
    ar: 'تم تلخيص تفاصيل المشروع لأغراض عرض الأعمال مع استبعاد المعلومات السرية والصور الداخلية.'
  },
  notFound: { en: 'Project not found', ar: 'المشروع غير موجود' },
  footer: { en: 'Designed & built with Angular.', ar: 'صُمّم وطُوّر باستخدام Angular.' },
  location: { en: 'Sohar, Oman', ar: 'صحار، عُمان' },
  availability: { en: 'Java Developer · Freelance', ar: 'مطوّرة جافا · عمل حر' },
  experienceTitle: { en: 'Professional experience', ar: 'الخبرة العملية' },
  education: { en: 'Education', ar: 'التعليم' },
  certificates: { en: 'Certificates', ar: 'الشهادات' },
  gpa: { en: 'GPA', ar: 'المعدل' },
  tra: { en: 'Telecommunications Regulatory Authority', ar: 'هيئة تنظيم الاتصالات' },
  languages: { en: 'Arabic and English', ar: 'العربية والإنجليزية' },
  tagDev: { en: 'Java', ar: 'جافا' },
  tagSecurity: { en: 'Information Security', ar: 'أمن المعلومات' },
  downloadCv: { en: 'Download CV', ar: 'تحميل السيرة الذاتية' },
  linkedIn: { en: 'LinkedIn', ar: 'لينكدإن' }
};

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly lang = signal<Language>(this.initial());
  readonly isArabic = computed(() => this.lang() === 'ar');

  constructor() {
    effect(() => {
      const language = this.lang();
      document.documentElement.lang = language;
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
      try { localStorage.setItem('portfolio-language', language); } catch { /* ignore private mode */ }
    });
  }

  private initial(): Language {
    try { return localStorage.getItem('portfolio-language') === 'ar' ? 'ar' : 'en'; }
    catch { return 'en'; }
  }

  toggle() { this.lang.update(v => v === 'en' ? 'ar' : 'en'); }
  t(key: string) { return COPY[key]?.[this.lang()] ?? key; }
  pick(value: LocalizedText) { return value[this.lang()]; }
}
