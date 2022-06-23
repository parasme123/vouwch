import React from 'react';
import Svg, {
    Circle,
    Ellipse,
    G,
    Text,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
} from 'react-native-svg';
import { Colors } from '@common';

export const email = (width, height, color = Colors.appcolor) => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 18.802 15.542">
            <G id="_17401558541574055269" data-name="17401558541574055269" transform="translate(-1.735 -11.426)">
                <G id="_23.-Envelope" data-name="23.-Envelope" transform="translate(2.235 11.926)">
                    <G id="Group_79" data-name="Group 79">
                        <Path id="Layer-1" d="M3,0H14.8a3,3,0,0,1,3,3v8.542a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V3A3,3,0,0,1,3,0Z" fill="none" stroke={color} stroke-linecap="round" stroke-width="1" />
                        <Path id="Layer-2" d="M14.057,43.723l-5.334-4.4-.788.66-.788-.66-5.324,4.39" transform="translate(0.967 -31.911)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="1" fill-rule="evenodd" />
                        <Path id="Layer-3" d="M0,5.9l6.361,5.22L12.722,5.9" transform="translate(2.54 -3.045)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="1" fill-rule="evenodd" />
                    </G>
                </G>
            </G>
        </Svg>
    )
}

export const bottomPlus = (width, height, color) => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width={width} height={height} viewBox="0 0 78 78">
            <G id="bottom-plus-icon" transform="translate(-177 -816)">
                <G transform="matrix(1, 0, 0, 1, 177, 816)" filter="url(#Ellipse_13)">
                    <Circle id="Ellipse_13-2" data-name="Ellipse 13" cx="30" cy="30" r="30" transform="translate(9 6)" fill={color} />
                </G>
                <G id="_8563601801543238914" data-name="8563601801543238914" transform="translate(205.091 841.091)">
                    <Line id="Line_5" data-name="Line 5" y2="22" transform="translate(10.909 -0.091)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                    <Line id="Line_6" data-name="Line 6" x2="22" transform="translate(-0.091 10.909)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                </G>
            </G>
        </Svg>
    )
}

export const commentCircle = (width, height, color, circleColor = "#fff", showCircle = true) => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 25 26">
            {
                showCircle ? <Ellipse id="Ellipse_10" data-name="Ellipse 10" cx="12.5" cy="13" rx="12.5" ry="13" fill={circleColor} /> : null
            }
            <G xmlns="http://www.w3.org/2000/svg" id="_3933037771600677167" data-name="3933037771600677167" transform="translate(8 8)">
                <G id="Group_85" data-name="Group 85" transform="translate(1.799 2.43)">
                    <Path id="Path_131" data-name="Path 131" d="M18.614,21.448h-5.5a.335.335,0,1,1,0-.671h5.5a.335.335,0,0,1,0,.671Z" transform="translate(-12.781 -20.778)" fill={color} />
                </G>
                <Path id="Path_132" data-name="Path 132" d="M17.239,35.347H13.116a.335.335,0,1,0,0,.671h3.838Z" transform="translate(-10.982 -29.549)" fill={color} />
                <Path id="Path_133" data-name="Path 133" d="M17.94,28.194H13.116a.335.335,0,1,0,0,.671h4.539Z" transform="translate(-10.982 -24.05)" fill={color} />
                <G id="Group_87" data-name="Group 87" transform="translate(6.716 0.269)">
                    <Rect id="Rectangle_48" data-name="Rectangle 48" width="5.105" height="1.274" transform="translate(0.857 4.138) rotate(-45)" fill={color} />
                    <Path id="Path_134" data-name="Path 134" d="M35.537,31.18l-1.484.629.629-1.484Z" transform="translate(-34.053 -25.957)" fill={color} />
                    <G id="Group_86" data-name="Group 86" transform="translate(4.695)">
                        <Path id="Path_135" data-name="Path 135" d="M55.483,12.024l-.514-.514a.274.274,0,0,0-.387,0l-.22.22.9.9.22-.22A.274.274,0,0,0,55.483,12.024Z" transform="translate(-54.362 -11.43)" fill={color} />
                    </G>
                </G>
                <Path id="Path_136" data-name="Path 136" d="M14.1,17.4a.4.4,0,0,1-.4.4H9.723a.336.336,0,0,0-.13.026l-3.922,1.65V12.211a.579.579,0,0,1,.579-.579h7.266a.579.579,0,0,1,.579.579v.164h0l.67-.67v-.752a.686.686,0,0,0-.686-.686H5.686A.686.686,0,0,0,5,10.952v9.027a.335.335,0,0,0,.465.309L9.79,18.469H13.7A1.067,1.067,0,0,0,14.766,17.4V15.059l-.671.671V17.4Z" transform="translate(-5 -10.266)" fill={color} />
            </G>
        </Svg>
    )
}

