import { Data, Override, animate } from "framer"

const data = Data({
    scale: 1,
    opacity: 0.5,
    top: 418,
})

export function Radiate(): Override {
    return {
        scale: data.scale,
        opacity: data.opacity,
        animate: { scale: 0.9, opacity: 1 },
        transition: { ease: "easeIn", duration: 1, yoyo: Infinity },
    }
}

export function Pointer(): Override {
    return {
        top: data.top,
        animate: { top: 413 },
        transition: { ease: "easeOut", duration: 0.5, yoyo: Infinity },
    }
}
