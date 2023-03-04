const OverviewData = ({ textup, textdown }) => {
    return (
        <div>
            <p className="overview-data-textup">{textup}+</p>
            <p className="overview-data-textdown">{textdown}</p>
        </div>
    );
};

export default OverviewData;
