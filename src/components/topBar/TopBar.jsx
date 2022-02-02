import './TopBar.css'
const TopBar = ({title}) => {
    return (
        <div className="top-bar">
            <p>{title}</p>
        </div>
    );
}

export default TopBar;