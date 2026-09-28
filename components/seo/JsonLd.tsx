export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Schema objects are authored in this repo, never user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
