interface feedbackProps {
  id: number;
  name: string;
  image: string;
  content: string;
}

const feedback: feedbackProps[] = [
  {
    id: 1,
    name: "Anisha Li",
    image: "avatar-anisha",
    content:
      "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
  },
  {
    id: 2,
    name: "Ali Bravo",
    image: "avatar-ali",
    content:
      "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
  },
  {
    id: 3,
    name: "Richard Watts",
    image: "avatar-richard",
    content:
      "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
  },
  {
    id: 4,
    name: "Shanai Gough",
    image: "avatar-shanai",
    content:
      "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
  },
];

export { feedback };
