import OtherSignsInfo from "../Components/OtherSignsInfo";
import MoonSignOverview from "../Components/MoonSignOverview";
import RisingSignOverview from "../Components/RisingSignOverview";
import MoreInfoOnSigns from "../Components/MoreInfoOnSigns";
import JumpButtons from "../Components/JumpButtons";

function OtherSignsPage() {
  return (
    <>
      <div className="pageTitles">
        <h1>Moon and Rising Signs</h1>
        <h3>(I bet you're dying to know more)</h3>
      </div>
      <div className="pageIntros">
        <p>
          Now you know all about sun signs, have I got good news for you!? Each
          person actually has{" "}
          <i>
            <strong>multiple</strong>
          </i>{" "}
          different signs based on the position of{" "}
          <i>
            <strong>each and every</strong>
          </i>{" "}
          planet when they were born! We're keeping to the basics here, we don't
          want to scare you away. But if you've accidentally, relucantly, or
          self-loathingly taken more of an interest in this than planned, a
          brief overview of each of the different signs can be found at the
          bottom of this page.
          <br />
          <br />
          So, what exactly are moon and rising signs!?
        </p>
      </div>
      <div className="overview">
        <MoonSignOverview />
        <RisingSignOverview />
      </div>
      <div className="bigThree">
        <h1>The Big Three</h1>
        <h2>
          <strong>SUN + MOON + RISING = THE BIG THREE</strong>
        </h2>
        <p>
          It's simple maths! <br />
          <br />
          Really, this is all you need to know (and I'm surprised you've stuck
          around for so long). <br />
          <br />
          Your big three summarise who you are as a person. Your core
          personality, your emotions, and your outward presentation - what more
          could you want?
        </p>
      </div>
      <p className="jumpToIntro"><strong>Jump to:</strong></p>
      <JumpButtons />
      <OtherSignsInfo />
      <div className="otherFooter">
        <MoreInfoOnSigns />
      </div>
    </>
  );
}

export default OtherSignsPage;
