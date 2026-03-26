import { useEffect } from "react";

export default function AntiGravity() {

    useEffect(() => {

        document.addEventListener("mousemove", (e) => {

            document.querySelectorAll(".floating").forEach(el => {

                const speed = el.getAttribute("data-speed")

                const x = (window.innerWidth - e.pageX * speed) / 90
                const y = (window.innerHeight - e.pageY * speed) / 90

                el.style.transform = `translate(${x}px,${y}px)`

            })

        })

    }, [])

    return null

}