'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutProject = () => {
  return (
    <section className="container mx-auto grid max-w-7xl grid-cols-1 place-items-center gap-8 px-6 py-12 lg:grid-cols-2 lg:py-28">
      <motion.div
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="space-y-6"
      >
        <span className="font-semibold text-primary">
          قطــار المشاعــر المقدســـة
        </span>
        <h2 className="text-5xl font-extrabold leading-tight">
          مشروع تشغيل وإدارة الحشود لقطار المشاعر المقدسة
        </h2>
        <p className="text-xl">
          قطار المشاعر المقدسة وسيلة نقل ترددية بدا تشغيله في عام 2010 م ، يهدف
          لخدمة حجاج بيت الله وذلك بتوفير النقل الآمن والسهل بين المشاعر المقدسة
          (عرفات ومزدلفة ومنى).
        </p>
      </motion.div>
      <motion.div
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 1 }}
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
    </section>
  );
};

export default AboutProject;
