import { Container } from '@mantine/core';
import Kmd from '../components/Kmd';
import { SiteHeader } from '../components/SiteHeader/SiteHeader';

export default function HomePage() {
  return (
    <main>
      <SiteHeader links={[]} />

      <Container size="xl" py="md">
        <Kmd />
      </Container>
    </main>
  );
}
