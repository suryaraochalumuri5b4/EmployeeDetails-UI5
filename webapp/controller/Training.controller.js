sap.ui.define(['sap/ui/core/mvc/Controller'],function(Controller) {

    return Controller.extend("chip.controller.Training", {

        onInit: function() {
            console.log("Training Controller initialized");
        },

        onPress: function () {
            var oInput = sap.ui.getCore().byId("input1");
            alert("Training Button clicked!"+oInput.getValue());
        },

    });
});