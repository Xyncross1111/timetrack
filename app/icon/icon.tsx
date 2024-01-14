import { FC } from "react";
import Image from "next/image";
import React from "react";

function Icon(props: any) {
    const src = "/" + props.class + ".png";
    return (
        <div className="icon">
            <Image src={src} alt="" width={50} height={50} />
        </div>
    );
}

export default Icon;