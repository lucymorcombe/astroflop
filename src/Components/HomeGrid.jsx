import world from "../assets/world.svg";
import moon from "../assets/homeMoon.svg";
import office from "../assets/office.svg";
import wedding from "../assets/wedding.svg";
import talkingStage from "../assets/talkingStage.svg";
import logo from "../assets/logo.svg";

function HomeGrid() {
  return (
    <>
      <div className="animation">
        <div className="world">
          <img src={world} />
        </div>
        <div className="moon">
          <img src={moon} />
        </div>
      </div>
      <div className="homeIntro1">
        <h2>The ultimate beginner's guide to astrology!</h2>
      </div>
      <div className="homeIntro2">
        <p>
          Removing the BS and fine-tuning the things you really need to know,
          Astro-FLOP understands the sigh you let out when someone asks you for
          your sign or what time you were born and aims to reduce the volume of
          these sighs by at least 50%!
        </p>
      </div>
      <div className="homeIntro3">
        <h1>
          Do you really hate astrology? Or do you hate that you're missing out
          on all the fun...
        </h1>
      </div>
      <div className="examplesText">
        <h2>
          With more and more people taking an interest in and identifying with
          astrology, you aren't safe from this conversation anywhere.
        </h2>
      </div>

      <div className="examplesImages">
        <div className="wedding">
          <h1>Not at a wedding...</h1>
          <img
            src={wedding}
            alt="Illustration of two people getting married with a speech bubble reading: They are just the cutest couple! It's because their charts are so compatible - it was written in the stars!"
          />
        </div>

        <div className="office">
          <img
            src={office}
            alt="Illustration of a water fountain and cups with 2 speech bubbles over it. The first reads: God Rachel was being SUCH (uppercase) a Gemini in that meeting. The next speech bubble reads: She's actually a Capricorn... but she must be a Gemini rising, nothing else could explain that!"
          />
          <h1>...Not at the office...</h1>
        </div>
        <div className="talkingStage">
          <h1>...And definitely not on dating apps!</h1>
          <img
            src={talkingStage}
            alt="A snapshot from a chat between two people on a dating site. The first message reads: I really like talking to you too... What's your star sign by the way? I'm getting Libra vibes from you, followed by a heart eyes emoji. The other person replies: Ah not quite, I'm a Scorpio... but I'm not really into that stuff. A timestamp reading: Today 00:31 and another message reads:Helloooo? Below this is a notification from the app reading: Charlie has unmatched. You cannot send any further messages."
          />
        </div>
      </div>
      <div className="qAndA">
        <div className="questions">
          <h2>Think astrology flops?</h2>
          <h2>Sick of hearing Leo Moon this, Aries Rising that?</h2>
          <h2>Feel out of the loop when birth charts are brought up?</h2>
          <h2>Think it's finally time to give in?</h2>
        </div>
        <div className="answer">
          <img
            src={logo}
            alt="Astro FLOP logo. Reads: Astro FLOP with three stars surrounding it"
          />
          <h2>could be the site for you!</h2>
        </div>
      </div>
    </>
  );
}

export default HomeGrid;
