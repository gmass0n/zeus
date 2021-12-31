import { FC, useEffect, useRef } from 'react';

import { Container } from './styles';

interface CollapseProps {
  isOpen?: boolean;
}

export const Collapse: FC<CollapseProps> = ({ isOpen = false, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    if (isOpen) {
      containerRef.current.style.height = `${contentRef.current.clientHeight}px`;
      containerRef.current.style.opacity = '1';
    } else {
      containerRef.current.style.height = '0px';
      containerRef.current.style.opacity = '0';
    }
  }, [isOpen]);

  return (
    <Container ref={containerRef}>
      <div ref={contentRef}>{children}</div>
    </Container>
  );
};
