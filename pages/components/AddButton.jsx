import classes from "../../styles/Add.module.css";

const AddButton = ({ setClose }) => {
  return (
    <div onClick={() => setClose(false)} className={classes.mainAddButton}>
      Agregar Pizza
    </div>
  );
};

export default AddButton;