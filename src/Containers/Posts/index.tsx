import { PageWrapper } from 'Components/Common/PageWrapper';
import { PostsList } from 'Components/PostsList';
import React, { useEffect } from 'react';

export const Posts = () => {
  useEffect(() => {
    const handler = () => console.log('click on post page');
    document.addEventListener('click', handler);

    return () => {
      console.log('Post Mount');
      document.removeEventListener('click', handler);
    };
  }, []);

  return (
    <PageWrapper>
      <PostsList />
    </PageWrapper>
  );
};
