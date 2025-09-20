function timelineOne() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#home",
            start: "top top",
            scrub: 1,
            pin: true,
        }
    });

    tl
        .to("#circle", {
            scale: .2,
            ease: Power1
        }, 'same')
        .to("#overlay #purple", {
            top: '50%',
            ease: Power1
        }, 'same')
        .to("#overlay #mainh1", {
            top: '150%',
            ease: Power1
        }, 'same')
        .to("#overlay #centerimg img", {
            scale: 0,
            ease: Power1
        }, 'same')
        .to("#overlay #centerimg span", {
            opacity: 0,
            ease: Expo.easeInOut
        }, 'same')
        .to("#smcircle", {
            scale: .6,
            ease: Power1
        }, 'same')
        .to("#circle #btm img", {
            rotate: "-180deg",
            ease: Power1,
            stagger: .05
        }, 'same')
        .to("#imagecontainer img", {
            scale: 1.25,
            ease: Power0,
        }, "same")
        .to("#smcircle, #circle", {
            scale: 0,
            ease: Power1,
        }, "samesame")
        .to("#purple", {
            scale: 0,
            opacity: 0,
            ease: Power1,
        }, "samesame")
        .to("#overlay #sech1", {
            rotate: "0",
            bottom: 0,
            delay: -.2,
            ease: Power1,
        }, "samesame")
        .to("#sidepurple", {
            top: "0%",
            delay: -.4,
            ease: Power1,
        })
        .to("#sidepurple", {
            top: "-70%",
            delay: .2,
            ease: Power1,
        })
        .to("#imagecontainer img", {
            scale: 1,
            ease: Power0,
        }, "samesame")
}

function timelineTwo() {
    gsap.set("#soverlay #stop .circle", { top: "150%", scale: .5 })

    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#second",
            start: "top top",
            pin: true,
            scrub: 1,
            end: "+=" + (window.innerHeight * 9),
        }
    })

    tl2.to(".circle", {
        top: "50%",
        scale: 1,
        ease: Power1,
        stagger: .1
    })
        .to(".circle", {
            top: "50%",
            left: "50%",
            scale: 1,
            ease: Power1
        })
        .to(".circle", {
            scale: .7,
            ease: Power1
        })
        .to(".circle", {
            scale: 10,
            ease: Power1
        })
        .to("#stop h1", {
            x: "-130%",
            duration: 2,
            ease: Power1
        }, "same")
        .to("#stop .pi", {
            background: `linear-gradient(to right, #D5A7B4, #B4AAD5)`,
            ease: Power1
        }, "same")
        .to("#sbtm h3:nth-child(1)", {
            opacity: 0,
            delay: .2,
            ease: Power1
        }, "same")
        .to("#sbtm h3:nth-child(2)", {
            opacity: 1,
            delay: -1.4,
            ease: Power1
        })
        .to(".stop-box1", {
            marginTop: "0px",
            ease: Power1,
            delay: -0.2
        }, "go")
        .to(".stop-box2", {
            marginTop: "0px",
            ease: Power1,
            delay: 0.2,
        }, "go")
        .to(".stop-box3", {
            marginTop: "0px",
            ease: Power1,
            delay: 0.3,

        }, "go")
        .to(".stop-box4", {
            marginTop: "0px",
            ease: Power1,
            delay: 0.4,

        }, "go")
        .to(".stop-box5", {
            marginTop: "0px",
            ease: Power1,
            delay: 0.5,

        }, "go")

        .to(".inner-stop-box1", {
            marginLeft: "175px",
            ease: Power1,
            duration: 0.5
        }, "ww")
        .to(".inner-stop-box2", {
            marginLeft: "106px",
            ease: Power1,
            duration: 1

        }, "ww")

        .to(".inner-stop-box3", {
            marginLeft: "193px",
            ease: Power1,
            duration: 0.5
        }, "ww")
        .to(".inner-stop-box4", {
            marginLeft: "122px",
            ease: Power1,
            duration: 1

        }, "ww")

        .to(".inner-stop-box5", {
            marginLeft: "193px",
            ease: Power1,
            duration: 0.5
        }, "ww")
        .to(".inner-stop-box6", {
            marginLeft: "122px",
            ease: Power1,
            duration: 1

        }, "ww")

        .to(".inner-stop-box7", {
            marginLeft: "193px",
            ease: Power1,
            duration: 0.5
        }, "ww")
        .to(".inner-stop-box8", {
            marginLeft: "122px",
            ease: Power1,
            duration: 1

        }, "ww")

        .to(".inner-stop-box9", {
            marginLeft: "196px",
            ease: Power1,
            duration: 0.5
        }, "ww")
        .to(".inner-stop-box10", {
            marginLeft: "126px",
            ease: Power1,
            duration: 1

        }, "ww")



}

