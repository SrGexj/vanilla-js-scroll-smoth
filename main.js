const docElements = [document.documentElement, document.body]
const mainContent = document.querySelector('[data-scroll-content]')


const windowValues = {
    height: window.innerHeight,
    width: window.innerWidth
}

const onResize = () => {
        windowValues.height = window.innerHeight
        windowValues.width = window.innerWidth
 };

window.addEventListener('resize', onResize)

let currentPosition = 0
let targetPosition = 0
let isScrolling = false
let acelleration = .1

const smoothScroll = () => {
    if (isScrolling) {
        currentPosition += (targetPosition - currentPosition) * acelleration
        mainContent.style.transform = `translateY(${-currentPosition}px)`

        if (Math.abs(targetPosition - currentPosition) > 0.5) {
            requestAnimationFrame(smoothScroll);
        } else {
            isScrolling = false;
        }
    }
}

const onScroll = (e) => {

    docElements.forEach((el) => { el.style.overflow = 'hidden' })

    targetPosition += e.deltaY
    targetPosition = Math.max(0, targetPosition)
    targetPosition = Math.min(mainContent.scrollHeight - windowValues.height, targetPosition)

    if (!isScrolling) {
        isScrolling = true
        requestAnimationFrame(smoothScroll);
    }
}

const onScrollTouch = (e) => {
    targetPosition += e.touches[0].clientY
    targetPosition = Math.max(0, targetPosition)
    targetPosition = Math.min(mainContent.scrollHeight - windowValues.height, targetPosition)

    if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(smoothScroll);
    }
}

window.addEventListener('wheel', onScroll)


let startTouchY = 0;
let currentTouchY = 0;


clientY = window.innerHeight;

const onTouchStart = (e) => {
    startTouchY = e.touches[0].clientY;
};

const onTouchMove = (e) => {
    currentTouchY = e.touches[0].clientY;
    let delta = (startTouchY - currentTouchY) * 1.25;

    targetPosition += delta;
    targetPosition = Math.max(0, targetPosition);
    targetPosition = Math.min(mainContent.scrollHeight - windowValues.height, targetPosition);

    startTouchY = currentTouchY;

    if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(smoothScroll);
    }
};

window.addEventListener('touchstart', onTouchStart);
window.addEventListener('touchmove', onTouchMove);

