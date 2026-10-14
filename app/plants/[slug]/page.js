import Link from 'next/link';
import { notFound } from 'next/navigation';
import plants from '../../../lib/plants';

export function generateStaticParams() {
  return plants.map((plant) => ({ slug: plant.slug }));
}

export default function PlantDetailPage({ params }) {
  const plant = plants.find((item) => item.slug === params.slug);

  if (!plant) {
    notFound();
  }

  return (
    <main className="page-container content-panel">
      <div className="section-header">
        <p className="eyebrow">Plant detail</p>
        <h2>{plant.name}</h2>
      </div>
      <div className="detail-panel">
        <p className="caption">{plant.category}</p>
        <h1>{plant.highlight}</h1>
        <p>{plant.description}</p>
        <div className="detail-columns" style={{ marginTop: '32px' }}>
          <dl>
            <dt>Water</dt>
            <dd>{plant.water}</dd>
            <dt>Light</dt>
            <dd>{plant.light}</dd>
          </dl>
          <dl>
            <dt>Care level</dt>
            <dd>{plant.maintenance}</dd>
            <dt>Plant note</dt>
            <dd>{plant.details}</dd>
          </dl>
        </div>
        <div className="hero-actions" style={{ marginTop: '36px' }}>
          <Link className="button secondary" href="/plants">
            Back to plants
          </Link>
          <Link className="button primary" href="/">
            Home
          </Link>
        </div>
      </div>
    </main>
  );
}
