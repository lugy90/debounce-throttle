function debounce(cb, delay=500, immediate=1) {
  let timer = null;
  return function(...args) {
    clearTimeout(timer);
    if (immediate) {
        if (!timer) cb(...args);
        timer = setTimeout(()=>{ time = null }, delay); 
    } else {
        return timer = setTimeout(()=>{
            cb(...args);
        }, delay)
    }
  }
}

function throttle(cb, delay=500) {
    let pre = 0;
    let timer = null;
    return function(...args) {
        let now = Date.now();
        let remain = delay - (now - pre);
        clearTimeout(time);
        if (remain <= 0) {
            pre = now;
            cb(...args);
        } else {
            timer = setTimerout(()=>{
                cb(...args)
            }, remain);
        }
    }
}

export { debounce, throttle }