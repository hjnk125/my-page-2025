import { createContext, Dispatch, SetStateAction, useState } from 'react';
import Cursor from '@components/atoms/Cursor';
import NavHeader from '@layouts/NavHeader.tsx';
import HeroHeader from '@layouts/HeroHeader.tsx';
import Timeline from '@layouts/Timeline.tsx';
import TechStacks from '@layouts/TechStacks.tsx';
import Projects from '@layouts/Projects.tsx';
import Contact from '@layouts/Contact.tsx';
import Footer from '@layouts/Footer.tsx';

export const CursorContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>]
>([false, () => {}]);

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <CursorContext.Provider value={[isActive, setIsActive]}>
      <Cursor />
      <NavHeader />
      <main className="mx-auto flex h-full w-full flex-col items-center pt-[72px] 2xl:max-w-[1440px]">
        <HeroHeader />
        <Timeline />
        <TechStacks />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </CursorContext.Provider>
  );
}

export default App;
