import "../../../../css/student/storyIntro/storyIntro.css";

export default function StoryIntro() {
  return (
    <div className="storyIntro">
      <div className="storyIntroElement fadeIn">AD 3080</div>
      <div className="storyIntroElement fadeIn">
        Climate change hit the world
      </div>
      <div className="storyIntroElement fadeIn">Many cities were lost</div>
      <div className="storyIntroElement fadeIn">Your mission is</div>
      <div className="storyIntroElement fadeIn">
        <div class="animate__animated animate__bounce animate__delay-3s">
          Find the lost cities
        </div>
        <div>and...</div>
        <div>Hunt Monsters!!</div>
      </div>
    </div>
  );
}