export const messageCircle = (width, height, color, circleColor = "#fff") => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 25 26">
            <Ellipse id="Ellipse_10" data-name="Ellipse 10" cx="12.5" cy="13" rx="12.5" ry="13" fill={circleColor} />
            <G xmlns="http://www.w3.org/2000/svg" id="_20830632741582956833" data-name="20830632741582956833" transform="translate(6 6)">
                <Path xmlns="http://www.w3.org/2000/svg" id="Path_81" data-name="Path 81" d="M10.2,44.509a4.406,4.406,0,1,0-8.725,1.238,4.322,4.322,0,0,0,.133.619,4.436,4.436,0,0,0,.552,1.095c0,.035,0,.07,0,.1a2.03,2.03,0,0,1-.816,1.675.105.105,0,0,0,.047.189,3.139,3.139,0,0,0,2.206-.5l.059-.04.016-.012A5.207,5.207,0,0,0,5.3,49.5,4.409,4.409,0,0,0,10.2,44.509Zm-6.42,1.2a.584.584,0,1,1,.584-.584.584.584,0,0,1-.584.584Zm2.07,0a.584.584,0,1,1,.584-.584.584.584,0,0,1-.584.584Zm2.07,0a.584.584,0,1,1,.584-.584.584.584,0,0,1-.584.584Z" transform="translate(-1.309 -36.938)" fill="#112c48" />
                <Path xmlns="http://www.w3.org/2000/svg" id="Path_82" data-name="Path 82" d="M53.3,13.922a.1.1,0,0,1-.087.079A3.139,3.139,0,0,1,51,13.5l-.059-.041-.016-.012a5.2,5.2,0,0,1-1.566.618,4.977,4.977,0,0,0-4.853-5.5A4.406,4.406,0,1,1,53,10.938a4.446,4.446,0,0,1-.552,1.094c0,.035,0,.07-.005.1a2.031,2.031,0,0,0,.816,1.675A.1.1,0,0,1,53.3,13.922Z" transform="translate(-39.89 -5.344)" fill="#1db2c4" />
            </G>
        </Svg>
    )
}

export const followCircle = (width, height, color, circleColor = "#fff") => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 25 26">
            <Ellipse id="Ellipse_10" data-name="Ellipse 10" cx="12.5" cy="13" rx="12.5" ry="13" fill={circleColor} />
            <G xmlns="http://www.w3.org/2000/svg" id="_3355719181618135049" data-name="3355719181618135049" transform="translate(6 6)">
                <Path xmlns="http://www.w3.org/2000/svg" id="Path_138" data-name="Path 138" d="M0,0H12.226V12.226H0Z" fill="none" />
                <Path xmlns="http://www.w3.org/2000/svg" id="Path_139" data-name="Path 139" d="M9.094,7.751V8.816A3.057,3.057,0,0,0,5.019,11.7H4A4.075,4.075,0,0,1,9.094,7.75ZM8.075,7.113a3.057,3.057,0,1,1,3.057-3.057A3.056,3.056,0,0,1,8.075,7.113Zm0-1.019A2.038,2.038,0,1,0,6.038,4.057,2.037,2.037,0,0,0,8.075,6.094Zm2.951,4.541,1.8-1.8.721.72-2.522,2.522-1.8-1.8.721-.72,1.08,1.08Z" transform="translate(-1.962 -0.491)" fill={color} />
            </G>
        </Svg>
    )
}

