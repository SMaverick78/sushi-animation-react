import { gsap } from "gsap";
import ScrollMagic from "scrollmagic";
import "../../common/animation.gsap";

/**
 * Use thes Svg Group Id's to animate different groups:
 * 1.) #bowl
 * 2.) #sushi-01
 * 3.) #sushi-02
 * 4.) #chopstick-01
 * 5.) #chopstick-02
 * 6.) #bg-01
 * 7.) #bg-02
 **/

export function animation(top, bottom) {
  const timeline = new gsap.timeline({
    defaults: {
      transformOrigin: "center",
      ease: "ease"
    }
  });

  timeline
    .from("#bowl", {
      x: -190,
      opacity: 0
    })
    .from("#sushi-01", {
      duration: 0.4,
      opacity: 0,
      y: "-=100",
      rotation: -70,
      ease: "bounce.out"
    })
    .from(
      "#sushi-02",
      {
        duration: 0.4,
        opacity: 0,
        y: "-=100",
        rotation: 70,
        ease: "bounce.out"
      },
      "-=0.2"
    )
    .from(
      "#chopstick-01",
      {
        duration: 0.4,
        y: -250,
        opacity: 0,
        rotation: 20
      },
      "-=.4"
    )
    .from(
      "#chopstick-02",
      {
        duration: 0.4,
        y: -250,
        opacity: 0,
        rotation: 0
      },
      "-=.4"
    )
    .from(
      "#bg-01",
      {
        x: -500,
        opacity: 0
      },
      "-=1"
    )
    .from(
      "#bg-02",
      {
        x: window.innerWidth,
        opacity: 0
      },
      "-=1"
    )
    .from(".heading", {
      y: 200,
      opacity: 0
    });

  /**
   * Scrollmagic Docs
   * @ref: http://scrollmagic.io/docs/index.html
   */
  const controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({
    triggerElement: ".sushi-animation",
    triggerHook: "onLeave",
    duration: "100%",
    offset: 100
  })
    .setPin(".sushi-animation")
    .setTween(timeline)
    .addTo(controller);
}
