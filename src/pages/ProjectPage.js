import React from "react";
import { Redirect } from "react-router-dom";
import Hero from "../components/Hero";
import { InfoSection } from '../components';
import ContentSection from "../components/ContentSection";

import Container from "react-bootstrap/Container";

import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, infoObjOne } from './HomePage/HomePageData';

export default ({ match: { params: {id } } }) => {
    const goodId = parseInt(id);

    if (goodId != 0 && !goodId) {
        return <Redirect to={{ pathname: "/404"}} />;
    }

    return {
        <h1>
            {goodId}
        </h1>
    }
}
<ProjPage {...projObjOne}/>

// function DesignsPage(props) {

//     return(
//         <div>
        
//             <InfoSection {...homeObjOne} />
//             {/* <ContentSection {...infoObjOne} /> */}
//             <DesignCard />

//         </div>

//     );
// }

// export default DesignsPage;