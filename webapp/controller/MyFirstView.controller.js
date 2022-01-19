sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ui.MyFirstProject.training.controller.MyFirstView", {
            onInit: function () {
                var oEmpData={
                    "Employee":{
                        "FName":"divya",
                        "LName":"T", 
                        "Email":"divyasekhar@gmail.com",
                        "MobileNumber":"9876543210",
                        "Gender":true,
                        "H.No":"7789/9 ",
                        "LandMark":"iehdiw",
                        "Pincode":"88890"

                    },
                   
                    "EmployeeValueState":                                  //EmployeeValueState
                    {
                        "FName_VS":"None",
                        "FName_VST":"please enter your first name",
                        "LName_VS":"Error",
                        "LName_VST":"please enter your last name "
                    },
                    "EmployeeList":[
                        {
                         "Employee_id":"808108",
                         "FName":"Divya",
                         "LName":"Thappeta",
                         "Email":"dt00808108@techmahindra",
                         "MobileNumber":"8976543210",
                         "Gender":"Female",
                         "H.No":"878/98",
                         "LandMark":"uyhk",
                         "Pincode":"786990"
                        },
                        {
                            "Employee_id":"808109",
                            "FName":"Aksha",
                            "LName":"Kummi",
                            "Email":"akshaui@gmail.com",
                            "MobileNumber":"87965432105555",
                            "Gender":"Femnale",
                            "H.No":"878/00",
                            "LandMark":"gjhk",
                            "Pincode":"96788"
                        },
                    ]

                    };
                    var oModel=new sap.ui.model.json.JSONModel(oEmpData);
                    this.getView().setModel(oModel,"EmpModel");
            },
           onPressSave:function()
           {
               var oEmpModel=this.getView().getModel("EmpModel");
               var oEmpData=oEmpModel.getProperty("/Employee");
               if(!oEmpData.FName && !oEmpData.LName)
               {
                   if(!oEmpData.FName)
                   {
                       oEmpModel.setProperty("/EmpValueSate/FName_VS","Error");
                       oEmpModel.setProperty("/EmpValueState/FName_VST","please enter your first name");
                   }
                   else(!oEmpData.LName)
                   {
                    oEmpModel.setProperty("/EmpValueSate/LName_VS","Error");
                    oEmpModel.setProperty("/EmpValueState/LName_VST","please enter your Last name");  
                   }
               }
            },
           onPressClear:function(){

           },
           onChangeFName:function(oEvent)
           {
               var sValue=oEvent.getSource().getValue();
               if(sValue.length>=15)
               {
                   oEvent.getSource().EmployeeValueState("Error");
                   oEvent.getSource().EmployeeValueStateText(" length should be 15");
               }
               else{
                   oEvent.getSource().EmployeeValueState("none");
                   oEvent.getSource().EmployeeValueStateText("");
               }
           },
           onChangeMobileNumber:function(oEvent)
           {
               var sValue=oEvent.getSource().getValue();
               if(sValue.length!=10)
               {
                oEvent.getSource().EmployeeValueState("Error");
                oEvent.getSource().EmployeeValueStateText(" length should be 10");
               }
               else{

                oEvent.getSource().EmployeeValueState("none");
                oEvent.getSource().EmployeeValueStateText("");
               }
           },
           onSelectGender:function(oEvent)
           {
               var oEmpModel=this.getView().getModel("EmpModel");
               var sSelectedData=oEvent.getSource().getSelectedButton().getText();
               oEmpModel.setProperty("/Employee/Gender",sSelectedData);
           },
            MyFormatter:function(FName,LName,Gender){
               var sValue;
               if(Gender=="Male")
               {
                   sValue="Mr." + FName  + " " + LName;
                   //sValue="Mr.";
               }
               else if(Gender=="Female")
               {
                   sValue="Ms." + FName + " " + LName ;
                   //sValue="Mrs.";
               }
               return sValue;
            },
            ValidateMobileNum:function(MobileNumber)
            {
                if(MobileNumber.length==10){
                    return 'Success';
                }
                else if (MobileNumber.length <10 || MobileNumber.length> 10)
                {
                    return 'Error';
                }
            }
            

        });
    });
   