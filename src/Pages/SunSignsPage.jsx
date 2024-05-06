import SunSignImagesSmall from "../Components/SunSignImagesSmall";
import SunSignInfo from "../Components/SunSignInfo";

function SunSignsPage() {
  return (
    <>
      <div className="pageTitles">
        <h1>An Intro to Sun Signs</h1>
        <h3>(that you should already know!)</h3>
      </div>
      <div className="pageIntros">
        <p>
          Sun signs, or zodiac signs, are the bread and butter of astrology. If
          you don’t know your sun sign then what have you been doing your whole
          life!? They’re based on the position of the sun when you were born and{" "}
          <strong>
            <i>allegedly</i>
          </strong>{" "}
          hint at your personality traits. If you{" "}
          <strong>
            <i>have</i>
          </strong>{" "}
          been living under a rock, you can find your sign below and learn more
          about the extremely generic traits associated with each sign, that
          anyone could relate to if they tried hard enough.
        </p>
      </div>
      <div className="signImages">
        <SunSignImagesSmall />
      </div>
      <SunSignInfo />
    </>
  );
}

export default SunSignsPage;
