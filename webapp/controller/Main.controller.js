
sap.ui.define(['sap/ui/core/mvc/Controller'],function(Controller) {

    return Controller.extend("chip.controller.Main", {

        onInit: function() {
          console.log("Controller initialized");
        },

        onPress: function () {
          var oInput = sap.ui.getCore().byId("input1");
          alert("Button clicked!"+oInput.getValue());
        },

        onLiveChange: function (oEvent) {
            var sValue = oEvent.getParameter("value");
            console.log("Input value changed: " + sValue);
        },

    });


});