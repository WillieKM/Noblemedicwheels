import Link from "next/link";
import { posts } from "../../lib/blogPosts";
import Reveal from "../../components/Reveal";

export const metadata = {
  title: "NEMT & Cabulance Resources | Noble Medic Wheels",
  description: "Guides on non-emergency cabulance and medical transportation in King, Pierce, Snohomish, and Thurston County — dialysis transport, wheelchair rides, and choosing a provider.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "NEMT Resources — Noble Medic Wheels",
    description: "Guides on medical transportation, dialysis transport, and NEMT services in Western Washington.",
    url: "https://www.noblemedicwheels.com/blog",
  },
};

export default function BlogPage() {
  return (
    <main className="page">
      <section className="page-header">
        <div className="container">
          <h1>NEMT Resources &amp; Guides</h1>
          <p>
            Helpful articles on medical transportation in King, Pierce, and
            Snohomish County — written for patients, families, and care coordinators.
          </p>
        </div>
      </section>

      <section className="section-light">
        <div className="container">
          <Reveal className="blog-grid">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                <div className="blog-date">
                  {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </div>
                <h2 className="blog-title">{post.title}</h2>
                <p className="blog-excerpt">{post.excerpt}</p>
                <span className="blog-read-more">Read article &rarr;</span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-cta">
        <div className="container">
          <h2>Need a Ride?</h2>
          <p>We serve King, Pierce, Snohomish &amp; Thurston County — call or request online.</p>
          <Link href="/contact" className="btn-primary">Request a Ride</Link>
        </div>
      </section>
    </main>
  );
}
