import type { LucideIcon } from 'lucide-react';
import {
  Cpu,
  Wrench,
  Zap,
  Disc3,
  Gauge,
  Snowflake,
  Cog,
  ShieldCheck,
  BatteryCharging,
  CarFront,
} from 'lucide-react';

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
};

export const services: Service[] = [
  {
    id: 'computerized-diagnostics',
    title: 'Computerized Vehicle Diagnostics',
    description:
      'Advanced OBD-II scanning to read fault codes and pinpoint issues across engine, transmission and electronic systems \u2014 fast and accurate.',
    icon: Cpu,
    image:
      'https://images.pexels.com/photos/4116191/pexels-photo-4116191.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'engine-diagnostics-repairs',
    title: 'Engine Diagnostics & Repairs',
    description:
      'From compression testing to full engine overhauls, we restore performance, efficiency and reliability to your powertrain.',
    icon: Wrench,
    image:
      'https://images.pexels.com/photos/4116172/pexels-photo-4116172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'automotive-electrical',
    title: 'Automotive Electrical Systems',
    description:
      'Wiring, alternator, starter, sensors and ECU troubleshooting. We solve complex electrical faults that others miss.',
    icon: Zap,
    image:
      'https://images.pexels.com/photos/8985465/pexels-photo-8985465.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'brake-system',
    title: 'Brake System Inspection & Repair',
    description:
      'Pads, discs, calipers and brake fluid. Complete brake servicing to keep you safe in Nairobi traffic and on the highway.',
    icon: Disc3,
    image:
      'https://images.pexels.com/photos/34277923/pexels-photo-34277923.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'suspension-steering',
    title: 'Suspension & Steering',
    description:
      'Shock absorbers, bushings, ball joints and wheel alignment for a smooth, controlled and stable ride on any road.',
    icon: Gauge,
    image:
      'https://images.pexels.com/photos/37175105/pexels-photo-37175105.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'air-conditioning',
    title: 'Vehicle Air Conditioning',
    description:
      'A/C recharge, compressor repair and climate control diagnostics to keep your cabin cool through Nairobi\u2019s warmest days.',
    icon: Snowflake,
    image:
      'https://images.pexels.com/photos/8985664/pexels-photo-8985664.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'transmission-services',
    title: 'Transmission Services',
    description:
      'Automatic and manual gearbox diagnostics, fluid service and repair to protect one of your vehicle\u2019s most vital systems.',
    icon: Cog,
    image:
      'https://images.pexels.com/photos/4116207/pexels-photo-4116207.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'preventive-maintenance',
    title: 'Preventive Maintenance',
    description:
      'Scheduled servicing that catches wear before it becomes failure \u2014 saving you money and keeping your vehicle on the road.',
    icon: ShieldCheck,
    image:
      'https://images.pexels.com/photos/8985452/pexels-photo-8985452.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'battery-charging',
    title: 'Battery & Charging Systems',
    description:
      'Battery testing, replacement and full charging-system inspection to prevent no-start surprises and electrical drain.',
    icon: BatteryCharging,
    image:
      'https://images.pexels.com/photos/4116193/pexels-photo-4116193.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'general-servicing',
    title: 'General Vehicle Servicing',
    description:
      'Oil changes, filters, tune-ups and multi-point inspections \u2014 the everyday care that keeps your vehicle performing its best.',
    icon: CarFront,
    image:
      'https://images.pexels.com/photos/6870295/pexels-photo-6870295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export type GalleryImage = {
  src: string;
  alt: string;
  span?: 'wide' | 'tall' | 'normal';
};

export const galleryImages: GalleryImage[] = [
  {
    src: 'https://images.pexels.com/photos/30173239/pexels-photo-30173239.png?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Sleek modern off-road vehicle in a dark studio setting',
    span: 'wide',
  },
  {
    src: 'https://images.pexels.com/photos/18029631/pexels-photo-18029631.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Black Toyota Land Cruisers parked outdoors',
  },
  {
    src: 'https://images.pexels.com/photos/4116172/pexels-photo-4116172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Close-up of car engine diagnostic tool in use',
  },
  {
    src: 'https://images.pexels.com/photos/16365199/pexels-photo-16365199.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Grey Land Rover Defender parked on an urban street',
    span: 'tall',
  },
  {
    src: 'https://images.pexels.com/photos/33814736/pexels-photo-33814736.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Modern garage with a car on a hydraulic lift',
    span: 'wide',
  },
  {
    src: 'https://images.pexels.com/photos/13333481/pexels-photo-13333481.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Mercedes-Benz emblem on a luxury vehicle',
  },
  {
    src: 'https://images.pexels.com/photos/20137063/pexels-photo-20137063.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Toyota Hilux off-road in a snowy landscape',
  },
  {
    src: 'https://images.pexels.com/photos/8985465/pexels-photo-8985465.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Mechanic inspecting an engine in an indoor garage',
  },
  {
    src: 'https://images.pexels.com/photos/4002394/pexels-photo-4002394.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Mercedes-Benz alloy wheel and tire detail',
  },
  {
    src: 'https://images.pexels.com/photos/4294075/pexels-photo-4294075.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Automotive brake caliper and disc in a workshop',
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'James M.',
    role: 'Private vehicle owner, Nairobi',
    quote:
      'The diagnostics team found an electrical fault two other garages had missed. Honest, thorough and fairly priced.',
    initials: 'JM',
  },
  {
    name: 'Amina W.',
    role: 'Fleet manager, Eastlands',
    quote:
      'They service our entire fleet on schedule. The reporting is clear and the turnaround keeps our vehicles earning.',
    initials: 'AW',
  },
  {
    name: 'David K.',
    role: 'Land Cruiser owner, Westlands',
    quote:
      'Premium service without the premium attitude. They explained every step and my Prado has never driven better.',
    initials: 'DK',
  },
];
