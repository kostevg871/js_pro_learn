import { PageWrapper } from 'Components/Common/PageWrapper';
import { Content } from 'Components/Main/Content';
import React, { useEffect } from 'react';

export const Main = () => {
  useEffect(() => {
    console.log('Main  Mount');

    return () => console.log('Main UNMount');
  }, []);

  return (
    <PageWrapper>
      <Content />
    </PageWrapper>
  );
};
