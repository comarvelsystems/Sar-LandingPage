'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="overflow-hidden px-8 py-12 lg:py-20">
      <motion.div
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center gap-y-12"
      >
        <Image
          src="/images/footer-logo.svg"
          width={415}
          height={72}
          alt="Logo"
          quality={80}
          priority
          className="opacity-50"
        />
        <p className="text-center text-muted-foreground">
          جميع الحقوق محفوظة © 2025
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
