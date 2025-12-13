import TagsResume from "./TagsResume";
import AvatarResume from "./AvatarResume";
import ContentResume from "./ContentResume";
import ContactsResume from "./ContactsResume";
import ExperienceResume from "./ExperienceResume";
import SkillResume from "./SkillResume";

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
