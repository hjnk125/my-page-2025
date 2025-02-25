import { CursorContext } from '@/App';
import { useCallback, useContext } from 'react';

const useActiveCursor = () => {
  const [isActive, setIsActive] = useContext(CursorContext);

  const onMouseOver = useCallback(() => {
    setIsActive(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsActive(false);
  }, []);

  return { isActive, actions: { onMouseOver, onMouseLeave } };
};

export default useActiveCursor;
