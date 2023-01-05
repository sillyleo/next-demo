// Welcome to Code in Framer
// Get Started: https://www.framer.com/docs/guides/
import{jsx as _jsx,Fragment as _Fragment}from"react/jsx-runtime";import*as OutlineIcons from"@heroicons/react/outline";import*as SolidIcons from"@heroicons/react/solid";import{addPropertyControls,ControlType}from"framer";import _ from"lodash-es";/**
 * These annotations control how your component sizes
 * Learn more: https://www.framer.com/docs/guides/auto-sizing
 * @framerIntrinsicWidth 24
 * @framerIntrinsicHeight 24
 *
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight any-prefer-fixed
 */ export default function HeroIconV1(props){const{style}=props;// handle text transformation so you can copy and paste icon name directly
const iconNameCamelCase=_.camelCase(props.name);const IconNameUpperCase=iconNameCamelCase.charAt(0).toUpperCase()+iconNameCamelCase.slice(1);// DynamicHeroIcon Name from capitalized https://v1.heroicons.com/
if(props.name){return /*#__PURE__*/ _jsx("div",{style:{color:props.color,...containerStyle,...style},children:props.isOutline?/*#__PURE__*/ _jsx(OutlineIcon,{icon:IconNameUpperCase}):/*#__PURE__*/ _jsx(SolidIcon,{icon:IconNameUpperCase})});}else{return null;}};HeroIconV1.defaultProps={name:"music-note",isOutline:true,color:"#000"};addPropertyControls(HeroIconV1,{name:{type:ControlType.String,title:"Name",description:"Find names from [Hero v1](https://v1.heroicons.com/) and paste like 'music-note'."},isOutline:{type:ControlType.Boolean,title:"Style",defaultValue:true,enabledTitle:"Outline",disabledTitle:"Solid"},color:{type:ControlType.Color,defaultValue:"#000"}});// https://github.com/tailwindlabs/heroicons/issues/278#issuecomment-851594776
const OutlineIcon=props=>{const{...icons}=OutlineIcons;// @ts-ignore
const OutlineIcon=icons[props.icon+"Icon"]||icons["QuestionMarkCircleIcon"];return /*#__PURE__*/ _jsx(_Fragment,{children:/*#__PURE__*/ _jsx(OutlineIcon,{"aria-hidden":"true"})});};const SolidIcon=props=>{const{...icons}=SolidIcons;// @ts-ignore
const SolidIcon=icons[props.icon+"Icon"]||icons["QuestionMarkCircle"];return /*#__PURE__*/ _jsx(_Fragment,{children:/*#__PURE__*/ _jsx(SolidIcon,{"aria-hidden":"true"})});};// Styles are written in object syntax
// Learn more: https://reactjs.org/docs/dom-elements.html#style
const containerStyle={display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden"};
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"HeroIconV1","slots":[],"annotations":{"framerIntrinsicHeight":"24","framerIntrinsicWidth":"24","framerSupportedLayoutWidth":"any-prefer-fixed","framerContractVersion":"1","framerSupportedLayoutHeight":"any-prefer-fixed"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./HeroIconV1.map