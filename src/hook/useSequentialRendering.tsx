import React, { useEffect } from 'react';
import { useBoundStore } from '../store';

export function useSequentialRendering(parts: React.ReactNode[]) {
  // export function useSequentialRendering(parts: React.ReactNode[], hasTextValues: boolean[]) {
  const { tutorial, setTutorialState } = useBoundStore();
  const { selectIndex, autoPlay, timerText, seqIndex } = tutorial;

  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [hasText, setHasText] = useState(hasTextValues[0]);
  // const delay = hasText ? timerText : timerNoText;

  useEffect(() => {
    // console.log(seqIndex)
    // if (currentIndex < parts.length - 1) {
    if (seqIndex < parts.length - 1) {
      const timer = setTimeout(() => {
        // setCurrentIndex(prevIndex => prevIndex + 1);
        setTutorialState({ seqIndex: seqIndex + 1 });
        // setHasText(hasTextValues[currentIndex + 1]);
      }, timerText);

      return () => {
        clearTimeout(timer);
      };
    } else if (seqIndex > parts.length || seqIndex === parts.length) {
      setTutorialState({ seqIndex: 0 });
    } else if (autoPlay === true && selectIndex !== null && selectIndex < 12) {
      setTimeout(() => {
        setTutorialState({ selectIndex: selectIndex + 1 });
      }, timerText);
    }
    // }, [currentIndex, timerText, hasTextValues, parts.length]);
  }, [seqIndex, timerText, parts.length]);
  // }, [currentIndex, timerText, parts.length]);

  // return currentIndex;
  return seqIndex;
}
