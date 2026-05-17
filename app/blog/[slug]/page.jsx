import { notFound } from "next/navigation";
import Link from "next/link";
import { posts } from "../../../lib/blogPosts";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.noblemedicwheels.com/blog/${post.slug}`,
      type: "article",
    },
  };
}

export default function BlogPost({ params }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Noble Medic Wheels" },
    publisher: { "@type": "Organization", name: "Noble Medic Wheels", url: "https://www.noblemedicwheels.com" },
  };

  return (
    <main className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="page-header">
        <div className="container narrow">
          <p className="location-breadcrumb">
            <Link href="/blog">Resources</Link> &rsaquo; Article
          </p>
          <h1>{post.title}</h1>
          <p className="blog-meta-date">
            {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            &nbsp;&bull;&nbsp;Noble Medic Wheels
          </p>
        </div>
      </section>

      <section className="section-light">
        <div className="container narrow">
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="blog-cta-box">
            <h3>Ready to Book?</h3>
            <p>Noble Medic Wheels serves King, Pierce &amp; Snohomish County with ADA-compliant NEMT.</p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1rem" }}>
              <Link href="/contact" className="btn-primary">Request a Ride</Link>
              <a href="tel:2533749087" className="btn-outline-teal">Call 253-374-9087</a>
            </div>
          </div>

          <div style={{ marginTop: "2rem" }}>
            <Link href="/blog" style={{ color: "#0ea5a4", fontWeight: 600, textDecoration: "none" }}>
              &larr; Back to all articles
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
