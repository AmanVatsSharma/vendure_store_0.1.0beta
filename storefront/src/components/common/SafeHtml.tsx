import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const StyledSafeHtml = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text?.inactive || '#666'};
  margin: 0.5rem 0;
`;

const SafeHtml: React.FC<{ html: string }> = ({ html }): JSX.Element => {
  const [sanitizedHtml, setSanitizedHtml] = useState(html);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('dompurify').then(DOMPurifyModule => {
        const DOMPurify = DOMPurifyModule.default || DOMPurifyModule;
        if (typeof DOMPurify.sanitize === 'function') {
          setSanitizedHtml(DOMPurify.sanitize(html));
        }
      });
    }
  }, [html]);

  return <StyledSafeHtml dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
};

export default SafeHtml; 