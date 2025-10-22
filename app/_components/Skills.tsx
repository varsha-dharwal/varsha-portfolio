'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_STACK } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Skills = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const slideUpEl =
                containerRef.current?.querySelectorAll('.slide-up');

            if (!slideUpEl?.length) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up', {
                opacity: 0,
                y: 40,
                ease: 'none',
                stagger: 0.4,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section id="my-stack" ref={containerRef}>
            <div className="container">
                <SectionTitle title="My Stack" />

                <div className="space-y-20">
                    {Object.entries(MY_STACK).map(([key, value]) => (
                        <div className="grid sm:grid-cols-12" key={key}>
                            <div className="sm:col-span-5">
                                <p className="slide-up text-5xl font-anton leading-none text-muted-foreground uppercase">
                                    {key}
                                </p>
                            </div>

                            <div className="sm:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-4">
                                {value.map((item) => (
                                    <div
                                        key={item.name}
                                        className="slide-up group max-w-[250px]  relative aspect-square rounded-lg border border-border/60 bg-card/60 transition-colors duration-300 focus-ring overflow-hidden hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_10px_30px_-12px_hsl(var(--foreground)/0.15)]"
                                        tabIndex={0}
                                    >
                                        <span className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-primary/0 group-hover:bg-primary/60 transition-colors duration-300" />
                                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-[1.02]">
                                            <Image
                                                src={item.icon}
                                                alt={item.name}
                                                width="40"
                                                height="40"
                                                className="h-10 w-10"
                                            />
                                            <span className="text-sm md:text-base capitalize text-muted-foreground group-hover:text-foreground">
                                                {item.name}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

    // removed duplicate return block for clarity
};

export default Skills;
