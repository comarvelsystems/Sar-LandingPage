'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ScrollText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <header className="h-96 sm:h-[calc(100vh-88px)] lg:h-[calc(100vh-10rem)] lg:px-10">
      <div className="gradient relative flex h-full items-center justify-center overflow-hidden lg:rounded-3xl">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 2,
            ease: 'linear',
          }}
          className="space-y-14 px-6"
        >
          <h1 className="text-center text-3xl font-black leading-loose text-white sm:text-5xl lg:w-[50rem]">
            التقديم للوظائف الموسمية لإدارة الحشود بقطار المشاعر المقدسة لموسم
            حج 1446 هـ
          </h1>
          <Button
            className="mx-auto block font-bold"
            variant="secondary"
            size="xl"
          >
            <Link
              href="https://sar-2025.vercel.app/login"
              className="flex items-center gap-x-2"
            >
              <ScrollText />
              التقديم الآن
            </Link>
          </Button>
        </motion.div>

        <div className="absolute inset-0 -z-[1] h-full w-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source
              src="https://yamama2.sfo3.digitaloceanspaces.com/assets/train-landing/hero-video.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </header>
  );
};

export default Hero;
