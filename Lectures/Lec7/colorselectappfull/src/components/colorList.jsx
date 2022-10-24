import Color from "./color";

const ColorList = ({ colors = [], onRemoveColor, onRateStars }) => {
  return (
    <div>
      {colors.map((color, index) => {
        return (
          <Color
            key={color.id}
            {...color}
            onRemove={onRemoveColor}
            onRate={onRateStars}
          />
        );
      })}
    </div>
  );
};

export default ColorList;
