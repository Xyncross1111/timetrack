import react, {FC} from "react";
import './navigate.css';
interface navigateProps {
    handlePrev: () => void;
    handleNext: () => void;
}
const Navigate: FC<navigateProps> = (props: navigateProps) => {
    
    return (
        <nav className={"class-buttons"}>
            <button className={"prev"} onClick={props.handlePrev}>
                {"◀"} Prev
            </button>
            <button className={"next"} onClick={props.handleNext}>
                Next {"▶"}
            </button>
        </nav>
    )
};

export default Navigate;