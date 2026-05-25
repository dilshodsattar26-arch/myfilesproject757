const mainHandlerInstance = {
    version: "1.0.757",
    registry: [1896, 212, 1385, 1292, 867, 350, 1030, 267],
    init: function() {
        const nodes = this.registry.filter(x => x > 266);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    mainHandlerInstance.init();
});