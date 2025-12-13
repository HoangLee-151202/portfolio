import { PersonalInfoData } from "@/app/mocks/personal-info";
import {
  Timeline,
  TimelineHeader,
  TimelineItem,
  TimelineTitle,
} from "@/components/ui/timeline";

type TimelineItemType = {
  id: number;
  title: string;
};

export default function GoalsAbout() {
  const timelineData: TimelineItemType[] =
    PersonalInfoData.about.futureGoals.map((item, index) => {
      return {
        id: index,
        title: item,
      };
    });
  return (
    <div>
      <h4>Future Goals</h4>
      <Timeline className="mt-4">
        {timelineData.map((item) => (
          <TimelineItem key={item.id}>
            <TimelineHeader>
              <TimelineTitle>{item.title}</TimelineTitle>
            </TimelineHeader>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
