
import React, { useState } from 'react';

interface PanelProps {
  title: string;
  children: React.ReactNode;
  isActive: boolean;
  onShow: () => void;
}

export default function SharingState(){
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <>
      <h2>About Animals</h2>
      <Panel
        title="History"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
       The History of Animals contains many accurate eye-witness observations, in particular of the marine biology around the island of Lesbos, such as that the octopus had colour-changing abilities and a sperm-transferring tentacle, that the young of a dogfish grow inside their mother's body
      </Panel>
      <Panel
        title="About"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
       Generally seen as a pioneering work of zoology,Aristotle frames his text by explaining that he is investigating the what (the existing facts about animals) prior to establishing the why (the causes of these characteristics).
      </Panel>
    </>
  );
}

function Panel({ title, children, isActive, onShow }: PanelProps) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}
