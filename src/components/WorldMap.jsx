import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { WORLDS } from '@/data/worlds';
import { useGame } from '@/context/GameProvider';
import WorldMapPath from '@/components/WorldMapPath';
import IslandNode from '@/components/IslandNode';

const NODES = [
  { x: 50, y: 11 },
  { x: 24, y: 30 },
  { x: 73, y: 48.5 },
  { x: 28, y: 67 },
  { x: 63, y: 87 },
];

const DECOR = [
  { x: 82, y: 17, size: 78, opacity: 0.22, duration: 9, image: WORLDS[4].island },
  { x: 10, y: 52, size: 62, opacity: 0.16, duration: 11, image: WORLDS[2].island },
];

export default function WorldMap() {
  const { isWorldUnlocked } = useGame();
  const [active, setActive] = useState(null);
  const unlocked = WORLDS.map((_, index) => isWorldUnlocked(index));

  return (
    <div className="relative h-[820px] w-full sm:h-[940px]">
      <WorldMapPath nodes={NODES} unlocked={unlocked} active={active} />

      {DECOR.map((item, index) => (
        <motion.span
          key={index}
          aria-hidden
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 blur-[2px]"
          style={{ left: `${item.x}%`, top: `${item.y}%`, width: item.size, height: item.size, opacity: item.opacity }}
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: item.duration, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Image src={item.image} alt="" fittingType="fit" className="h-full w-full object-contain" />
        </motion.span>
      ))}

      {WORLDS.map((world, index) => (
        <IslandNode
          key={world.id}
          world={world}
          index={index}
          position={NODES[index]}
          unlocked={unlocked[index]}
          active={active === index}
          onHover={setActive}
        />
      ))}
    </div>
  );
}