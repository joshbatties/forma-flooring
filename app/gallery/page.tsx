export default function GalleryPage() {
    return (
      <section className="space-y-6">
        <h1 className="text-3xl font-bold">Gallery</h1>
        <p className="text-gray-600 leading-relaxed">
          Discover how our timber can transform your environment,
          showcasing a timeless aesthetic in various settings.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-200 aspect-square rounded-lg" />
          <div className="bg-gray-200 aspect-square rounded-lg" />
          <div className="bg-gray-200 aspect-square rounded-lg" />
          {/* Replace these placeholders with real images */}
        </div>
      </section>
    );
  }
  