function timelineThree() {
    gsap.set(".prismText h1:nth-child(1)", { x: "-50%", opacity: 1 });
    gsap.set(".prismText h1:nth-child(2)", { x: "50%", opacity: 1 });
    gsap.set(".prismText h1:nth-child(3)", { x: "-50%", opacity: 1 });
    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: "#third",
            start: "top center",
            // end: "bottom center",
            end: "+=" + (window.innerHeight * 5),

            scrub: 1,
            onUpdate: self => {
                // Optional: Add any additional effects based on scroll progress
                console.log("Scroll progress:", self.progress);
            }
        }
    })

    tl4.to("#circularImg", {
        rotation: 360,
        duration: 2,
        ease: "none",
    })
        .to(".horizontal-text h2", {
            x: "-150%",
            duration: 1,
            ease: "none",
        }, 0)

        .to(".prismText h1:nth-child(1)", {
            x: "0%",
            opacity: 1,
            duration: 1,
            ease: "power2.out",
        }, 0.4)
        .to(".prismText h1:nth-child(2)", {
            x: "0%",
            opacity: 1,
            duration: 1,
            ease: "power2.out",
        }, 0.6)
        .to(".prismText h1:nth-child(3)", {
            x: "0%",
            opacity: 1,
            duration: 1,
            ease: "power2.out",
        }, 0.8)


}

var tl3 = gsap.timeline();
tl3.to(".dark-point", {
    x: 45,
    ease: Power1,
    repeat: -0.5,
    yoyo: true,
    duration: 1
}, "po")

    .to(".white-point", {
        x: -45,
        repeat: -0.5,
        yoyo: true,
        ease: Power1,
        duration: 1
    }, "po")



function MouseHover() {
    let body = document.querySelector("body")
    let hex1 = document.querySelector(".hex1");
    let hex2 = document.querySelector(".hex2");
    let hex3 = document.querySelector(".hex3");

    let colorChnage = document.querySelector("#colorChnage");

    hex1.addEventListener("mouseenter", function () {
        gsap.to(body, {
            backgroundColor: "rgba(173, 216, 230, 0.637)",
            duration: 1,
            ease: Power1,

        })
    })

    hex1.addEventListener("mouseleave", function () {
        gsap.to(body, {
            backgroundColor: "transparent",
            duration: 1,
            ease: Power1,

        })
    })

    hex2.addEventListener("mouseenter", function () {
        gsap.to(body, {
            backgroundColor: "rgb(157 76 99)",
            duration: 1
        })
    })

    hex2.addEventListener("mouseleave", function () {
        gsap.to(body, {
            backgroundColor: "transparent",
            duration: 1
        })
    })

    colorChnage.addEventListener("mouseenter", function () {
        gsap.to(body, {
            backgroundColor: "hsl(250deg 16.67% 49.41%)",
            duration: 1
        })
    })

    colorChnage.addEventListener("mouseleave", function () {
        gsap.to(body, {
            backgroundColor: "transparent",
            duration: 1
        })
    })
}



window.addEventListener("DOMContentLoaded", function () {
    timelineOne();
    timelineTwo();
    timelineThree();
    MouseHover();
})