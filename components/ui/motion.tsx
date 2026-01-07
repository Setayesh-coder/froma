"use client";

import { motion } from "framer-motion";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLElement>;

export const MotionDiv = motion.div as unknown as React.FC<Props & { children: React.ReactNode }>;
export const MotionH1 = motion.h1 as unknown as React.FC<Props & { children: React.ReactNode }>;
export const MotionP = motion.p as unknown as React.FC<Props & { children: React.ReactNode }>;
