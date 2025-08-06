import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deceaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        onClick={() => dispatch(deceaseItemQuantity(pizzaId))}
        type="round"
      >
        -
      </Button>
      <span className="text-lg font-medium">{currentQuantity}</span>
      
      <Button
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
        type="round"
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
