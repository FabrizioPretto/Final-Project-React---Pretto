import OrderButton from "./OrderButton";
import Subscribe from "./Subscribe";

const SubHeader = () => {
    return (
        <div style={{
            display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 'auto',
            marginRight: 'auto', alignItems: 'baseline', marginTop: '20px', width: '1300px', height: '50px'
        }}>
            <OrderButton />
            <Subscribe />
        </div>
    );
}

export default SubHeader;