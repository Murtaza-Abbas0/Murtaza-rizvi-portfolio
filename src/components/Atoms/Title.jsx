/* eslint-disable react/prop-types */
const Title = ({ clicked = true }) => {
  return (
    <h1
      className={`text-4xl font-bold font-Bellota  ${
        clicked ? `text-white` : `text-[#141a46]`
      }`}
    >
      &lt;Murtaza Rizvi/&gt;
    </h1>
  );
};

export default Title;
