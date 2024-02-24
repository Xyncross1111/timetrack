import react, {FC} from "react";
import './navigate.css';
interface navigateProps {
    handlePrev: () => void;
    handleNext: () => void;
}
const Navigate: FC<navigateProps> = ({handlePrev, handleNext}) => {
    
    return (
        <nav className={"nav-container"}>
            <button className={"prev nav-btn"} onMouseUp={handlePrev}>
                <span className="face">
                    <span className="nav-icon">{"◀"}</span> Prev
                </span>
            </button>
            <button className={"next nav-btn"} onMouseUp={handleNext}>
                <span className="face">
                    Next <span className="nav-icon">{"▶"}</span>
                </span>
            </button>
        </nav>
    )
};

export default Navigate;