sap.ui.define(['sap/ui/core/mvc/Controller', 'chip/model/empModel'],function(Controller, empModel) {

    return Controller.extend("chip.controller.myXmlView", {

        onInit: function() {
            console.log("myXmlView Controller initialized");
            var oModel = empModel.createEmpModel();
            // var oSalary = this.getView().byId("idEmpSalary");
            // oSalary.bindValue("/empStr/0/empSalary");
            // var oDept = this.getView().byId("idEmpDept");
            // oDept.bindValue("/empStr/0/empDept");
             this.getView().setModel(oModel);

             var oModelResource = empModel.createResourceModel();
             this.getView().setModel(oModelResource,"i18n");
        },
           onRowSelect:function(oEvent){
            console.log("oEvent....",oEvent);
            // debugger;
             var oRowContext = oEvent.getParameter("rowContext");
             var oPath = oRowContext.getPath();
             var oSimpleForm = this.getView().byId("idSimple");
             oSimpleForm.bindElement(oPath);

        },
        onReload:function(){
            alert("Button clicked!");
             var oSalary = this.getView().byId("idEmpSalary");
            oSalary.bindValue("/empStr/1/grady");
             this.getView().setModel(oModel);
        }
     


        // onPress: function () {
        //     var oInput = sap.ui.getCore().byId("__xmlview0--idText");
        //     alert("Button clicked!"+oInput.getValue());
        // },




    });
});
