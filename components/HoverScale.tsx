"use client";

import { motion } from "motion/react";
import type { ComponentProps, ElementType } from "react";

const MOTION_TAGS = {
  div: motion.div,
  article: motion.article,
  button: motion.button,
  a: motion.a,
} as const;

type Tag = keyof typeof MOTION_TAGS;

type HoverScaleProps<T extends Tag> = {
  scale?: number;
  as?: T;
} & Omit<ComponentProps<(typeof MOTION_TAGS)[T]>, "as">;

export default function HoverScale<T extends Tag = "div">({
  scale = 1.02,
  as,
  children,
  ...props
}: HoverScaleProps<T>) {
  const MotionTag = MOTION_TAGS[as ?? ("div" as T)] as ElementType;

  return (
    <MotionTag
      whileHover={{ scale }}
      whileTap={{ scale: scale - 0.01 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
