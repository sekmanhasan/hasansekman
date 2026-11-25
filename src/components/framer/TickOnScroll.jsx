"use client";
// @ts-nocheck
// Tick On Scroll: put this override on a component instance that has "To do" and "Done" variants (the Recipe Step).
// The instance switches to Done once its middle scrolls above 60% of the screen height, and back to To do when it
// scrolls below again, so a list ticks off one step at a time as you read down it. In the editor it shows the
// instance's own variant.
//   withTickOnScroll
import{jsx as _jsx}from"react/jsx-runtime";import{forwardRef,useCallback,useEffect,useRef,useState}from"react";import{useIsStaticRenderer}from"@/lib/framer";const LINE=.6// where on the screen a step ticks, as a share of the window height from the top
;const DONE="Done";export function withTickOnScroll(Component){return /*#__PURE__*/forwardRef(function TickOnScroll(props,ref){const isStatic=useIsStaticRenderer();const el=useRef(null);const[done,setDone]=useState(false);const setRef=useCallback(node=>{el.current=node;if(typeof ref==="function")ref(node);else if(ref)ref.current=node;},[ref]);useEffect(()=>{if(isStatic)return;let frame=0;const check=()=>{const node=el.current;if(!node)return;const r=node.getBoundingClientRect();if(!r.height)return;setDone(r.top+r.height/2<window.innerHeight*LINE);};const onScroll=()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(check);};check();window.addEventListener("scroll",onScroll,{passive:true});window.addEventListener("resize",onScroll);return()=>{cancelAnimationFrame(frame);window.removeEventListener("scroll",onScroll);window.removeEventListener("resize",onScroll);};},[isStatic]);if(isStatic)return /*#__PURE__*/_jsx(Component,{...props,ref:ref});return /*#__PURE__*/_jsx(Component,{...props,ref:setRef,variant:done?DONE:props.variant});});}

