import TagsResume from "./Tags";
import AvatarResume from "./Avatar";
import ContentResume from "./Content";
import ContactsResume from "./Contacts";
import ExperienceResume from "./Experience";
import SkillResume from "./Skill";

export default function Resume() {
  return (
    <article id="resume">
      <section className="grid grid-cols-12 mb-8 gap-8">
        <AvatarResume />
        <ContentResume />

        <ContactsResume />
        <TagsResume />
      </section>
      <section className="grid grid-cols-3 gap-8">
        <ExperienceResume />
        <SkillResume />
      </section>
    </article>
  );
}
