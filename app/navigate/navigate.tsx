import react, {FC} from "react";
import './navigate.css';
interface navigateProps {
    handlePrev: () => void;
    handleNext: () => void;
}
const Navigate: FC<navigateProps> = (props: navigateProps) => {

    const handleNext = () => {
        props.handleNext();
    }

    const handlePrev = () => {
        props.handlePrev();
    }

    return (
        <nav className={"class-buttons"}>
            <button className={"prev"} onClick={handlePrev}>
                Previous
            </button>
            <button className={"next"} onClick={handleNext}>
                Next
            </button>
        </nav>
    )
};

export default Navigate;