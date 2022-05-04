export const ProductDesc = ({ el }) => {
    return (
        <div>
            <div >
                <img src={el.image} style={{ width: "400px" }} alt="" />
                <p>
                    {el.title}
                </p>
                <p>
                    ${el.price}
                </p>
            </div>
        </div>

    );
};