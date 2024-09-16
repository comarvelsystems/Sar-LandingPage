'use client';

import { motion } from 'framer-motion';
import { Briefcase, ChartLine, Languages } from 'lucide-react';
import StatsItem from './StatsItem';

const Stats = () => {
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
            إحصائيات عن العمل
          </h2>
          <p className="text-xl">
            إحصائيات حول التوظيف في مشروع تشغيل إدارة الحشود لقطار المشاعر
            المقدسة
          </p>
        </motion.div>

        <div className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-3">
          <StatsItem
            title="موظف"
            number={7000}
            prefix="+"
            text="موظفون بعدة مسميات وظيفية يعملون في خدمة ضيوف الرحمن ضمن وظائف متعددة"
            delay={0.2}
          >
            <Briefcase size={64} />
          </StatsItem>

          <StatsItem
            title="سعوديين"
            number={90}
            prefix="%"
            text="زيادة نسبة توطين الوظائف وزيادة فرص العمل لمواطني المملكة"
            delay={0.4}
          >
            <ChartLine size={64} />
          </StatsItem>

          <StatsItem
            title="لغات"
            number={4}
            prefix="+"
            text="موظفون يتحدثون أكثر من 4 لغات"
            delay={0.6}
          >
            <Languages size={64} />
          </StatsItem>
        </div>
      </motion.div>
    </section>
  );
};

export default Stats;
