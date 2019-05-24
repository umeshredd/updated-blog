import image from "../../assets/img/sign.jpg";
import React from 'react'
import { Typography } from "@material-ui/core";

const style = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        padding: 15,
        margin: 'auto',
        minHeight: "110vh",
        maxHeight: "1600px",
        overflow: "hidden",
        padding: "70px 0",
        backgroundPosition: "top center",
        backgroundSize: "cover",
        margin: "0",
        border: "0",
        display: "flex",
        alignItems: "center",
        backgroundImage: "url(" + image + ")",
        marginTop: -380,
    },
    gradientFont: {
        background: "linear-gradient(60deg, #2196F3, #E91E63)",
        WebkitTextFillColor: "transparent",
        WebkitBackgroundClip: "text",
        fontSize: 25,
        fontFamily: 'Roboto Mono',
        fontWeight: 800

    }
}
export default function () {
    return (
        <div style={style.container}>
            <div style={style.body}>
                {/* <Typography variant="title" color="secondary" style={style.gradientFont}> Love your GOD with all your heart </Typography> */}

            </div>
        </div>
    )
}