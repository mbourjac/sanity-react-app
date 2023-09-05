import { Helmet } from 'react-helmet-async';
import { appRegistry } from '../../config/config.registry';
import { useRepository } from '../../hooks/use-repository';

type MetadataProps = {
  title?: string;
  description?: string;
  ogImageUrl?: string;
};

const { metadataRepository } = appRegistry;

export const Metadata = ({ title, description, ogImageUrl }: MetadataProps) => {
  const { data: metadata } = useRepository(
    metadataRepository.getSingleDocument
  );
  let appTitle = '';
  let appDescription = '';

  if (metadata?.title) {
    appTitle = metadata?.title;
  }

  if (metadata?.description) {
    appDescription = metadata?.description;
  }

  return (
    <Helmet>
      <title>{title || appTitle}</title>
      <meta name="description" content={description || appDescription} />
      <meta property="og:title" content={title || appTitle}></meta>
      <meta
        property="og:description"
        content={description || appDescription}
      ></meta>
      <meta property="og:type" content="website" />
      {(ogImageUrl || metadata?.ogImageUrl) && (
        <meta
          property="og:image"
          content={ogImageUrl || metadata?.ogImageUrl}
        ></meta>
      )}
      <meta property="og:url" content={window.location.origin}></meta>
    </Helmet>
  );
};
