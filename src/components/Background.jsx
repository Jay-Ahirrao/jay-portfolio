import React from 'react';

// OPTIMIZATION: Kept pure CSS keyframe animations for GPU performance, 
// but modified the colors and opacities to achieve a premium matte finished look.
// Removed any planetary/crescent moon elements, and kept the abstract topography lines
// but made them extremely faint and subtle (3.5% opacity) to feel texture-like rather than distracting.
const Background = () => {
  return (
    <div className="fixed inset-0 w-screen h-screen z-0 pointer-events-none bg-black overflow-hidden">
      
      {/* Matte Slate/Indigo Glow — Top Left */}
      <div
        className="absolute rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.18) 0%, transparent 70%)',
          width: '90vw',
          height: '90vw',
          top: '-20%',
          left: '-20%',
          filter: 'blur(100px)',
        }}
      />

      {/* Matte Teal Glow — Bottom Right */}
      <div
        className="absolute rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(20, 184, 166, 0.15) 0%, transparent 70%)',
          width: '80vw',
          height: '80vw',
          bottom: '-25%',
          right: '-20%',
          filter: 'blur(100px)',
        }}
      />

      {/* Matte Purple/Violet Glow — Top Right */}
      <div
        className="absolute rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.16) 0%, transparent 70%)',
          width: '70vw',
          height: '70vw',
          top: '20%',
          right: '-10%',
          filter: 'blur(100px)',
        }}
      />

      {/* Matte Rose/Red Glow — Center Left / Mid Left */}
      <div
        className="absolute rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(244, 63, 94, 0.12) 0%, transparent 70%)',
          width: '70vw',
          height: '70vw',
          top: '35%',
          left: '-15%',
          filter: 'blur(100px)',
        }}
      />

      {/* Abstract Topography (Contour Lines) Background - Softened to 3.5% opacity */}
      <svg 
        className="absolute inset-0 w-full h-full text-white/[0.035] pointer-events-none" 
        style={{ transform: 'translateZ(0)', willChange: 'transform' }}
        viewBox="0 0 1440 900" 
        preserveAspectRatio="xMidYMid slice" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.2"
        aria-hidden="true"
      >
        {/* Peak 1 (Top Right Peak) - High Density */}
        <path d="M 1130,220 C 1130,205 1140,195 1150,195 C 1160,195 1170,205 1170,220 C 1170,235 1160,245 1150,245 C 1140,245 1130,235 1130,220 Z" />
        <path d="M 1115,220 C 1115,192 1130,178 1150,178 C 1170,178 1185,192 1185,220 C 1185,248 1170,262 1150,262 C 1130,262 1115,248 1115,220 Z" />
        <path d="M 1100,220 C 1100,180 1120,160 1150,160 C 1180,160 1200,180 1200,220 C 1200,260 1180,280 1150,280 C 1120,280 1100,260 1100,220 Z" />
        <path d="M 1080,220 C 1080,165 1105,140 1150,140 C 1195,140 1220,165 1220,220 C 1220,275 1195,300 1150,300 C 1105,300 1080,275 1080,220 Z" />
        <path d="M 1060,220 C 1060,150 1090,120 1150,120 C 1210,120 1240,150 1240,220 C 1240,290 1210,320 1150,320 C 1090,320 1060,290 1060,220 Z" />
        <path d="M 1035,220 C 1035,130 1070,95 1150,95 C 1230,95 1265,130 1265,220 C 1265,310 1230,345 1150,345 C 1070,345 1035,310 1035,220 Z" />
        <path d="M 1010,220 C 1010,110 1050,70 1150,70 C 1250,70 1290,110 1290,220 C 1290,330 1250,370 1150,370 C 1050,370 1010,330 1010,220 Z" />
        <path d="M 980,220 C 980,85 1025,40 1150,40 C 1275,40 1320,85 1320,220 C 1320,355 1275,400 1150,400 C 1025,400 980,355 980,220 Z" />
        <path d="M 950,220 C 950,60 1000,10 1150,10 C 1300,10 1350,60 1350,220 C 1350,380 1300,430 1150,430 C 1000,430 950,380 950,220 Z" />
        <path d="M 915,220 C 915,30 975,-25 1150,-25 C 1325,-25 1385,30 1385,220 C 1385,410 1325,465 1150,465 C 975,465 915,410 915,220 Z" />
        <path d="M 880,220 C 880,0 950,-60 1150,-60 C 1350,-60 1420,0 1420,220 C 1420,440 1350,500 1150,500 C 950,500 880,440 880,220 Z" />

        {/* Peak 2 (Bottom Left Peak) - High Density */}
        <path d="M 230,730 C 230,715 240,705 250,705 C 260,705 270,715 270,730 C 270,745 260,755 250,755 C 240,755 230,745 230,730 Z" />
        <path d="M 215,730 C 215,702 230,688 250,688 C 270,688 285,702 285,730 C 285,758 270,772 250,772 C 230,772 215,758 215,730 Z" />
        <path d="M 200,730 C 200,690 220,670 250,670 C 280,670 300,690 300,730 C 300,770 280,790 250,790 C 220,790 200,770 200,730 Z" />
        <path d="M 180,730 C 180,675 205,650 250,650 C 295,650 320,675 320,730 C 320,785 295,810 250,810 C 205,810 180,785 180,730 Z" />
        <path d="M 160,730 C 160,660 190,630 250,630 C 310,630 340,660 340,730 C 340,800 310,830 250,830 C 190,830 160,800 160,730 Z" />
        <path d="M 135,730 C 135,640 170,605 250,605 C 330,605 365,640 365,730 C 365,820 330,855 250,855 C 170,855 135,820 135,730 Z" />
        <path d="M 110,730 C 110,620 150,580 250,580 C 350,580 390,620 390,730 C 390,840 350,880 250,880 C 150,880 110,840 110,730 Z" />
        <path d="M 80,730 C 80,595 125,550 250,550 C 375,550 420,595 420,730 C 420,865 375,910 250,910 C 125,910 80,865 80,730 Z" />
        <path d="M 50,730 C 50,570 100,520 250,520 C 400,520 450,570 450,730 C 450,890 400,940 250,940 C 100,940 50,890 50,730 Z" />
        <path d="M 15,730 C 15,540 70,485 250,485 C 430,485 485,540 485,730 C 485,920 430,975 250,975 C 70,975 15,920 15,730 Z" />
        <path d="M -20,730 C -20,510 40,450 250,450 C 460,450 520,510 520,730 C 520,950 460,1010 250,1010 C 40,1010 -20,950 -20,730 Z" />

        {/* Flowing Crossover Lines - High Density */}
        <path d="M -100,100 C 300,150 450,50 800,180 C 1150,310 1200,-50 1600,80" />
        <path d="M -100,130 C 300,180 450,80 800,210 C 1150,340 1200,-20 1600,110" />
        <path d="M -100,160 C 300,210 450,110 800,240 C 1150,370 1200,10 1600,140" />
        <path d="M -100,190 C 300,240 450,140 800,270 C 1150,400 1200,40 1600,170" />
        <path d="M -100,220 C 300,270 450,170 800,300 C 1150,430 1200,70 1600,200" />
        <path d="M -100,250 C 300,300 450,200 800,330 C 1150,460 1200,100 1600,230" />
        <path d="M -100,280 C 300,330 450,230 800,360 C 1150,490 1200,130 1600,260" />
        <path d="M -100,310 C 300,360 450,260 800,390 C 1150,520 1200,160 1600,290" />
        <path d="M -100,340 C 300,390 450,290 800,420 C 1150,550 1200,190 1600,320" />
        <path d="M -100,370 C 300,420 450,320 800,450 C 1150,580 1200,220 1600,350" />
        
        <path d="M -100,460 C 200,530 600,370 950,480 C 1300,590 1350,380 1600,450" />
        <path d="M -100,490 C 200,560 600,400 950,510 C 1300,620 1350,410 1600,480" />
        <path d="M -100,520 C 200,590 600,430 950,540 C 1300,650 1350,440 1600,510" />
        <path d="M -100,550 C 200,620 600,460 950,570 C 1300,680 1350,470 1600,540" />
        <path d="M -100,580 C 200,650 600,490 950,600 C 1300,710 1350,500 1600,570" />
        <path d="M -100,610 C 200,680 600,520 950,630 C 1300,740 1350,530 1600,600" />
        <path d="M -100,640 C 200,710 600,550 950,660 C 1300,770 1350,560 1600,630" />
        <path d="M -100,670 C 200,740 600,580 950,690 C 1300,800 1350,590 1600,660" />
        
        <path d="M -100,760 C 150,810 350,690 650,800 C 950,910 1150,710 1600,820" />
        <path d="M -100,790 C 150,840 350,720 650,830 C 950,940 1150,740 1600,850" />
        <path d="M -100,820 C 150,870 350,750 650,860 C 950,970 1150,770 1600,880" />
        <path d="M -100,850 C 150,900 350,780 650,890 C 950,1000 1150,800 1600,910" />
      </svg>

    </div>
  );
};

export default Background;
