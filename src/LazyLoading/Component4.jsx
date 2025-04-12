// import Component5 from "./Component5";

import React, { Suspense } from "react";


const LazyPrectice = React.lazy(() => import("./Component5"))


const Component4 = () => {
    return (
        <div>
            <h1>Learning lazyloading</h1>
            <Suspense fallback={<div>Loadind Data........</div>}>
                <LazyPrectice />
            </Suspense>
        </div>
    )
}
export default Component4;