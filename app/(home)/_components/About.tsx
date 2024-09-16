'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="container mx-auto grid max-w-7xl grid-cols-1 place-items-center gap-x-20 gap-y-8 px-6 py-12 lg:grid-cols-2 lg:py-28">
      <motion.div
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full"
      >
        <Image
          src="/images/about-img.webp"
          width={500}
          height={500}
          className="h-full w-full rounded-2xl"
          alt="About Image"
          quality={80}
          priority
        />
      </motion.div>

      <motion.div
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="space-y-6"
      >
        <h2 className="text-5xl font-extrabold leading-tight">
          عن قطار المشاعر
        </h2>
        <p className="text-xl text-muted-foreground">
          قطار المشاعر المقدسة هو خط سكة حديدية يربط بين محطات المشاعر المقدسة
        </p>
        <p className="text-xl text-muted-foreground">
          خصائص قطار المشاعر: عبارة عن خط نقل كهربائي مزدوج بطول 18 كم وسعة 3000
          راكب، بمقاعد تتسع لـ 20% من الركاب، حيث يتكون الاسطول من 17 قطار، كما
          يوجد في كل قطار 12 عربة وأقصى سرعة للقطار 80 كم/ساعة، حيث ينقل القطار
          معدل 72000 راكب / الساعة / للاتجاه الواحد. تعتمد الحركة التشغيلية
          للقطار على مناسك الحج، كما تحتوي المشاعر المقدسة على 9 محطات ركاب:
          عرفات 1، عرفات 2، عرفات 3، مزدلفة 1، مزدلفة 2، مزدلفة 3، منى 1، منى 2،
          منى 3 (الجمرات)
        </p>
      </motion.div>
    </section>
  );
};

export default About;
