'use client';

import SearchBody from '@/views/search/SearchBody';
import ResultBody from '@/views/result/ResultBody';
import { Container, ContentContainer } from '@/styles/homeStyles';

export default function Home() {
  return (
    <Container>
      <ContentContainer>
        <SearchBody />
        <ResultBody />
      </ContentContainer>
    </Container>
  )
}
