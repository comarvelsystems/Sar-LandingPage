import { motion } from 'framer-motion';
import CountUp from 'react-countup';

interface Props {
  title: string;
  number: number;
  prefix: string;
  text: string;
  delay: number;
  children: React.ReactNode;
}

const StatsItem = ({ title, number, prefix, text, delay, children }: Props) => {
  return (
    <motion.div
      initial={{ y: 150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 1 }}
      className="flex flex-col items-center gap-y-6 p-6 text-center text-white"
    >
      {children}
      <div className="space-y-6">
        <h3 className="text-4xl font-bold">
          <span>
            <CountUp end={number} duration={6} prefix={prefix} />{' '}
          </span>
          {title}
        </h3>
        <p className="text-lg font-medium">{text}</p>
      </div>
    </motion.div>
  );
};

export default StatsItem;