export const shareCircle = (width, height, color, circleColor = "#fff") => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 25 26">
            <Ellipse id="Ellipse_10" data-name="Ellipse 10" cx="12.5" cy="13" rx="12.5" ry="13" fill={circleColor} />
            <G xmlns="http://www.w3.org/2000/svg" id="_3355719181618135049" data-name="3355719181618135049" transform="translate(6 6)">
                <Path xmlns="http://www.w3.org/2000/svg" id="Path_137" data-name="Path 137" d="M7.7,8.212a2.067,2.067,0,0,0-1.463.61L3.849,7.15a2.048,2.048,0,0,0,0-1.982L6.236,3.495a2.064,2.064,0,1,0-.514-.887L3.135,4.427a2,2,0,0,0-1.082-.314,2.054,2.054,0,0,0,0,4.107,2,2,0,0,0,1.082-.329L5.722,9.7A2.054,2.054,0,1,0,7.7,8.212Zm0-7.187a1.028,1.028,0,0,1,0,2.054,1.009,1.009,0,0,1-.616-.21A1.024,1.024,0,0,1,7.7,1.026ZM3,6.553a1.014,1.014,0,0,1-.88.627.254.254,0,0,1-.056,0,1.026,1.026,0,0,1,0-2.052.254.254,0,0,1,.056,0A1.014,1.014,0,0,1,3,5.774a.982.982,0,0,1,0,.789Zm4.7,4.739a1.024,1.024,0,0,1-.616-1.844,1.009,1.009,0,0,1,.616-.21,1.028,1.028,0,0,1,0,2.054Z" transform="translate(0 0)" fill={color} />
            </G>
        </Svg>
    )
}

export const addBravo = (width, height, color) => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 9.283 6.964">
            <G id="_6341298451529659193" data-name="6341298451529659193" transform="translate(-0.667 -3.62)">
                <Rect id="Rectangle_89" data-name="Rectangle 89" width="8.283" height="5.964" rx="2" transform="translate(1.167 4.12)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                <Line id="Line_52" data-name="Line 52" x2="8.283" transform="translate(1.167 5.445)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                <Line id="Line_53" data-name="Line 53" x1="2.982" transform="translate(6.137 7.102)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                <Line id="Line_54" data-name="Line 54" x1="0.994" transform="translate(6.137 8.096)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                <Path id="Path_191" data-name="Path 191" d="M5.761,11.848a.094.094,0,0,0-.094-.094H5.007v-.659A.094.094,0,0,0,4.913,11H4.348a.094.094,0,0,0-.094.094v.659H3.594a.094.094,0,0,0-.094.094v.565a.094.094,0,0,0,.094.094h.659v.659a.094.094,0,0,0,.094.094h.565a.094.094,0,0,0,.094-.094v-.659h.659a.094.094,0,0,0,.094-.094Z" transform="translate(-1.395 -4.275)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
            </G>
        </Svg>
    )
}

export const addReview = (width, height, color) => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 7.92 6.31">
            <G id="_3933037771600677167" data-name="3933037771600677167" transform="translate(-5 -10.266)">
                <G id="Group_85" data-name="Group 85" transform="translate(6.129 11.792)">
                    <Path id="Path_131" data-name="Path 131" d="M16.444,21.2H12.991a.211.211,0,1,1,0-.421h3.452a.211.211,0,0,1,0,.421Z" transform="translate(-12.781 -20.778)" fill={color} />
                </G>
                <Path id="Path_132" data-name="Path 132" d="M15.58,35.347H12.991a.211.211,0,1,0,0,.421H15.4Z" transform="translate(-6.651 -21.441)" fill={color} />
                <Path id="Path_133" data-name="Path 133" d="M16.02,28.194H12.991a.211.211,0,1,0,0,.421h2.85Z" transform="translate(-6.651 -15.326)" fill={color} />
                <G id="Group_87" data-name="Group 87" transform="translate(9.217 10.435)">
                    <Rect id="Rectangle_48" data-name="Rectangle 48" width="3.205" height="0.8" transform="translate(0.538 2.599) rotate(-45)" fill={color} />
                    <Path id="Path_134" data-name="Path 134" d="M34.985,30.862l-.932.4.4-.932Z" transform="translate(-34.053 -27.582)" fill={color} />
                    <G id="Group_86" data-name="Group 86" transform="translate(2.948)">
                        <Path id="Path_135" data-name="Path 135" d="M55.066,11.8l-.323-.323a.172.172,0,0,0-.243,0l-.138.138.566.566.138-.138A.172.172,0,0,0,55.066,11.8Z" transform="translate(-54.362 -11.43)" fill={color} />
                    </G>
                </G>
                <Path id="Path_136" data-name="Path 136" d="M10.711,14.747a.249.249,0,0,1-.249.249h-2.5a.211.211,0,0,0-.082.016L5.421,16.048V11.487a.364.364,0,0,1,.364-.364h4.563a.364.364,0,0,1,.364.364v.1h0l.421-.421V10.7a.431.431,0,0,0-.431-.431H5.431A.431.431,0,0,0,5,10.7v5.668a.211.211,0,0,0,.292.194l2.716-1.142h2.454a.67.67,0,0,0,.67-.67V13.276l-.421.421v1.05Z" transform="translate(0 0)" fill={color} />
            </G>
        </Svg>
    )
}