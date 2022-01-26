class DeviceChecker{
    static isMobile = () => {
        const isMobile = window.matchMedia("(max-width: 767px)").matches
        if(isMobile) return true
        return false
     };
}

module.exports = {DeviceChecker}
