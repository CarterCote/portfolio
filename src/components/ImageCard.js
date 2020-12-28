import React from "react";

import ImageCardInfo from "../components/ImageCardInfo";

function ImageCard(props) {

    return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg" onHover={(e) => props.onMouseOver(props.item)}>
            <img className="w-full h-full" src={props.item.imgSrc} alt={props.item.imgSrc} />
            { props.item.selected && <ImageCardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />}
        </div>
    );
}

export default ImageCard;
