import ContentAbout from "./Content";
import ImageAbout from "./Image";
import DoAbout from "./Do";
import DoneAbout from "./Done";
export default function About() {

  return (
    <article id="about">
      <section className="grid md:grid-cols-3 gap-8 mb-8">
        <ContentAbout/>
        <ImageAbout/>
      </section>
      <section className="grid md:grid-cols-2 gap-8">
        <DoAbout/>
        <DoneAbout/>
      </section>
    </article>
  );
}
