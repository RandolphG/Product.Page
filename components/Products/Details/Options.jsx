import DropDown from "./DropDown";
import ButtonGroup from "./ButtonGroup";

const Options = ({ product }) => (
  <>
    {product &&
      product.options.map((option, idx) => {
        switch (option.style) {
          case "dropdown":
            return <DropDown option={option} idx={idx} />;
          case "button group":
            return <ButtonGroup option={option} idx={idx} />;
        }
      })}
  </>
);
export default Options;
