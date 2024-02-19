import react, {FC} from "react";
import './navigate.css';
interface navigateProps {
    handlePrev: () => void;
    handleNext: () => void;
}
const Navigate: FC<navigateProps> = ({handlePrev, handleNext}) => {
    
    return (
        <nav className={"class-buttons"}>
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