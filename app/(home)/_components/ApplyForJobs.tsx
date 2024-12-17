'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const ApplyForJobs = () => {
  return (
    <section className="overflow-hidden lg:px-10">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="gradient relative space-y-20 overflow-hidden p-12 lg:rounded-3xl lg:p-28"
      >
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-6 text-center text-white"
        >
          <h2 className="text-5xl font-extrabold leading-tight">
            التقديم الآن للوظائف الموسمية
          </h2>
          <p className="mx-auto text-xl leading-loose lg:w-[60rem]">
            التقديم للوظائف الموسمية لإدارة الحشود بقطار المشاعر المقدسة لموسم
            حج 1445 هـ كل ما عليك فعله هو ملئ استمارة التسجيل عبر الضغط على زر
            التقديم الآن بالأسفل
          </p>
          <Button size="xl" variant="secondary" className="font-bold" asChild>
            <Link href="https://sar-2025.vercel.app/login">التقديم الآن</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ApplyForJobs;
