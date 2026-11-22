import React from 'react';

function RailTrace({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`side-rail ${flip ? 'side-rail-right' : 'side-rail-left'}`} aria-hidden="true">
      <div className="side-rail-aurora" />
      <svg className="side-rail-svg" viewBox="0 0 120 900" fill="none" preserveAspectRatio="xMidYMid slice">
        <path className="rail-path" d="M60 0 V180 H28 V340 H60 V520 H92 V700 H60 V900" />
        <path className="rail-path rail-path-faint" d="M84 40 V220 H104 V420" />
        <path className="rail-path rail-path-faint" d="M36 480 V640 H16 V840" />
        <circle className="rail-node" cx="60" cy="180" r="3" />
        <circle className="rail-node" cx="28" cy="340" r="3" />
        <circle className="rail-node" cx="60" cy="520" r="3" />
        <circle className="rail-node" cx="92" cy="700" r="3" />
        <circle className="rail-pulse" cx="60" cy="0" r="2.5" />
      </svg>
      <div className="side-rail-telemetry">
        <span>AGENT::10089</span>
        <span>X402::V2</span>
        <span>SELF::ZK</span>
        <span>CELO::42220</span>
        <span>FEE $0.00</span>
        <span>ERC::8004</span>
      </div>
    </div>
  );
}

export const SideRails: React.FC = () => {
  return (
    <div className="side-rails" aria-hidden="true">
      <RailTrace />
      <RailTrace flip />
    </div>
  );
};
