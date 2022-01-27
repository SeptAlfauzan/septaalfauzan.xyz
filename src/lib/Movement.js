class Movement{
    position = window.pageYOffset;
    middle = [window.innerWidth / 2, window.innerHeight / 2]
    
    static getScrollPos = () => window.pageYOffset
    static getScale = () => (window.pageYOffset / (window.innerHeight + 1))
    getRotation = (obj) => {
        return {
            xAxis: ((obj.pageX - this.middle[0]) * 0.001),
            yAxis: ((obj.pageY - this.middle[1]) * 0.001),
        }
    }
}
export {Movement}