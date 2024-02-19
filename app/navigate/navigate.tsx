import react, {FC} from "react";
import './navigate.css';
interface navigateProps {
    handlePrev: () => void;
    handleNext: () => void;
}
const Navigate: FC<navigateProps> = ({handlePrev, handleNext}) => {
    
    return (
<<<<<<< HEAD

        <nav className={"class-buttons flex max-md:justify-between items-center"}>
=======
        <nav className={"class-buttons"}>
>>>>>>> parent of ce5026d (uniform navigate buttons - feat/phone)
            <button className={"prev"} onClick={handlePrev}>
                {"◀"} Prev
            </button>
            <button className={"next"} onClick={handleNext}>
                Next {"▶"}
            </button>
        </nav>
    )
};

export default Navigate;